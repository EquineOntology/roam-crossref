<script>
  import Collapse from "./Collapse.svelte";
  import Reference from "./Reference.svelte";

  import { currentTitle } from './stores.js';

  export let doi;

  const source = getSourceData();

  async function getSourceData() {
    const res = await fetch(`https://api.crossref.org/works/${doi}`);
    const data = await res.json();

    updateTitle(data.message.title[0]);
    
    return data.message;
  }

  function updateTitle(newTitle) {
    currentTitle.update(title => newTitle);
  }
</script>

<style>

</style>

<div>
{#await source}
  Loading...
{:then source}
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
</div>
