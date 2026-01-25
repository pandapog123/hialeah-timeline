<script lang="ts">
  import {
    CommunityEvents,
    CommunityEventTags,
    type CommunityEvent,
  } from "$lib/store/events";

  import { fade } from "svelte/transition";

  const startDate = new Date(Date.now());
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(Date.now());
  endDate.setDate(endDate.getDate() + 31);
  endDate.setHours(23, 59, 59, 999);

  let upcomingEvents = $derived.by<CommunityEvent[]>(() => {
    return CommunityEvents.filter((p) => {
      const inDateRange = p.date.reduce(
        (p, c) => (c instanceof Date && c > startDate && c < endDate) || p,
        false,
      );

      return inDateRange && !p.featured;
    });
  });

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

<section class="upcoming-events" in:fade={{ duration: 200 }}>
  <h1>Upcoming Events</h1>

  <ul>
    {#each upcomingEvents as event}
      <a href="/events/{event.id}">
        <li>
          <h2>
            {event.title}
          </h2>

          <p>
            {formatEventDates(event.date)}
          </p>

          <p>{event.location}</p>

          <p>{event.description}</p>

          <div class="tags">
            {#each event.tags as tag}
              <p class="tag tag{CommunityEventTags.indexOf(tag)}">{tag}</p>
            {/each}
          </div>
        </li>
      </a>
    {/each}
  </ul>
</section>

<style>
  * {
    margin: 0;
  }

  .upcoming-events {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  ul {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;

    transition: transform 200ms ease-in-out;
  }

  a:hover,
  a:focus {
    transform: translateY(-4px);
  }

  li {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    color: var(--off-neutral);
    border-radius: 0.5rem;
    padding: 0.5rem 0.5rem;
    font-size: 0.8rem;
  }

  .tag.tag0 {
    background-color: #db2777;
  }

  .tag.tag1 {
    background-color: #ea580c;
  }

  .tag.tag2 {
    background-color: #dc2626;
  }

  .tag.tag3 {
    background-color: #0284c7;
  }

  .tag.tag4 {
    background-color: #16a34a;
  }

  .tag.tag5 {
    background-color: #3f4adf;
  }

  .tag.tag6 {
    background-color: #8046da;
  }

  .tag.tag7 {
    background-color: #0d9488;
  }

  @media (min-width: 750px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1150px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1550px) {
    ul {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
