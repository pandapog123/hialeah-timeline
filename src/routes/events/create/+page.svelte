<script lang="ts">
  import { goto } from "$app/navigation";
  import { v4 as uuidv4 } from "uuid";

  import { CommunityEvents, CommunityEventTags } from "$lib/store/events";
  import z, { xid } from "zod";

  let { modal }: { modal?: boolean } = $props();

  const createEventSchema = z.object({
    name: z.string().min(1, "Must include your name"),
    email: z.email("E-mail must be valid"),
    "event-title": z.string().min(1, "Event must have a title"),
    categories: z.array(z.enum(CommunityEventTags), "Must select a category"),
    date: z
      .date({ error: "Date must be valid" })
      .min(
        new Date(
          new Date().getFullYear() - 99,
          new Date().getMonth(),
          new Date().getDate(),
        ),
        "Date out of range",
      )
      .max(
        new Date(
          new Date().getFullYear() + 1,
          new Date().getMonth(),
          new Date().getDate(),
        ),
        "Date out of range",
      ),
    location: z.string().min(1, "Must include a location"),
    description: z.string().min(1, "Must include a description"),
    content: z.string().min(1, "Must include content"),
  });

  let formErrors: { [key: string]: string[] } = $state({});
</script>

<section class="create" class:modal>
  <div class="title">
    {#if !modal}
      <a href="/events"
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
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </a>
    {/if}

    <h1>Create a New Event</h1>

    {#if modal}
      <button onclick={() => history.back()}>
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
    {/if}
  </div>

  <form
    action="/events"
    method="get"
    onsubmit={(e) => {
      e.preventDefault();

      let formData = new FormData(e.currentTarget);
      let formattedFormData = Object.fromEntries(formData);
      let categories = formData.getAll("categories");

      let trueFormData = {
        ...formattedFormData,
        date: new Date(formattedFormData.date),
        categories,
      };

      let result = createEventSchema.safeParse(trueFormData);

      if (result.error) {
        let error = z.flattenError(result.error);
        formErrors = error.fieldErrors;
      } else {
        CommunityEvents.update((p) => {
          return [
            ...p,
            {
              id: uuidv4(),
              title: result.data["event-title"],
              date: [result.data.date],
              location: result.data.location,
              description: result.data.description,
              tags: result.data.categories,
              content: result.data.content.split("\n"),
            },
          ];
        });

        goto("/events");
      }
    }}
  >
    <div class="inputs">
      <div class="input">
        <label for="name">Name</label>

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />

        {#if formErrors["name"]}
          <p class="error">{formErrors["name"]}</p>
        {/if}
      </div>

      <div class="input">
        <label for="email">E-mail</label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your e-mail"
        />

        {#if formErrors["email"]}
          <p class="error">{formErrors["email"]}</p>
        {/if}
      </div>

      <div class="input">
        <label for="event-title">Event Title</label>

        <input
          type="text"
          name="event-title"
          id="event-title"
          placeholder="Enter your requested event title"
        />

        {#if formErrors["event-title"]}
          <p class="error">{formErrors["event-title"]}</p>
        {/if}
      </div>

      <div class="input">
        <label for="categories">Categories</label>

        <select name="categories" id="categories" multiple>
          {#each CommunityEventTags as tag}
            <option value={tag}>{tag}</option>
          {/each}
        </select>

        {#if formErrors["categories"]}
          <p class="error">{formErrors["categories"]}</p>
        {/if}
      </div>

      <div class="input">
        <label for="date">Date</label>

        <input
          type="date"
          name="date"
          id="date"
          placeholder="Enter the date for your event"
        />

        {#if formErrors["date"]}
          <p class="error">{formErrors["date"]}</p>
        {/if}
      </div>

      <div class="input">
        <label for="location">Location</label>

        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter the location for your event"
        />

        {#if formErrors["location"]}
          <p class="error">{formErrors["location"]}</p>
        {/if}
      </div>

      <div class="input">
        <label for="description">Description</label>

        <input
          type="text"
          name="description"
          id="description"
          placeholder="Describe your event"
        />

        {#if formErrors["description"]}
          <p class="error">{formErrors["description"]}</p>
        {/if}
      </div>

      <div class="input">
        <label for="content">Content</label>

        <textarea
          rows="3"
          name="content"
          id="content"
          placeholder="Write about your event..."
        ></textarea>

        {#if formErrors["content"]}
          <p class="error">{formErrors["content"]}</p>
        {/if}
      </div>
    </div>

    <button type="submit">Create Event</button>
  </form>
</section>

<style>
  * {
    margin: 0;
  }

  svg {
    width: 2rem;
    height: 2rem;
    display: block;
  }

  .create {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 650px) {
    .create {
      padding: 2rem;
    }
  }

  .modal {
    padding: 0;
    min-width: 30rem;
    gap: 1rem;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .title button,
  .title a {
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: transparent;

    transition: background-color 150ms ease-in-out;
    cursor: pointer;
    color: var(--neutral);
  }

  .title button:hover,
  .title a:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .modal .title {
    justify-content: space-between;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-weight: 500;
    font-size: 1.2rem;
  }

  form input,
  form textarea,
  form select {
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    font-family: inherit;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  textarea {
    resize: vertical;
    min-height: 1lh;
    max-height: 8lh;
  }

  form > button {
    font-size: 1.1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    background-color: var(--accent);
    border: none;
    color: var(--off-neutral);
    transition: opacity 150ms ease-in-out;
  }

  form > button:hover {
    opacity: 0.8;
  }

  p.error {
    color: rgb(234, 67, 67);
  }
</style>
