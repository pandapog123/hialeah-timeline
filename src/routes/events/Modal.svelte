<script lang="ts">
  import { onDestroy, onMount, tick } from "svelte";
  import { fade } from "svelte/transition";

  let { children, onDismiss }: { onDismiss: () => void } = $props();

  onMount(async () => {
    window.document.body.style.overflowY = "hidden";

    await tick();

    queueMicrotask(() => {
      document.body.addEventListener("click", onDismiss);
    });
  });

  onDestroy(() => {
    window.document.body.style.overflowY = "scroll";
    document.body.removeEventListener("click", onDismiss);
  });
</script>

<div class="modal-wrapper" transition:fade={{ duration: 150 }}>
  <div class="modal" onclick={(e) => e.stopPropagation()}>
    {@render children()}
  </div>
</div>

<style>
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
  }

  .modal {
    background-color: var(--off-neutral);
    overflow: hidden;
    padding: 1rem;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;

    scrollbar-width: 0px;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 800px) {
    .modal {
      padding: 2rem;
      border-radius: 1rem;
      width: auto;
      height: auto;
      max-height: 80vh;
    }
  }
</style>
