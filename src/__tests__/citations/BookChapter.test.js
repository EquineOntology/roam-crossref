import BookChapter from "../../citations/BookChapter.svelte";
import { render } from "@testing-library/svelte";

describe("BookChapter (citation type)", () => {
  test("Data with DOI creates link", () => {
    const { queryByRole } = render(BookChapter, { data: data.withDoi });
    expect(queryByRole("link")).toBeTruthy();
  });

  test("Data without DOI creates plain text", () => {
    const { queryByRole, queryByText } = render(BookChapter, { data: data.withoutDoi });
    expect(queryByRole("link")).toBeFalsy();
    expect(queryByText(data.withoutDoi.unstructured)).toBeTruthy();
  });

  test("Unstructured key has priority", () => {
    const { container } = render(BookChapter, { data: data.withUnstructuredAndTitle });
    expect(container).toHaveTextContent(data.withUnstructuredAndTitle.unstructured);
  });

  test("Lack of 'unstructured' key shows title", () => {
    const { container } = render(BookChapter, { data: data.withoutUnstructuredWithTitle });
    let author = data.withoutUnstructuredWithTitle.author[0];
    author = `${author.given} ${author.family}`;
    const year = data.withoutUnstructuredWithTitle.year;
    const title = data.withoutUnstructuredWithTitle["container-title"][0];
    expect(container).toHaveTextContent(`${author} (${year}), ${title}`);
  });
});

const data = {
  withDoi: {
    DOI: "10.4135/9780857021014.n17",
    type: "book-chapter",
    title: ["Managing Power in Organizations: The Hidden History of its Constitution"],
    author: [
      {
        given: "Stewart R.",
        family: "Clegg",
        sequence: "first",
        affiliation: [],
      },
    ],
  },
  withoutDoi: {
    type: "book-chapter",
    title: ["Managing Power in Organizations: The Hidden History of its Constitution"],
    author: [
      {
        given: "Stewart R.",
        family: "Clegg",
        sequence: "first",
        affiliation: [],
      },
    ],
    unstructured: "Managing Power in Organizations, the SAGE Handbook of Power (2020)",
    "container-title": ["The SAGE Handbook of Power"],
  },
  withUnstructuredAndTitle: {
    DOI: "10.4135/9780857021014.n17",
    type: "book-chapter",
    title: ["Managing Power in Organizations: The Hidden History of its Constitution"],
    author: [
      {
        given: "Stewart R.",
        family: "Clegg",
        sequence: "first",
        affiliation: [],
      },
    ],
    "container-title": ["The SAGE Handbook of Power"],
    unstructured: "Managing Power in Organizations, the SAGE Handbook of Power (2020)",
  },
  withoutUnstructuredWithTitle: {
    DOI: "10.4135/9780857021014.n17",
    type: "book-chapter",
    title: ["Managing Power in Organizations: The Hidden History of its Constitution"],
    author: [
      {
        given: "Stewart R.",
        family: "Clegg",
        sequence: "first",
        affiliation: [],
      },
    ],
    year: 2020,
    "container-title": ["The SAGE Handbook of Power"],
  },
};
