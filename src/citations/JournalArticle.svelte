<script>
  import { extractAuthors, extractTitle } from "../libs/citationUtils";
  import Link from "../Link.svelte";

  export let data;

  const doi = data.DOI || null;
  const type = "journal-article";
  const title = extractTitle(data, type);
  const authors = extractAuthors(data);
  const year = exctractDate();

  function exctractDate() {
    if (data.issued && data.issued["date-parts"] && data.issued["date-parts"].length > 0) {
      return data.issued["date-parts"][0][0];
    }

    if (
      data["published-print"] &&
      data["published-print"]["date-parts"] &&
      data["published-print"]["date-parts"].length > 0
    ) {
      return data["published-print"]["date-parts"][0][0];
    }

    if (
      data["journal-issue"] &&
      data["journal-issue"]["published-print"] &&
      data["journal-issue"]["published-print"]["date-parts"].length > 0
    ) {
      return data["journal-issue"]["published-print"]["date-parts"][0][0];
    }

    if (data.year) {
      return data.year;
    }

    return null;
  }
</script>

<li data-citation-type={type}>
  📑
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
