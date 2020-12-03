<script>
  import { crossrefCache } from "./libs/crossrefCache";
  import { fetchDoi } from "./libs/crossref";
  import { extractReferenceType } from "./libs/citationUtils";
  import Book from "./citations/Book.svelte";
  import BookChapter from "./citations/BookChapter.svelte";
  import JournalArticle from "./citations/JournalArticle.svelte";
  import Unknown from "./citations/Unknown.svelte";
  import Unstructured from "./citations/Unstructured.svelte";

  export let data;

  const doi = data.DOI || null;
  let type;
  $: type = extractReferenceType(citationData);
  let citationData = data;

  if (doi) {
    crossrefCache.get(doi).then(async function (res) {
      let doiData = res;

      if (doiData) {
        doiData.retrievedFromCache = true;
        citationData = doiData;
        return;
      }

      doiData = await fetchDoi(doi);
      doiData.retrievedFromCrossref = true;
      citationData = doiData;
    });
  }
</script>

{#if type === 'book'}
  <Book data={citationData} />
{:else if type === 'book-chapter'}
  <BookChapter data={citationData} />
{:else if type === 'journal-article'}
  <JournalArticle data={citationData} />
{:else if type === 'unstructured'}
  <Unstructured data={citationData} />
{:else}
  <Unknown data={citationData} />
{/if}
