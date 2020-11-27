<script>
  import { crossrefCache } from "./libs/crossrefCache";
  import Book from "./citations/Book.svelte";
  import BookChapter from "./citations/BookChapter.svelte";
  import Journal from "./citations/Journal.svelte";
  import Unknown from "./citations/Unknown.svelte";
  import Unstructured from "./citations/Unstructured.svelte";

  export let data;

  const doi = data.DOI || null;
  let citationData = data;

  let type;
  selectReferenceType(data);

  if (doi) {
    getSourceData();
  }

  async function getSourceData() {
    const cachedData = crossrefCache.get(doi);
    if (cachedData) {
      cachedData.retrievedFromCache = true;
      citationData = cachedData;
      selectReferenceType(citationData);
      return;
    }
    const res = await fetch(`https://api.crossref.org/works/${doi}?mailto=christian.fratta@gmail.com`);
    const jsonRes = await res.json();
    const doiData = jsonRes.message;
    crossrefCache.add(doi, doiData);
    doiData.retrievedFromCrossref = true;
    citationData = doiData;
    selectReferenceType(citationData);
  }

  function selectReferenceType(data) {
    if (data["volume-title"] || data.type === "book" || data.type === "monograph") {
      type = "book";
      return;
    }

    if (data.type === "book-chapter") {
      type = "book-chapter";
      return;
    }

    if (data["journal-title"] || data.type === "journal-article") {
      type = "journal";
      return;
    }

    if (data.retrievedFromCache || data.retrievedFromCrossref) {
      // TODO: add ping to some service allowing me to review the DOI and add the appropriate citation type.
      debugger;
    }

    if (data.unstructured) {
      type = "unstructured";
      return;
    }

    type = "unknown";
  }
</script>

<style>
  li {
    padding: 5px 0;
  }
</style>

<li>
  {#if type === 'book'}
    <Book data={citationData} />
  {:else if type === 'book-chapter'}
    <BookChapter data={citationData} />
  {:else if type === 'journal'}
    <Journal data={citationData} />
  {:else if type === 'unstructured'}
    <Unstructured data={citationData} />
  {:else}
    <Unknown {doi} />
  {/if}
</li>
