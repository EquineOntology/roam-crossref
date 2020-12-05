<script>
  import Link from "../Link.svelte";
  export let data;

  const doi = data.DOI || null;
  const title = data.unstructured;
</script>

<li data-citation-type="unstructured">
  {#if doi}
    <Link {doi} {title} />
  {:else}<span>{title}</span>{/if}
</li>
