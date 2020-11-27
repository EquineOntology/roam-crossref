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
