<script>
  import { mainDoi } from "../stores";

  export let data;

  const doi = data.DOI;
  const href = document.location.origin + document.location.pathname + `?doi=${doi}`;

  function handleClick(e) {
    e.preventDefault();
    history.pushState(
      {
        url: href,
        title: doi,
      },
      doi,
      href
    );

    mainDoi.set(doi);
  }
</script>

{#if doi}
  <li data-citation-type="unknown"><a on:click={handleClick} {href}> {doi} </a></li>
{/if}
