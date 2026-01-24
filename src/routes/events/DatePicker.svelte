<script lang="ts">
  interface DatePickerProps {
    onChange: (dates: Date[]) => void;
    currentDates: Date[];
  }

  let props: DatePickerProps = $props();

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

  let days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

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

  function handleDay(day: CalendarDay) {
    return () => {
      const dayInProps = props.currentDates.reduce((found, date) => {
        return (
          found ||
          (date.getDate() === day.date.getDate() &&
            date.getMonth() === day.date.getMonth() &&
            date.getFullYear() === day.date.getFullYear())
        );
      }, false);

      if (dayInProps) {
        props.onChange(
          props.currentDates.filter(
            (p) =>
              !(
                p.getDate() === day.date.getDate() &&
                p.getMonth() === day.date.getMonth() &&
                p.getFullYear() === day.date.getFullYear()
              ),
          ),
        );
      } else {
        if (props.currentDates.length > 1) {
          props.onChange([props.currentDates[1], day.date]);
        } else if (props.currentDates.length > 0) {
          props.onChange([props.currentDates[0], day.date]);
        } else {
          props.onChange([day.date]);
        }
      }
    };
  }

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
</script>

<div class="date-picker">
  <div class="month-year">
    <button aria-label="past-month" onclick={handlePastMonth}
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

    <div class="month-year-options">
      <div>
        <select name="month" id="month" bind:value={currentViewingMonth}>
          {#each months as month}
            <option value={month}>{month}</option>
          {/each}
        </select>
      </div>

      <div>
        <select name="year" id="year" bind:value={currentViewingYear}>
          {#each years as year}
            <option value={year}>{year}</option>
          {/each}
        </select>
      </div>
    </div>

    <button aria-label="next-month" onclick={handleNextMonth}>
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

  <div class="days-grid">
    {#each days as day}
      <div class="day">{day}</div>
    {/each}

    {#each monthDays as day}
      {@const dayInProps = props.currentDates.reduce((found, date) => {
        return (
          found ||
          (date.getDate() === day.date.getDate() &&
            date.getMonth() === day.date.getMonth() &&
            date.getFullYear() === day.date.getFullYear())
        );
      }, false)}

      {@const dayOrderNormal = props.currentDates[0] < props.currentDates[1]}

      <button
        onclick={handleDay(day)}
        class:not-in-month={day.monthStatus === "next" ||
          day.monthStatus === "prev"}
        class:selected={dayInProps}
        class:selected-first={props.currentDates.length > 1 &&
          dayInProps &&
          (dayOrderNormal
            ? props.currentDates[0]
            : props.currentDates[1]
          ).getDate() === day.date.getDate() &&
          (dayOrderNormal
            ? props.currentDates[0]
            : props.currentDates[1]
          ).getMonth() === day.date.getMonth() &&
          (dayOrderNormal
            ? props.currentDates[0]
            : props.currentDates[1]
          ).getFullYear() === day.date.getFullYear()}
        class:selected-last={props.currentDates.length > 1 &&
          dayInProps &&
          (dayOrderNormal
            ? props.currentDates[1]
            : props.currentDates[0]
          ).getDate() === day.date.getDate() &&
          (dayOrderNormal
            ? props.currentDates[1]
            : props.currentDates[0]
          ).getMonth() === day.date.getMonth() &&
          (dayOrderNormal
            ? props.currentDates[1]
            : props.currentDates[0]
          ).getFullYear() === day.date.getFullYear()}
        class:in-range={props.currentDates.length > 1 &&
          !dayInProps &&
          (dayOrderNormal ? props.currentDates[0] : props.currentDates[1]) <
            day.date &&
          (dayOrderNormal ? props.currentDates[1] : props.currentDates[0]) >
            day.date}
      >
        {day.date.getDate()}
      </button>
    {/each}
  </div>
</div>

<style>
  * {
    margin: 0;
  }

  select {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .date-picker {
    padding: 0.5rem;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .month-year {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-between;
  }

  .month-year-options {
    display: flex;

    gap: 0.5rem;
  }

  .month-year button {
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    background-color: transparent;
    padding: 0.5rem;
    transition: background-color 150ms ease-in-out;
  }

  .month-year button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  svg {
    height: 1rem;
    width: 1rem;
    display: block;
  }

  .days-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .days-grid * {
    width: 2rem;
    height: 2rem;

    border-radius: 0.5rem;
  }

  .days-grid button {
    border: none;
    background: transparent;
    transition: all 150ms ease-in-out;
  }

  .days-grid button:focus {
    outline: 2px solid rgba(0, 0, 0, 0.2);
  }

  .days-grid button.not-in-month {
    color: rgba(0, 0, 0, 0.4);
  }

  .days-grid button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .days-grid button.selected {
    color: var(--off-neutral);
    background-color: var(--accent);
  }

  .days-grid button.selected-first {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .days-grid button.selected-last {
    border-radius: 0 0.5rem 0.5rem 0;
  }

  .days-grid button.in-range {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 0;
  }

  .day {
    padding: 0.5rem;
    box-sizing: border-box;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.75);
  }
</style>
