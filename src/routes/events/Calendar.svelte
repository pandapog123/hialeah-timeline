<script lang="ts">
  import {
    CommunityEvents,
    CommunityEventTags,
    type CommunityEvent,
  } from "$lib/store/events";

  let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let daysLong = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let years = Array(100)
    .fill(0)
    .map((_, i) => {
      return new Date(Date.now()).getFullYear() + 1 - i;
    });

  let currentViewingMonth = $state(months[new Date().getMonth()]);
  let currentViewingYear = $state(new Date().getFullYear());

  type CalendarDay = {
    date: Date;
    monthStatus: "current" | "prev" | "next";
  };

  let monthDays = $derived.by(() => {
    let newMonthDays: CalendarDay[] = [];

    const monthIndex = months.indexOf(currentViewingMonth);

    const firstOfMonth = new Date(currentViewingYear, monthIndex, 1);
    const lastOfMonth = new Date(currentViewingYear, monthIndex + 1, 0);

    const leadingDays = firstOfMonth.getDay();

    for (let i = 0; i < leadingDays; i++) {
      newMonthDays.push({
        date: new Date(
          currentViewingYear,
          months.findIndex((p) => p === currentViewingMonth),
          1 - leadingDays + i,
        ),
        monthStatus: "prev",
      });
    }

    const daysInCurrentMonth = new Date(
      currentViewingYear,
      monthIndex + 1,
      0,
    ).getDate();

    for (let i = 0; i < daysInCurrentMonth; i++) {
      newMonthDays.push({
        date: new Date(currentViewingYear, monthIndex, i + 1),
        monthStatus: "current",
      });
    }

    for (let i = 0; i < newMonthDays.length % 7; i++) {
      newMonthDays.push({
        date: new Date(
          currentViewingYear,
          months.findIndex((p) => p === currentViewingMonth) + 1,
          i + 1,
        ),
        monthStatus: "next",
      });
    }

    return newMonthDays;
  });

  function handlePastMonth() {
    if (currentViewingMonth === months[0]) {
      if (!years.includes(currentViewingYear - 1)) {
        return;
      }

      currentViewingMonth = months[11];
      currentViewingYear--;
    } else {
      currentViewingMonth =
        months[months.findIndex((p) => p === currentViewingMonth) - 1];
    }
  }

  function handleNextMonth() {
    if (currentViewingMonth === months[11]) {
      if (!years.includes(currentViewingYear + 1)) {
        return;
      }

      currentViewingMonth = months[0];
      currentViewingYear++;
    } else {
      currentViewingMonth =
        months[months.findIndex((p) => p === currentViewingMonth) + 1];
    }
  }

  function getEventsForDay(day: Date): CommunityEvent[] {
    let events: CommunityEvent[] = [];

    for (let event of $CommunityEvents) {
      if (events.length === 4) {
        break;
      }

      let dates = event.date.filter((v) => v instanceof Date);

      let orderRegular = dates.length > 1 && dates[1] > dates[0];

      if (dates.length === 1) {
        if (
          dates[0].getDate() === day.getDate() &&
          dates[0].getMonth() === day.getMonth() &&
          dates[0].getFullYear() === day.getFullYear()
        )
          events.push(event);
      } else if (orderRegular) {
        if (day <= dates[1] && day >= dates[0]) events.push(event);
      } else {
        if (day >= dates[1] && day <= dates[0]) events.push(event);
      }
    }

    return events.filter((_, i) => i < 4);
  }
</script>

<section class="calendar">
  <h1>Calendar</h1>

  <div class="calendar-view">
    <div class="calendar-controls">
      <h2>{currentViewingMonth} {currentViewingYear}</h2>

      <div class="month-switcher">
        <button onclick={handlePastMonth}
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
        </button>

        <button onclick={handleNextMonth}>
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
      </div>
    </div>

    <div class="day-display">
      {#each daysShort as day}
        <p class="day-letter">{day.split("")[0]}</p>
      {/each}
      {#each daysShort as day}
        <p class="day-short">{day}</p>
      {/each}
      {#each daysLong as day}
        <p class="day-long">{day}</p>
      {/each}
    </div>

    <div class="month-days">
      {#each monthDays as day}
        {@const dayToday =
          new Date().getDate() === day.date.getDate() &&
          new Date().getMonth() === day.date.getMonth() &&
          new Date().getFullYear() === day.date.getFullYear()}

        <div class="month-day {day.monthStatus}" class:today={dayToday}>
          <h3>{day.date.getDate()}</h3>

          {#each getEventsForDay(day.date) as event}
            <a
              href="/events/{event.id}"
              class="event tag{CommunityEventTags.indexOf(event.tags[0])}"
            >
              {event.title}
            </a>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  * {
    margin: 0;
  }

  svg {
    height: 1rem;
    width: 1rem;
    display: block;
  }

  h1 {
    font-size: 1.5rem;
  }

  .calendar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .calendar-view {
    outline: solid 1px rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .calendar-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: var(--off-neutral);
  }

  .month-switcher {
    display: flex;
    gap: 0.5rem;
  }

  .month-switcher button {
    background-color: transparent;
    border: none;
    border-radius: 10rem;
    padding: 0.75rem;
    transition: all 150ms ease-in-out;
  }

  .calendar-controls h2 {
    font-weight: 500;
  }

  .month-switcher button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .month-switcher svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  .day-display,
  .month-days {
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(7, 1fr);
  }

  .day-short,
  .day-long,
  .day-letter {
    background-color: var(--off-neutral);
    text-align: center;
    font-size: 1.5rem;
    padding: 0.75rem;
  }

  .month-day {
    background-color: var(--off-neutral);
    display: flex;

    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    padding: 0.25rem;
    min-height: 8rem;
    gap: 0.25rem;
    min-width: 0;
    overflow: hidden;
    box-sizing: border-box;
  }

  .month-day h3 {
    font-weight: 300;
    font-size: 1.1rem;
    padding: 0.25rem;
    border-radius: 5rem;
  }

  .month-day.today:not(.prev):not(.next) h3 {
    background-color: var(--accent);
  }

  .month-day.prev,
  .month-day.next h3 {
    color: rgba(0, 0, 0, 0.4);
  }

  .day-letter {
    display: block;
    padding: 0.5rem;
    font-size: 1.25rem;
  }
  .day-short {
    display: none;
  }
  .day-long {
    display: none;
  }

  .event {
    text-decoration: none;
    color: var(--off-neutral);
    padding: 0.25rem 0.5rem;
    font-size: 0.6rem;
    align-self: flex-start;
    border-radius: 10rem;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .event.tag0 {
    background-color: #db2777;
  }

  .event.tag1 {
    background-color: #ea580c;
  }

  .event.tag2 {
    background-color: #dc2626;
  }

  .event.tag3 {
    background-color: #0284c7;
  }

  .event.tag4 {
    background-color: #16a34a;
  }

  .event.tag5 {
    background-color: #3f4adf;
  }

  .event.tag6 {
    background-color: #8046da;
  }

  .event.tag7 {
    background-color: #0d9488;
  }

  @media (min-width: 600px) {
    .day-letter {
      display: none;
    }
    .day-short {
      display: block;
    }
    .day-long {
      display: none;
    }

    .event {
      font-size: 0.75rem;
    }
  }
  @media (min-width: 1100px) {
    .day-letter {
      display: none;
    }
    .day-short {
      display: none;
    }
    .day-long {
      display: block;
    }

    .event {
      font-size: 1rem;
    }
  }
</style>
