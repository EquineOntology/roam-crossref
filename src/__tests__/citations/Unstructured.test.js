import Unstructured from "../../citations/Unstructured.svelte";
import { render } from "@testing-library/svelte";

describe("Unstructured (citation type)", () => {
  test("Data with DOI creates link", () => {
    const { queryByRole } = render(Unstructured, { data: data.withDoi });
    expect(queryByRole("link")).toBeTruthy();
  });

  test("Data without DOI creates plain text", () => {
    const { queryByRole, queryByText } = render(Unstructured, { data: data.withoutDoi });
    expect(queryByRole("link")).toBeFalsy();
    expect(queryByText(data.withoutDoi.unstructured)).toBeTruthy();
  });

  test("Unstructured data is shown as title", () => {
    const { container } = render(Unstructured, { data: data.withUnstructured });
    expect(container).toHaveTextContent(data.withUnstructured.unstructured);
  });
});

const data = {
  withDoi: {
    DOI: "10.1017/S0031182000068360",
    unstructured: "Tate, P. Obituary Notice, David Keilin, 1987–1963. Parasitology 55, 1–28 (1965).",
  },
  withoutDoi: {
    unstructured:
      "Schneider, W. H. Allan Gregg and the Rockefeller Foundation's Medical Sciences Division. Minerva (in the press).",
  },
  withUnstructured: {
    unstructured:
      "Schneider, W. H. Allan Gregg and the Rockefeller Foundation's Medical Sciences Division. Minerva (in the press).",
  },
};
