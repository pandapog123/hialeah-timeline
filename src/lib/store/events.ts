// export type CommunityEventTag =
//   | "Arts & Culture"
//   | "Youth & Family"
//   | "Recreation & Sports"
//   | "Community Services & Volunteer"
//   | "Health & Wellness"
//   | "Government"
//   | "Planning & Zoning"
// | "Utilities & Public Works";

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
  title: string;
  date: (Date | string)[];
  location: string;
  description: string;
  tags: (typeof CommunityEventTags)[number][];
  imageURL?: string;
  featured?: boolean;
};

export const CommunityEvents: CommunityEvent[] = [
  {
    title: "City Council Meeting",
    date: [new Date(2026, 1, 25, 7, 30)],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government"],
  },
];
