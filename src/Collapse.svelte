<script>
  export let id;
  export let title;

  let banner;

  function handleKeyDown(e) {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      banner.click();
    }
  }
</script>

<style>
  .collapse {
    margin-bottom: 1.2rem 0;
  }

  .collapse__title {
    background: var(--darkest);
    border-radius: 7px;
    color: var(--lighter);
    cursor: pointer;
    display: block;
    padding: 10px;
    text-align: center;
    transition: all var(--transition-time);
  }

  .collapse__title:hover {
    color: var(--light);
  }

  .collapse__title::before {
    content: " ";
    display: inline-block;
    border-bottom: 5px solid transparent;
    border-left: 5px solid currentColor;
    border-top: 5px solid transparent;
    margin-right: 0.7rem;

    transition: all var(--transition-time);
    vertical-align: middle;
  }

  input {
    display: none;
  }

  input:checked + .collapse__title {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  input:checked + .collapse__title::before {
    transform: rotate(90deg) translateX(-3px);
  }

  input:checked + .collapse__title + .collapse__content-wrapper {
    max-height: 100vh;
  }

  .collapse__content-wrapper {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.25s;
  }

  .collapse__content {
    background: var(--lightest);
    border-style: solid;
    border-color: var(--lighter);
    border-width: 0 1px 1px 1px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    color: var(--darkest);
    padding: 0.5rem 1rem;
    transition: all var(--transition-time);
    width: auto;
  }
</style>

<div class="collapse">
  <input {id} type="checkbox" />
  <label for={id} class="collapse__title" tabindex="0" bind:this={banner}>{title}</label>
  <div class="collapse__content-wrapper">
    <div class="collapse__content">
      <slot />
    </div>
  </div>
</div>
