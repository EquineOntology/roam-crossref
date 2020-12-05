<script>
  import Link from "../Link.svelte";
  import { extractAuthors, extractTitle } from "../libs/citationUtils";

  export let data;

  const doi = data.DOI || null;
  const type = "book";
  let title = extractTitle(data, type);
  let authors = extractAuthors(data);
  let year = data.year;
</script>

<li data-citation-type={type}>
  📚
  {#if doi}
    <Link {doi} {title}>
      {#if data.unstructured}
        {data.unstructured}
      {:else}
        {#if authors}{authors}{/if}
        {#if year}({year}),{/if}
        {#if title}{title}{/if}
      {/if}
    </Link>
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
