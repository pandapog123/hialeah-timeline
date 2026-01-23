<script lang="ts">
  import { browser } from "$app/environment";
  import { CommunityEvents, CommunityEventTags } from "$lib/store/events";
  import { onDestroy, onMount, tick } from "svelte";
  import { stopPropagation } from "svelte/legacy";
  import { fade } from "svelte/transition";

  let searchInput = $state("");

  let searchCategories = $state<(typeof CommunityEventTags)[number][]>([]);
  let showCategoriesSelect = $state(false);

  let dateFilter = $state<Date[]>([]);
  let showDateFilter = $state(false);

  function handleNewEvent() {}

  function handleCategorySelect() {
    showCategoriesSelect = !showCategoriesSelect;
  }

  function handleDateFilter() {
    showDateFilter = !showDateFilter;
  }

  function isOverflowingX(el: HTMLElement) {
    const rect = el.getBoundingClientRect();

    return rect.left < 0 || rect.right > window.innerWidth;
  }

  let categoryBoxElement: HTMLElement | undefined = $state();

  let windowWidth = $state(0);

  const onResize = async () => {
    if (window) {
      await tick();

      isCategoryBoxOverflowing = false;

      await tick();

      windowWidth = window.innerWidth;
    }
  };

  let isCategoryBoxOverflowing = $derived(
    (() => {
      if (!categoryBoxElement) {
        return false;
      }

      windowWidth;

      return isOverflowingX(categoryBoxElement);
    })(),
  );

  function dismissInputs() {
    showCategoriesSelect = false;
    showDateFilter = false;
  }

  onMount(() => {
    window.addEventListener("resize", onResize);
    window.document.body.addEventListener("click", dismissInputs);
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener("resize", onResize);
    }
  });
</script>

<div class="events">
  <section class="header">
    <div class="title">
      <h1>Community Events</h1>
      <p>
        Stay updated on programs, workshops, and activities happening in the
        community
      </p>
    </div>

    <button onclick={handleNewEvent} class="request-event"
      >Request a New Event</button
    >
  </section>

  <section class="search">
    <label for="search" class="search-label">
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
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="text"
        id="search"
        placeholder="Search for Events"
        bind:value={searchInput}
      />
    </label>

    <div class="secondary-filters">
      <div class="secondary-filter-wrapper">
        <button
          class="category-select"
          onclick={(e) => {
            e.stopPropagation();
            handleCategorySelect();
          }}
        >
          <span>
            {#if searchCategories.length === 0}
              All categories
            {:else}
              {searchCategories.length} Selected
            {/if}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        {#if showCategoriesSelect}
          <!-- content here -->
          <ul
            onclick={(e) => e.stopPropagation()}
            bind:this={categoryBoxElement}
            class="category-box"
            class:overflowing-cb={isCategoryBoxOverflowing}
            transition:fade={{ duration: 75 }}
          >
            <li><h2>Filter Categories</h2></li>

            <hr />

            {#each CommunityEventTags as tag}
              <li>
                <label for={tag}>
                  <input
                    type="checkbox"
                    name={tag}
                    id={tag}
                    checked={searchCategories.includes(tag)}
                    onchange={(e) => {
                      if ((e.target as HTMLInputElement).checked) {
                        searchCategories.push(tag);
                      } else {
                        searchCategories = searchCategories.filter(
                          (v) => v !== tag,
                        );
                      }
                    }}
                  />
                  <span>{tag}</span>
                </label>
              </li>
            {/each}
          </ul>
        {/if}
      </div>

      <div class="secondary-filter-wrapper">
        <button class="date-filter" onclick={handleDateFilter}>
          <span>
            {#if dateFilter.length === 0}
              Date
            {:else}
              {dateFilter.length} Selected
            {/if}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</div>

<style>
  * {
    margin: 0;
  }

  .events {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    padding-bottom: 100px;
  }

  @media (min-width: 900px) {
    .events {
      padding: 2rem;
    }
  }

  /* #region header */
  .header {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    /* justify-content: space-between; */
    gap: 2rem;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: content;
  }

  .request-event {
    background: var(--accent);
    border: none;
    color: var(--off-neutral);
    font-weight: 600;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    white-space: nowrap;
    flex: 1;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: opacity 150ms ease-in-out;
  }

  .request-event:hover {
    opacity: 0.8;
  }

  @media (min-width: 863px) {
    .request-event {
      flex: 0;
    }
  }
  /* #endregion */

  /* #region search */
  .search {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .search svg {
    width: 1rem;
    height: 1rem;
    font-weight: 900;
  }

  .search input {
    border: none;
    padding: 0;
    flex: 1;
    outline: none;
  }

  .search-label {
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    gap: 0.25rem;
  }

  .search > label,
  .search button {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    display: flex;
    gap: 0.25rem;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  }

  .search > label:focus-within {
    outline: 1px solid var(--accent);
  }

  .secondary-filters {
    display: flex;

    gap: 0.5rem;
  }

  .secondary-filters button {
    color: rgba(0, 0, 0, 0.8);
    transition: background-color 200ms ease-in-out;
    cursor: pointer;
  }

  .secondary-filters button:hover
  /* , .secondary-filters button:focus  */ {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .secondary-filter-wrapper {
    position: relative;
  }

  .category-box {
    position: absolute;
    top: 110%;

    /* left: 0; */
    padding: 0.5rem;
    min-width: 100%;

    background-color: var(--off-neutral);
    border-radius: 0.5rem;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    list-style-type: none;

    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .category-box label {
    display: flex;
    gap: 0.25rem;
    align-items: end;
  }

  .category-box input {
    flex: 0;
  }

  .category-box span {
    flex: 1;
    white-space: nowrap;
  }

  .category-box.overflowing-cb {
    right: 0;
  }

  .category-box h2 {
    font-weight: 600;
    font-size: 1.2rem;
  }

  .category-box hr {
    width: 100%;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    height: 1px;
  }
  /* #endregion */
</style>
