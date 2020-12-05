<script>
  import { extractAuthors, extractTitle } from "../libs/citationUtils";
  import Link from "../Link.svelte";

  export let data;

  const doi = data.DOI || null;
  const type = "book-chapter";
  const title = extractTitle(data, type);
  const authors = extractAuthors(data);
  const year = data.year;
</script>

<li data-citation-type={type}>
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
