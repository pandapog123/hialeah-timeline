<script lang="ts">
  import type { Writable } from "svelte/store";
  import { scale } from "svelte/transition";

  interface MenuOverlayProps {
    showMenu: Writable<boolean>;
  }

  let { showMenu }: MenuOverlayProps = $props();
</script>

{#if $showMenu}
  <div
    class="menu-overlay"
    class:shown={$showMenu}
    aria-hidden={$showMenu}
    inert={!$showMenu}
    transition:scale={{ start: 0.95, duration: 200 }}
  >
    <div class="links">
      <a
        href="/"
        on:click={() => {
          $showMenu = false;
        }}
      >
        Home
      </a>

      <a
        href="/resources"
        on:click={() => {
          $showMenu = false;
        }}
      >
        Resources
      </a>
      <a
        href="/events"
        on:click={() => {
          $showMenu = false;
        }}
      >
        Events
      </a>
      <a
        href="/faq"
        on:click={() => {
          $showMenu = false;
        }}
      >
        FAQ
      </a>
      <a
        href="/contact"
        on:click={() => {
          $showMenu = false;
        }}
      >
        Contact
      </a>
      <a
        href="/references"
        on:click={() => {
          $showMenu = false;
        }}
      >
        Reference Page
      </a>
    </div>

    <button
      aria-label="Close Navigation"
      on:click={() => {
        $showMenu = false;
      }}
      class="close-menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
{/if}

<style>
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--off-neutral);
    width: 100vw;
    height: 100vh;
    opacity: 0;
    pointer-events: none;
    z-index: 30;

    transition: opacity 100ms ease-in-out;

    padding: 1rem;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }

  .shown {
    pointer-events: auto;
    opacity: 1;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .links a {
    text-decoration: none;
    color: var(--neutral);
    font-size: 2rem;
    font-weight: 500;
  }

  .close-menu {
    background-color: transparent;
    border: none;
    padding: 0.5rem;
  }

  .close-menu > * {
    width: 2rem;
    height: 2rem;
  }
</style>
