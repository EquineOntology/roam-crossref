<script>
  import Source from "./Source.svelte";

  let initialDoi = getDoi();

  function getDoi() {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    return params.get("doi");
  }
</script>

<style>
  :global(*) {
    font-family: sans-serif;
  }

  :global(:root) {
    --darkest: #311d3f;
    --darker: #522546;
    --dark: #88304e;
    --light: #e23e57;
    --lighter: #fcb6c0;
    --lightest: #ffffff;

    --transition-time: 0.2s;
  }

  .invalid-doi {
    text-align: center;
  }
  .invalid-doi div {
    background-color: palegreen;
    border-radius: 3px;
    width: fit-content;
    margin: 0 auto;
    padding: 10px;
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

<div>
  {#if initialDoi}
    <Source doi={initialDoi} />
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
