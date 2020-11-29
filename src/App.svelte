<script>
  import { onMount } from "svelte";

  import Nav from "./Nav.svelte";
  import Source from "./Source.svelte";
  import { currentTitle, mainDoi } from "./stores";

  onMount(() => {
    getDoiFromUrl();
    addEventListener("popstate", getDoiFromUrl);
  });

  function getDoiFromUrl() {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    mainDoi.set(params.get("doi"));
  }
</script>

<style>
  :global(:root) {
    --shadow: rgba(150, 150, 150, 0.1);

    --transition-time: 0.2s;
  }

  :global(*) {
    font-family: sans-serif;
  }

  :global(body) {
    padding: 0;
  }

  :global(li) {
    padding: 5px 0;
  }

  div {
    background-color: #fdfdfd;
  }

  .invalid-doi {
    text-align: center;
  }

  .invalid-doi div {
    background-color: palegreen;
    border-radius: 3px;
    width: fit-content;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <title>Roam Crossref</title>
  <meta name="description" content="A utility to pull crossref.org data for papers and add it to RoamResearch" />
  <meta name="author" content="Christian Fratta" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
    crossorigin="anonymous" />
</svelte:head>

<Nav title={$currentTitle} />
<div>
  {#if $mainDoi}
    <Source bind:doi={$mainDoi} />
  {:else}
    <div class="invalid-doi">
      <b>Couldn't find the DOI. Make sure you're writing the iframe as</b>
      <div>
        <code>
          &lbrace;&lbrace; iframe: https://equineontology.github.io/roam-crossref?doi=
          <mark>YOUR_DOI_HERE</mark>
          &rbrace;&rbrace;
        </code>
      </div>
    </div>
  {/if}
</div>
