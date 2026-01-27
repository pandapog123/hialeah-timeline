<script lang="ts">
  import { page } from "$app/state";
  import {
    CommunityResourceCategories,
    OGResources,
    resourceInStoreWithKey,
    typedResourceKey,
  } from "$lib/store/resources";

  let { children } = $props();

  type ResourceListState = {
    [K in (typeof CommunityResourceCategories)[number]]: boolean;
  };

  let resourceList: ResourceListState = $state(
    (() => {
      let list: ResourceListState = {
        "Government and Public Services": false,
        "Health and Wellness": false,
        "Education and Youth": false,
        "Recreation and Culture": false,
        "Community Organizations": false,
        "Emergency and Safety": false,
        "Senior Services": false,
        "Family Support": false,
        "Information and Advocacy": false,
      };

      for (const key of typedResourceKey(OGResources)) {
        if (
          page.params.resource &&
          resourceInStoreWithKey(key, page.params.resource)
        ) {
          list[key] = true;
        }
      }

      return list;
    })(),
  );

  $effect(() => {
    for (const key of typedResourceKey(OGResources)) {
      if (
        page.params.resource &&
        resourceInStoreWithKey(key, page.params.resource)
      ) {
        resourceList[key] = true;
      } else {
        resourceList[key] = false;
      }
    }
  });
</script>

<section
  class:show-content={page.route.id !== "/resources"}
  class:show-nav={page.route.id === "/resources"}
>
  <aside>
    <div class="nav-header">
      <h1>Resources</h1>

      <button class="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-5"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
            clip-rule="evenodd"
          />
        </svg>

        <span>Search for Resources</span>
      </button>

      <a href="/resources/create">Request a New Resource</a>
    </div>

    <hr />

    <ul class="resource-list">
      {#each typedResourceKey(OGResources) as resourceCategory, i}
        <li class:open={resourceList[resourceCategory]}>
          <button
            onclick={() => {
              if (resourceList[resourceCategory]) {
                resourceList[resourceCategory] = false;
              } else {
                resourceList[resourceCategory] = true;
              }
            }}
          >
            <p class="resource-category">
              {resourceCategory}
            </p>

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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <div class="resources-content">
            <div class="resources-content-inner">
              <div class="resources-content-padding">
                <ul>
                  {#each OGResources[resourceCategory as (typeof CommunityResourceCategories)[number]] as resource}
                    <a href="/resources/{resource.id}">
                      <li class:selected={page.params.resource === resource.id}>
                        {resource.title}
                      </li>
                    </a>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        </li>

        {#if i !== Object.keys(OGResources).length - 1}
          <hr />
        {/if}
      {/each}
    </ul>
  </aside>

  <article>
    {@render children()}
  </article>
</section>

<style>
  * {
    margin: 0;
  }

  section {
    display: grid;
    grid-template-columns: auto 1fr;
    min-height: 100%;
  }

  aside {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;

    box-shadow: 4px 0 8px -4px rgba(0, 0, 0, 0.05);
  }

  article {
    height: 30rem;
    flex: 1;
    display: block;
  }

  hr {
    width: 100%;
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    height: 1px;
  }

  .nav-header {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.75rem 0.5rem;

    gap: 0.5rem;
    box-sizing: border-box;
  }

  .nav-header h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .nav-header button {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0.5rem;
    width: 100%;

    gap: 0.25rem;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.6);

    cursor: pointer;
    transition: all 150ms ease-in-out;
  }

  .nav-header button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .nav-header a {
    text-decoration: none;
    color: var(--off-neutral);
    background-color: var(--accent);

    transition: opacity 150ms ease-in-out;
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    text-align: center;
    width: 100%;
    box-sizing: border-box;

    font-weight: 600;
    font-size: 0.9rem;
  }

  .nav-header a:hover {
    opacity: 0.8;
  }

  svg {
    height: 1rem;
    width: 1rem;
  }

  .resource-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    list-style-type: none;
  }

  .resource-list button {
    background-color: transparent;
    border: none;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0.75rem;
    justify-content: space-between;
    gap: 1rem;
    transition: background-color 150ms ease-in-out;
    cursor: pointer;
  }
  .resource-list svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 150ms ease-in-out;
  }

  li.open svg {
    transform: rotate(90deg);
  }

  .resource-list .resource-category {
    font-size: 1rem;
    font-weight: 600;
  }

  .resource-list button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .resources-content {
    display: grid;
    grid-template-rows: 0fr;

    transition: all 250ms ease-in-out;
  }

  li.open .resources-content {
    grid-template-rows: 1fr;
  }

  .resources-content-inner {
    overflow: hidden;
  }

  .resources-content ul {
    padding: 0;
    list-style-type: none;
  }

  .resources-content li {
    padding: 0.5rem;
    padding-left: 1.25rem;
    font-size: 0.9rem;
    transition: background-color 150ms ease-in-out;
  }

  .resources-content a {
    text-decoration: none;
    color: var(--neutral);
    outline-offset: -1px;
  }

  .resources-content a:hover li {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .resources-content a li.selected {
    background-color: #c1e8c340;
  }

  @media (min-width: 801px) {
    .resource-list svg {
      width: 1rem;
      height: 1rem;
    }

    .resource-list .resource-category {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 800px) {
    section.show-content,
    section.show-nav {
      grid-template-columns: 1fr;
    }

    section.show-content aside {
      display: none;
    }

    section aside {
      border: none;
      box-shadow: none;
    }

    section.show-nav article {
      display: none;
    }
  }
</style>
