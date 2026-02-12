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
      " ",
      " ",
      " ",
      " ",
      " ",
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
      " ",

    content: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
  {
    id: "946caec1-f26b-4c8e-bc54-510c5d3024df",
    title: "Featured event",
    date: [
       new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    featured: true,
    imageURL:
      " ",

    content: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
    {
    id: "98ef474c-dc0f-4604-8583-285ce7a14e47",
    title: "Wynwood Pride Miami",
    date: [
       new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Arts & Culture"],
    featured: true,
    imageURL:
      " ",

    content: [
      "Event overview: Wynwood Pride Miami is June Pride Celebration that happens annually in Miami's Wynwood Arts District, a vibrant and festive location. This event is the perfect opportunity to display your pride or support for such a marginalized community. While exact dates for 2026 have not yet been confirmed, the festival usually takes place in June (due to it being pride month). The festival typically includes things such as concerts, pool parties, drag pageants, and just any sort of community gathering that highlights the LGBTQ+ community. The festival is organized by a local nonprofit that's committed to promoting acceptance of LGBTQ+ individuals in the community. ",
      "Community significance: Wynwood Pride is such an impactful event because it engages multiple parts of the community, especially to a heavily discriminated against group. The event also brings together a lot of different businesses and artists, for instance art galleries, local businesses, nightlife venues, and performers. All of these different parts of the community join together to create spread diversity and showcase their talent. The event strengthens inclusivity and encourages individuals to support small businesses around Miami.  ",
      "Activities and how to gain access: The event will most likely include music performances, art showcases and displays, pride themed parties, and places to socialize. This event is also open to allies of the LGBTQ+ community, and anyone is welcome. The event creates a welcoming environment available for anyone to come and support advocacy for issues and discrimination that members of the LGBTQ+ community face.  ",
      "Learn more: If you wish to remain updated on new information being released about the event, you can look at the festival's official site.  https://wynwoodpride.com/ Here you can check for the finalized 2026 schedule when it is officially released and learn more about ways you can patriciate. ",
      " ",
    ],
  },
    {
    id: "f15975ce-977f-43cd-ab53-fcc281913924",
    title: "Featured event",
    date: [
      new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    featured: true,
    imageURL:
      "/event-images/Pride Parade.png",

    content: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
    {
    id: "ee23d8e9-a8a7-41a6-8a37-9e73858cd3db",
    title: "Featured event",
    date: [
       new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    featured: true,
    imageURL:
      " ",

    content: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
    {
    id: "2aeca350-3dd8-4e9b-aa45-f07362d43258",
    title: "Featured event",
    date: [
       new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    featured: true,
    imageURL:
      " ",

    content: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
    {
    id: "079bdab2-267e-4770-8f94-07dcfb203400",
    title: "Featured event",
    date: [
       new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    featured: true,
    imageURL:
      " ",

    content: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
    {
    id: "bfa47ce7-e35e-450b-892d-a70131fa277f",
    title: "Featured event",
    date: [
       new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    featured: true,
    imageURL:
      " ",

    content: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
    {
    id: "7a46a68a-f3aa-4cdb-9537-5c330e88bb8b",
    title: "Featured event",
    date: [
       new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    featured: true,
    imageURL:
      " ",

    content: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
    {
    id: "d4b08d11-20a1-47fd-92d3-cac611c2ae5b",
    title: "Featured event",
    date: [
       new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    featured: true,
    imageURL:
      " ",

    content: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
    {
    id: "993a3405-77bf-4ec9-a59e-4865b2d636e1",
    title: "Featured event",
    date: [
       new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    featured: true,
    imageURL:
      " ",

    content: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
    {
    id: "64973381-496e-4192-bd42-34c1a3d5fb26",
    title: "Featured event",
    date: [
       new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    featured: true,
    imageURL:
      "/event-images/Pride Parade.png",

    content: [
      " ",
      " ",
      " ",
      " ",
      " ",
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
