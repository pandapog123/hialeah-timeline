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
        "If you have questions or need to get in touch with us, you can contact us through the Contact Us page on our website. Just submit the form and we'll get back to you as soon as possible.",
    },
    {
      title: "How do I find events happening in Hialeah or Hialeah Gardens?",
      content: "Check our Events section for a list of upcoming local events, food drives, and opportunities to get involved and help those in need.",
    },
    {
      title: "Where can I find free food for my family?",
      content: "Check out our Resources page for a list of local food pantries, food distributions, and programs offering free food and meals.",
    },
    {
      title:
        "Do I need to be registered or show proof of finances to qualify for food aid?",
      content: "Different requirements apply to different organizations. Some are available to everyone, while some require minimal information from the user. The requirements are listed with the information on each resource when available.",
    },
    {
      title: "How can I volunteer at food drives or events?",
      content: "You can check our Events section or contact us directly. We often publish opportunities for individuals or groups interested in helping out.",
    },
    {
      title: "Can I request a local resource to be added to this site?",
      content: "Yes! If you are aware of a useful local resource, please contact us, and we will evaluate it for inclusion.",
    },
    {
      title: "Can I request a local event to be added to this site?",
      content: "Absolutely! Please submit the details through our contact form and we will do our best to share them with our community.",
    },
  ];

  return {
    title: "FAQ",
    faqs: FAQs,
  };
};
