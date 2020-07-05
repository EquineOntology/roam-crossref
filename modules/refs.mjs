import { createElement } from "./utils.mjs";

export function buildReferenceList(references) {
  let ul = createElement("ul");
  references.forEach((ref) => {
    const key = ref.key;
    const li = createElement("li", { dataset: { key: key } });

    let subLi;
    const text = ref["volume-title"] ?? ref["journal-title"] ?? ref["DOI"] ?? key;
    if (ref.DOI) {
      subLi = createElement("a", {
        href: `${document.location.origin + document.location.pathname}?doi=${ref.DOI}`,
        text: text,
      });
    } else {
      subLi = createElement("span", { textContent: text });
    }
    li.appendChild(subLi);
    ul.appendChild(li);
  });

  return ul;
}
