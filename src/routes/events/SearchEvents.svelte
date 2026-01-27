<script lang="ts">
  import {
    CommunityEvents,
    CommunityEventTags,
    type CommunityEvent,
  } from "$lib/store/events";
  import { fade } from "svelte/transition";

  interface SearchEventsProps {
    searchInput: string;
    dateFilter: Date[];
    searchCategories: (typeof CommunityEventTags)[number][];
  }

  let props: SearchEventsProps = $props();

  function sameDay(a: Date, b: Date) {
    return (
      a.getDate() === b.getDate() &&
      a.getMonth() === b.getMonth() &&
      a.getFullYear() === b.getFullYear()
    );
  }

  function withoutTime(d: Date) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  let searchedEvents = $derived.by<CommunityEvent[]>(() => {
    return $CommunityEvents.filter((p) => {
      if (props.searchInput.length > 0) {
        const input = props.searchInput.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(input);
        const matchesDesc = p.description.toLowerCase().includes(input);
        const matchesLocation = p.location.toLowerCase().includes(input);

        if (!matchesTitle && !matchesDesc && !matchesLocation) return false;
      }

      if (props.dateFilter.length > 0) {
        let dateApplies = false;

        const eventDates = p.date.filter((d) => d instanceof Date) as Date[];

        if (eventDates.length > 1) {
          for (const date of props.dateFilter) {
            if (
              withoutTime(date) >= withoutTime(eventDates[0]) &&
              withoutTime(date) <= withoutTime(eventDates[1])
            ) {
              dateApplies = true;
            }
          }

          if (props.dateFilter.length > 1) {
            const normalOrder = props.dateFilter[0] < props.dateFilter[1];

            for (const date of eventDates) {
              if (
                withoutTime(date) >=
                  withoutTime(
                    normalOrder ? props.dateFilter[0] : props.dateFilter[1],
                  ) &&
                withoutTime(date) <=
                  withoutTime(
                    normalOrder ? props.dateFilter[1] : props.dateFilter[0],
                  )
              ) {
                dateApplies = true;
              }
            }
          }
        } else {
          for (const date of props.dateFilter) {
            if (sameDay(date, eventDates[0])) {
              dateApplies = true;
            }
          }

          if (props.dateFilter.length > 1) {
            const normalOrder = props.dateFilter[0] < props.dateFilter[1];

            for (const date of eventDates) {
              if (
                withoutTime(date) >=
                  withoutTime(
                    normalOrder ? props.dateFilter[0] : props.dateFilter[1],
                  ) &&
                withoutTime(date) <=
                  withoutTime(
                    normalOrder ? props.dateFilter[1] : props.dateFilter[0],
                  )
              ) {
                dateApplies = true;
              }
            }
          }
        }

        if (!dateApplies) return;
      }

      if (props.searchCategories.length > 0) {
        let containsAllCategories = true;

        for (let i = 0; i < props.searchCategories.length; i++) {
          if (containsAllCategories) {
            containsAllCategories = p.tags.includes(props.searchCategories[i]);
          }
        }

        if (!containsAllCategories) return false;
      }

      return true;
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
  <h1>Search Results</h1>

  <ul>
    {#each searchedEvents as event}
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
    {:else}
      <p>No events found.</p>
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
