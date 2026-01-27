export type CommunityResource = {
  id: string;
  title: string;
  imageURL?: string;
  content: string[];
  contacts: {
    name: string;
    position: string;
    phoneNumber: string;
    email: string;
  }[];
};

export const CommunityResourceCategories = [
  "Government and Public Services",
  "Health and Wellness",
  "Education and Youth",
  "Recreation and Culture",
  "Community Organizations",
  "Emergency and Safety",
  "Senior Services",
  "Family Support",
  "Information and Advocacy",
] as const;

export type CommunityResourceList = {
  [K in (typeof CommunityResourceCategories)[number]]: CommunityResource[];
};

export const OGResources: CommunityResourceList = {
  "Government and Public Services": [
    {
      id: "test",
      title: "test",
      content: ["test"],
      contacts: [],
    },
  ],
  "Health and Wellness": [
    {
      id: "fdsa",
      title: "test1",
      content: ["test1"],
      contacts: [],
    },
  ],
  "Education and Youth": [],
  "Recreation and Culture": [],
  "Community Organizations": [],
  "Emergency and Safety": [],
  "Senior Services": [],
  "Family Support": [],
  "Information and Advocacy": [],
};

export function typedResourceKey(resources: CommunityResourceList) {
  return Object.keys(resources) as (keyof CommunityResourceList)[];
}

export function findResourceByID(id: string) {
  for (const key in OGResources) {
    let k = key as (typeof CommunityResourceCategories)[number];
    let r = OGResources[k].find((v) => v.id === id);
    if (r) {
      return r;
    }
  }

  return undefined;
}

export function resourceInStoreWithKey(key: string, id: string) {
  for (const k of typedResourceKey(OGResources)) {
    if (k === key) {
      let r = OGResources[k].reduce((p, cv) => {
        return p || cv.id === id;
      }, false);
      if (r) {
        return true;
      }
    }
  }

  return false;
}

export function resourceInStore(id: string) {
  for (const key in OGResources) {
    let k = key as (typeof CommunityResourceCategories)[number];
    let r = OGResources[k].reduce((p, cv) => {
      return p || cv.id === id;
    }, false);
    if (r) {
      return true;
    }
  }

  return false;
}
