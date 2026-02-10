import { browser, dev } from "$app/environment";
import { get, writable, type Writable } from "svelte/store";

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
      title: "Human Resources Department",
      contacts: [
        {
          email: "example@email.com",
          name: "John Doe",
          phoneNumber: "(012) 345-6789",
          position: "Lorem",
        },
      ],
      imageURL: "/community/Community Activity.jpg",
      content: [
        `# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b
    * Item 3a
    * Item 3b

### Ordered

1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Images

![This is an alt text.](/community/Community%20Activity.jpg "test")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

This web site is using \`markedjs/marked\`.
`,
      ],
    },
  ],
  "Health and Wellness": [
    {
      id: "fdsa",
      title: "test1",
      contacts: [],
      content: [
        `# Building a Simple Web App with Svelte

Svelte is a **modern JavaScript framework** that lets you build fast, reactive web applications with *less boilerplate*.

[Visit the Svelte website](https://svelte.dev) to learn more.

---

## Why Svelte?

Svelte shifts work from the browser to the **build step**, which results in:

- Smaller bundle sizes
- Faster load times
- Less runtime overhead

### Key Advantages

1. No virtual DOM
2. True reactivity
3. Clean syntax

> Svelte feels more like writing plain HTML, CSS, and JavaScript than using a traditional framework.

---

## Getting Started

To create a new Svelte project:

\`\`\`bash
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
\`\`\`

You should now see your app running locally.

---

## Example Component

Here’s a simple Svelte component:

\`\`\`svelte
<script>
  let count = 0;
</script>

<button on:click={() => count++}>
  Clicked {count} times
</button>
\`\`\`

Inline code also works, like \`npm run build\`.

---

## Tables and Data

| Feature      | Supported |
|--------------|-----------|
| Components   | ✅ Yes    |
| Reactivity   | ✅ Yes    |
| TypeScript  | ✅ Optional |
| SSR          | ✅ Yes    |

---

## Task List (GFM)

- [x] Install Node.js
- [x] Create Svelte project
- [ ] Deploy app

---

## Images

![Svelte Logo](https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg)

---

## Emphasis Examples

You can use **bold text**, *italic text*, or ***both at once***.

> ### Pro Tip
> You can nest blockquotes and include headings inside them.

---

## Horizontal Rule

---

## Footnotes

Svelte was created by Rich Harris.[^1]

[^1]: Originally developed at The New York Times.

---

## Conclusion

Svelte is a powerful choice for developers who value **performance**, **simplicity**, and **maintainability**.

Happy hacking 🚀
`,
      ],
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

export let CommunityResources: Writable<CommunityResourceList> = writable(
  OGResources,
  (set, update) => {
    if (browser) {
      // if (dev) {
      //   localStorage.removeItem("COMMUNITY_RESOURCES"); // Remove in prod
      // }

      let localCommunityResources = localStorage.getItem("COMMUNITY_RESOURCES");

      if (localCommunityResources) {
        let parsedCommunityResources = JSON.parse(localCommunityResources);

        try {
          // Logic for validation

          // for (let i = 0; i < parsedCommunityResources.length; i++) {
          //   parsedCommunityResources[i].date.forEach((s, j) => {
          //     if (isValidDate(s)) {
          //       parsedCommunityResources[i].date[j] = new Date(s);
          //     }
          //   });
          // }

          set(parsedCommunityResources);
        } catch (e) {
          localStorage.removeItem("COMMUNITY_RESOURCES");

          localStorage.setItem(
            "COMMUNITY_RESOURCES",
            JSON.stringify(get(CommunityResources)),
          );
        }
      } else {
        localStorage.setItem(
          "COMMUNITY_RESOURCES",
          JSON.stringify(get(CommunityResources)),
        );
      }
    }
  },
);

CommunityResources.subscribe((ce) => {
  if (browser) {
    localStorage.setItem("COMMUNITY_RESOURCES", JSON.stringify(ce));

    for (let i = 0; i < typedResourceKey(ce).length; i++) {
      if (
        ce[typedResourceKey(ce)[i]].length <
        OGResources[typedResourceKey(ce)[i]].length
      ) {
        localStorage.removeItem("COMMUNITY_RESOURCES");
        break;
      }
    }
  }
});

export function resourcesDiff(resources: CommunityResourceList) {
  for (const c of typedResourceKey(resources)) {
    if (resources[c].length !== OGResources[c].length) {
      return true;
    }
  }

  return false;
}

export function typedResourceKey(resources: CommunityResourceList) {
  return Object.keys(resources) as (keyof CommunityResourceList)[];
}

export function findResourceByID(id: string) {
  for (const key in get(CommunityResources)) {
    let k = key as (typeof CommunityResourceCategories)[number];
    let r = get(CommunityResources)[k].find((v) => v.id === id);
    if (r) {
      return r;
    }
  }

  return undefined;
}

export function resourceInStoreWithKey(key: string, id: string) {
  for (const k of typedResourceKey(get(CommunityResources))) {
    if (k === key) {
      let r = get(CommunityResources)[k].reduce((p, cv) => {
        return p || cv.id === id;
      }, false);
      if (r) {
        return true;
      }
    }
  }

  return false;
}

export function findResourceCategory(id: string) {
  for (const key in get(CommunityResources)) {
    let k = key as (typeof CommunityResourceCategories)[number];
    let r = get(CommunityResources)[k].reduce((p, cv) => {
      return p || cv.id === id;
    }, false);
    if (r) {
      return key;
    }
  }

  return undefined;
}

export function resourceInStore(id: string) {
  for (const key in get(CommunityResources)) {
    let k = key as (typeof CommunityResourceCategories)[number];
    let r = get(CommunityResources)[k].reduce((p, cv) => {
      return p || cv.id === id;
    }, false);
    if (r) {
      return true;
    }
  }

  return false;
}
