<script>
  import { mainDoi } from "../stores";

  export let data;

  const doi = data.DOI || null;
  const href = document.location.origin + document.location.pathname + `?doi=${doi}`;
  const content = data.unstructured;

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

<li data-citation-type="unstructured">
  {#if doi}<a on:click={handleClick} {href}> {content} </a>{:else}<span> {content} </span>{/if}
</li>
