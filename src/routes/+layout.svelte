<script lang="ts">
  import { page } from "$app/state";
  import { writable } from "svelte/store";
  import MenuOverlay from "./MenuOverlay.svelte";

  let { children } = $props();

  let showMenu = writable(false);
</script>

<svelte:head>
  <link rel="icon" href="/branding/Logo-dark.png" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  />

  {#if page.data.title}
    <title>{page.data.title} | Gardens Connect</title>
  {:else}
    <title>Gardens Connect</title>
  {/if}
</svelte:head>

<header inert={$showMenu}>
  <a href="/">
    <img src="/branding/Logo-light.png" alt="Gardens Connect Logo" />
    <!-- <h1>Gardens Connect</h1> -->
  </a>

  <ul>
    <li><a href="/resources">Resources</a></li>
    <li><a href="/events">Events</a></li>
    <li><a href="/faq">FAQ</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/references">Reference Page</a></li>
  </ul>

  <button
    aria-label="toggle-menu"
    on:click={() => {
      $showMenu = true;
    }}
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
        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
      />
    </svg>
  </button>
</header>

<main inert={$showMenu}>
  {@render children()}
</main>

<footer inert={$showMenu}>
  <section class="footer-links">
    <ul>
      <h1>Resources</h1>
      <hr />
      <li><a href="/">Home</a></li>
      <li><a href="/events">Events</a></li>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/references">Reference Page</a></li>
    </ul>
    <ul>
      <h1>Information</h1>
      <hr />
      <li>
        <p class="footer-address">
          Hialeah Gardens, FL | 10001 NW 87 Avenue, Hialeah Gardens, FL 33016
        </p>
      </li>
      <li><a href="tel:305-558-4114">(305) 558-4114</a></li>
    </ul>
  </section>

  <hr />

  <p class="footer-copyright">© 2025, Gardens Connect • Established 2025</p>
</footer>

<MenuOverlay {showMenu} />

<style>
  :global(body) {
    --neutral: #000;
    --off-neutral: #fff;
    --primary: #598356;
    --off-primary: #c1e8c3;
    --secondary: #1a2019;
    --accent: #ff9443;

    margin: 0;
    font-family: "Raleway", sans-serif;
    background-color: var(--off-neutral);
  }

  * {
    margin: 0;
  }

  ul {
    list-style-type: none;
  }

  /* #region header */
  header {
    display: flex;
    background: var(--primary);
    color: var(--off-neutral);
    padding: 0.5rem 1rem;
    justify-content: space-between;
    align-items: center;
  }

  header > a img {
    width: 4rem;
    height: 4rem;
  }

  header > a {
    display: flex;

    align-items: center;
    gap: 1rem;
  }

  header h1 {
    font-size: 1.25rem;
  }

  header ul {
    padding: 0;
    display: none;
    gap: 1rem;
  }

  header a {
    text-decoration: none;
    color: var(--off-neutral);
    font-weight: 700;
  }

  header button {
    display: block;
    border: none;
    background-color: transparent;
    color: var(--off-neutral);

    width: 2rem;
    height: 2rem;
    padding: 0;
  }

  header button svg {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: 800px) {
    header button {
      display: none;
    }

    header ul {
      display: flex;
    }
  }

  /* #endregion */

  /* #region footer */
  footer {
    background: var(--secondary);
    color: var(--off-neutral);
    display: flex;
    flex-direction: column;
    /* align-items: center; */
  }

  footer ul {
    padding: 0;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }

  .footer-links h1 {
    font-size: 1.5rem;
  }

  .footer-links p {
    width: 25ch;
  }

  .footer-links a {
    color: var(--off-neutral);
  }

  .footer-links ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-links ul *:not(h1, hr) {
    font-size: 0.85rem;
    font-weight: 300;
  }

  footer hr {
    width: 100%;
    border: none;
    background-color: #ffffff15;
    height: 1px;
  }

  footer > p {
    font-size: 0.8rem;
    padding: 1rem;
    font-weight: 500;
    text-align: center;
  }

  @media (min-width: 550px) {
    .footer-links {
      flex-direction: row;
      justify-content: center;
    }
  }
  /* #endregion */
</style>
