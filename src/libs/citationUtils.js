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
  if (type === "book") {
    if (data.title) {
      if (typeof data.title === "string") {
        return data.title;
      }

      if (Array.isArray(data.title)) {
        return data.title[0];
      }
    }
    return data["volume-title"] || data.DOI || noTitle;
  }

  if (type === "book-chapter") {
    if (data["container-title"]) {
      return data["container-title"][0];
    }

    if (data.title && Array.isArray(data.title)) {
      return data.title[0];
    }

    return noTitle;
  }

  if (type === "journal-article") {
    if (data.title) {
      if (Array.isArray(data.title) && data.title.length > 0) {
        return data.title[0];
      }
    }

    return data["journal-title"] || noTitle;
  }

  return data.title || data.DOI || noTitle;
}
