<script>
  import Link from "../Link.svelte";

  export let data;

  const doi = data.DOI;
</script>

{#if doi}
  <li data-citation-type="unknown">
    ❓
    <Link {doi} title={doi} />
  </li>
{/if}
