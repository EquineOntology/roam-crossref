<script>
  import Collapse from "./Collapse.svelte";
  import Reference from "./Reference.svelte";
import App from "./App.svelte";
  export let doi;

  const source = getSourceData();

  async function getSourceData() {
    const res = await fetch(`https://api.crossref.org/works/${doi}`);
    const data = await res.json();

    return data.message;
  }
</script>

<style>
  h1 {
    text-transform: uppercase;
  }
</style>

{#await source}
  Loading...
{:then source}
<h1>{source.title[0]}</h1>
  {#if source.abstract}
    <Collapse id="abstractCollapse" title="Abstract">
      {@html `<p>${source.abstract}</p>`}
    </Collapse>
  {/if}

  <ul>
    {#if source.reference && source.reference.length > 0}
      {#each source.reference as ref}
        <Reference data={ref} />
      {/each}
    {:else}
      <div style="text-align: center;">No references available for this DOI :(</div>
    {/if}
  </ul>
{/await}
