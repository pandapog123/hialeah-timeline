<script lang="ts">
  import { goto } from "$app/navigation";
  import {
    CommunityResources,
    typedResourceKey,
    type CommunityResource,
  } from "$lib/store/resources";

  let props: { onDismiss: () => void } = $props();

  let searchInput = $state("");

  let filteredResources = $derived.by<[CommunityResource, string][]>(() => {
    let resources: [CommunityResource, string][] = [];

    if (searchInput.length > 0)
      for (const key of typedResourceKey($CommunityResources)) {
        for (const resource of $CommunityResources[key]) {
          if (
            resource.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            key.toLowerCase().includes(searchInput.toLowerCase())
          )
            resources.push([resource, key]);
        }
      }

    return resources;
  });
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

<div class="content">
  {#snippet highlight(text: string)}
    {#if !searchInput.trim()}
      {text}
    {:else}
      {@const escaped = searchInput.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}
      {@const regex = new RegExp(`(${escaped})`, "gi")}

      {#each text.split(regex) as part}
        {#if part.match(regex)}
          <span class="highlight">{part}</span>
        {:else}
          {part}
        {/if}
      {/each}
    {/if}
  {/snippet}

  {#each filteredResources as resource, i}
    <a
      href="/resources/{resource[0].id}"
      onclick={(e) => {
        e.preventDefault();
        goto("/resources/" + resource[0].id);
        props.onDismiss();
      }}
    >
      <div class="resource">
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
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>

        <div class="resource-title">
          <h2>{@render highlight(resource[0].title)}</h2>

          <p>{@render highlight(resource[1])}</p>
        </div>
      </div>
    </a>

    {#if i < filteredResources.length - 1}
      <hr />
    {/if}
  {:else}
    <div class="no-results">Search Result Here</div>
  {/each}
</div>

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
    min-height: 10rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .resource {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
  }

  .resource h2 {
    font-size: 1.2rem;
  }

  .resource svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  a {
    text-decoration: none;
    color: var(--neutral);
    outline: none;
  }

  a .resource {
    transition: all 150ms ease-in-out;
    /* background-color: rgba(0, 0, 0, 0); */
  }

  a:hover .resource,
  a:focus .resource {
    background-color: var(--primary);
    color: var(--off-neutral);
  }

  .no-results {
    height: 100%;
    display: grid;
    place-content: center;
    flex: 1;
  }

  .highlight {
    background-color: rgb(238, 238, 120);
  }

  a:hover .highlight,
  a:focus .highlight {
    background-color: rgb(153, 153, 60);
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
