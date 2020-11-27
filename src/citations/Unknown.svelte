<script>
  import { mainDoi } from "../stores";

  export let doi;

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

{#if doi}<a on:click={handleClick} {href}> {doi} </a>{/if}
