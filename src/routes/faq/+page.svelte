<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let currentFAQ: number | undefined = $state();
</script>

<section class="faq">
  <h1>Frequently Asked Questions</h1>

  <ul class="faq-accordion">
    {#each data.faqs as faq, i}
      <li class:selected={i === currentFAQ}>
        <button
          on:click={() => {
            if (currentFAQ === i) {
              currentFAQ = undefined;
            } else {
              currentFAQ = i;
            }
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>

          <p class="accordion-title">{faq.title}</p>
        </button>

        <div class="accordion-content" class:hidden={i !== currentFAQ}>
          <div class="accordion-content-inner">
            <div class="accordion-content-padding">
              {faq.content}
            </div>
          </div>
        </div>
      </li>

      {#if i !== data.faqs.length - 1}
        <hr />
      {/if}
    {/each}
  </ul>
</section>

<style>
  * {
    margin: 0;
  }

  section {
    padding: 1rem;
    padding-bottom: 10rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 1rem;
    font-size: 1rem;

    display: flex;
    gap: 0.5rem;
    align-items: center;

    flex: 1;
  }

  .faq-accordion {
    overflow: hidden;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;

    transition: transform 200ms ease-in-out;
  }

  li {
    display: flex;
    flex-direction: column;
  }

  .accordion-title {
    text-align: left;
    width: fit-content;
    font-size: 1.2rem;
  }

  li.selected svg {
    transform: rotate(90deg);
  }

  hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .accordion-content {
    display: grid;
    grid-template-rows: 1fr;
    font-size: 1.1rem;
    line-height: 1.5rem;
    transition: all 250ms ease-in-out;
  }

  .accordion-content.hidden {
    grid-template-rows: 0fr;
  }

  .accordion-content-inner {
    overflow: hidden;
  }

  .accordion-content-padding {
    padding: 1rem;
    padding-top: 0;
  }

  @media (min-width: 650px) {
    .accordion-title {
      /* font-size: 1.4rem; */
    }
  }
</style>
