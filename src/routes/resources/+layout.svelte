<script lang="ts">
  import { page } from "$app/state";

  let { children } = $props();
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
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Search for Resources</span>
      </button>

      <a href="/resources/create">Request a New Resource</a>
    </div>
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
    display: flex;
  }

  aside {
    display: none;
  }

  article {
    flex: 1;
    display: none;
  }

  section.show-content article {
    display: block;
  }

  section.show-nav aside {
    display: flex;
  }

  @media (min-width: 650px) {
    article {
      display: block;
    }

    aside {
      display: flex;
    }
  }
</style>
