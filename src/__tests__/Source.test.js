import Source from "../Source.svelte";
import { render, waitFor } from "@testing-library/svelte";
import { fetchDoi } from "../libs/crossref";
import { crossrefCache } from "../libs/crossrefCache";

jest.mock("../libs/crossref");

describe("Source", () => {
  beforeEach(() => {
    crossrefCache.clear();
  });

  test("Abstract is shown if present", async () => {
    const data = {
      abstract:
        "<jats:p> This paper investigates the deeper ideological aspects of managerialism, or managerial social dominance in recent decades. While two... </jats:p>",
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

    const reference = await findByRole("listitem");
    expect(reference).toBeInTheDocument();
  });
});
