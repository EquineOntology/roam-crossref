<script>
  import { mainDoi } from "../stores";
  import { extractAuthors, extractTitle } from "../libs/citationUtils";

  export let data;

  const doi = data.DOI || null;
  const type = "book-chapter";
  const href = document.location.origin + document.location.pathname + `?doi=${doi}`;
  const title = extractTitle(data, type);
  const authors = extractAuthors(data);
  const year = data.year;

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

<li data-citation-type={type}>
  📘
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
