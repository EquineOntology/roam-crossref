<script>
  export let id;
  export let titleOpen;
  export let titleClosed;

  let banner;
  let isOpen = false;

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
    max-width: 100%;
    margin-right: 10px;
    margin-left: 10px;
    width: fit-content;
  }

  .collapse__title {
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0px 5px 5px 0 var(--shadow);
    color: black;
    cursor: pointer;
    display: block;
    padding: 10px;
    text-align: center;
    transition-property: background, border-radius, box-shadow, transform;
    transition-duration: var(--transition-time);
  }

  .collapse.isOpen .collapse__title {
    border-radius: 10px 10px 0 0;
    box-shadow: none;
    transform: translateY(3px);
  }

  .collapse__title:hover {
    background: #ddd;
    box-shadow: none;
    transform: translateY(3px);
  }

  .collapse__title::before {
    content: " ";
    display: inline-block;
    border-bottom: 5px solid transparent;
    border-left: 5px solid currentColor;
    border-top: 5px solid transparent;
    margin-right: 10px;
    transition: transform var(--transition-time);
    vertical-align: middle;
  }

  input {
    display: none;
  }

  .collapse.isOpen .collapse__title {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .collapse.isOpen .collapse__title::before {
    transform: rotate(90deg) translateX(-3px);
  }

  .collapse__content-wrapper {
    box-shadow: none;
    max-height: 0;
    overflow-y: hidden;
    transition-property: box-shadow, max-height, transform;
    transition-duration: var(--transition-time), 0.5s, var(--transition-time);
    transition-timing-function: ease-in-out;
  }

  .collapse.isOpen .collapse__content-wrapper {
    max-height: 90vh;
  }

  .collapse__content {
    border-style: solid;
    border-color: #ccc;
    border-width: 0 1px 1px 1px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    color: black;
    padding: 1rem;
  }
</style>

<div class="collapse" class:isOpen>
  <input {id} type="checkbox" bind:checked={isOpen} />
  <label for={id} class="collapse__title" tabindex="0" bind:this={banner}>
    <span>{isOpen ? titleOpen : titleClosed}</span>
  </label>
  <div class="collapse__content-wrapper">
    <div class="collapse__content">
      <slot />
    </div>
  </div>
</div>
