import Book from "../../citations/Book.svelte";
import { render } from "@testing-library/svelte";

describe("Book (citation type)", () => {
  test("Data with DOI creates link", () => {
    const { queryByRole } = render(Book, { data: data.withDoi });
    expect(queryByRole("link")).toBeTruthy();
  });

  test("Data without DOI creates plain text", () => {
    const { queryByRole, queryByText } = render(Book, { data: data.withoutDoi });
    expect(queryByRole("link")).toBeFalsy();
    expect(queryByText(data.withoutDoi.unstructured)).toBeTruthy();
  });

  test("Unstructured key has priority", () => {
    const { container } = render(Book, { data: data.withUnstructuredAndVolumeTitle });
    expect(container).toHaveTextContent(data.withUnstructuredAndVolumeTitle.unstructured);
  });

  test("Lack of 'unstructured' key shows title", () => {
    const { container } = render(Book, { data: data.withoutUnstructuredWithVolumeTitle });
    const author = data.withoutUnstructuredWithVolumeTitle.author;
    const year = data.withoutUnstructuredWithVolumeTitle.year;
    const title = data.withoutUnstructuredWithVolumeTitle["volume-title"];
    expect(container).toHaveTextContent(`${author} (${year}), ${title}`);
  });
});

const data = {
  withDoi: {
    author: "HK Anheier",
    unstructured:
      "Anheier, H. K. & Toepler, S. (eds) Private Funds, Public Purpose, Philanthropic Foundations in International Perspective (Kluwer, New York, 1999).",
    "volume-title": "Private Funds, Public Purpose, Philanthropic Foundations in International Perspective",
    DOI: "10.1007/978-1-4615-4893-5",
  },
  withoutDoi: {
    author: "E Condliffe Lageman",
    unstructured:
      "Condliffe Lageman, E. (ed.) Philanthropic Foundations, New Scholarship, New Possibilities (Indiana Univ. Press, Bloomington and Indianapolis, 1999).",
    "volume-title": "Philanthropic Foundations, New Scholarship, New Possibilities",
  },
  withUnstructuredAndVolumeTitle: {
    author: "RE Kohler",
    year: "1991",
    unstructured:
      "Kohler, R. E. Partners in Science, Natural Scientists and Foundations (Univ. Chicago Press, Chicago, 1991).",
    "volume-title": "Partners in Science, Natural Scientists and Foundations",
  },
  withoutUnstructuredWithVolumeTitle: {
    author: "M Perutz",
    year: "1987",
    "volume-title": "The Cambridge Review",
  },
};
