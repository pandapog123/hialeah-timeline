<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<header></header>

<main>
  {@render children()}
</main>

<footer></footer>

<style>
</style>
