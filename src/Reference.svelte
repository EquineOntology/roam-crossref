<script>
  export let data;

  const key = data.key;
  const text = data["volume-title"] ?? data["journal-title"] ?? data["DOI"] ?? key;
  const url = document.location.origin + document.location.pathname;
</script>

<li>
  {#if data.DOI}
    <a href={`${url}?doi=${data.DOI}`}>{text}</a>
  {:else}
    <span>{text}</span>
  {/if}
</li>
