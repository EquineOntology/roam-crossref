import Source from "../Source.svelte";
import { render, waitFor } from "@testing-library/svelte";
import { fetchDoi } from "../libs/crossref";

jest.mock("../libs/crossref");

describe("Source", () => {
  test("Abstract is shown if present", async () => {
    const data = {
      abstract: "<jats:p> This paper investigates the deeper ideological aspects... </jats:p>",
      doi: "10.1177/0896920520911703",
      title: "Test title",
    };
    fetchDoi.mockReturnValueOnce(data);
    const { findByText } = render(Source, { doi: data.doi });

    await waitFor(() => expect(fetchDoi).toHaveBeenCalled());
    // Remove the "<jats:p>  </jats:p>" tags (CF 29.11.20).
    const text = data.abstract.replace(/\s?<\/?jats:p>\s?/gi, "");
    expect(await findByText(text)).toBeInTheDocument();
  });

  test("References are shown if present", async () => {
    const data = {
      doi: "10.1177/0896920520911703",
      reference: [{ DOI: "10.1111/1467-6486.00305" }],
      title: "Test title",
    };
    fetchDoi.mockReturnValueOnce(data);
    const { findByRole } = render(Source, { doi: data.doi });

    // The reference automatically fetches info about the DOI, so we mock the result as well (CF 05.12.20).
    const refData = {
      doi: "10.1111/1467-6486.00305",
      title: "Test title",
    };
    fetchDoi.mockReturnValueOnce(refData);
    const reference = await findByRole("listitem");
    expect(reference).toBeInTheDocument();
  });
});
