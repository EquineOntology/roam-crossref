<script>
  import { mainDoi } from "../stores";
  import { extractAuthors } from "../libs/citationUtils";

  export let data;

  const doi = data.DOI || null;
  const href = document.location.origin + document.location.pathname + `?doi=${doi}`;
  const title = extractTitle();
  const authors = extractAuthors(data);
  const year = data.year;

  function extractTitle() {
    if (data["container-title"]) {
      return data["container-title"][0];
    }

    if (data.title && Array.isArray(data.title)) {
      return data.title[0];
    }

    return null;
  }

  function handleClick(e) {
    e.preventDefault();
    history.pushState(
      {
        url: href,
        title: title,
      },
      title,
      href
    );

    mainDoi.set(doi);
  }
</script>

<li data-citation-type="book-chapter">
  {#if doi}
    <a on:click={handleClick} {href}>
      {#if data.unstructured}
        {data.unstructured}
      {:else}
        {#if authors}{authors}{/if}
        {#if year}({year}),{/if}
        {#if title}{title}{/if}
      {/if}
    </a>
  {:else}
    <span>
      {#if data.unstructured}
        {data.unstructured}
      {:else}
        {#if authors}{authors}{/if}
        {#if year}({year}),{/if}
        {#if title}{title}{/if}
      {/if}
    </span>
  {/if}
</li>
