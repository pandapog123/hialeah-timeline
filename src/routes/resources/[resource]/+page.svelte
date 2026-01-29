<script lang="ts">
  import { marked } from "marked";
  import { page } from "$app/state";
  import { findResourceByID } from "$lib/store/resources";

  let resource = $derived.by(() => {
    return findResourceByID(page.params.resource!)!;
  });
</script>

<section class="resource">
  <div class="title">
    <div class="resource-branch">
      <a href="/resources">Resources</a>
      {">"}
      <!-- {findResourceCategory(resource.id)}
      {">"} -->
      {resource.title}
    </div>

    <h1>{resource.title}</h1>
  </div>

  <div class="content">
    {#if resource.contacts.length > 0 || resource.imageURL}
      <div class="aux-elements">
        {#if resource.imageURL}
          <img src={resource.imageURL} alt={resource.title} />
        {/if}

        {#if resource.contacts.length > 0}
          <div class="contacts">
            <h2>Contact</h2>

            <hr />

            {#each resource.contacts as contact}
              <div class="contact">
                <h3>{contact.name}</h3>
                <p>{contact.position}</p>
                <p>{contact.phoneNumber}</p>
                <p>{contact.email}</p>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/if}

    <div class="article">
      {#each resource.content as contentBlock}
        {@html marked(contentBlock)}
      {/each}
    </div>
  </div>
</section>

<style>
  * {
    margin: 0;
  }

  .title a {
    color: var(--primary);
  }

  .resource {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .aux-elements {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: end;
  }

  .content img {
    width: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
    max-height: 20rem;
  }

  .contacts {
    width: 100%;
    border: solid 1px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
  }

  .contacts h2 {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0.75rem;
    font-weight: 500;
    font-size: 1.25rem;
  }

  .contacts hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .contact {
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .contact h3 {
    font-size: 1rem;
  }

  .article {
    font-size: 0.9rem;
    line-height: 1.7;
    flex: 1;
  }

  :global {
    .article > :nth-child(1) {
      margin-top: 0;
    }

    .article a {
      color: var(--primary);
      text-underline-offset: 2px;
    }

    .article a:hover {
      color: var(--off-primary);
    }

    .article h1,
    .article h2,
    .article h3,
    .article h4,
    .article h5,
    .article h6 {
      font-weight: 700;
      line-height: 1.3;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

    .article h1 {
      font-size: 1.75rem;
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
      padding-bottom: 0.3rem;
    }

    .article h2 {
      font-size: 1.4rem;
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
      padding-bottom: 0.25rem;
    }

    .article h3 {
      font-size: 1.3rem;
    }
    .article h4 {
      font-size: 1.1rem;
    }
    .article h5 {
      font-size: 1rem;
    }
    .article h6 {
      font-size: 0.9rem;
      color: #6b7280;
    }

    .article ul,
    .article ol {
      padding-left: 1.5rem;
    }

    .article ul:has(input) {
      padding-left: 0;
      list-style-type: none;
    }

    .article ul li::marker {
      color: #161616;
    }

    .article ol li::marker {
      font-weight: 600;
    }

    .article img {
      width: 100%;
      max-width: 40rem;
      border-radius: 1rem;
      max-height: 25rem;
    }

    .article blockquote {
      padding-top: 2px;
      padding-bottom: 2px;
      margin: 1.5rem 0;
      padding-left: 1rem;
      border-left: 4px solid #d1d5db;
      color: #374151;
      background: #f9fafb;
    }

    .article blockquote p {
      margin: 0.5rem 0;
    }

    .article code {
      background: #f3f4f6;
      padding: 0.15em 0.35em;
      border-radius: 0.375rem;
      font-size: 0.9em;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
    }

    .article pre {
      background: #0f172a;
      color: #e5e7eb;
      padding: 1rem;
      border-radius: 0.75rem;
      overflow-x: auto;
      margin: 1.5rem 0;
    }

    .article pre code {
      background: none;
      padding: 0;
      font-size: 0.9rem;
    }

    .article hr {
      border: none;
      border-top: 1px solid #e5e7eb;
      margin: 1rem 0;
    }

    .article table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      font-size: 0.95rem;
    }

    .article th,
    .article td {
      border: 1px solid #e5e7eb;
      padding: 0.6rem 0.75rem;
      text-align: left;
    }

    .article th {
      background: #f3f4f6;
      font-weight: 600;
    }

    .article tr:nth-child(even) td {
      background: #fafafa;
    }

    .article strong {
      font-weight: 700;
    }

    .article em {
      font-style: italic;
    }

    .article input[type="checkbox"] {
      margin-right: 0.5rem;
    }

    .article sup {
      font-size: 0.75em;
    }

    .article pre code {
      background: none;
      padding: 0;
      font-size: 0.9rem;
    }
  }

  @media (min-width: 1100px) {
    .aux-elements {
      position: sticky;
      top: 1rem;
      align-self: flex-start;
    }

    .resource {
      padding: 1.5rem 2rem;
    }

    .contacts {
      width: 15rem;
    }

    .aux-elements img {
      max-width: 15rem;
      max-height: 15rem;
    }

    .content {
      flex-direction: row-reverse;
    }
  }

  @media (min-width: 1350px) {
    .aux-elements img {
      max-width: 20rem;
      max-height: 20rem;
    }

    .contacts {
      width: 20rem;
    }
  }
</style>
