<script lang="ts">
  import { goto } from "$app/navigation";
  import { z } from "zod";

  const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid e-mail address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
  });

  interface ContactFormError {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  }

  let contactError = $state<ContactFormError>({});

  let contactFormElement: HTMLFormElement;
</script>

<section class="contact">
  <div class="title">
    <h1>Contact</h1>

    <p>
      Feel free to get in contact with us at any time, just fill out the form!
    </p>
  </div>

  <hr />

  <form
    bind:this={contactFormElement}
    action="/contact/success"
    method="get"
    onsubmit={(e) => {
      e.preventDefault();

      const formData = Object.fromEntries(new FormData(contactFormElement));

      const result = contactFormSchema.safeParse(formData);

      if (!result.success) {
        contactError = z.flattenError(result.error).fieldErrors;
      } else {
        goto("/contact/success");
      }
    }}
  >
    <h2>Contact Form</h2>

    <div class="input">
      <label for="name">Name</label>

      <input type="text" name="name" id="name" placeholder="Enter your name" />

      {#if contactError.name}
        <p class="error">{contactError.name}</p>
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

      {#if contactError.email}
        <p class="error">{contactError.email}</p>
      {/if}
    </div>

    <div class="input">
      <label for="subject">Subject</label>

      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Enter a subject for your message"
      />

      {#if contactError.subject}
        <p class="error">{contactError.subject}</p>
      {/if}
    </div>

    <div class="input">
      <label for="message">Message</label>

      <textarea
        name="message"
        id="message"
        placeholder="Enter the message you want to send"
        rows="3"
      ></textarea>

      {#if contactError.message}
        <p class="error">{contactError.message}</p>
      {/if}
    </div>

    <button type="submit">Submit Form</button>
  </form>
</section>

<style>
  * {
    margin: 0;
  }

  .contact {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  hr {
    width: 100%;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    height: 1px;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .error {
    color: rgb(229, 65, 65);
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .input input,
  .input textarea {
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 500;
  }

  .input textarea {
    font-family: inherit;
    min-height: 1lh;
    resize: vertical;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    background-color: var(--accent);
    color: var(--off-neutral);
    transition: opacity 200ms ease-in-out;
  }

  button:hover,
  button:focus {
    opacity: 0.8;
  }

  @media (min-width: 600px) {
    form {
      padding: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;

      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    .contact {
      padding: 2rem;
      gap: 2rem;
    }

    hr {
      display: none;
    }
  }
</style>
