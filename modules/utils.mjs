/**
 * Helper to create DOM elements.
 *
 * @export
 * @param {string} type
 * @param {object} [options]
 * @returns {HTMLElement}
 */
export function createElement(type, options) {
  const el = document.createElement(type);

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
