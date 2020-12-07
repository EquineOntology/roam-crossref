<script>
  import Link from "./Link.svelte";
  import { breadcrumbs } from "./stores.js";

  const crumbLength = 40;
  const trailLength = 10;

  let visibleCrumbs = [];
  $: visibleCrumbs = $breadcrumbs.slice(Math.max($breadcrumbs.length - trailLength, 0));

  function truncate(title) {
    if (title.length <= crumbLength) {
      return title;
    }

    return title.substr(0, crumbLength - 1) + "…";
  }
</script>

<style>
  li:first-of-type {
    list-style: none;
    margin-left: 0;
  }

  li {
    display: inline;
    font-size: 0.75rem;
    margin-left: 5px;
  }

  div {
    color: darkgray;
    display: inline-block;
    font-size: 0.9rem;
    margin-right: 6px;
  }
</style>

{#if visibleCrumbs.length > 0}
  <ul>
    {#if $breadcrumbs.length > visibleCrumbs.length}
      <li>
        <span style="margin-right: 3px;">...</span>
        <div>&gt;</div>
      </li>
    {/if}
    {#each visibleCrumbs as crumb, i}
      <li>
        {#if i > 0}
          <div>&gt;</div>
        {/if}
        <Link doi={crumb.doi} title={crumb.title}><span>{truncate(crumb.title)}</span></Link>
      </li>
    {/each}
    <li>
      <div>&gt;</div>I am here
    </li>
  </ul>
{/if}
