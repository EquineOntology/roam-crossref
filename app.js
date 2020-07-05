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

      const title = document.createElement("h1");
      title.textContent = Array.isArray(message.title) ? message.title[0] : message.title;
      body.appendChild(title);

      const abstract = document.createElement("p");
      abstract.innerHTML = message.abstract ?? "";
      body.appendChild(abstract);

      if (!message.reference || message.reference.length === 0) {
        console.log("No references");
        return;
      }

      let ul = document.createElement("ul");
      message.reference.forEach((ref) => {
        const key = ref.key;
        let li = document.createElement("li");
        li.dataset.key = key;

        let subLi;
        const text = ref["volume-title"] ?? ref["journal-title"] ?? ref["DOI"] ?? key;
        if (ref.DOI) {
          subLi = document.createElement("a");
          subLi.href = `https://equineontology.github.io/roam-crossref/?doi=${ref.DOI}`;
          subLi.text = text;
        } else {
          subLi = document.createTextNode(text);
        }
        li.appendChild(subLi);
        ul.appendChild(li);
      });

      body.appendChild(ul);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
