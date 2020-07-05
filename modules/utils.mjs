/**
 * Create a DOM element with the supplied options.
 *
 * @export
 * @param {string} tag - The element's type, e.g. div, span, etc.
 * @param {object} [options] - The options object. Supports all properties like id, classList, dataset, etc.
 * @returns {HTMLElement}
 */
export function createElement(tag, options) {
  const el = document.createElement(tag);

  if (!options) return el;

  for (const [optionName, optionValue] of Object.entries(options)) {
    if (typeof optionValue === "object") {
      for (const [key, value] of Object.entries(optionValue)) {
        el[optionName][key] = value;
      }
      continue;
    }

    el[optionName] = optionValue;
  }

  return el;
}

/**
 * Create a collapsible div.
 *
 * @export
 * @param {string} id - ID of the collapse's toggle
 * @param {string} title - Text contained in the collapse's title bar
 * @param {string} content - Content of the collapse
 * @returns {HTMLElement}
 */
export function createCollapse(id, title, content) {
  const collapse = createElement("div", {
    classList: "collapse",
    innerHTML: `
      <input id="${id}" class="collapse__toggle" type="checkbox">
      <label for="${id}" class="collapse__title" tabindex="0">${title}</label>
      <div class="collapse__content-wrapper">
        <div class="collapse__content">${content}</div>
      </div>
    `,
  });

  return collapse;
}

/**
 * Go through all collapse divs on the page and assign a11y properties.
 *
 * @export
 */
export function makeCollapsesAccessible() {
  let collapses = document.querySelectorAll(".collapse__title");

  Array.from(collapses).forEach((title) => {
    title.addEventListener("keydown", (e) => {
      // 32 === spacebar
      // 13 === enter
      if (e.which === 32 || e.which === 13) {
        e.preventDefault();
        title.click();
      }
    });
  });
}
