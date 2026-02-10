<script lang="ts">
  import { goto } from "$app/navigation";
  import {
    CommunityResourceCategories,
    CommunityResources,
  } from "$lib/store/resources";

  import { v4 as uuidv4 } from "uuid";

  import z, { ZodError } from "zod";

  let { modal }: { modal?: boolean } = $props();

  const createResourceSchema = z.object({
    name: z.string().min(1, "Must include your name"),
    email: z.email("E-mail must be valid"),
    "resource-title": z.string().min(1, "Resource must have a title"),
    category: z.enum(
      CommunityResourceCategories,
      "Resource must be part of a category",
    ),
    content: z.string().min(1, "Must include content"),
    contacts: z.array(
      z.object({
        name: z.string().min(1, "Contact must include a name"),
        position: z.string().min(1, "Contact must include a position"),
        phoneNumber: z.string().min(1, "Contact must include a phone number"),
        email: z.string().min(1, "Contact must include a e-mail"),
      }),
    ),
  });

  let formErrors: { [key: string]: string[] } = $state({});
  let unflatFormError:
    | ZodError<{
        name: string;
        email: string;
        "resource-title": string;
        category:
          | "Government and Public Services"
          | "Health and Wellness"
          | "Education and Youth"
          | "Recreation and Culture"
          | "Community Organizations"
          | "Emergency and Safety"
          | "Senior Services"
          | "Family Support"
          | "Information and Advocacy";
        content: string;
        contacts: {
          name: string;
          position: string;
          phoneNumber: string;
          email: string;
        }[];
      }>
    | undefined = $state();

  $effect(() => {
    if (unflatFormError) {
      console.log(
        unflatFormError.issues.find(
          (v) =>
            v.path[0] === "contacts" && v.path[1] === 0 && v.path[2] === "name",
        ),
      );
    }
  });

  let currentContacts: {
    name: string;
    position: string;
    phoneNumber: string;
    email: string;
  }[] = $state([]);
</script>

<section class="create" class:modal>
  <div class="title">
    {#if !modal}
      <a href="/resources"
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

    <h1>Create Resource</h1>

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
    action="/resources"
    method="get"
    onsubmit={(e) => {
      e.preventDefault();

      let formData = new FormData(e.currentTarget);
      let formattedFormData = Object.fromEntries(formData);

      let trueFormData = {
        ...formattedFormData,
        contacts: currentContacts,
      };

      let result = createResourceSchema.safeParse(trueFormData);

      let id = uuidv4();

      if (result.error) {
        let error = z.flattenError(result.error);
        unflatFormError = result.error;
        formErrors = error.fieldErrors;
      } else {
        CommunityResources.update((p) => {
          p[result.data.category] = [
            ...p[result.data.category],
            {
              id,
              title: result.data["resource-title"],
              content: result.data["content"].split("\n"),
              contacts: result.data.contacts,
            },
          ];

          return p;
        });

        goto("/resources/" + id);
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
        <label for="resource-title">Resource Title</label>

        <input
          type="text"
          name="resource-title"
          id="resource-title"
          placeholder="Enter your requested resource title"
        />

        {#if formErrors["resource-title"]}
          <p class="error">{formErrors["resource-title"]}</p>
        {/if}
      </div>

      <div class="input">
        <label for="category">Category</label>

        <select name="category" id="category">
          {#each CommunityResourceCategories as tag}
            <option value={tag}>{tag}</option>
          {/each}
        </select>

        {#if formErrors["category"]}
          <p class="error">{formErrors["category"]}</p>
        {/if}
      </div>

      <div class="contacts">
        <div class="label">
          <h2>Contacts</h2>

          <button
            type="button"
            class="add-contact"
            onclick={() => {
              currentContacts.push({
                name: "",
                email: "",
                position: "",
                phoneNumber: "",
              });
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        <div class="contacts-list">
          {#each currentContacts as contact, i}
            <div class="contact-title">
              <h3>Contact {i + 1}</h3>

              <button
                type="button"
                onclick={() => {
                  currentContacts = currentContacts.filter((_, _i) => i !== _i);
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
                    d="M5 12h14"
                  />
                </svg>
              </button>
            </div>

            <div class="contact-input">
              <label for="contact-name">Contact {i + 1} name</label>

              <input
                type="text"
                placeholder="Enter name"
                bind:value={currentContacts[i].name}
              />

              {#if unflatFormError && unflatFormError.issues.find((v) => v.path[0] === "contacts" && v.path[1] === 0 && v.path[2] === "name")}
                <div class="contact-error">
                  {unflatFormError.issues.find(
                    (v) =>
                      v.path[0] === "contacts" &&
                      v.path[1] === 0 &&
                      v.path[2] === "name",
                  )?.message}
                </div>
              {/if}
            </div>
            <div class="contact-input">
              <label for="contact-email">Contact {i + 1} email</label>

              <input
                type="text"
                placeholder="Enter email"
                bind:value={currentContacts[i].email}
              />

              {#if unflatFormError && unflatFormError.issues.find((v) => v.path[0] === "contacts" && v.path[1] === 0 && v.path[2] === "email")}
                <div class="contact-error">
                  {unflatFormError.issues.find(
                    (v) =>
                      v.path[0] === "contacts" &&
                      v.path[1] === 0 &&
                      v.path[2] === "email",
                  )?.message}
                </div>
              {/if}
            </div>
            <div class="contact-input">
              <label for="contact-name">Contact {i + 1} phone number</label>

              <input
                type="text"
                placeholder="Enter phone number"
                bind:value={currentContacts[i].phoneNumber}
              />

              {#if unflatFormError && unflatFormError.issues.find((v) => v.path[0] === "contacts" && v.path[1] === 0 && v.path[2] === "phoneNumber")}
                <div class="contact-error">
                  {unflatFormError.issues.find(
                    (v) =>
                      v.path[0] === "contacts" &&
                      v.path[1] === 0 &&
                      v.path[2] === "phoneNumber",
                  )?.message}
                </div>
              {/if}
            </div>
            <div class="contact-input">
              <label for="contact-name">Contact {i + 1} position</label>

              <input
                type="text"
                placeholder="Enter position"
                bind:value={currentContacts[i].position}
              />

              {#if unflatFormError && unflatFormError.issues.find((v) => v.path[0] === "contacts" && v.path[1] === 0 && v.path[2] === "position")}
                <div class="contact-error">
                  {unflatFormError.issues.find(
                    (v) =>
                      v.path[0] === "contacts" &&
                      v.path[1] === 0 &&
                      v.path[2] === "position",
                  )?.message}
                </div>
              {/if}
            </div>

            {#if i < currentContacts.length - 1}
              <hr />
            {/if}
          {/each}
        </div>
      </div>

      <div class="input">
        <label for="content">Content</label>

        <textarea
          rows="3"
          name="content"
          id="content"
          placeholder="Write about your resource..."
        ></textarea>

        {#if formErrors["content"]}
          <p class="error">{formErrors["content"]}</p>
        {/if}
      </div>
    </div>

    <button type="submit">Create Resource</button>
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

  .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .label h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contacts-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .contact-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .contact-title h3 {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .contacts button {
    border: none;
    background-color: transparent;
    padding: 0.25rem;
    transition: all 150ms ease-in-out;
    border-radius: 0.5rem;
  }

  .contacts button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .contact-input label {
    font-size: 1rem;
  }

  .contact-input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  hr {
    border: none;
    border-top: solid rgba(0, 0, 0, 0.1) 1px;
  }
</style>
