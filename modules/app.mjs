import { createElement, createCollapse, makeCollapsesAccessible } from "./utils.mjs";
import { buildReferenceList } from "./refBuilder.mjs";

var doi = getDOI();
if (!doi) {
  showMissingDoiNotice();
}

const data = getCrossrefData();

function getDOI() {
  const query = window.location.search;
  const params = new URLSearchParams(query);
  return params.get("doi");
}

function showMissingDoiNotice() {
  document.getElementById("invalidDoi").style.display = "block";
}

function getCrossrefData() {
  fetch(`https://api.crossref.org/works/${doi}`)
    .then((response) => response.json())
    .then((data) => {
      const message = data.message;
      console.log(message);

      var body = document.getElementById("app");

      const title = createElement("h1", {
        textContent: Array.isArray(message.title) ? message.title[0] : message.title,
      });
      body.appendChild(title);

      if (message.abstract) {
        const abstract = createCollapse("abstractCollapse", "Abstract", `</p>${message.abstract ?? ""}</p>`);
        body.appendChild(abstract);
      }

      if (!message.reference || message.reference.length === 0) {
        const noElements = createElement("p", {
          textContent: "No references available for this DOI :(",
          style: "text-align: center;",
        });
        body.appendChild(noElements);
        return;
      }

      let list = buildReferenceList(message.reference);
      body.appendChild(list);

      makeCollapsesAccessible();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
