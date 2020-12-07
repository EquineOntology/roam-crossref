<script>
  import Breadcrumbs from "./Breadcrumbs.svelte";

  export let title;
</script>

<style>
  div {
    background: #fff;
    border-bottom: 1px solid rgba(3, 3, 3, 0.1);
    box-shadow: 0 1px 10px 0 var(--shadow);
    color: black;
    padding: 10px;
    position: sticky;
    top: -1px;
    z-index: 1;
  }

  header {
    text-align: center;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
  }
</style>

<div>
  <header>
    <h1>{title}</h1>
  </header>
  <Breadcrumbs />
</div>
