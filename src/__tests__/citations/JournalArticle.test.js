import JournalArticle from "../../citations/JournalArticle.svelte";
import { render } from "@testing-library/svelte";

describe("Journal (citation type)", () => {
  test("Data with DOI creates link", () => {
    const { queryByRole } = render(JournalArticle, { data: data.withDoi });
    expect(queryByRole("link")).toBeTruthy();
  });

  test("Data without DOI creates plain text", () => {
    const { queryByRole, queryByText } = render(JournalArticle, { data: data.withoutDoi });
    expect(queryByRole("link")).toBeFalsy();
    expect(queryByText(data.withoutDoi.unstructured)).toBeTruthy();
  });

  test("Unstructured key has priority", () => {
    const { container } = render(JournalArticle, { data: data.withUnstructuredAndTitle });
    expect(container).toHaveTextContent(data.withUnstructuredAndTitle.unstructured);
  });

  test("Lack of 'unstructured' key shows title", () => {
    const { container } = render(JournalArticle, { data: data.withoutUnstructuredWithTitle });
    const author = data.withoutUnstructuredWithTitle.author;
    const year = data.withoutUnstructuredWithTitle.year;
    const title = data.withoutUnstructuredWithTitle["journal-title"];
    expect(container).toHaveTextContent(`${author} (${year}), ${title}`);
  });
});

const data = {
  withDoi: {
    DOI: "10.1177/007327538702500101",
    author: "PG Abir-Am",
    year: "1987",
    unstructured:
      "Abir-Am, P. G. The Biotheoretical Gathering, transdisciplinary authority and the incipient legitimation of molecular biology in the 1930s: new perspective on the historical sociology of science. Hist. Sci. 25, 1–70 (1987).",
    "journal-title": "Hist. Sci.",
  },
  withoutDoi: {
    author: "PG Abir-Am",
    year: "1987",
    unstructured:
      "Abir-Am, P. G. The Biotheoretical Gathering, transdisciplinary authority and the incipient legitimation of molecular biology in the 1930s: new perspective on the historical sociology of science. Hist. Sci. 25, 1–70 (1987).",
    "journal-title": "Hist. Sci.",
  },
  withUnstructuredAndTitle: {
    author: "PG Abir-Am",
    year: "1987",
    unstructured:
      "Abir-Am, P. G. The Biotheoretical Gathering, transdisciplinary authority and the incipient legitimation of molecular biology in the 1930s: new perspective on the historical sociology of science. Hist. Sci. 25, 1–70 (1987).",
    "journal-title": "Hist. Sci.",
  },
  withoutUnstructuredWithTitle: {
    author: "PG Abir-Am",
    year: "1987",
    "journal-title": "Hist. Sci.",
  },
};
