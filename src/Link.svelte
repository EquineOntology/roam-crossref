<script>
  import { breadcrumbs, currentTitle, mainDoi } from "./stores.js";

  export let doi;
  export let title;

  let href = document.location.origin + document.location.pathname + `?doi=${$mainDoi}`;

  function handleClick() {
    updateBreadcrumbs();

    history.pushState(
      {
        url: href,
        title: title,
      },
      title,
      href
    );
    mainDoi.set(doi);
  }

  function updateBreadcrumbs() {
    if ($breadcrumbs.length > 0 && $breadcrumbs[$breadcrumbs.length - 1].doi === $mainDoi) {
      return;
    }

    breadcrumbs.update((crumbs) => [
      ...crumbs,
      {
        doi: $mainDoi,
        title: $currentTitle,
      },
    ]);
  }
</script>

<a {href} on:click|preventDefault={handleClick}>
  <slot>{title}</slot>
</a>
