<script>
  import { onMount } from "svelte";
  import { mainDoi } from "./stores";
  import { crossrefCache } from "./libs/crossrefCache";

  export let data;

  const doi = data.DOI ?? null;
  const key = data.key;
  let text = data["volume-title"] ?? data["journal-title"] ?? doi ?? key;
  const href = document.location.origin + document.location.pathname + `?doi=${doi}`;

  onMount(() => {
    if (doi) {
      getSourceData();
    }
  });

  async function getSourceData() {
    const cachedData = crossrefCache.get(doi);
    if (cachedData) {
      text = cachedData.title[0] ?? text;
      return;
    }

    const res = await fetch(`https://api.crossref.org/works/${doi}?mailto=christian.fratta@gmail.com`);
    const jsonRes = await res.json();
    const doiData = jsonRes.message;
    crossrefCache.add(doi, doiData);

    text = doiData.title[0] ?? text;
  }

  function handleClick(e) {
    e.preventDefault();
    history.pushState(
      {
        url: href,
        title: text,
      },
      text,
      href
    );

    mainDoi.set(doi);
  }
</script>

<style>
  li {
    padding: 5px 0;
  }

  span {
    color: gray;
  }
</style>

<li>
  {#if doi}<a {href} on:click={handleClick}>{text}</a>{:else}<span>{text}</span>{/if}
</li>
