<script lang="ts">
  import { onDestroy, onMount, tick } from "svelte";
  import { fade, scale } from "svelte/transition";

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
  <div
    class="modal"
    onclick={(e) => e.stopPropagation()}
    transition:scale={{ start: 0.9, duration: 200 }}
  >
    <div class="content">
      {@render children()}
    </div>
  </div>
</div>

<style>
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    backdrop-filter: blur(4px) saturate(100%);
    -webkit-backdrop-filter: blur(4px) saturate(100%);

    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;

    inset: 0;
  }

  .modal {
    background-color: var(--off-neutral);
    overflow: hidden;
    height: 100%;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
    box-sizing: border-box;
    padding: 1rem;
    overflow-y: scroll;
    height: 100%;
    scrollbar-gutter: stable;
  }

  ::-webkit-scrollbar {
    /* display: none; */
  }

  @media (min-width: 800px) {
    .content {
      padding: 2rem;
    }

    .modal {
      max-height: 80vh;
      border-radius: 1rem;
      width: auto;
      height: auto;
    }
  }
</style>
