<script>
  import Collapse from "./Collapse.svelte";
  import Reference from "./Reference.svelte";

  import { currentTitle } from "./stores.js";
  import { crossrefCache } from "./libs/crossrefCache";
  import { fetchDoi } from "./libs/crossref";
  import { extractTitle, extractReferenceType } from "./libs/citationUtils";

  export let doi;

  async function getSourceData(doi) {
    const res = await crossrefCache.get(doi);
    let doiData = res;
    if (doiData) {
      updateTitle(getTitleFromData(doiData));
      return doiData;
    }
    doiData = await fetchDoi(doi);
    updateTitle(getTitleFromData(doiData));
    return doiData;
  }

  function getTitleFromData(data) {
    return extractTitle(data, extractReferenceType(data));
  }

  function updateTitle(newTitle) {
    currentTitle.update(() => newTitle);
  }
</script>

<div>
  {#await getSourceData(doi)}
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
