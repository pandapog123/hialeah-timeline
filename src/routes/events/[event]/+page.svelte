<script lang="ts">
  import { page } from "$app/state";
  import { CommunityEvents } from "$lib/store/events";

  // error was handled on the load function; thus it is safe to !
  const event = CommunityEvents.find((c) => c.id === page.params.event!)!;

  function formatEventDates(items: (Date | string)[]) {
    const dates = items.filter((i) => i instanceof Date) as Date[];
    const notes = items.filter((i) => typeof i === "string") as string[];

    if (!dates.length) return notes.join(" ");

    const fmt = (d: Date, opts: Intl.DateTimeFormatOptions) =>
      d.toLocaleString("en-US", opts);

    let dateText = "";

    if (dates.length === 1) {
      dateText = fmt(dates[0], {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } else {
      const first = dates[0];
      const last = dates[dates.length - 1];

      const sameDay =
        first.getFullYear() === last.getFullYear() &&
        first.getMonth() === last.getMonth() &&
        first.getDate() === last.getDate();

      const sameYear = first.getFullYear() === last.getFullYear();

      if (sameDay) {
        dateText =
          fmt(first, {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }) +
          " - " +
          fmt(last, {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          });
      } else if (sameYear) {
        dateText =
          fmt(first, {
            weekday: "short",
            month: "short",
            day: "numeric",
          }) +
          " - " +
          fmt(last, {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          });
      } else {
        dateText =
          fmt(first, {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          }) +
          " - " +
          fmt(last, {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          });
      }
    }

    let result = `${dateText} EST`;

    if (notes.length) {
      result += `; ${notes.join(" ")}`;
    }

    return result;
  }
</script>

<article>
  <div class="title">
    <span>
      <a href="/events">Events</a>
      {">"}
      <span class="local-event-title">{event.title}</span>
    </span>

    <h1>{event.title}</h1>

    <p>{formatEventDates(event.date)}</p>
    <p>{event.location}</p>
  </div>

  <section class="content">
    <div class="paragraphs">
      {#each event.content as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>

    {#if event.imageURL}
      <img src={event.imageURL} alt={event.title} />
    {/if}
  </section>
</article>

<style>
  * {
    margin: 0;
  }

  section.content {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
  }

  .paragraphs {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
  }

  a {
    color: var(--primary);
  }

  img {
    border-radius: 1rem;
    object-fit: cover;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    max-height: 25rem;
  }

  article {
    gap: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .title h1 {
    font-weight: 700;
    font-size: 2.5rem;
  }

  .title p {
    font-size: 1.1rem;
  }

  @media (min-width: 950px) {
    section.content {
      flex-direction: row;
    }

    section.content img {
      max-width: 40vw;
      max-height: 20rem;
    }
  }
</style>
