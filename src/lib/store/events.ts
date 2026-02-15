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

    content: [" ", " ", " ", " ", " "],
  },
  {
    id: "8e53cd95-45b1-427c-a87a-2cfe7ae995e3",
    title: "City Council Meeting",
    date: [new Date(2026, 0, 31, 7, 30)],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government"],

    content: [" ", " ", " ", " ", " "],
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
    imageURL: " ",

    content: [" ", " ", " ", " ", " "],
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
    imageURL: "/event-images/Pride Parade.png",

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
    title: "Leah Arts District Festival",
    date: [
      new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    imageURL: "/event-images/Leahart.png",

    content: ["Event overview: This is an art-related event that features local artists, small businesses, and even live performances. This is an excellent way to connect and engage with other artists and performers in the community. The event takes place only about 15 minutes from Wynwood and features around 30 murals. A multitude of artists from all around Florida gather to share and admire different forms of artwork. Art highlights creativity and diversity and even helps others share their culture. Even if you yourself are not an artist, you can still pass by and enjoy the event to help support local artists in your community. However, if you are in fact an artist, this is the perfect way to get inspiration from different pieces and styles of art and even connect and find people with similar passions as yours.",
       "Community significance: Art is a significant part of culture and community. What makes Leah Arts District Festival so important for the community is the fact it displays different pieces of art publicly for anyone to view free of charge. Anybody is welcome to attend this event and that is extremely positive since art should be accessible to everybody. The event also typically features live performances which help support local music artists. Supporting events such as these help foster creativity and innovation and promote making art more prevalent in our community, which will result in a more vibrant and colorful environment for Floridians to reside in.",
        "Activities and how to gain access: The event is easily accessible for anybody to attend regardless of age and status. The event will feature a large sum of different art works and live performances. The event is perfect for all different types of individuals, even with no prior knowledge of art or music. If you wish to remain updated on new information being released on the event, you can visit the events official page and remain in the loop.", 
        "Learn more: https://www.timeout.com/miami/things-to-do/leah-arts district Here you can check for official dates and any updates or altercations being made to the event.",
        " "],
  },
  {
    id: "ee23d8e9-a8a7-41a6-8a37-9e73858cd3db",
    title: "Miami Rescue Mission",
    date: [
      new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    imageURL: "/event-images/Miami Rescue.png",

    content: ["Event overview: Offers programs and assistance to those facing homelessness and food sensitivity issues. This organization also offers community service opportunities for those who wish to give back to their community. If you are an individual in a tough situation, you can contact the organization for aid in things such as food, shelter, clothing, and many other factors. The organization offers a wide variety of resources that are accessible to anybody who requires them. If you are a volunteer looking for a way to make a positive impact on your community, Miami Rescue Mission is an excellent option. You can assist in various methods and be given specific tasks that will help aid needy individuals directly. The organization can also provide forms with the amount of hours you completed if your school requires them.",
       "Community significance: Homelessness and poverty is unfortunately a huge issue in our community. Many individuals, even young children, face issues regarding not being able to access clean water, having to go hungry, and feeling cold due to lack of proper winter equipment throughout months like December. Aid should be accessible to anybody, and this organization helps promote giving back to the community and helping those who are less fortunate. This is also an amazing opportunity for privileged individuals to assist others and put themselves in the perspective of struggling individuals.",
        "Accessibility and resources provided: Almost any resource that you can think of will most likely be provided by the organization if requested. It is easily accessible for anyone to contact them and acquire any resources they need. It is also fully accessible for anyone to contact them regarding community service and how they can support the organization. Please do not hesitate to reach out for assistance as there's a multitude of individuals facing similar challenges and situations as your own. As for volunteers, any amount of time that you are able to dedicate to helping such an important cause is extremely productive and time well spent.",
         "Learn more: If you wish to learn more about how to access the resources provided by the organization or different ways to volunteer and contribute, you can visit the official website. Here you can check for volunteer events, dates, and ways to contact a representative of the organization. https://caringplace.org/",
          " "],
  },
  {
    id: "2aeca350-3dd8-4e9b-aa45-f07362d43258",
    title: "Miami International Children’s Book Fair",
    date: [
      new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    imageURL: "/event-images/Book Fair Miami.png",

    content: ["Event overview: A literary event that offers lots of fun activities for kids such as workshops, interactive reading time, and other educational recreations. Reading is a fundamental activity for kids, and literary events can often result in children bonding with each other over their interests in books. Even if your child does not know how to read yet or is not interested in books, the event also features other activities like workshops. Many of the activities featured tend to be more artistic and allow kids to express their creativity freely and develop artistic skills. This event is extremely educational, and your child may learn loads of different things and broaden their view globally. Here, your child can become more educated and also make tons of friends. This event is perfect for families to get out and bring their kids to a safe place to interact with other children and enjoy themselves while reading books.",
       "Community significance: In recent years, children have begun to read less and less due to an increase in technology. Naturally, this has resulted in a literary crisis, and many kids all around the globe, especially in Florida, are unable to read at the proper grade level. Events such as these that foster literacy are actively working to improve the growing of issues of kids not reading enough or not reading at the adequate level. This event makes reading more fun and enjoyable for kids because of the various activities and interactive reading.",
        "Learn More: If you wish to stay updated on any altercations being made to the event or if you wish to seek more information on the details of the event you can visit the official website https://www.miamibookfair.com/childrens-alley/",
         "Here you can learn more about the specific activities that will be occurring on the day of the event, and you can stay informed about how the event will take place.",
          " "],
  },
  {
    id: "079bdab2-267e-4770-8f94-07dcfb203400",
    title: "Catholic Charities of Miami",
    date: [
      new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    imageURL: "/event-images/Catholic Charities.png",

    content: ["Event overview: Offers various resources for struggling individuals such as substance abuse programs, food insecurity programs, and immigration services. These charities can offer you aid for almost any sort of issue you may be having. In fact, the organization will also be likely to be able to help you with emotional issues. For example, if you are struggling with substance abuse, they may be able to get you mental help with symptoms like withdrawal. The organization belongs to the catholic religion, but aid is accessible to anybody regardless of their religious beliefs. If you are not catholic, please do not hesitate to contact the charity if you are in need of assistance. If you are a volunteer looking for some community service, you may need to look at the program list, contact the program director, and successfully pass a background check.",
       "Community significance: Religious charities such as the Catholic Charities of Miami unite entire communities to help assist the needy. These types of organizations provide support to a wide variety of individuals and help uplift others. Without organizations like this one, there would be no sense of support for neighbors within the same community. Regardless of your religion, it is detrimental to contribute aid to those who are less fortunate. This organization helps people get through some of the toughest moments of their entire lives and fosters servitude.",
        "Learn more: If you wish to learn more about how to obtain aid or resources from the charities, you can look at the official website. There you can find details on charities that are closest to you and the types of services and support that they provide and offer. However, if you are looking for ways to get involved within the charities, you may need to contact the charity directly via email or phone number. https://www.ccadm.org/our-services/",
         " "," "],
  },
  {
    id: "bfa47ce7-e35e-450b-892d-a70131fa277f",
    title: "Legal Aid Society of Miami",
    date: [
      new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    imageURL: "/event-images/Legal Aid Society.png",

    content: ["Event overview: A nonprofit law firm that advocates for equal rights in the justice system and fights against legal discrimination. This organization aims to remove legal barriers and foster economic prosperity while creating a more fair and equitable community. The legal system often favors those of higher class and discriminates against racial minorities. This nonprofit organization aims to create a more balanced judicial system and assist those who are wrongly convicted or individuals who are not given a fair trial. The law firm also fights against laws that are unjust. For example, in 1969 they successfully sued the state of Florida and the city of Miami police department to challenge a prejudiced law that criminalized community members experiencing homelessness and joblessness. If you wish to give back to this organization, they are currently accepting donations via mail, online gifting through credit and debit card, and even in cryptocurrency.  If you are a young aspiring attorney or paralegal, the nonprofit also offers a fellowship program where you can participate in a law clerk training program and gain experience in your field. The fellowship will be accepting applications in summer, fall, and winter/spring placements.",
       "Community Impact: The Legal Aid Society of Miami is an extremely impactful nonprofit that has assisted and supported members of the community from unfair laws and trials. Everybody should have the right to live in a community with fair laws and be put on trial fairly before facing prosecution. This organization ensures that Floridan's receive fair legal treatment and obtain any money they may be eligible for compensation for. The nonprofit also has a significant impact on inspiring young individuals who wish to work in the field of law. This is shown through their program, which is offered throughout multiple seasons of the year and allows individuals to experience working alongside actual paralegals, and getting to see administrative proceedings.",
        "If you wish to learn more about the services the nonprofit offers like how to obtain an attorney, how to support the organization, or how to apply for their student program you can visit their official website https://www.legalservicesmiami.org/consumer-protection",
         " ", " "],
  },
  {
    id: "7a46a68a-f3aa-4cdb-9537-5c330e88bb8b",
    title: "Chapman Partnership Emergency Housing",
    date: [
      new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    imageURL: "/event-images/ChapmanHousing.png",

    content: ["Event overview: Chapman Partnership Emergency Housing Aids victims of domestic abuse, veterans, disabled individuals, and youth with housing related issues. They provide dorms, daycares, dental clinics, cafeterias, and even assistance with dogs. The organization is responsible for managing two Homeless Assistance Centers located in Miami and Homestead. This organization can provide a large sum of different types of assistance; however, they specialize in providing more long-term aid. This means that at this organization you will be provided with a stable shelter with all sorts of different resources and even be assisted with medical care. The organization hosts a multitude of events as well such as the “Take A Walk in Her Shoes” happening on May 14th which brings awareness to women specifically mothers who are facing homelessness and it is a fashion focused event. The organization is also very accepting all different types of volunteers, including kids. They even offer pre employment and paid internships to individuals who wish to gain experience in the workforce or strengthen their view of the world. In fact, they are even able to connect unemployed individuals with employers all throughout Miami Dade County and employment specialists as well that are able to find accommodating jobs based on an individual's disability or current condition.",
       "Community impact: This organization has an extremely huge impact on the community in various ways. They offer a huge number of resources ranging from shelter, food, medical, and family support which can entirely shift an individual's life around. They support all different types of peoples struggles ranging anywhere from struggling mothers to even pet support. The organization is also very accepting volunteers and allows even young children to participate in community service which is vital for developing empathy and social salience.",
        "If you wish to learn more about how to gain assistance from the organization or how to volunteer for them, you can visit their official website: https://chapmanpartnership.org/workforce-development/",
         " ", " "],
  },
  {
    id: "d4b08d11-20a1-47fd-92d3-cac611c2ae5b",
    title: "Overtown Music & Arts Festival",
    date: [
      new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    imageURL: "/event-images/Overtownmusic.png",

    content: ["Event overview: The Overtown Music & Arts Festival has been occurring in Miami for six consecutive years now. Which within each year they have provided an unforgettable experience for those who attended with their excellent performances. Not only have they provided a musically enjoyable experience, but they have also fostered economic development by supporting small local artists and enriched the community by bringing groups of individuals together through the art of music. This year especially they aim to bring a more unique blend of music, art, and even culture to a different neighborhood. The event will feature musical performances, different pieces of unique artwork even available for purchase from local vendors, a large sum of ethnic cuisine, and jewelry and crafts that are specific to only South Florida. Artist submissions for this year are currently closed since the list has already been filled up, but you can follow the Instagram page if any spots are made available. Volunteer signups are also closed, but you can continue to follow them on social media in case of future opportunities. The event will be taking place March 28th and is available to anybody free of charge for the entry fee. The event is also considered family friendly and is an avid supporter of fighting against peer pressure, gangs, and drugs. Kids are welcome to attend the event and there is even a “Youth Zone” which a wide range of activities like face painting and bubble shows.",
       "Community significance: The Overtown music and arts festival has a very positive impact on the community. The event brings together entire neighborhoods to come and show their love for music and art and have an enjoyable time. The event is also supportive of small businesses and helps local artists and vendors promote their services and earn funds. They also provide community service opportunities for individuals to help get involved with handling events. The event being free for admission is also extremely charitable since families will be able to have a fun day out without spending too much money. The event being safe for kids also promotes nurturing the younger generation in our community.", 
       "To stay updated on any information regarding the event, you can refer to their official website. https://www.overtownmusicfestival.com/aboutus",
        " ", " "],
  },
  {
    id: "993a3405-77bf-4ec9-a59e-4865b2d636e1",
    title: "United Way Miami Volunteer Days ",
    date: [
      new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    imageURL: "/event-images/Unitedwaymiami.png",

    content: ["United Way Miami holds a bunch of different volunteer days throughout the summer. These volunteer events can be centered around things such as education, health, and financial stability. These events can connect volunteers and community members with nonprofit organizations who are in need of willing volunteers to assist with specific tasks or have readily available resources for the needy. Volunteers will be subjected to tasks such as distributing food, school campus preparation as the back to-school season approaches, and even neighborhood clean-ups to better the environment. Volunteering is a great way to get involved in the community and broaden your view of the world while helping others. Summer is the perfect opportunity to use some time valuably and contribute to something positive. If you own a business but wish to contribute to the community, you can partner with Volunteer Miami and have your company host an event. You can choose a topic you are passionate about and benefit your neighborhood while giving your employees an opportunity to make an impact. Many schools also require their students to have a certain number of community service hours for graduation requirements. College applications also value students who have a high number of hours dedicated to volunteer work. Volunteering can also help develop someone's social skills better and even help people make friends. When doing something such as distributing cans of food you interact with others and learn social salience as well as respect and consideration. Although community service is usually directed towards students' adults are also welcome to participate in volunteer work and aid others in need.",
       "Community significance: United Way Miami Volunteer Days are very important for the entire community. Often, we hear about the benefits that nonprofits provide for struggling individuals and the positive impact they make on the community. While this is most certainly true, the impact that volunteers make is often overlooked. Volunteers make certain events such as distributing and organizing goods possible for many nonprofit organizations. In fact, volunteering can change from assisting an organization with goods to helping clean up your local beach. You can impact this summer by viewing the various volunteer opportunities United Way Miami offers.",
        "For more information, please refer to their official website: https://unitedwaymiami.org/volunteermiami/",
         " ", " "],
  },
  {
    id: "64973381-496e-4192-bd42-34c1a3d5fb26",
    title: "Miami Swim Week",
    date: [
      new Date(2026, 0, 1),
      new Date(2026, 2, 5),
      "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
    featured: true,
    imageURL: "/event-images/MiamiSwim.png",

    content: ["Event overview: Miami Swim Week is one of Miami's most significant and popular fashion events. Designers, models, industry workers, and community members from all around Florida gather to witness the uprising of fashion. The event features runway shows, brand sponsored displays/showcases, and beach themed events all regarding the fashion of swim wear and Miami culture. The event is currently scheduled for July 10-15. This multiday festival also centered around culture, is most definitely a cultural spotlight on Miami's coastal identity, local creativity, and even way of life. Most of the shows and pop-up events are created and hosted by residents and vendors. Many of these events even being completely open to the public for viewing and typically hosted in community venues. This gives local residents opportunities to engage with local designers that are within their region and even connect with company founders if they wish to pursue a career in the industry. Obviously, the main attraction of the event is the luxurious fashion shows. However, there are more activities featured that may be fun for families to participate in. There are workshops that may be perfect for aspiring designers and fashionistas, vendor markets where you can find unique fashion statements and pieces most likely exclusive to Miami, and beach parties that are centered around celebrating the diverse culture of the city, lots of artists displaying and selling their artwork, and hospitality businesses that are perfect if you are wishing to stay at a hotel or obtain some cultural food. This event is a social and economic highlight crucial for summertime in Miami.",
       "Community impact: This event has a very large impact on the community since it brings together different professions for the purpose of fashion and art. Fashion, and art are a significant part of Miami's culture and heritage more specifically swim wear since Miami is a tropical location where beaches and pools are the norm. The event provides economic prosperity for fashion-related professions and brings exposure to small vendors and companies.",
        "If you wish to stay updated on the official schedule and various event details, many of the organizers post information on the official website.",
         " ", " "],
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
