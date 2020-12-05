<script>
  import { mainDoi } from "../stores";
  import { extractAuthors, extractTitle } from "../libs/citationUtils";

  export let data;

  const doi = data.DOI || null;
  const type = "journal-article";
  const href = document.location.origin + document.location.pathname + `?doi=${doi}`;
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
  📑
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
