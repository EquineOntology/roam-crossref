<script>
  import Collapse from "./Collapse.svelte";
  import Reference from "./Reference.svelte";

  import { currentTitle } from "./stores.js";

  export let doi;

  let source;
  $: source = getSourceData(doi);

  async function getSourceData(sourceDoi) {
    const res = await fetch(`https://api.crossref.org/works/${sourceDoi}?mailto=christian.fratta@gmail.com`);
    const data = await res.json();

    const title = data.message.title[0];
    updateTitle(title);

    const url = document.location.origin + document.location.pathname + `?doi=${sourceDoi}`;

    return data.message;
  }

  function updateTitle(newTitle) {
    currentTitle.update((title) => newTitle);
  }
</script>

<div>
  {#await source}
    <div style="margin: 2rem; text-align: center;">Loading...</div>
  {:then source}
    {#if source.abstract}
      <div style="margin-top: 0.75rem; margin-bottom: 0.1rem;">
        <Collapse id="abstractCollapse" titleOpen="Hide abstract" titleClosed="Show abstract">
          {@html `${source.abstract}`}
        </Collapse>
      </div>
    {/if}

    <ul>
      {#if source.reference && source.reference.length > 0}
        {#each source.reference as ref}
          <Reference data={ref} />
        {/each}
      {:else}
        <div style="text-align: center; padding: 10px;">No references available for this DOI :(</div>
      {/if}
    </ul>
  {/await}
</div>
