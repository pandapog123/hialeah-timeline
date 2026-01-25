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
    height: 100vh;
    width: 100vw;
    padding: 0;
    display: flex;
    flex-direction: column;

    /* scrollbar-width: 0px; */
  }

  .content {
    flex: 1;
    box-sizing: border-box;
    padding: 1rem;
    overflow-y: scroll;
    height: 100%;
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
