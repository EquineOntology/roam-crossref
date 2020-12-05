import { render, waitFor } from "@testing-library/svelte";
import Reference from "../Reference.svelte";
import { fetchDoi } from "../libs/crossref";

jest.mock("../libs/crossref");

describe("Reference", () => {
  afterEach(() => {
    fetchDoi.mockReset();
  });

  test("Assign 'book' citation type when 'volume-title' present", async () => {
    const data = {
      DOI: "10.1007/978-1-4615-4893-5",
      unstructured: "Test Volume title",
      "volume-title": "Private Funds, Public Purpose, Philanthropic Foundations in International Perspective",
    };
    fetchDoi.mockReturnValueOnce(data);
    render(Reference, { data: { DOI: data.DOI } });

    await waitFor(() => expect(fetchDoi).toHaveBeenCalled());
    const book = document.querySelector('[data-citation-type="book"]');
    expect(book).toHaveTextContent(data.unstructured);
  });

  test("Assign 'book' citation type when type = book", async () => {
    const data = {
      DOI: "10.1007/978-1-4615-4893-5",
      type: "book",
      unstructured: "Test Book",
    };
    fetchDoi.mockReturnValueOnce(data);
    render(Reference, { data: { DOI: data.DOI } });

    await waitFor(() => expect(fetchDoi).toHaveBeenCalled());
    const book = document.querySelector('[data-citation-type="book"]');
    expect(book).toHaveTextContent(data.unstructured);
  });

  test("Assign 'book' citation type when type = monograph", async () => {
    const data = {
      DOI: "10.1007/978-1-4615-4893-5",
      type: "monograph",
      unstructured: "Test Monograph",
    };
    fetchDoi.mockReturnValueOnce(data);
    render(Reference, { data: { DOI: data.DOI } });

    await waitFor(() => expect(fetchDoi).toHaveBeenCalled());
    const book = document.querySelector('[data-citation-type="book"]');
    expect(book).toHaveTextContent(data.unstructured);
  });

  test("Assign 'book-chapter' citation type when type = book-chapter", async () => {
    const data = {
      DOI: "10.1007/978-1-4615-4893-5",
      type: "book-chapter",
      unstructured: "Test Book Chapter",
    };
    fetchDoi.mockReturnValueOnce(data);
    render(Reference, { data: { DOI: data.DOI } });

    await waitFor(() => expect(fetchDoi).toHaveBeenCalled());
    const bookChapter = document.querySelector('[data-citation-type="book-chapter"]');
    expect(bookChapter).toHaveTextContent(data.unstructured);
  });

  test("Assign 'journal-article' citation type when 'journal-title' key present", async () => {
    const data = {
      DOI: "10.5465/amr.1989.4278999",
      "journal-title": "Academy of Management Review",
      unstructured: "Test Journal title",
    };
    fetchDoi.mockReturnValueOnce(data);
    render(Reference, { data: { DOI: data.DOI } });

    await waitFor(() => expect(fetchDoi).toHaveBeenCalled());
    const bookChapter = document.querySelector('[data-citation-type="journal-article"]');
    expect(bookChapter).toHaveTextContent(data.unstructured);
  });

  test("Assign 'journal-article' citation type when type = journal-article", async () => {
    const data = {
      DOI: "10.5465/amr.1989.4278999",
      type: "journal-article",
      unstructured: "Test Journal article",
    };
    fetchDoi.mockReturnValueOnce(data);
    render(Reference, { data: { DOI: data.DOI } });

    await waitFor(() => expect(fetchDoi).toHaveBeenCalled());
    const bookChapter = document.querySelector('[data-citation-type="journal-article"]');
    expect(bookChapter).toHaveTextContent(data.unstructured);
  });

  test("Assign 'unstructured' citation type when 'unstructured' key present", async () => {
    const data = {
      DOI: "10.5465/amr.1989.4278999",
      unstructured: "Test unstructured",
    };
    fetchDoi.mockReturnValueOnce(data);
    render(Reference, { data: { DOI: data.DOI } });

    await waitFor(() => expect(fetchDoi).toHaveBeenCalled());
    const bookChapter = document.querySelector('[data-citation-type="unstructured"]');
    expect(bookChapter).toHaveTextContent(data.unstructured);
  });

  test("Assign 'unknown' citation type when nothing else is present", async () => {
    const data = { DOI: "10.5465/amr.1989.4278999" };
    fetchDoi.mockReturnValueOnce(data);
    render(Reference, { data: data });

    await waitFor(() => expect(fetchDoi).toHaveBeenCalled());
    const bookChapter = document.querySelector('[data-citation-type="unknown"]');
    expect(bookChapter).toHaveTextContent(data.DOI);
  });
});
