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
  // {
  //   id: "8e53cd95-45b1-427c-a87a-2cfe7ae995e3",
  //   title: "City Council Meeting",
  //   date: [new Date(2026, 0, 31, 7, 30)],
  //   location: "Hialeah Gardens City Hall",
  //   description: "Official Hialeah Gardens City Council Meeting",
  //   tags: ["Government"],

  //   content: [" ", " ", " ", " ", " "],
  // },
  // {
  //   id: "946caec1-f26b-4c8e-bc54-510c5d3024df",
  //   title: "Featured event",
  //   date: [
  //     new Date(2026, 0, 1),
  //     new Date(2026, 2, 5),
  //     "Opening night on Jan 24, 6:30 PM - 8:30 PM EST",
  //   ],
  //   location: "Hialeah Gardens City Hall",
  //   description: "Official Hialeah Gardens City Council Meeting",
  //   tags: ["Government", "Arts & Culture", "Community Services & Volunteer"],
  //   imageURL: " ",

  //   content: [" ", " ", " ", " ", " "],
  // },

  {
    id: "98ef474c-dc0f-4604-8583-285ce7a14e47",
    title: "Wynwood Pride Miami",
    date: [
      new Date(2026, 5, 12),
      // new Date(2026, 2, 6),
      // "Opening night on July 5, 4:00 PM - 8:30 PM EST",
    ],
    location: "Wynwood Arts District, Miami, FL",
    description: "Join Our Annual Pride Parade!",
    tags: ["Arts & Culture"],
    imageURL: "/event-images/pride_parade.webp",

    content: [
      "Wynwood Pride Miami is June Pride Celebration that happens annually in Miami's Wynwood Arts District, a vibrant and festive location. This event is the perfect opportunity to display your pride or support for such a marginalized community. While exact dates for 2026 have not yet been confirmed, the festival usually takes place in June (due to it being pride month). The festival typically includes things such as concerts, pool parties, drag pageants, and just any sort of community gathering that highlights the LGBTQ+ community. The festival is organized by a local nonprofit that's committed to promoting acceptance of LGBTQ+ individuals in the community. ",
      "Wynwood Pride is such an impactful event because it engages multiple parts of the community, especially to a heavily discriminated against group. The event also brings together a lot of different businesses and artists, for instance art galleries, local businesses, nightlife venues, and performers. All of these different parts of the community join together to create spread diversity and showcase their talent. The event strengthens inclusivity and encourages individuals to support small businesses around Miami.  ",
      "Activities and how to gain access: The event will most likely include music performances, art showcases and displays, pride themed parties, and places to socialize. This event is also open to allies of the LGBTQ+ community, and anyone is welcome. The event creates a welcoming environment available for anyone to come and support advocacy for issues and discrimination that members of the LGBTQ+ community face.  ",
      "If you wish to remain updated on new information being released about the event, you can look at the festival's official site.  https://wynwoodpride.com/ Here you can check for the finalized 2026 schedule when it is officially released and learn more about ways you can participate.",
    ],
  },
  {
    id: "f15975ce-977f-43cd-ab53-fcc281913924",
    title: "Leah Arts District Festival",
    date: [new Date(2026, 2, 8)],
    location: "Leah Arts District, Hialeah, FL",
    description:
      "Community art festival showcasing murals, live performances, and local vendors",
    tags: ["Arts & Culture", "Youth & Family", "Recreation & Sports"],
    imageURL: "/event-images/art_convention.webp",

    content: [
      "This is an art-related event that features local artists, small businesses, and even live performances. This is an excellent way to connect and engage with other artists and performers in the community. The event takes place only about 15 minutes from Wynwood and features around 30 murals. A multitude of artists from all around Florida gather to share and admire different forms of artwork. Art highlights creativity and diversity and even helps others share their culture. Even if you yourself are not an artist, you can still pass by and enjoy the event to help support local artists in your community. However, if you are in fact an artist, this is the perfect way to get inspiration from different pieces and styles of art and even connect and find people with similar passions as yours.",
      "Art is a significant part of culture and community. What makes Leah Arts District Festival so important for the community is the fact it displays different pieces of art publicly for anyone to view free of charge. Anybody is welcome to attend this event and that is extremely positive since art should be accessible to everybody. The event also typically features live performances which help support local music artists. Supporting events such as these help foster creativity and innovation and promote making art more prevalent in our community, which will result in a more vibrant and colorful environment for Floridians to reside in.",
      "Activities and how to gain access: The event is easily accessible for anybody to attend regardless of age and status. The event will feature a large sum of different art works and live performances. The event is perfect for all different types of individuals, even with no prior knowledge of art or music. If you wish to remain updated on new information being released on the event, you can visit the events official page and remain in the loop.",
      "https://www.timeout.com/miami/things-to-do/leah-arts district Here you can check for official dates and any updates or altercations being made to the event.",
    ],
  },
  {
    id: "ee23d8e9-a8a7-41a6-8a37-9e73858cd3db",
    title: "Miami Rescue Mission Volunteer Day",
    date: [new Date(2026, 2, 10)],
    location: "Miami Rescue Mission, Miami, FL",
    description:
      "Volunteer opportunity supporting individuals experiencing homelessness",
    tags: ["Community Services & Volunteer"],
    imageURL: "/event-images/homeless_man.webp",
    content: [
      "Offers programs and assistance to those facing homelessness and food sensitivity issues. This organization also offers community service opportunities for those who wish to give back to their community. If you are an individual in a tough situation, you can contact the organization for aid in things such as food, shelter, clothing, and many other factors. The organization offers a wide variety of resources that are accessible to anybody who requires them. If you are a volunteer looking for a way to make a positive impact on your community, Miami Rescue Mission is an excellent option. You can assist in various methods and be given specific tasks that will help aid needy individuals directly. The organization can also provide forms with the amount of hours you completed if your school requires them.",
      "Homelessness and poverty is unfortunately a huge issue in our community. Many individuals, even young children, face issues regarding not being able to access clean water, having to go hungry, and feeling cold due to lack of proper winter equipment throughout months like December. Aid should be accessible to anybody, and this organization helps promote giving back to the community and helping those who are less fortunate. This is also an amazing opportunity for privileged individuals to assist others and put themselves in the perspective of struggling individuals.",
      "Accessibility and resources provided: Almost any resource that you can think of will most likely be provided by the organization if requested. It is easily accessible for anyone to contact them and acquire any resources they need. It is also fully accessible for anyone to contact them regarding community service and how they can support the organization. Please do not hesitate to reach out for assistance as there's a multitude of individuals facing similar challenges and situations as your own. As for volunteers, any amount of time that you are able to dedicate to helping such an important cause is extremely productive and time well spent.",
      "If you wish to learn more about how to access the resources provided by the organization or different ways to volunteer and contribute, you can visit the official website. Here you can check for volunteer events, dates, and ways to contact a representative of the organization. https://caringplace.org/",
    ],
  },
  {
    id: "2aeca350-3dd8-4e9b-aa45-f07362d43258",
    title: "Miami International Children’s Book Fair",
    date: [new Date(2026, 2, 9)],
    location: "Miami Dade College – Wolfson Campus, Miami, FL",
    description:
      "Family-friendly literary event with interactive readings and creative workshops",
    tags: ["Arts & Culture", "Youth & Family"],
    imageURL: "/event-images/book_fair.webp",
    featured: true,
    content: [
      "A literary event that offers lots of fun activities for kids such as workshops, interactive reading time, and other educational recreations. Reading is a fundamental activity for kids, and literary events can often result in children bonding with each other over their interests in books. Even if your child does not know how to read yet or is not interested in books, the event also features other activities like workshops. Many of the activities featured tend to be more artistic and allow kids to express their creativity freely and develop artistic skills. This event is extremely educational, and your child may learn loads of different things and broaden their view globally. Here, your child can become more educated and also make tons of friends. This event is perfect for families to get out and bring their kids to a safe place to interact with other children and enjoy themselves while reading books.",
      "In recent years, children have begun to read less and less due to an increase in technology. Naturally, this has resulted in a literary crisis, and many kids all around the globe, especially in Florida, are unable to read at the proper grade level. Events such as these that foster literacy are actively working to improve the growing of issues of kids not reading enough or not reading at the adequate level. This event makes reading more fun and enjoyable for kids because of the various activities and interactive reading.",
      "If you wish to stay updated on any altercations being made to the event or if you wish to seek more information on the details of the event you can visit the official website https://www.miamibookfair.com/childrens-alley/",
      "Here you can learn more about the specific activities that will be occurring on the day of the event, and you can stay informed about how the event will take place.",
    ],
  },
  {
    id: "079bdab2-267e-4770-8f94-07dcfb203400",
    title: "Catholic Charities of Miami",
    date: [
      // new Date(2026, 0, 1),
      new Date(2026, 2, 15),
      // "Opening on Aug 27, 9:30 AM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Community Services & Volunteer", "Health & Wellness"],
    imageURL: "/event-images/charity_volunteering.webp",

    content: [
      "Offers various resources for struggling individuals such as substance abuse programs, food insecurity programs, and immigration services. These charities can offer you aid for almost any sort of issue you may be having. In fact, the organization will also be likely to be able to help you with emotional issues. For example, if you are struggling with substance abuse, they may be able to get you mental help with symptoms like withdrawal. The organization belongs to the catholic religion, but aid is accessible to anybody regardless of their religious beliefs. If you are not catholic, please do not hesitate to contact the charity if you are in need of assistance. If you are a volunteer looking for some community service, you may need to look at the program list, contact the program director, and successfully pass a background check.",
      "Religious charities such as the Catholic Charities of Miami unite entire communities to help assist the needy. These types of organizations provide support to a wide variety of individuals and help uplift others. Without organizations like this one, there would be no sense of support for neighbors within the same community. Regardless of your religion, it is detrimental to contribute aid to those who are less fortunate. This organization helps people get through some of the toughest moments of their entire lives and fosters servitude.",
      "If you wish to learn more about how to obtain aid or resources from the charities, you can look at the official website. There you can find details on charities that are closest to you and the types of services and support that they provide and offer. However, if you are looking for ways to get involved within the charities, you may need to contact the charity directly via email or phone number. https://www.ccadm.org/our-services/",
    ],
  },
  {
    id: "bfa47ce7-e35e-450b-892d-a70131fa277f",
    title: "Legal Aid Society of Miami Community Workshop",
    date: [new Date(2026, 2, 13)],
    location: "Legal Aid Society of Miami, Miami, FL",
    description:
      "Legal assistance workshop providing guidance on rights and community resources",
    tags: ["Government", "Community Services & Volunteer"],
    imageURL: "/event-images/legal_aid.webp",

    content: [
      "A nonprofit law firm that advocates for equal rights in the justice system and fights against legal discrimination. This organization aims to remove legal barriers and foster economic prosperity while creating a more fair and equitable community. The legal system often favors those of higher class and discriminates against racial minorities. This nonprofit organization aims to create a more balanced judicial system and assist those who are wrongly convicted or individuals who are not given a fair trial. The law firm also fights against laws that are unjust. For example, in 1969 they successfully sued the state of Florida and the city of Miami police department to challenge a prejudiced law that criminalized community members experiencing homelessness and joblessness. If you wish to give back to this organization, they are currently accepting donations via mail, online gifting through credit and debit card, and even in cryptocurrency.  If you are a young aspiring attorney or paralegal, the nonprofit also offers a fellowship program where you can participate in a law clerk training program and gain experience in your field. The fellowship will be accepting applications in summer, fall, and winter/spring placements.",
      "Community Impact: The Legal Aid Society of Miami is an extremely impactful nonprofit that has assisted and supported members of the community from unfair laws and trials. Everybody should have the right to live in a community with fair laws and be put on trial fairly before facing prosecution. This organization ensures that Floridan's receive fair legal treatment and obtain any money they may be eligible for compensation for. The nonprofit also has a significant impact on inspiring young individuals who wish to work in the field of law. This is shown through their program, which is offered throughout multiple seasons of the year and allows individuals to experience working alongside actual paralegals, and getting to see administrative proceedings.",
      "If you wish to learn more about the services the nonprofit offers like how to obtain an attorney, how to support the organization, or how to apply for their student program you can visit their official website https://www.legalservicesmiami.org/consumer-protection",
    ],
  },
  {
    id: "7a46a68a-f3aa-4cdb-9537-5c330e88bb8b",
    title: "Chapman Partnership Volunteer & Outreach Day",
    date: [new Date(2026, 2, 9)],
    location: "Chapman Partnership, Miami, FL",
    description:
      "Volunteer event supporting housing and long-term assistance programs",
    tags: ["Community Services & Volunteer", "Health & Wellness"],
    imageURL: "/event-images/food_picnic.webp",
    featured: true,
    content: [
      "Chapman Partnership Emergency Housing Aids victims of domestic abuse, veterans, disabled individuals, and youth with housing related issues. They provide dorms, daycares, dental clinics, cafeterias, and even assistance with dogs. The organization is responsible for managing two Homeless Assistance Centers located in Miami and Homestead. This organization can provide a large sum of different types of assistance; however, they specialize in providing more long-term aid. This means that at this organization you will be provided with a stable shelter with all sorts of different resources and even be assisted with medical care. The organization hosts a multitude of events as well such as the “Take A Walk in Her Shoes” happening on May 14th which brings awareness to women specifically mothers who are facing homelessness and it is a fashion focused event. The organization is also very accepting all different types of volunteers, including kids. They even offer pre employment and paid internships to individuals who wish to gain experience in the workforce or strengthen their view of the world. In fact, they are even able to connect unemployed individuals with employers all throughout Miami Dade County and employment specialists as well that are able to find accommodating jobs based on an individual's disability or current condition.",
      "This organization has an extremely huge impact on the community in various ways. They offer a huge number of resources ranging from shelter, food, medical, and family support which can entirely shift an individual's life around. They support all different types of peoples struggles ranging anywhere from struggling mothers to even pet support. The organization is also very accepting volunteers and allows even young children to participate in community service which is vital for developing empathy and social salience.",
      "If you wish to learn more about how to gain assistance from the organization or how to volunteer for them, you can visit their official website: https://chapmanpartnership.org/workforce-development/",
    ],
  },
  {
    id: "d4b08d11-20a1-47fd-92d3-cac611c2ae5b",
    title: "Overtown Music & Arts Festival",
    date: [new Date(2026, 2, 7)],
    location: "Overtown, Miami, FL",
    description:
      "Annual music and arts festival celebrating culture, food, and local talent",
    tags: ["Arts & Culture"],
    imageURL: "/event-images/concert_crowd.webp",

    content: [
      "The Overtown Music & Arts Festival has been occurring in Miami for six consecutive years now. Which within each year they have provided an unforgettable experience for those who attended with their excellent performances. Not only have they provided a musically enjoyable experience, but they have also fostered economic development by supporting small local artists and enriched the community by bringing groups of individuals together through the art of music. This year especially they aim to bring a more unique blend of music, art, and even culture to a different neighborhood. The event will feature musical performances, different pieces of unique artwork even available for purchase from local vendors, a large sum of ethnic cuisine, and jewelry and crafts that are specific to only South Florida. Artist submissions for this year are currently closed since the list has already been filled up, but you can follow the Instagram page if any spots are made available. Volunteer signups are also closed, but you can continue to follow them on social media in case of future opportunities. The event will be taking place March 28th and is available to anybody free of charge for the entry fee. The event is also considered family friendly and is an avid supporter of fighting against peer pressure, gangs, and drugs. Kids are welcome to attend the event and there is even a “Youth Zone” which a wide range of activities like face painting and bubble shows.",
      "The Overtown music and arts festival has a very positive impact on the community. The event brings together entire neighborhoods to come and show their love for music and art and have an enjoyable time. The event is also supportive of small businesses and helps local artists and vendors promote their services and earn funds. They also provide community service opportunities for individuals to help get involved with handling events. The event being free for admission is also extremely charitable since families will be able to have a fun day out without spending too much money. The event being safe for kids also promotes nurturing the younger generation in our community.",
      "To stay updated on any information regarding the event, you can refer to their official website. https://www.overtownmusicfestival.com/aboutus",
    ],
  },
  {
    id: "993a3405-77bf-4ec9-a59e-4865b2d636e1",
    title: "United Way Miami Volunteer Day",
    date: [new Date(2026, 2, 14)],
    location: "Various Locations, Miami-Dade County, FL",
    description:
      "Community volunteer event focused on education, health, and neighborhood support",
    tags: ["Community Services & Volunteer"],
    imageURL: "/event-images/volunteer_american.webp",

    content: [
      "United Way Miami holds a bunch of different volunteer days throughout the summer. These volunteer events can be centered around things such as education, health, and financial stability. These events can connect volunteers and community members with nonprofit organizations who are in need of willing volunteers to assist with specific tasks or have readily available resources for the needy. Volunteers will be subjected to tasks such as distributing food, school campus preparation as the back to-school season approaches, and even neighborhood clean-ups to better the environment. Volunteering is a great way to get involved in the community and broaden your view of the world while helping others. Summer is the perfect opportunity to use some time valuably and contribute to something positive. If you own a business but wish to contribute to the community, you can partner with Volunteer Miami and have your company host an event. You can choose a topic you are passionate about and benefit your neighborhood while giving your employees an opportunity to make an impact. Many schools also require their students to have a certain number of community service hours for graduation requirements. College applications also value students who have a high number of hours dedicated to volunteer work. Volunteering can also help develop someone's social skills better and even help people make friends. When doing something such as distributing cans of food you interact with others and learn social salience as well as respect and consideration. Although community service is usually directed towards students' adults are also welcome to participate in volunteer work and aid others in need.",
      "United Way Miami Volunteer Days are very important for the entire community. Often, we hear about the benefits that nonprofits provide for struggling individuals and the positive impact they make on the community. While this is most certainly true, the impact that volunteers make is often overlooked. Volunteers make certain events such as distributing and organizing goods possible for many nonprofit organizations. In fact, volunteering can change from assisting an organization with goods to helping clean up your local beach. You can impact this summer by viewing the various volunteer opportunities United Way Miami offers.",
      "For more information, please refer to their official website: https://unitedwaymiami.org/volunteermiami/",
    ],
  },
  {
    id: "64973381-496e-4192-bd42-34c1a3d5fb26",
    title: "Miami Swim Week",
    date: [new Date(2026, 2, 1), new Date(2026, 2, 7)],
    location: "Miami Beach, FL",
    description:
      "Multi-day fashion event featuring runway shows, designer showcases, and cultural experiences.",
    tags: ["Arts & Culture", "Health & Wellness"],
    featured: true,
    imageURL: "/event-images/fashion_model.webp",

    content: [
      "Miami Swim Week is one of Miami's most significant and popular fashion events. Designers, models, industry workers, and community members from all around Florida gather to witness the uprising of fashion. The event features runway shows, brand sponsored displays/showcases, and beach themed events all regarding the fashion of swim wear and Miami culture. The event is currently scheduled for July 10-15. This multiday festival also centered around culture, is most definitely a cultural spotlight on Miami's coastal identity, local creativity, and even way of life. Most of the shows and pop-up events are created and hosted by residents and vendors. Many of these events even being completely open to the public for viewing and typically hosted in community venues. This gives local residents opportunities to engage with local designers that are within their region and even connect with company founders if they wish to pursue a career in the industry. Obviously, the main attraction of the event is the luxurious fashion shows. However, there are more activities featured that may be fun for families to participate in. There are workshops that may be perfect for aspiring designers and fashionistas, vendor markets where you can find unique fashion statements and pieces most likely exclusive to Miami, and beach parties that are centered around celebrating the diverse culture of the city, lots of artists displaying and selling their artwork, and hospitality businesses that are perfect if you are wishing to stay at a hotel or obtain some cultural food. This event is a social and economic highlight crucial for summertime in Miami.",
      "This event has a very large impact on the community since it brings together different professions for the purpose of fashion and art. Fashion, and art are a significant part of Miami's culture and heritage more specifically swim wear since Miami is a tropical location where beaches and pools are the norm. The event provides economic prosperity for fashion-related professions and brings exposure to small vendors and companies.",
      "If you wish to stay updated on the official schedule and various event details, many of the organizers post information on the official website.",
    ],
  },
  {
    id: "1ee7717a-a053-42d5-93dc-4024984502d7",
    title: "Hispanic Heritage Parade",
    date: [
      // new Date(2026, 0, 1),
      new Date(2026, 2, 2),
      // "Opening on Oct 15, 5:00 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Arts & Culture"],
    featured: true,
    imageURL: "/event-images/HispanicHeritageParade.webp",

    content: [
      "Join us in our annual Hispanic heritage parade here at the Gardens community, hosted every third Saturday of September as our cultural celebration that honors the history, traditions, and contributions of our Hispanic and Latino community. Providing events featuring performances, music, traditional dishes, and a community coming together as one big Familia.",
      "The Hispanic heritage parade will be free for entry and is available for a wide variety of ages. Although free for entrance food, jewelry, and other items will be available for purchase via a multitude of hispanic vendors. Even if you aren't hispanic this is the perfect opportunity to learn more about different cultures and heritages. The parade will feature a large sum of different countries ranging from Mexico all the way to Cuba.",
      "Events such as these are vital to maintain diversity and encourage individuals to be proud of their culture. This parade will also be providing income to hispanic vendors who will be making profit from their products. Attending this event greatly positively impacts the community and helps embrace cultural appreciation. In the Gardens community we want everyone to feel proud of their ethnicity and culture. Our annual Hispanic parade is one of the many ways we celebrate our differences.",
      "If you are interested in earning community service hours you can contact the official website to get in contact with different departments of the parade. We have many different roles we can offer you depending on your preferences or ability such as serving food, managing musical equipment, or helping decorate before the parade begins.",
      "Applications to perform in the parade are still open. If you have any talents such as singing, dancing, making food, creating art, or any other artistic ability you can submit an application video for a chance to be featured in the parade.",
    ],
  },
  {
    id: "ec1b4cfb-3a44-444d-9998-43cb4385f130",
    title: "City Hall Meeting",
    date: [new Date(2026, 2, 18)],
    location: "Hialeah Gardens City Hall, Hialeah Gardens, FL",
    description:
      "Public City Council meeting for discussing municipal updates, policies, and community concerns",
    tags: ["Government", "Planning & Zoning"],
    imageURL: "/event-images/meeting.webp",

    content: [
      "The City Hall meeting provides an opportunity for residents to engage in discussion regarding operation, upcoming initiatives, and public concerns. These meetings promote civic participation and collaboration between the local government and the community",
      "At the meeting some state representatives and government officials will be meeting alongside residents of our community to help discuss issues in our community and work on implementing any improvements. Anybody is welcome to attend and voice their opinion on what they think needs to change or what needs to be more reinforced.",
      "Events such as these are a great learning opportunity for young individuals who wish to pursue a career in law or politics. However if you are just someone who wishes to remain aware of what type of new regulations and laws are being imposed in your community we urge you to attend.",
      "If you are a government official or state representative, applications to present speeches are still open and are free to discuss any issue you feel may be prevalent in the community. If you are a non government affiliated individual or a law or political science student you can submit your speech for a chance to be permitted to present. All speeches must be at least 10 minutes but under 30 minutes.",
      "This event is excellent for individuals who wish to learn more about how legal actions take place. Or simply for individuals that have an interest in government. For more information about the event you can contact the front desk at the City Hall.",
    ],
  },
  {
    id: "7d32750d-c77b-4655-990c-dfffc4a32bd0",
    title: "Technical Review Committee Meeting",
    date: [new Date(2026, 2, 3)],
    location: "Hialeah Gardens City Hall",
    description:
      "Committee meeting reviewing city development proposals, zoning applications, and infrastructure plans",
    tags: ["Planning & Zoning", "Government"],
    imageURL: "/event-images/empty_meeting.webp",

    content: [
      "The technical review community focuses on city proposals and infrastructure projects city staff collaborate to ensure that proposed projects meet technical standards and follow guidelines to maintain the safety of the community. Many community and state representatives will be there to deliver more information on upcoming news that will be occurring soon. A multitude of collaborators will be meeting to discuss their ideas that will be implemented soon and future plans they have. As of now the main focus is creating more housing all around the Gardens to provide more affordable places to live for low income families. This new project will focus specifically on building new apartment complexes and townhouses.",
      "We hope that this new housing plan is beneficial to families that have been struggling to obtain housing that is not extremely costly. With this new plan we aim to decrease homelessness rates and give individuals the security of a stable shelter. There are also many plans for community infrastructure as a whole. Many new small businesses have not been able to find places to sell their products. With this information we plan to create a new shopping center featuring stores like Walmart, Burlington, 5 below, and a large sum of small family owned businesses. We also aim to encourage walking instead of using vehicles since it improves health and is better for the environment, due to this we will try to create close together buildings that make something as simple as going to the grocery store only a five minute walk. This will be an extreme positive change that will get gardens moving again and reduce our pollution extremely.",
      "Although this meeting is designed for community leaders, architects, and engineers anyone is welcome to come share their opinion and ideas. In our community we care deeply about what our residents think and hold your thoughts to the absolute highest value. If you have any issues to bring up we will have a separate time where we will be open to any questions or concerns you want to voice. We hope to see you there and if you need any more clarification or information don't hesitate to visit the city hauls front desk or contact our cellphone number which is 786-234-6767",
    ],
  },
  {
    id: "c77d4711-bbcc-4d0a-a5c0-16ecf759e46d",
    title: "City Hall Meeting",
    date: [new Date(2026, 2, 25)],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Planning & Zoning"],
    imageURL: "/event-images/meeting.webp",

    content: [
      "The City Hall meeting provides an opportunity for residents to engage in discussion regarding operation, upcoming initiatives, and public concerns. These meetings promote civic participation and collaboration between the local government and the community",
      "At the meeting some state representatives and government officials will be meeting alongside residents of our community to help discuss issues in our community and work on implementing any improvements. Anybody is welcome to attend and voice their opinion on what they think needs to change or what needs to be more reinforced.",
      "Events such as these are a great learning opportunity for young individuals who wish to pursue a career in law or politics. However if you are just someone who wishes to remain aware of what type of new regulations and laws are being imposed in your community we urge you to attend.",
      "If you are a government official or state representative, applications to present speeches are still open and are free to discuss any issue you feel may be prevalent in the community. If you are a non government affiliated individual or a law or political science student you can submit your speech for a chance to be permitted to present. All speeches must be at least 10 minutes but under 30 minutes.",
      "This event is excellent for individuals who wish to learn more about how legal actions take place. Or simply for individuals that have an interest in government. For more information about the event you can contact the front desk at the City Hall.",
    ],
  },
  {
    id: "f8c92642-7fa4-4a2a-9358-a82d34076d54",
    title: "Technical Review Committee Meeting",
    date: [new Date(2026, 2, 10)],
    location: "Hialeah Gardens City Hall",
    description:
      "Committee meeting reviewing city development proposals, zoning applications, and infrastructure plans",
    tags: ["Planning & Zoning", "Government"],
    imageURL: "/event-images/empty_meeting.webp",

    content: [
      "The technical review community focuses on city proposals and infrastructure projects city staff collaborate to ensure that proposed projects meet technical standards and follow guidelines to maintain the safety of the community. Many community and state representatives will be there to deliver more information on upcoming news that will be occurring soon. A multitude of collaborators will be meeting to discuss their ideas that will be implemented soon and future plans they have. As of now the main focus is creating more housing all around the Gardens to provide more affordable places to live for low income families. This new project will focus specifically on building new apartment complexes and townhouses.",
      "We hope that this new housing plan is beneficial to families that have been struggling to obtain housing that is not extremely costly. With this new plan we aim to decrease homelessness rates and give individuals the security of a stable shelter. There are also many plans for community infrastructure as a whole. Many new small businesses have not been able to find places to sell their products. With this information we plan to create a new shopping center featuring stores like Walmart, Burlington, 5 below, and a large sum of small family owned businesses. We also aim to encourage walking instead of using vehicles since it improves health and is better for the environment, due to this we will try to create close together buildings that make something as simple as going to the grocery store only a five minute walk. This will be an extreme positive change that will get gardens moving again and reduce our pollution extremely.",
      "Although this meeting is designed for community leaders, architects, and engineers anyone is welcome to come share their opinion and ideas. In our community we care deeply about what our residents think and hold your thoughts to the absolute highest value. If you have any issues to bring up we will have a separate time where we will be open to any questions or concerns you want to voice. We hope to see you there and if you need any more clarification or information don't hesitate to visit the city hauls front desk or contact our cellphone number which is 786-234-6767",
    ],
  },
  {
    id: "e8b5e28f-1b57-43e7-935b-12e62c9be559",
    title: "City Hall Meeting",
    date: [
      // new Date(2026, 0, 1),
      new Date(2026, 3, 1),
      // "Opening on Oct 15, 5:00 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Planning & Zoning"],
    imageURL: "/event-images/meeting.webp",

    content: [
      "The City Hall meeting provides an opportunity for residents to engage in discussion regarding operation, upcoming initiatives, and public concerns. These meetings promote civic participation and collaboration between the local government and the community",
      "At the meeting some state representatives and government officials will be meeting alongside residents of our community to help discuss issues in our community and work on implementing any improvements. Anybody is welcome to attend and voice their opinion on what they think needs to change or what needs to be more reinforced.",
      "Events such as these are a great learning opportunity for young individuals who wish to pursue a career in law or politics. However if you are just someone who wishes to remain aware of what type of new regulations and laws are being imposed in your community we urge you to attend.",
      "If you are a government official or state representative, applications to present speeches are still open and are free to discuss any issue you feel may be prevalent in the community. If you are a non government affiliated individual or a law or political science student you can submit your speech for a chance to be permitted to present. All speeches must be at least 10 minutes but under 30 minutes.",
      "This event is excellent for individuals who wish to learn more about how legal actions take place. Or simply for individuals that have an interest in government. For more information about the event you can contact the front desk at the City Hall.",
    ],
  },
  {
    id: "5f3c558c-dc1d-420e-a4c0-e4d9c74c12e1",
    title: "Technical Review Committee Meeting",
    date: [new Date(2026, 2, 17)],
    location: "Hialeah Gardens City Hall",
    description:
      "Committee meeting reviewing city development proposals, zoning applications, and infrastructure plans",
    tags: ["Planning & Zoning", "Government"],
    imageURL: "/event-images/empty_meeting.webp",

    content: [
      "The technical review community focuses on city proposals and infrastructure projects city staff collaborate to ensure that proposed projects meet technical standards and follow guidelines to maintain the safety of the community. Many community and state representatives will be there to deliver more information on upcoming news that will be occurring soon. A multitude of collaborators will be meeting to discuss their ideas that will be implemented soon and future plans they have. As of now the main focus is creating more housing all around the Gardens to provide more affordable places to live for low income families. This new project will focus specifically on building new apartment complexes and townhouses.",
      "We hope that this new housing plan is beneficial to families that have been struggling to obtain housing that is not extremely costly. With this new plan we aim to decrease homelessness rates and give individuals the security of a stable shelter. There are also many plans for community infrastructure as a whole. Many new small businesses have not been able to find places to sell their products. With this information we plan to create a new shopping center featuring stores like Walmart, Burlington, 5 below, and a large sum of small family owned businesses. We also aim to encourage walking instead of using vehicles since it improves health and is better for the environment, due to this we will try to create close together buildings that make something as simple as going to the grocery store only a five minute walk. This will be an extreme positive change that will get gardens moving again and reduce our pollution extremely.",
      "Although this meeting is designed for community leaders, architects, and engineers anyone is welcome to come share their opinion and ideas. In our community we care deeply about what our residents think and hold your thoughts to the absolute highest value. If you have any issues to bring up we will have a separate time where we will be open to any questions or concerns you want to voice. We hope to see you there and if you need any more clarification or information don't hesitate to visit the city hauls front desk or contact our cellphone number which is 786-234-6767",
    ],
  },
  {
    id: "778544b5-8239-43cf-b325-397ed159d21f",
    title: "City Hall Meeting",
    date: [
      // new Date(2026, 0, 1),
      new Date(2026, 2, 11),
      // "Opening on Oct 15, 5:00 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Planning & Zoning"],
    imageURL: "/event-images/meeting.webp",

    content: [
      "The City Hall meeting provides an opportunity for residents to engage in discussion regarding operation, upcoming initiatives, and public concerns. These meetings promote civic participation and collaboration between the local government and the community",
      "At the meeting some state representatives and government officials will be meeting alongside residents of our community to help discuss issues in our community and work on implementing any improvements. Anybody is welcome to attend and voice their opinion on what they think needs to change or what needs to be more reinforced.",
      "Events such as these are a great learning opportunity for young individuals who wish to pursue a career in law or politics. However if you are just someone who wishes to remain aware of what type of new regulations and laws are being imposed in your community we urge you to attend.",
      "If you are a government official or state representative, applications to present speeches are still open and are free to discuss any issue you feel may be prevalent in the community. If you are a non government affiliated individual or a law or political science student you can submit your speech for a chance to be permitted to present. All speeches must be at least 10 minutes but under 30 minutes.",
      "This event is excellent for individuals who wish to learn more about how legal actions take place. Or simply for individuals that have an interest in government. For more information about the event you can contact the front desk at the City Hall.",
    ],
  },
  {
    id: "4f509359-d086-41d1-8e27-3c7d4b2ff800",
    title: "Technical Review Committee Meeting",
    date: [new Date(2026, 2, 24)],
    location: "Hialeah Gardens City Hall",
    description:
      "Committee meeting reviewing city development proposals, zoning applications, and infrastructure plans",
    tags: ["Planning & Zoning", "Government"],
    imageURL: "/event-images/empty_meeting.webp",

    content: [
      "The technical review community focuses on city proposals and infrastructure projects city staff collaborate to ensure that proposed projects meet technical standards and follow guidelines to maintain the safety of the community. Many community and state representatives will be there to deliver more information on upcoming news that will be occurring soon. A multitude of collaborators will be meeting to discuss their ideas that will be implemented soon and future plans they have. As of now the main focus is creating more housing all around the Gardens to provide more affordable places to live for low income families. This new project will focus specifically on building new apartment complexes and townhouses.",
      "We hope that this new housing plan is beneficial to families that have been struggling to obtain housing that is not extremely costly. With this new plan we aim to decrease homelessness rates and give individuals the security of a stable shelter. There are also many plans for community infrastructure as a whole. Many new small businesses have not been able to find places to sell their products. With this information we plan to create a new shopping center featuring stores like Walmart, Burlington, 5 below, and a large sum of small family owned businesses. We also aim to encourage walking instead of using vehicles since it improves health and is better for the environment, due to this we will try to create close together buildings that make something as simple as going to the grocery store only a five minute walk. This will be an extreme positive change that will get gardens moving again and reduce our pollution extremely.",
      "Although this meeting is designed for community leaders, architects, and engineers anyone is welcome to come share their opinion and ideas. In our community we care deeply about what our residents think and hold your thoughts to the absolute highest value. If you have any issues to bring up we will have a separate time where we will be open to any questions or concerns you want to voice. We hope to see you there and if you need any more clarification or information don't hesitate to visit the city hauls front desk or contact our cellphone number which is 786-234-6767",
    ],
  },
  {
    id: "828ffd1e-2c35-4c6f-a6bb-7fd24df6673b",
    title: "City Hall Meeting",
    date: [
      // new Date(2026, 0, 1),
      new Date(2026, 2, 4),
      // "Opening on Oct 15, 5:00 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Planning & Zoning"],
    imageURL: "/event-images/meeting.webp",

    content: [
      "The City Hall meeting provides an opportunity for residents to engage in discussion regarding operation, upcoming initiatives, and public concerns. These meetings promote civic participation and collaboration between the local government and the community",
      "At the meeting some state representatives and government officials will be meeting alongside residents of our community to help discuss issues in our community and work on implementing any improvements. Anybody is welcome to attend and voice their opinion on what they think needs to change or what needs to be more reinforced.",
      "Events such as these are a great learning opportunity for young individuals who wish to pursue a career in law or politics. However if you are just someone who wishes to remain aware of what type of new regulations and laws are being imposed in your community we urge you to attend.",
      "If you are a government official or state representative, applications to present speeches are still open and are free to discuss any issue you feel may be prevalent in the community. If you are a non government affiliated individual or a law or political science student you can submit your speech for a chance to be permitted to present. All speeches must be at least 10 minutes but under 30 minutes.",
      "This event is excellent for individuals who wish to learn more about how legal actions take place. Or simply for individuals that have an interest in government. For more information about the event you can contact the front desk at the City Hall.",
    ],
  },
  {
    id: "b6f246fc-1710-452e-9367-4322d7d46103",
    title: "Technical Review Committee Meeting",
    date: [new Date(2026, 2, 31)],
    location: "Hialeah Gardens City Hall",
    description:
      "Committee meeting reviewing city development proposals, zoning applications, and infrastructure plans",
    tags: ["Planning & Zoning", "Government"],
    imageURL: "/event-images/empty_meeting.webp",

    content: [
      "The technical review community focuses on city proposals and infrastructure projects city staff collaborate to ensure that proposed projects meet technical standards and follow guidelines to maintain the safety of the community. Many community and state representatives will be there to deliver more information on upcoming news that will be occurring soon. A multitude of collaborators will be meeting to discuss their ideas that will be implemented soon and future plans they have. As of now the main focus is creating more housing all around the Gardens to provide more affordable places to live for low income families. This new project will focus specifically on building new apartment complexes and townhouses.",
      "We hope that this new housing plan is beneficial to families that have been struggling to obtain housing that is not extremely costly. With this new plan we aim to decrease homelessness rates and give individuals the security of a stable shelter. There are also many plans for community infrastructure as a whole. Many new small businesses have not been able to find places to sell their products. With this information we plan to create a new shopping center featuring stores like Walmart, Burlington, 5 below, and a large sum of small family owned businesses. We also aim to encourage walking instead of using vehicles since it improves health and is better for the environment, due to this we will try to create close together buildings that make something as simple as going to the grocery store only a five minute walk. This will be an extreme positive change that will get gardens moving again and reduce our pollution extremely.",
      "Although this meeting is designed for community leaders, architects, and engineers anyone is welcome to come share their opinion and ideas. In our community we care deeply about what our residents think and hold your thoughts to the absolute highest value. If you have any issues to bring up we will have a separate time where we will be open to any questions or concerns you want to voice. We hope to see you there and if you need any more clarification or information don't hesitate to visit the city hauls front desk or contact our cellphone number which is 786-234-6767",
    ],
  },
  {
    id: "78eb70ab-17c1-421b-b054-fb1b808a3c43",
    title: "City Hall Meeting",
    date: [
      // new Date(2026, 0, 1),
      new Date(2026, 1, 25),
      // "Opening on Oct 15, 5:00 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Planning & Zoning"],
    imageURL: "/event-images/meeting.webp",

    content: [
      "The City Hall meeting provides an opportunity for residents to engage in discussion regarding operation, upcoming initiatives, and public concerns. These meetings promote civic participation and collaboration between the local government and the community",
      "At the meeting some state representatives and government officials will be meeting alongside residents of our community to help discuss issues in our community and work on implementing any improvements. Anybody is welcome to attend and voice their opinion on what they think needs to change or what needs to be more reinforced.",
      "Events such as these are a great learning opportunity for young individuals who wish to pursue a career in law or politics. However if you are just someone who wishes to remain aware of what type of new regulations and laws are being imposed in your community we urge you to attend.",
      "If you are a government official or state representative, applications to present speeches are still open and are free to discuss any issue you feel may be prevalent in the community. If you are a non government affiliated individual or a law or political science student you can submit your speech for a chance to be permitted to present. All speeches must be at least 10 minutes but under 30 minutes.",
      "This event is excellent for individuals who wish to learn more about how legal actions take place. Or simply for individuals that have an interest in government. For more information about the event you can contact the front desk at the City Hall.",
    ],
  },
  {
    id: "0ebf2909-5e27-4c23-b9ed-62f5bd56d30c",
    title: "Technical Review Committee Meeting",
    date: [new Date(2026, 1, 24)],
    location: "Hialeah Gardens City Hall",
    description:
      "Committee meeting reviewing city development proposals, zoning applications, and infrastructure plans",
    tags: ["Planning & Zoning", "Government"],
    imageURL: "/event-images/empty_meeting.webp",

    content: [
      "The technical review community focuses on city proposals and infrastructure projects city staff collaborate to ensure that proposed projects meet technical standards and follow guidelines to maintain the safety of the community. Many community and state representatives will be there to deliver more information on upcoming news that will be occurring soon. A multitude of collaborators will be meeting to discuss their ideas that will be implemented soon and future plans they have. As of now the main focus is creating more housing all around the Gardens to provide more affordable places to live for low income families. This new project will focus specifically on building new apartment complexes and townhouses.",
      "We hope that this new housing plan is beneficial to families that have been struggling to obtain housing that is not extremely costly. With this new plan we aim to decrease homelessness rates and give individuals the security of a stable shelter. There are also many plans for community infrastructure as a whole. Many new small businesses have not been able to find places to sell their products. With this information we plan to create a new shopping center featuring stores like Walmart, Burlington, 5 below, and a large sum of small family owned businesses. We also aim to encourage walking instead of using vehicles since it improves health and is better for the environment, due to this we will try to create close together buildings that make something as simple as going to the grocery store only a five minute walk. This will be an extreme positive change that will get gardens moving again and reduce our pollution extremely.",
      "Although this meeting is designed for community leaders, architects, and engineers anyone is welcome to come share their opinion and ideas. In our community we care deeply about what our residents think and hold your thoughts to the absolute highest value. If you have any issues to bring up we will have a separate time where we will be open to any questions or concerns you want to voice. We hope to see you there and if you need any more clarification or information don't hesitate to visit the city hauls front desk or contact our cellphone number which is 786-234-6767",
    ],
  },
  {
    id: "a634a96d-75a3-4b95-ab39-7b7d7a52a922",
    title: "City Hall Meeting",
    date: [
      // new Date(2026, 0, 1),
      new Date(2026, 3, 8),
      // "Opening on Oct 15, 5:00 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Planning & Zoning"],
    imageURL: "/event-images/meeting.webp",

    content: [
      "The City Hall meeting provides an opportunity for residents to engage in discussion regarding operation, upcoming initiatives, and public concerns. These meetings promote civic participation and collaboration between the local government and the community",
      "At the meeting some state representatives and government officials will be meeting alongside residents of our community to help discuss issues in our community and work on implementing any improvements. Anybody is welcome to attend and voice their opinion on what they think needs to change or what needs to be more reinforced.",
      "Events such as these are a great learning opportunity for young individuals who wish to pursue a career in law or politics. However if you are just someone who wishes to remain aware of what type of new regulations and laws are being imposed in your community we urge you to attend.",
      "If you are a government official or state representative, applications to present speeches are still open and are free to discuss any issue you feel may be prevalent in the community. If you are a non government affiliated individual or a law or political science student you can submit your speech for a chance to be permitted to present. All speeches must be at least 10 minutes but under 30 minutes.",
      "This event is excellent for individuals who wish to learn more about how legal actions take place. Or simply for individuals that have an interest in government. For more information about the event you can contact the front desk at the City Hall.",
    ],
  },
  {
    id: "2878c249-4857-4438-bd09-5205d32cf871",
    title: "Technical Review Committee Meeting",
    date: [new Date(2026, 3, 7)],
    location: "Hialeah Gardens City Hall",
    description:
      "Committee meeting reviewing city development proposals, zoning applications, and infrastructure plans",
    tags: ["Planning & Zoning", "Government"],
    imageURL: "/event-images/empty_meeting.webp",

    content: [
      "The technical review community focuses on city proposals and infrastructure projects city staff collaborate to ensure that proposed projects meet technical standards and follow guidelines to maintain the safety of the community. Many community and state representatives will be there to deliver more information on upcoming news that will be occurring soon. A multitude of collaborators will be meeting to discuss their ideas that will be implemented soon and future plans they have. As of now the main focus is creating more housing all around the Gardens to provide more affordable places to live for low income families. This new project will focus specifically on building new apartment complexes and townhouses.",
      "We hope that this new housing plan is beneficial to families that have been struggling to obtain housing that is not extremely costly. With this new plan we aim to decrease homelessness rates and give individuals the security of a stable shelter. There are also many plans for community infrastructure as a whole. Many new small businesses have not been able to find places to sell their products. With this information we plan to create a new shopping center featuring stores like Walmart, Burlington, 5 below, and a large sum of small family owned businesses. We also aim to encourage walking instead of using vehicles since it improves health and is better for the environment, due to this we will try to create close together buildings that make something as simple as going to the grocery store only a five minute walk. This will be an extreme positive change that will get gardens moving again and reduce our pollution extremely.",
      "Although this meeting is designed for community leaders, architects, and engineers anyone is welcome to come share their opinion and ideas. In our community we care deeply about what our residents think and hold your thoughts to the absolute highest value. If you have any issues to bring up we will have a separate time where we will be open to any questions or concerns you want to voice. We hope to see you there and if you need any more clarification or information don't hesitate to visit the city hauls front desk or contact our cellphone number which is 786-234-6767",
    ],
  },
  {
    id: "9926185b-ac5b-4c0f-ab34-ae2c979905ab",
    title: "City Hall Meeting",
    date: [
      // new Date(2026, 0, 1),
      new Date(2026, 1, 18),
      // "Opening on Oct 15, 5:00 PM EST",
    ],
    location: "Hialeah Gardens City Hall",
    description: "Official Hialeah Gardens City Council Meeting",
    tags: ["Government", "Planning & Zoning"],
    imageURL: "/event-images/meeting.webp",

    content: [
      "The City Hall meeting provides an opportunity for residents to engage in discussion regarding operation, upcoming initiatives, and public concerns. These meetings promote civic participation and collaboration between the local government and the community",
      "At the meeting some state representatives and government officials will be meeting alongside residents of our community to help discuss issues in our community and work on implementing any improvements. Anybody is welcome to attend and voice their opinion on what they think needs to change or what needs to be more reinforced.",
      "Events such as these are a great learning opportunity for young individuals who wish to pursue a career in law or politics. However if you are just someone who wishes to remain aware of what type of new regulations and laws are being imposed in your community we urge you to attend.",
      "If you are a government official or state representative, applications to present speeches are still open and are free to discuss any issue you feel may be prevalent in the community. If you are a non government affiliated individual or a law or political science student you can submit your speech for a chance to be permitted to present. All speeches must be at least 10 minutes but under 30 minutes.",
      "This event is excellent for individuals who wish to learn more about how legal actions take place. Or simply for individuals that have an interest in government. For more information about the event you can contact the front desk at the City Hall.",
    ],
  },
  {
    id: "450c3d6b-be5e-4a8f-b887-50cb353c8593",
    title: "Technical Review Committee Meeting",
    date: [new Date(2026, 1, 17)],
    location: "Hialeah Gardens City Hall",
    description:
      "Committee meeting reviewing city development proposals, zoning applications, and infrastructure plans",
    tags: ["Planning & Zoning", "Government"],
    imageURL: "/event-images/empty_meeting.webp",
    content: [
      "The technical review community focuses on city proposals and infrastructure projects city staff collaborate to ensure that proposed projects meet technical standards and follow guidelines to maintain the safety of the community. Many community and state representatives will be there to deliver more information on upcoming news that will be occurring soon. A multitude of collaborators will be meeting to discuss their ideas that will be implemented soon and future plans they have. As of now the main focus is creating more housing all around the Gardens to provide more affordable places to live for low income families. This new project will focus specifically on building new apartment complexes and townhouses.",
      "We hope that this new housing plan is beneficial to families that have been struggling to obtain housing that is not extremely costly. With this new plan we aim to decrease homelessness rates and give individuals the security of a stable shelter. There are also many plans for community infrastructure as a whole. Many new small businesses have not been able to find places to sell their products. With this information we plan to create a new shopping center featuring stores like Walmart, Burlington, 5 below, and a large sum of small family owned businesses. We also aim to encourage walking instead of using vehicles since it improves health and is better for the environment, due to this we will try to create close together buildings that make something as simple as going to the grocery store only a five minute walk. This will be an extreme positive change that will get gardens moving again and reduce our pollution extremely.",
      "Although this meeting is designed for community leaders, architects, and engineers anyone is welcome to come share their opinion and ideas. In our community we care deeply about what our residents think and hold your thoughts to the absolute highest value. If you have any issues to bring up we will have a separate time where we will be open to any questions or concerns you want to voice. We hope to see you there and if you need any more clarification or information don't hesitate to visit the city hauls front desk or contact our cellphone number which is 786-234-6767",
    ],
  },
  {
    id: "4b8c065d-1df0-4b6a-a81b-913c7522ee47",
    title: "Spooky Surfing Skeletons Halloween Activity",
    date: [new Date(2026, 9, 31)],
    location: "Hialeah Gardens Community Center, Hialeah Gardens, FL",
    description:
      "A family-friendly Halloween beach-themed celebration featuring costumes, games, surfing activities, and a safe community environment for children ages 5–14",
    tags: ["Youth & Family"],
    imageURL: "/event-images/halloween.webp",

    content: [
      "Boo! come to our spooky surfing, skeleton Halloween activity for ages 5-14, connecting seasonal fun with Floridian activities and a safe and friendly environment. The event includes themed games, costumes, and our palm tree not-so-spooky house, providing creativity, social engagement, and involvement throughout the community",
      "If you are bored of typical trick or treating or simply have no ideas on what to do on halloween this event is perfect for you. Although not very scary the activity is definitely very engaging and interactive. As Floridians the beach is a huge part of our culture. In fact most events in places like Miami are centered around places like the beach. However during the fall and winter season there is a notable difference in the amount of people attending more tropical events. Many people blame this on the weather which is a reasonable excuse but nowadays many thermal swim wear exists to keep you warm in cold climates while still enjoying the beach.",
      "We encourage you greatly to try to accessorize or purchase a halloween themed swimsuit for a chance to win our annual costume competition. The prizes for winning include toys, candy, and many other fun rewards. The event will also feature a palm tree house of horror that is well decorated but still suitable for all ages. The only disclaimer is that individuals who do not know how to surf must be accompanied by a buddy and younger children less than 8 must be accompanied by an adult preferably a parent or guardian.",
      "Events like these help bring communities together and help people to know their neighbors and people that also live in their community. Being involved in your community is important because it creates unity and improves happiness tremendously. If you wish to make new friends, practice surfing, or just have a fun day with your family this event is the perfect way to spend your halloween!",
    ],
  },
  {
    id: "51cb00dd-3db3-4dc9-9a5b-676b2031ea38",
    title: "Sunshine Winter Carnival",
    date: [new Date(2026, 11, 21)],
    location: "Hialeah Gardens Municipal Park, Hialeah Gardens, FL",
    description:
      "Seasonal winter carnival featuring rides, games, food vendors, entertainment, and family-friendly attractions",
    tags: ["Youth & Family", "Recreation & Sports"],
    imageURL: "/event-images/theme_park.webp",
    content: [
      "Feeling chilly? Even though we're in Florida and you really shouldn't be complaining we still have the perfect solution for you. Join us at our annual Sunshine Winter Carnival to perfect ways to warm up while having an absolute blast. We have typical carnival things such as rides, games, food, and entertainment, giving residents the opportunity to celebrate the season and enjoying family, friendly activities and a festive time of the year. However you may be thinking what makes us so different from any other carnival at the Gardens. The answer to this question is our various campfires.",
      "Due to living in such a tropical climate many of our residents never got to experience the feeling of going camping and enjoying a warm bonfire with your friends and family. We don't think your region or state should limit you from experiencing such a wonderful bonding moment. With this cold weather dont you wanna just sit by a fire, make smores, and warm up?",
      "Throughout your day at the carnival you can do regular activities such as riding our terrifying rollercoasters and warm up when it gets a bit too chilly for your liking. Many of the decorations revolve around warmth, sunshine, and just feeling that sense of blissful happiness. If you visit our carnival you absolutely must ride our largest and fastest attraction “The Sun” which goes up around 200 feet in the air providing ultimate adrenaline and suspense with lots of high drops, loops, and high speed.",
      "Our games include fun sun themed prizes and are known to be extremely challenging to win. We also have various arcade games inside our gift shop where you can play for just 50 cents per round. There is also a claw machine as well where you can win a large variety of plushies typically sun themed.",
      "Due to our intense rides our carnival is normally preferred by teenagers and adults however our carnival does have a small kids section. The kids section features mini rides, even more games, a play area, and food places. Our carnival is an excellent way to spend time with your family or friends while remaining cozy!",
    ],
  },
  {
    id: "45251c69-a861-4047-8278-89d0f5f86fd2",
    title: "7th Annual Thanks to Give Feast",
    date: [new Date(2026, 10, 30)],
    location: "Hialeah Gardens Community Center, Hialeah Gardens, FL",
    description:
      "Annual Thanksgiving outreach event providing meals, volunteer opportunities, and community support for families in need",
    tags: ["Community Services & Volunteer", "Youth & Family"],
    imageURL: "/event-images/thanksgiving.webp",

    content: [
      "Give Feast is an annual outreach program dedicated to supporting lower-income families with any need during the holidays, providing more meals and community support, emphasizing generosity, and providing a time of need. The perfect thing to do this thanksgiving is show your gratitude for having a warm meal and snacks every single day is to give back to your community during the holiday season. We encourage you to donate any sort of food item that you have in your possession and is unopened. Some of the things we recommend donating the most due to their longevity and health reasons is canned items, fruits and vegetables, and other nutritious food.",
      "Although anyone is welcome to donate and we are collecting food to give out to families we also wish to host our 7th Annual Thanks to give Feast. We encourage you to reach out to anyone chefs or culinary skilled individuals  known in the community to invite them to volunteer by helping us make a multitude of meals for struggling individuals. Despite this anyone is welcome to come and help with our event and do tasks such as helping decorate, passing out meals, and doing basic kitchen skills like washing dishes.",
      "If you have nowhere to spend thanksgiving we welcome you to attend our event since everyone will be seated at the same table and it is the perfect opportunity to get to know fellow members of your community and make new friends. However the food featured at our event is intended for low income residents so please be mindful of your portions and bring a food item yourself. Since we focus on providing meals we often are not able to provide dessert for everyone to enjoy so if you are considering attending the event for the social aspect we greatly encourage you to bring any dessert item.",
      "We hope to see you or your donations this year for hopefully the 7th year in a row! If you have any further questions or concerns please contact our organization directly.",
    ],
  },
  {
    id: "d0835369-5c30-407c-be82-120e8ea67b93",
    title: "Veterans Engagement Fair",
    date: [new Date(2026, 2, 30)],
    location: "Hialeah Gardens Community Center, Hialeah Gardens, FL",
    description:
      "Community fair honoring local veterans and connecting them with support services, resources, and recognition programs",
    tags: ["Community Services & Volunteer", "Government"],
    imageURL: "/event-images/veteran.webp",
    content: [
      "The veterans' engagement for honoring local veterans in the gardens area by connecting with valuable resources, services, and programs as well. The event serves as a space to recognize and appreciate our heroes of America, reinforcing the community's commitment to those who have served this wonderful country. In fact many veterans face little to no recognition for their sacrifice and many actually end up homeless or low income since they are unable to work due to physical and mental issues such as disabilities and PTSD.",
      "Many veterans don't even have any living family members because they lost them due to age, diseases, and especially war so they often find themselves alone. Veterans are typically not given financial aid by government officials which is a huge issue in America. Here at Gardens we highly value our veterans for their service and want to commend and appreciate them for the work they did for our nation. A great way to do something positive for your community is to give back to the individuals that are the very reason we have our community today.",
      "At the event we will be having a memorial for people who lost their lives or their family members lives in war. We will also be collecting donation items such as blankets, food, and various household items. The location will be decorated with many American flags and appreciation sites for our veterans. We will also be honoring each individual veteran for the dates they served and any honorary badges they may have received for their service.",
      "Our community also plans to provide more services for veterans to flourish and live happy stable lives after all they've been through. We need more than ever more residents of Gardens to unite to give their support and respect to the people that fought for our country. Any of all ages is welcome to come and show their reverence for the heroes of America.",
    ],
  },
  {
    id: "fb249c36-81c8-473f-9e2c-06fa73611322",
    title: "Last Day of Summer Fair",
    date: [new Date(2026, 8, 16), new Date(2026, 8, 22)],
    location: "Hialeah Gardens Municipal Park, Hialeah Gardens, FL",
    description:
      "End-of-summer community fair featuring entertainment, educational activities, vendors, and family engagement",
    tags: ["Youth & Family", "Recreation & Sports"],
    imageURL: "/event-images/summer.webp",
    content: [
      "Summer is almost over, celebrate by closing the summer season off with a time at the fair offering entertainment, activities, and community engagement. This event provides families with the final opportunity to say goodbye to this summer while connecting. Many families only have the opportunity to visit each other during vacation seasons like summer and dread the return of school. Or on the other hand many kids only see their friends from other schools primarily during the summer and will be separated once the year begins. The ending of summer is sad for us all but let's try to savor it while it lasts. This event is the perfect opportunity to have a little bit of fun before having to get back into the seriousness demanded by school and academics. In fact this may be a great way to make some new friends that may be attending or will attend your school.",
      "Our event will be mostly activity and play based but we do aim to get our communities children back into academic mode. Due to this we will be hosting some educational activities such as storytime, and we have many educational games to help students regain the skills they may have forgotten throughout the summer. Many local vendors will also have fun cartoon themed school supplies and books for sale to ensure your child goes back to school in style! If you have an older child or teenager don't worry because we also have activities catered to a more older audience. If your child is 13+ they may also serve as a volunteer and earn some community service hours for the following school year. Community service helps showcase that your child is a well-rounded individual that succeeds beyond the classroom. The service tasks will be things such as helping set up for games and activities, helping decorate the event venue, and assisting local vendors.",
    ],
  },
  {
    id: "710d2710-6527-4d8e-8474-3384028f37e7",
    title: "4th of July Parade (Hialeah Hotdog Contest)",
    date: [new Date(2026, 6, 4)],
    location: "West Okeechobee Road, Hialeah Gardens, FL",
    description:
      "Citywide Independence Day parade featuring live entertainment, vendors, fireworks, and the annual hot dog eating contest",
    tags: ["Community Services & Volunteer"],
    imageURL: "/event-images/4th_of_july.webp",
    content: [
      "The Fourth of July parade is a citywide parade meant to honor the birth of our nation, featuring family activities,games, meet with veterans,performers  and our popular Hialeah hot dog eating contest meant to engage in the good old-fashioned, hot dog, eating competition as well with our guest performer Ricky Martin together to celebrate Independence Day through tradition, entertainment, and civic pride. The event is free to attend but to enroll in the hotdog eating cost there is a $20 fee and local vendors will be selling items throughout the event. The items feature things such as sunglasses, jewelry, accessories, and 4th of July themed snacks and meals.",
      "Anyone is free to attend the event but alcoholic beverages will be available for purchase for individuals of age. However, the event is family friendly and mostly catered to young children and their parents. Anyone is also welcome to participate in the hotdog eating contest but the event will not be held responsible if you or your child gets sick from the volume eaten. If you have a young child please be mindful of them while they are participating to avoid nausea or vomiting. Towards the end of the event we will be having a firework show and that will be the last activity of the night.",
      "For the hotdog eating contest will be having judges take score of the amount of hotdogs eaten per person as well as a five minute timer. The person who consumes the most amount will be given a special prize and second and third place will receive a smaller prize as well. All individuals who chose to participate in the contest will be given a participation pin. We sincerely hope you are able to attend since we want all of Gardens to feel connected on this special holiday. Whether you wish to attend for the live music, activities, and of course to participate or view the hot dog eating contest we are excited to see you there!",
    ],
  },
  {
    id: "2bb40a65-1a72-45ae-8822-9cc37d84bd46",
    title: "13th Annual African American Juneteenth ",
    date: [new Date(2026, 5, 19)],
    location: "Hialeah Gardens Municipal Park, Hialeah Gardens, FL",
    description:
      "Annual Juneteenth celebration honoring African American history, culture, and community contributions through education and performances.",
    tags: ["Community Services & Volunteer", "Arts & Culture"],
    imageURL: "/event-images/freedom_march.webp",
    content: [
      "The Juneteenth celebration commemorates the historical significance of the emancipation of enslaved African-Americans, showing recognition to our African-American community here at the garden. This event educates, appreciates, and reflects while honoring African-American history and their contributions to society. At gardens we are primarily a hispanic community and don't often celebrate black history month as much as we should. We aim to remind people of the large sum of African Americans in our community and of their history. It is important to ensure the residents of our community are well educated on the horrors enslaved people had to go through in our own state. We also want to encourage our black residents to share their voice.",
      "The celebration will showcase many informational historical posters, decorations that exhibit black culture, and guest speakers giving lectures on the history of black culture in America and specifically Florida. At our event we also want to empower our African American residents and we will be promoting black owned businesses, vendors, performers, and artists in our very own community. Applications to be featured in our event are still open and the only requirement is to be of African American descent and a current resident of the gardens, if you are interested please send a message to our instagram.",
      "This event has a huge significance to our community because we want to encourage acceptance and diversity. We aim to have everyone in the Gardens unite despite of their culture differences. Celebrating the freedom of such a marginalized group is tremendously beneficial in achieving our long term goal of unity. Regardless of your ethnicity or race we encourage you to attend this event to show support to your African American neighbors or possibly your very own acestors. Everybody should attend to learn more about history and how to support groups that have been discriminated against for hundreds of years. Let's end separation and make Gardens one big family for the 13th year in a row!",
    ],
  },
  {
    id: "ee95f392-4055-4f65-b6b1-252e28d89fdf",
    title: "Memorial Day (Off)",
    date: [new Date(2026, 4, 25)],
    location: "Citywide – Hialeah Gardens, FL",
    description:
      "City offices closed in observance of Memorial Day honoring fallen U.S. service members",
    tags: ["Government"],
    content: [
      "Memorial Day is observed as a national holiday dedicated to honoring fallen military service members. Members' city offices are closed in remembrance, allowing the community time to reflect on sacrifice, service, and national history.",
    ],
  },
  {
    id: "c5e0e97a-1c1e-4e6e-8881-3b83efa827ed",
    title: "St Patricks Palm Tree Paloaza sponsored by flangians",
    date: [new Date(2026, 2, 17)],
    location: "Hialeah Gardens Municipal Park, Hialeah Gardens, FL",
    description:
      "St. Patrick’s Day celebration blending Irish traditions with local culture, featuring music, activities, and family entertainment",
    tags: ["Youth & Family"],
    content: [
      "St. Patrick’s Palm Tree Peloza is a festive celebration, blending traditional St. Patrick’s Day themes with local culture, offering events featuring music, activities, and entertainment that bring the community together.",
    ],
  },
  {
    id: "894fb797-20af-45d3-a54c-a68dfdc7673f",
    title: "President's Day (Off)",
    date: [new Date(2026, 1, 16)],
    location: "Citywide – Hialeah Gardens, FL",
    description:
      "City offices closed in observance of Presidents’ Day honoring U.S. presidential leadership and national history",
    tags: ["Government"],
    content: [
      "President day of federal holiday recognized holiday honoring the leadership and legacy of the United States presidents city office are closed in observance, allowing residents to reflect on national history and civic leadership.",
    ],
  },
  {
    id: "14c53642-09f1-4195-9d16-0f8a1c380e0b",
    title: "Valentine's Day Senior Raffle",
    date: [new Date(2026, 1, 14)],
    location: "Hialeah Gardens Community Center, Hialeah Gardens, FL",
    description:
      "Valentine’s Day community raffle event celebrating senior residents with prizes, social activities, and appreciation.",
    tags: ["Community Services & Volunteer"],
    content: [
      "The Valentine’s Day Senior Ralph was a community-focused event designed to celebrate and support senior residences. You have been promoted, including appreciation, social engagement with the raffles activities, and community interactions.",
    ],
  },
  {
    id: "14c53642-09f1-4195-9d16-0f8a1c380e0b",
    title: "City Council Semi Annual Planning Meeting",
    date: [new Date(2026, 2, 20)],
    location: "Hialeah Gardens City Hall, Hialeah Gardens, FL",
    description:
      "Strategic City Council planning session reviewing progress, setting priorities, and guiding long-term municipal initiatives.",
    tags: ["Government", "Planning & Zoning"],
    content: [
      "The city council semi annual planning meeting is a strategic session for reviewing progress, setting priorities, and planning future initiatives. These meetings help guide political decisions that shall align with the city's long-term goals.",
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

    // localStorage.removeItem("COMMUNITY_EVENTS");
  }
});

function isValidDate(str: string) {
  const timestamp = Date.parse(str);
  return !isNaN(timestamp);
}
