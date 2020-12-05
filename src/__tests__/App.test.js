import App from "../App.svelte";
import { render } from "@testing-library/svelte";

describe("App", () => {
  test("is rendered", () => {
    const { container } = render(App);

    expect(container).toContainHTML("<mark>YOUR_DOI_HERE</mark>");
  });
});
