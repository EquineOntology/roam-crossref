export function extractAuthors(data) {
  if (data.author) {
    const authors = data.author;
    if (typeof authors === "string") {
      return authors;
    }

    if (Array.isArray(authors) && authors.length > 0) {
      let authorsList = [];
      authors.forEach((author) => {
        authorsList.push(`${author.given} ${author.family}`);
      });

      return authorsList.join(",");
    }
  }

  if (data.editor) {
    const editors = data.editor;
    if (typeof editors === "string") {
      return editors;
    }

    if (Array.isArray(editors) && editors.length > 0) {
      let editorsList = [];
      editors.forEach((editor) => {
        editorsList.push(`${editor.given} ${editor.family}`);
      });

      return editorsList.join(",");
    }
  }

  return "";
}

export function extractReferenceType(data) {
  if (data["volume-title"] || data.type === "book" || data.type === "monograph") {
    return "book";
  }

  if (data.type === "book-chapter") {
    return "book-chapter";
  }

  if (data["journal-title"] || data.type === "journal-article") {
    return "journal-article";
  }

  if (data.retrievedFromCache || data.retrievedFromCrossref) {
    // TODO: add ping to some service allowing me to review the DOI and add the appropriate citation type.
  }

  if (data.unstructured) {
    return "unstructured";
  }

  return "unknown";
}

export function extractTitle(data, type = null) {
  const noTitle = "<no title found>";
  let title;

  if (type === "book") {
    title = getValueHierarchically(data, ["title", "volume-title", "DOI"]);
    return title || noTitle;
  }

  if (type === "book-chapter") {
    title = getValueHierarchically(data, ["container-title", "title", "DOI"]);
    return title || noTitle;
  }

  if (type === "journal-article") {
    title = getValueHierarchically(data, ["title", "journal-title", "DOI"]);
    return title || noTitle;
  }

  if (data.title) {
    title = extractFromStringOrArray(data.title);
    if (title) {
      return title;
    }
  }

  return data.DOI || noTitle;
}

function getValueHierarchically(data, hierarchy) {
  let value;
  for (let i = 0; i < hierarchy.length; i++) {
    value = extractFromStringOrArray(data[hierarchy[i]]);
    if (value) {
      return value;
    }
  }
  return null;
}

function extractFromStringOrArray(element) {
  if (typeof element === "string") {
    return element;
  }

  if (Array.isArray(element) && element.length > 0) {
    return element[0];
  }

  return null;
}
