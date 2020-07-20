<script>
  export let title;
</script>

<style>
  header {
    background: #fff;
    border-bottom: 1px solid rgba(3, 3, 3, 0.1);
    box-shadow: 0 1px 10px 0 var(--shadow);
    color: black;
    padding: 10px;
    position: sticky;
    text-align: center;
    text-transform: uppercase;
    top: -1px;
    z-index: 1;
  }

  h1 {
    margin: 0;
  }
</style>

<header>
  <h1>{title}</h1>
</header>
