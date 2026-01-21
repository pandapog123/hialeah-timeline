import type { PageLoad } from "./$types";

export const prerender = true;

interface FAQElement {
  title: string;
  content: string;
}

export const load: PageLoad = async () => {
  const FAQs: FAQElement[] = [
    {
      title: "How do I get in contact?",
      content:
        "fjdsakl;fjdskla;fjdklsa; fdlksajfl fjdaskl;f fdjsakl; fjkl;as ffjf fjdksla fjfds f fds dsa dfsa fds afd s f dsaf dsa fdsa fd safdsa fdsa f ds",
    },
    {
      title: "How do I find events happening in Hialeah or Hialeah Gardens?",
      content: "fjdsakl;fjdskla;fjdklsa;",
    },
    {
      title: "Where can I find free food for my family?",
      content: "fjdsakl;fjdskla;fjdklsa;",
    },
    {
      title:
        "Do I need to be registered or show proof of finances to qualify for food aid?",
      content: "fjdsakl;fjdskla;fjdklsa;",
    },
    {
      title: "How can I volunteer at food drives or events?",
      content: "fjdsakl;fjdskla;fjdklsa;",
    },
    {
      title: "Can I request a local resource to be added to this site?",
      content: "fjdsakl;fjdskla;fjdklsa;",
    },
    {
      title: "Can I request a local event to be added to this site?",
      content: "fjdsakl;fjdskla;fjdklsa;",
    },
  ];

  return {
    title: "FAQ",
    faqs: FAQs,
  };
};
