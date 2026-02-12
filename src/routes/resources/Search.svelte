<script lang="ts">
  let props: { onDismiss: () => void } = $props();

  let searchInput = $state("");
</script>

<div class="search-bar">
  <div class="input">
    <label for="search"
      ><svg
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
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </label>

    <input
      type="text"
      id="search"
      placeholder="Search for resources"
      bind:value={searchInput}
    />
  </div>

  <button onclick={props.onDismiss}>
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

<hr />

<div class="content">Search Result Here</div>

<style>
  * {
    margin: 0;
  }

  svg {
    width: 2rem;
    height: 2rem;
    display: block;
  }

  .content {
    height: 10rem;
    display: grid;
    place-content: center;
  }

  .search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search-bar button {
    margin: 0.5rem;
  }

  .input {
    flex: 1;
    display: flex;
    /* gap: 0.25rem; */
    align-items: center;
    padding: 0 1rem;
  }

  .input input {
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    flex: 1;
    outline: none;
    height: 100%;
  }

  .input svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  button {
    border: none;
    padding: 0.5rem;
    background-color: transparent;
    border-radius: 0.5rem;
    transition: all 150ms ease-in-out;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  hr {
    border: none;
    border-top: solid 1px rgba(0, 0, 0, 0.1);
  }
</style>
