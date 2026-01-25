<script lang="ts">
  import { browser } from "$app/environment";
  import { CommunityEvents, CommunityEventTags } from "$lib/store/events";
  import { onDestroy, onMount, tick } from "svelte";
  import { crossfade, fade } from "svelte/transition";
  import DatePicker from "./DatePicker.svelte";
  import UpcomingEvents from "./UpcomingEvents.svelte";
  import FeaturedEvents from "./FeaturedEvents.svelte";
  import SearchEvents from "./SearchEvents.svelte";
  import { goto, preloadData, pushState } from "$app/navigation";
  import { page } from "$app/state";
  import Modal from "./Modal.svelte";
  import CreateEventPage from "./create/+page.svelte";

  let searchInput = $state("");

  let searchCategories = $state<(typeof CommunityEventTags)[number][]>([]);
  let showCategoriesSelect = $state(false);

  let dateFilter = $state<Date[]>([]);
  let showDateFilter = $state(false);

  function handleNewEvent() {}

  function handleCategorySelect() {
    showCategoriesSelect = !showCategoriesSelect;
    showDateFilter = false;
  }

  function handleDateFilter() {
    showDateFilter = !showDateFilter;
    showCategoriesSelect = false;
  }

  function isOverflowingX(el: HTMLElement) {
    const rect = el.getBoundingClientRect();

    return rect.left < 0 || rect.right > window.innerWidth;
  }

  let categoryBoxElement: HTMLElement | undefined = $state();
  let dateBoxElement: HTMLElement | undefined = $state();

  let windowWidth = $state(browser ? window.innerWidth : 0);

  const onResize = async () => {
    if (window) {
      await tick();

      isCategoryBoxOverflowing = false;
      isDateBoxOverflowing = false;

      await tick();

      windowWidth = window.innerWidth;
    }
  };

  let isCategoryBoxOverflowing = $state(true);

  $effect.pre(() => {
    if (!categoryBoxElement) {
      isCategoryBoxOverflowing = false;

      return;
    }

    windowWidth;
    dateFilter;
    searchCategories;
    categoryBoxElement;

    isCategoryBoxOverflowing = isOverflowingX(categoryBoxElement);

    tick().then(() => {
      if (!categoryBoxElement) {
        isCategoryBoxOverflowing = false;

        return;
      }

      isCategoryBoxOverflowing =
        isCategoryBoxOverflowing || isOverflowingX(categoryBoxElement);
    });
  });

  let isDateBoxOverflowing = $state(true);

  $effect.pre(() => {
    if (!dateBoxElement) {
      isDateBoxOverflowing = false;

      return;
    }

    windowWidth;
    dateFilter;
    searchCategories;
    dateBoxElement;

    isDateBoxOverflowing = isOverflowingX(dateBoxElement);

    tick().then(() => {
      if (!dateBoxElement) {
        isDateBoxOverflowing = false;

        return;
      }

      isDateBoxOverflowing =
        isDateBoxOverflowing || isOverflowingX(dateBoxElement);
    });
  });

  function dismissInputs() {
    showCategoriesSelect = false;
    showDateFilter = false;
  }

  function handleClearFilters() {
    searchInput = "";
    searchCategories = [];
    dateFilter = [];
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

{#if page.state.selected}
  <Modal onDismiss={() => history.back()}>
    <CreateEventPage modal />
  </Modal>
{/if}

<div class="events" inert={page.state.selected}>
  <section class="header">
    <div class="title">
      <h1>Community Events</h1>
      <p>
        Stay updated on programs, workshops, and activities happening in the
        community
      </p>
    </div>

    <a
      href="/events/create"
      onclick={async (e) => {
        if (innerWidth < 800 || e.shiftKey || e.metaKey || e.ctrlKey) return;

        e.preventDefault();
        e.stopPropagation();

        const { href } = e.currentTarget;

        const result = await preloadData(href);

        if (result.type === "loaded" && result.status === 200) {
          pushState(href, { selected: result.data });
        } else {
          goto(href);
        }
      }}
      class="request-event">Request a New Event</a
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
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
          <ul
            onclick={(e) => e.stopPropagation()}
            bind:this={categoryBoxElement}
            class="category-box"
            class:overflowing-cb={isCategoryBoxOverflowing}
            transition:fade={{ duration: 75 }}
          >
            <li><h2>Filter Categories</h2></li>

            {#each CommunityEventTags as tag}
              <li>
                <button
                  onclick={() => {
                    if (!searchCategories.includes(tag)) {
                      searchCategories.push(tag);
                    } else {
                      searchCategories = searchCategories.filter(
                        (v) => v !== tag,
                      );
                    }
                  }}
                  class:selected={searchCategories.includes(tag)}>{tag}</button
                >
              </li>
            {/each}
          </ul>
        {/if}
      </div>

      <div class="secondary-filter-wrapper">
        <button
          class="date-filter"
          onclick={(e) => {
            e.stopPropagation();
            handleDateFilter();
          }}
        >
          <span>
            {#if dateFilter.length === 0}
              Date
            {:else if dateFilter.length === 1}
              {dateFilter[0].getDate() === new Date().getDate()
                ? "Today"
                : dateFilter[0].toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
            {:else}
              {@const dateOrderNormal = dateFilter[0] < dateFilter[1]}

              {(dateOrderNormal
                ? dateFilter[0]
                : dateFilter[1]
              ).toLocaleDateString("en-US", {
                // weekday: "short",
                // year: "numeric",
                // month: "short",
                // day: "2-digit",
              })} - {(dateOrderNormal
                ? dateFilter[1]
                : dateFilter[0]
              ).toLocaleDateString("en-US", {
                // weekday: "short",
                // year: "numeric",
                // month: "short",
                // day: "2-digit",
              })}
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

        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        {#if showDateFilter}
          <div
            onclick={(e) => e.stopPropagation()}
            bind:this={dateBoxElement}
            class="date-box"
            class:overflowing-db={isDateBoxOverflowing}
            transition:fade={{ duration: 75 }}
          >
            <DatePicker
              currentDates={dateFilter}
              onChange={(dates) => {
                dateFilter = dates;
              }}
            />
          </div>
        {/if}
      </div>

      {#if searchInput.length > 0 || searchCategories.length > 0 || dateFilter.length > 0}
        <button class="clear-filters" onclick={handleClearFilters}
          >Clear Filters</button
        >
      {/if}
    </div>
  </section>

  {#if searchInput === "" && searchCategories.length === 0 && dateFilter.length === 0}
    <UpcomingEvents />

    <FeaturedEvents />
  {:else}
    <SearchEvents {dateFilter} {searchCategories} {searchInput} />
  {/if}

  <button
    class="clear-events"
    onclick={() => {
      $CommunityEvents = [];
    }}
  >
    Clear Events
  </button>
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
    justify-content: space-between;
    gap: 2rem;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .title h1 {
    font-size: 2.5rem;
  }

  .title p {
    font-size: 1.1rem;
    line-height: 1.4rem;
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
    /* display: block; */
    width: 100%;
    flex: 1;
    text-align: center;
    text-decoration: none;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: opacity 150ms ease-in-out;
  }

  .request-event:hover {
    opacity: 0.8;
  }

  @media (min-width: 971px) {
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
    display: block;
  }

  .search input {
    border: none;
    padding: 0;
    flex: 1;
    outline: none;
    min-width: min(20rem, 60vw);
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

  .category-box,
  .date-box {
    position: absolute;
    top: 115%;

    /* left: 0; */
    /* padding: 0.5rem; */
    min-width: 100%;

    background-color: var(--off-neutral);
    border-radius: 0.5rem;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    list-style-type: none;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    z-index: 10;
  }

  .category-box {
    padding: 0.5rem;
  }

  .category-box button {
    box-shadow: none;
    width: 100%;
    white-space: nowrap;
    font-size: 0.9rem;
  }

  .category-box button.selected {
    /* background-color: rgba(0, 0, 0, 0.1);
    border-color: var(--accent); */
    background-color: var(--accent);
    color: var(--off-neutral);
  }

  .category-box,
  .date-box {
    max-height: 18rem;
    overflow-y: auto;
    box-sizing: border-box;
  }

  .category-box.overflowing-cb,
  .date-box.overflowing-db {
    right: 0;
  }

  .category-box h2 {
    font-weight: 600;
    font-size: 1.2rem;
  }

  button.clear-filters {
    /* background: rgb(255, 202, 202); */
  }

  @media (max-width: 400px) {
    .date-box {
      /* right: 50%; */
      left: -100%;
    }
  }
  /* #endregion */

  .clear-events {
    background-color: rgb(247, 65, 65);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--off-neutral);
    transition: background-color 150ms ease-in-out;
    flex-grow: 0;
    align-self: end;
    width: fit-content;
  }

  .clear-events:hover {
    background-color: rgb(255, 80, 80);
  }
</style>
