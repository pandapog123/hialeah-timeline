// export type CommunityEventTag =
//   | "Arts & Culture"
//   | "Youth & Family"
//   | "Recreation & Sports"
//   | "Community Services & Volunteer"
//   | "Health & Wellness"
//   | "Government"
//   | "Planning & Zoning"
// | "Utilities & Public Works";

import { browser, dev } from "$app/environment";
import { get, writable, type Writable } from "svelte/store";

export const CommunityEventTags = [
  "Arts & Culture",
  "Youth & Family",
  "Recreation & Sports",
  "Community Services & Volunteer",
  "Health & Wellness",
  "Government",
  "Planning & Zoning",
  "Utilities & Public Works",
] as const;

export type CommunityEvent = {
  id: string;
  title: string;
  date: (Date | string)[];
  location: string;
  description: string;
  tags: (typeof CommunityEventTags)[number][];
  imageURL?: string;
  featured?: boolean;
  content: string[];
};

export const OGEvents: CommunityEvent[] = [
  {
    id: "18c03a1a-9dd4-4b22-b6f9-4c7b1148c95c",
    title: "City Council Meeting test",
    date: [new Date(2026, 0, 30, 7, 30), new Date(2026, 0, 30, 8, 30)],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government"],

    content: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    ],
  },
  {
    id: "8e53cd95-45b1-427c-a87a-2cfe7ae995e3",
    title: "City Council Meeting",
    date: [new Date(2026, 0, 31, 7, 30)],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government"],
    imageURL:
      "https://imgs.search.brave.com/ef32VEJDd1gq0wS4U8D5UYAnBoXuyeTIoerIYz0Ibc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNjZG4uaG9tZXMu/Y29tL2kyLzFBUjl2/LWpKeFZmdWpob1M5/YUZoWnVxbXRNZDMz/ZzhSVVF5ZnJJakth/YncvMTEwL2hpYWxl/YWgtZ2FyZGVucy1m/bC03LmpwZz9wPTE",

    content: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    ],
  },
  {
    id: "946caec1-f26b-4c8e-bc54-510c5d3024df",
    title: "Featured event",
    date: [
      new Date(2026, 0, 29),
      new Date(2026, 1, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    featured: true,
    imageURL:
      "https://imgs.search.brave.com/ef32VEJDd1gq0wS4U8D5UYAnBoXuyeTIoerIYz0Ibc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNjZG4uaG9tZXMu/Y29tL2kyLzFBUjl2/LWpKeFZmdWpob1M5/YUZoWnVxbXRNZDMz/ZzhSVVF5ZnJJakth/YncvMTEwL2hpYWxl/YWgtZ2FyZGVucy1m/bC03LmpwZz9wPTE",

    content: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    ],
  },
];

export let CommunityEvents: Writable<CommunityEvent[]> = writable(
  OGEvents,
  (set, update) => {
    if (browser) {
      if (dev) {
        localStorage.removeItem("COMMUNITY_EVENTS"); // Remove in prod
      }

      let localCommunityEvents = localStorage.getItem("COMMUNITY_EVENTS");

      if (localCommunityEvents) {
        let parsedCommunityEvents = JSON.parse(localCommunityEvents);

        try {
          for (let i = 0; i < parsedCommunityEvents.length; i++) {
            parsedCommunityEvents[i].date.forEach((s, j) => {
              if (isValidDate(s)) {
                parsedCommunityEvents[i].date[j] = new Date(s);
              }
            });
          }

          set(parsedCommunityEvents);
        } catch (e) {
          localStorage.removeItem("COMMUNITY_EVENTS");

          localStorage.setItem(
            "COMMUNITY_EVENTS",
            JSON.stringify(get(CommunityEvents)),
          );
        }
      } else {
        localStorage.setItem(
          "COMMUNITY_EVENTS",
          JSON.stringify(get(CommunityEvents)),
        );
      }
    }
  },
);

CommunityEvents.subscribe((ce) => {
  if (browser) {
    localStorage.setItem("COMMUNITY_EVENTS", JSON.stringify(ce));

    if (ce.length === 0) {
      localStorage.removeItem("COMMUNITY_EVENTS");
    }
  }
});

function isValidDate(str: string) {
  const timestamp = Date.parse(str);
  return !isNaN(timestamp);
}
