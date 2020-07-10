<script>
  import {onMount} from 'svelte';

  export let data;

  const doi = data.DOI;
  const key = data.key;
  const url = document.location.origin + document.location.pathname;
  let text = data["volume-title"] ?? data["journal-title"] ?? data["DOI"] ?? key;

  onMount(() => {
    if(doi) {
      getSourceData();
    }
  });

  async function getSourceData() {
    const res = await fetch(`https://api.crossref.org/works/${doi}`);
    const jsonRes = await res.json();
    data = jsonRes.message;
    
    text = data.title[0] ?? text;
  }
</script>

<li>
  {#if doi}
    <a href={`${url}?doi=${doi}`}>{text}</a>
  {:else}
    <span>{text}</span>
  {/if}
</li>
