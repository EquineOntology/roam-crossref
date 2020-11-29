import Unknown from "../../citations/Unknown.svelte";
import { render } from "@testing-library/svelte";

describe("Unknown (citation type)", () => {
  test("Data with DOI creates link", () => {
    const { queryByRole } = render(Unknown, { data: data.withDoi });
    expect(queryByRole("link")).toBeTruthy();
  });

  test("Data with DOI has DOI as text", () => {
    const { queryByText } = render(Unknown, { data: data.withDoi });
    expect(queryByText(data.withDoi.DOI)).toBeTruthy();
  });

  test("Data without DOI doesn't output anything", () => {
    const { queryByRole } = render(Unknown, { data: data.withoutDoi });
    expect(queryByRole("listItem")).toBeFalsy();
  });
});

const data = {
  withDoi: {
    DOI: "10.1017/S0031182000068360",
  },
  withoutDoi: {},
};
