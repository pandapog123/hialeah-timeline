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
    //     {
    //       id: "test",
    //       title: "Human Resources Department",
    //       contacts: [
    //         {
    //           email: "example@email.com",
    //           name: "John Doe",
    //           phoneNumber: "(012) 345-6789",
    //           position: "Lorem",
    //         },
    //         {
    //           email: "example@email.com",
    //           name: "John Doe",
    //           phoneNumber: "(012) 345-6789",
    //           position: "Lorem",
    //         },
    //       ],
    //       imageURL: "/community/Community Activity.webp",
    //       content: [
    //         `# Markdown syntax guide
    // ## Headers
    // # This is a Heading h1
    // ## This is a Heading h2
    // ###### This is a Heading h6
    // ## Emphasis
    //     *This text will be italic*
    //     _This will also be italic_
    //     **This text will be bold**
    //     __This will also be bold__
    //     _You **can** combine them_
    //     ## Lists
    //     ### Unordered
    //     * Item 1
    //     * Item 2
    //     * Item 2a
    //     * Item 2b
    //         * Item 3a
    //         * Item 3b
    //     ### Ordered
    //     1. Item 1
    //     2. Item 2
    //     3. Item 3
    //         1. Item 3a
    //         2. Item 3b
    //     ## Images
    //     ![This is an alt text.](/community/Community%20Activity.webp "test")
    //     ## Links
    //     You may be using [Markdown Live Preview](https://markdownlivepreview.com/).
    //     ## Blockquotes
    //     > Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
    //     >
    //     >> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
    //     ## Tables
    //     | Left columns  | Right columns |
    //     | ------------- |:-------------:|
    //     | left foo      | right foo     |
    //     | left bar      | right bar     |
    //     | left baz      | right baz     |
    //     ## Blocks of code
    //     \`\`\`
    //     let message = 'Hello world';
    //     alert(message);
    //     \`\`\`
    //     ## Inline code
    //     This web site is using \`markedjs/marked\`.
    //     `,
    //       ],
    //     },
    {
      id: "dc7d601b-41ba-4f59-a0bd-7e6ab35e9dbb",
      title: "Department of Children and Families",
      imageURL: "/resource-image/u_brian_diaz.webp",
      contacts: [
        {
          name: "Brian Diaz",
          position: "Family Services Counselor",
          phoneNumber: "(866) 762-2237",
          email: "gardens.fam@email.com",
        },
      ],
      content: [
        "The Florida Department of Children and Families (DCF) plays a major role in supporting parents and guardians across the state. Through programs focused on child welfare, family safety, and economic assistance, DCF works to ensure children grow up in safe, stable environments. For parents facing financial hardship, DCF administers programs such as Temporary Assistance for Needy Families (TANF), the Supplemental Nutrition Assistance Program (SNAP), and child care support services.",
        "Beyond financial assistance, DCF also provides parenting resources, foster care services, and adoption support. Families experiencing crises can access counseling referrals, substance abuse treatment programs, and protective services. Parenting classes and early intervention services are available in many counties to help caregivers build stronger, healthier family relationships.",
        `![Family Smiling](/resource-image/u_family.webp "Family Smiling")`,
        "Our local community has loads of different public services we can offer you. We believe that gardens should all be united as a community and thus we should all work together to help each other out. If you are unaware of the various services we offer we recommend you visit our city hall and obtain a pamphlet. The pamphlet will contain all the information you need to ensure that you are educated in ways you can utilize our tools to better your life. If after reading the pamphlet you find yourself still confused feel free to contact anyone in the gardens leadership team.",
        "Parents who need help navigating services can contact their local service center or access information online. Representatives are available to answer questions about eligibility, applications, and ongoing case management.",
      ],
    },
    {
      id: "4d856d4e-fa91-43b0-b5c7-4396deb154f7",
      title: "Department of Health",
      imageURL: "/resource-image/u_front_hospital_office.webp",
      contacts: [
        {
          name: "Davie O'Niell",
          position: "Community Health Nursing Supervisor",
          phoneNumber: "(305) 324-2400",
          email: "dohmiamidade@flhealth.gov",
        },
      ],
      content: [
        "The Florida Department of Health provides essential parenting-related services that promote the health and development of children from birth through adolescence. Programs include prenatal care referrals, immunizations, newborn screenings, nutrition education, and school health services. These programs are designed to give parents the information and tools they need to raise healthy children.",
        "County health departments also offer Women, Infants, and Children (WIC) services, which provide nutritional support and guidance for families with young children. Parenting education programs focus on child development milestones, safe sleep practices, and injury prevention. Many local offices also provide support groups for new parents, helping them build confidence and community.",
        "By partnering with schools and community organizations, the Department of Health ensures that families have access to reliable medical information and preventive care services. Parents are encouraged to contact their local county health department for appointment scheduling and program details. This officially connects our parents with the school system as well. Parents should be and are involved here at gardens. Open communication between parental guardians and the school system they are sending their child to for 8 hours a day should be key. Collaboration between our teachers and staff and parents is a huge priority to ensure stability and happiness for both parties.",
        "If you are a parent or guardian we greatly encourage you to contact your official health representatives with any questions or concerns. We vouch to take your concerns seriously and will consider implementing any ideas you may have for the future. Depending on your child's age and hospital or clinic your representative may vary however you are still free to contact anyone for reference. We believe no question is a dumb question when it regards your child's health. Don't hesitate to speak your true choice and we promise to listen!",
      ],
    },
    {
      id: "5d2c30a4-1ecf-4689-b11d-aff1994fc94e",
      title: "Department of Parks and Recreation",
      imageURL: "/resource-image/u_park_walk.webp",
      contacts: [
        {
          name: "Johan Tenma",
          position: "Youth Programs Coordinator",
          phoneNumber: "(305) 755-7800",
          email: "parks@miamidade.gov",
        },
      ],
      content: [
        "Local Parks and Recreation Departments play a valuable role in parenting by creating safe spaces where families can connect, learn, and grow together. Through youth sports leagues, after-school programs, summer camps, and family events, these departments support parents by offering structured activities that encourage physical health and social development.",
        "Parent-child programs such as family fitness nights, arts and crafts workshops, and outdoor educational programs help strengthen bonds while promoting healthy lifestyles. Many recreation centers also offer affordable childcare during certain activities, giving parents flexibility and support.",
        "By providing safe, supervised environments, Parks and Recreation Departments contribute to the overall well-being of families and the community. Parents interested in registering for programs or volunteering can contact their local department for more information about seasonal activities and registration deadlines.",

        "Parks and recreational centers are typically critical for a child's development. At these centers children can learn a multitude of different skills that they will integrate into their future lives. For instance, they make life long friendships while learning key social skills that will allow them to become better communicators and learn how to collaborate with others while working in a team. They also learn how to deal with failure when they lose certain games and work on improving themselves and reflecting on their past mistakes. Nowadays getting a break from screen time is highly important since kids typically don't spend much time away from their devices.",
        "We urge you to sign your child up for activities today or at least take them on a nice visit to one of our local parks. We hope to see you there!",
      ],
    },
  ],
  "Health and Wellness": [
    // {
    //   id: "fdsa",
    //   title: "test1",
    //   contacts: [],
    //   content: [
    //     `# Building a Simple Web App with Svelte
    // Svelte is a **modern JavaScript framework** that lets you build fast, reactive web applications with *less boilerplate*.
    // [Visit the Svelte website](https://svelte.dev) to learn more.
    // ---
    // ## Why Svelte?
    // Svelte shifts work from the browser to the **build step**, which results in:
    // - Smaller bundle sizes
    // - Faster load times
    // - Less runtime overhead
    // ### Key Advantages
    // 1. No virtual DOM
    // 2. True reactivity
    // 3. Clean syntax
    // > Svelte feels more like writing plain HTML, CSS, and JavaScript than using a traditional framework.
    // ---
    // ## Getting Started
    // To create a new Svelte project:
    // \`\`\`bash
    // npm create svelte@latest my-app
    // cd my-app
    // npm install
    // npm run dev
    // \`\`\`
    // You should now see your app running locally.
    // ---
    // ## Example Component
    // Here’s a simple Svelte component:
    // \`\`\`svelte
    // <script>
    //   let count = 0;
    // </script>
    // <button on:click={() => count++}>
    //   Clicked {count} times
    // </button>
    // \`\`\`
    // Inline code also works, like \`npm run build\`.
    // ---
    // ## Tables and Data
    // | Feature      | Supported |
    // |--------------|-----------|
    // | Components   | ✅ Yes    |
    // | Reactivity   | ✅ Yes    |
    // | TypeScript  | ✅ Optional |
    // | SSR          | ✅ Yes    |
    // ---
    // ## Task List (GFM)
    // - [x] Install Node.js
    // - [x] Create Svelte project
    // - [ ] Deploy app
    // ---
    // ## Images
    // ![Svelte Logo](https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg)
    // ---
    // ## Emphasis Examples
    // You can use **bold text**, *italic text*, or ***both at once***.
    // > ### Pro Tip
    // > You can nest blockquotes and include headings inside them.
    // ---
    // ## Horizontal Rule
    // ---
    // ## Footnotes
    // Svelte was created by Rich Harris.[^1]
    // [^1]: Originally developed at The New York Times.
    // ---
    // ## Conclusion
    // Svelte is a powerful choice for developers who value **performance**, **simplicity**, and **maintainability**.
    // Happy hacking 🚀
    // `,
    //   ],
    // },
    {
      id: "e086dee3-e347-4c19-9269-ff8a3568f594",
      title: "General Children's Health",
      imageURL: "/resource-image/u_pediatric_health.webp",
      contacts: [
        {
          name: "Stephanie Morales",
          position: "Health Services Coordinator",
          phoneNumber: "786-677-6767",
          email: "stephanie.morales.med@email.com",
        },
        {
          name: "Thomas John",
          position: "Head doctor",
          phoneNumber: "786-872-4545",
          email: "john.thomas.med@email.com",
        },
      ],
      content: [
        "Our local health department provides many resources for families to give their children good medical care. We offer many different financially stable plans that will maintain your child’s health needs for an affordable price. Our doctors and nurses are also highly trained in their fields and can treat almost all illnesses your child may have. Throughout our community there are a multitude of different hospitals and clinics ranging in general health to specifics such as dentistry and surgery.",
        "We have specific health programs for certain illnesses. Our most commonly treated are less severe such as diabetes and common colds. However, we are able to treat all sorts of medical issues you may have. We also have many consultants that help you identify what medical issues you may have that you are not aware of. At these consulting sessions you can possibly find out more severe stuff that could have been even fatal if not identified.",
        "At gardens we also have the highest machinery and technology for your treatment. Our machinery includes many different items such as x-ray machines and we also have a wide variety of equipment. You will for sure be able to be treated effectively regardless of your condition. No matter how big or small your concern is, your health is our number one priority. We have patients ranging in all ages and we are extremely successful in curing them. In fact, notably we have saved over 50 lives in our very community ranging from young children all the way to senior citizens. Our medical department has won various awards for their excellent treatments and we are one of the most funded departments in our community. We swear you can place your health and future in our hands and we will treat it with the utmost care and do the best possible job we can. Please do not hesitate to reach out to our phone number or email our department directly with any questions or concerns.",
        "Our goal is to provide every child at the gardens with the opportunity to lead a healthy lifestyle.",
      ],
    },
    {
      id: "f525d957-4770-4769-8a6a-92b0fda88425",
      title: "Health Insurance Resources",
      imageURL: "/resource-image/u_beach_mother.webp",
      contacts: [
        {
          name: "Aaron Jeger",
          position: "Head of Health Care Support",
          phoneNumber: "(565) 656-6565",
          email: "a.jeger@flhealth.gov",
        },
      ],
      content: [
        "Health Insurance is necessary for the people of our local community. Making it accessible for everyone is our top goal. From covering miscellaneous medical bills for daily life, to life altering procedures, we take pride in the consistency of our health insurance. Our goal is to connect our residents to affordable and good-quality health insurance to provide both financial protection and peace of mind.",
        "Our assistance options include family plans, senior plans, plans for persons with disabilities, and those who qualify for our many health care plans for people making under certain amounts. Required documentation includes, but may not be limited to, social security, proof of income, proof of address, proof of identity, and medical history if applicable. Please consult further for more information for your specific scenario.",
        "We are committed to making the enrollment process simple and accessible. If you have questions, need help comparing plans, or would like assistance completing and submitting your application, please contact our support team to schedule a consultation.",
        "For the most part all of the residents of our community have access to free or reduced healthcare. We believe that everyone in the gardens should have the right to not worry about the expenses of paying for their own life. Your life is the most valuable thing to us and we care deeply about you in the gardens. This is why we take it upon ourselves to create the most financially cheap healthcare options available. It is very rare in other communities to have access to such high quality medical care and attention for such an astoundingly low price. We urge you to take advantage of this and get yourself checked out for any health concerns you may have. We don't want you to miss out on potential crucial appointments just because of a high and costly price. Here at gardens we encourage all of our residents to value their health.",
        "Please if you have any concerns regarding your health or are in any life threatening scenarios do not hesitate to directly call our department. Depending on the severity of your condition we have ambulances available that we can personally deliver to your home or location. We urge you to make any sudden decisions as medical experts in their field will be there promptly to treat you with the utmost care. If the situation or symptoms you are experiencing are not as severe we recommend you send us an email describing the situation. Certain members of our department also accept emails with any concerns you may have. Reach out today and clear your worries!",
      ],
    },
    {
      id: "1a715d9f-277d-4901-8d2c-f2136f1fb808",
      title: "Emergency and Urgent Care",
      imageURL: "/resource-image/u_er_surgeans.webp",
      contacts: [
        {
          name: "Edgar Hanma",
          position: " Lead Representative for Urgent Care",
          phoneNumber: "(959) 595-9595",
          email: "e.hanma@health.gov",
        },
      ],
      content: [
        "Our urgent care facilities pride themselves in serving timely and great quality care, saving lives in many cases. With reliable and amazing faculty, we can support any medical issue at hand. This fact can offer clearance to everyone’s minds, knowing that there are resources to save lives of close friends and family members nearby.",
        "Community members should seek immediate treatment in nearby hospitals that offer emergency rooms if they are met with more serious or life-threatening situations. There are resources for all sorts of infections, viruses, Flu, Covid-19, allergic reactions, trauma, or other urgent medical crises. Knowing where to go in different situations can save lives.",
        "We are available for all the main commercial health insurance providers and treat our patients with the utmost care. We make it our duty to make healthcare accessible for everyone, no matter their conditions.",
        "You can find these urgent healthcare facilities by contacting the lead representative or checking out our locations at hialeahurgentcare.gov.",
      ],
    },
  ],
  "Education and Youth": [
    {
      id: "a254e931-ffb0-4558-93c9-b35a528561dc",
      title: "Library & Media Centers",
      imageURL: "/resource-image/u_library.webp",
      contacts: [
        {
          name: "Emily Davis",
          email: "edavis@earlylearning.org",
          phoneNumber: "(555) 111-2222",
          position: "Enrollment Specialist for Gardens library activities",
        },
        {
          name: "James Taylor",
          email: "jtaylor@smartstart.edu",
          phoneNumber: "(555) 333-4444",
          position: "Educational Coordinator at Gardens Library",
        },
      ],
      content: [
        "Our Gardens local library is an extremely useful tool for many parents and guardians since it provides your child with the opportunity to have fun while learning. We urge you to get a library card and obtain many benefits. The benefits include being able to check out any book you please for a month and also having access to the library's many fun activities. Our library also often holds fun educational events where your child can learn and thrive.",
        "Our library also offers many fun clubs where your kid can learn social and developmental skills that will improve their learning while giving them an opportunity to develop a new talent or further interests they may have. These clubs can help your child figure out their strengths and weaknesses and what type of activities and extracurriculars they like and dislike. Our clubs are very diverse and have members ranging in all different ages and types. Our library has a large number of clubs that focus on different things.",
        "Some of our clubs include more common things such as chess club where kids are able to learn the thrilling dynamic of the challenging game and play against others while refining their critical thinking skills and sportsmanship. One of the more popular clubs revolves around books and discusses different genres and what types of books are the most popular as well as debating certain interpretations. However, recently we have seen a rise in more unique clubs that revolve around things like technology and games. This is seen through our new video game club where kids are encouraged to learn coding to build their very own games. Our library also has a club that revolves around TV shows and movies where kids discuss the type of media they like to consume.",
        // `![Woman picks book from library](/resource-image/woman_picking_book.webp "Woman picking book from library")`,
        "These clubs are properly funded  by our local government and kids have access to all fun materials needed for their clubs purpose. We supply things such as craft material, computers, and anything that the club may need to thrive. But we are still very accepting of anything extra that you may be willing to donate to ensure our club culture continues to grow. Any donations you may have must be in somewhat new condition and can be dropped off to the front desk at the library to be reviewed before it is implemented in the club.",
        "Don't be shy, join a new club in our library today!",
        "We hope to inspire a new generation of readers and learners that will become well-educated adults.",
      ],
    },
    {
      id: "f1a6c71b-3222-493c-a70d-cc91a86c3851",
      title: "Academic Support & Tutoring",
      imageURL: "/resource-image/u_tutoring_session.webp",
      contacts: [
        {
          name: "Maria Lopez",
          position: "Tutoring Services Manager",
          email: "maria.lopez@example.com",
          phoneNumber: "(305) 555-0456",
        },
      ],
      content: [
        "We offer access to resources like tutoring and other academic support measures for parents to aid their children in their academic endeavors. We also have resources for people to apply to become tutors, just contact us!",
        "We believe that the academic performance of the students of our community is important. Resources include tutoring for Mathematics from K-12, Science from K-12, Social Studies from K-12, and Reading and Writing from K-12.",
        "Our program is known to have a drastic change in your child's grades. We have students go from failing all their classes to earning the highest level of honor roll in their entire grade. We also understand that finals are coming up soon for all children. We have a specialized intensive program that will ensure your child earns the highest marks possible in all of their subjects. We believe that education is the key to success and is essential for a bright future.",
        "We have specialized programs depending on your child's grade level. For younger children we believe it is understandable for them to have a shorter attention span thus they are not subjected to more than an hour of tutoring without being given breaks. For our older students we provide a more rigorous program since they are more likely to take harder classes that require more effort. We also provide a specific program for kids who are potentially new to the country and fall under the ESOL category.",
        "Taking into account potential mental disabilities or illnesses too such as ADHD or OCD and dyslexia we will cater our learning programs to your child's personality and needs. We have a wide variety of tutors and your child is bound to be a perfect fit for one of them. We vouch to be patient and never give up on your child despite the challenges they may face. Many kids enter tutoring feeling unsure about their capacity but are eventually confident in their learning upon competition. We are highly skilled in our fields of education and believe every child has potential to become an academic scholar.",
        "For more information please contact Maria Lopez. You can schedule a consultation or inquire for tutoring hours and subjects.",
      ],
    },
    {
      id: "2364e9bf-d2b4-40cf-9d9e-e7ecdf0a4b3f",
      title: "After-School & Summer Programs",
      imageURL: "/resource-image/u_tutor_child.webp",
      contacts: [
        {
          position: "Summer Program Director",
          name: "Jordan Martinez",
          email: "jordan.martinez@example.com",
          phoneNumber: "(305) 555-0789",
        },
        {
          position: "After-School Program Director",
          name: "Suguru Feto",
          email: "feto.suguru@example.com",
          phoneNumber: "(305) 555-0789",
        },
      ],
      content: [
        "We offer access to both after-school and summer programs. Our facilities have amazing staff with amazing care for the children and students. Many also offer day-care programs too. Please consult a specific facility for more information. The after-school hours range from 1 pm - 6 pm. This includes a snack with many activities like outdoor play, indoor play, homework time, and much more.",
        "The summer programs include breakfast and lunch and times range from 6 am - 6 pm. We include field trips to many places like water parks, recreation centers, and much more, all with food and transportation included.",
        "Your child will develop many benefits from our program. Children that go home immediately after school tend to drown themselves in technology and drive. This is very harmful since children need enrichment and they get this through things such as playing and interacting with others or practicing a productive hobby or sport. It is noted that in our school system kids that attend an after school program have higher emotional intelligence and tend to earn higher grades.",
        "Picking up your child at the exact time school ends must also be difficult for many parents and guardians. We understand how busy you may be and you may need to pick up your child at a certain time. Due to this you are able to pick up your child any time ranging in the afterschool program. Your child can stay a longer or shorter period of time depending on your schedule. Although the typical time needed for your child to experience all of our fun activities is at least 3 hours into the program we understand your needs as a parent. If your child only is required to stay one hour before being picked up we will respect that truly.",
        "Feel free to contact our summer program director and after-school programs director to see which facilities are fit for you based on time and location. You can also inquire to see all the local facilities in our area.",
      ],
    },
  ],
  "Recreation and Culture": [
    {
      id: "76a8a083-ef48-4fce-8c1e-290a0cb8db1d",
      title: "Gardens Community Sports Leagues",
      imageURL: "/resource-image/u_soccer_kid.webp",
      contacts: [
        {
          name: "Brian White",
          position: "Athletic Coordinator",
          phoneNumber: "(555) 323-4545",
          email: "bwhite@communitysports.org",
        },
        {
          name: "Susan Adams",
          position: "League Manager",
          phoneNumber: "(555) 545-6767",
          email: "sadams@cityathletics.gov",
        },
      ],
      content: [
        "Our community has many spots for your child to become physically active. Throughout our neighborhood many free parks are available for children of all ages to enjoy themselves and play while making new friends and exercising. Many of these parks also offer sports programs throughout different seasons. At these programs your child can become highly skilled in a specific sport of their choosing. Our coaches are highly trained and well fit to teach your child how to become a true athlete!",
        "So don't think twice of enrolling your child in a physical activity today to keep them healthy and happy!",
        "The most notable of our programs is our elite basketball team. Our team has one of the most impressive basketball teams in our entire district. Our couch has been practicing the sport for over 30 years and is highly educated in coaching and how to build a successful team. Our team provides a rigorous program that includes physical conditioning and long practices that will keep your child occupied.This is one of the primary reasons our team remains extremely successful and has won over 20 trophies and 32 gold medals throughout its existence. The gardens basketball team is always looking for new recruits to keep it alive and thriving.",
        "Regardless of the sport you may have your eye on, we most likely offer an excellent program for it in our community. Anyone is welcome to visit one of our community parks and engage in the sport but official try outs for teams happen early in the school year typically in September or October although it may depend on the season. Certain sports such as ice skating only have a winter season and hold auditions later in the year. However, if your child does not make it onto the official team do not worry! We have many learning and coaching programs that will train your child to make it on next year.",
      ],
    },
    {
      id: "4941c71f-16f3-40b5-90dd-7499143f0ed5",
      title: "Our Local Community",
      imageURL: "/resource-image/u_city_view.webp",
      contacts: [
        {
          name: "Gatoru Sojo",
          position: "Head of Local Affairs",
          email: "strongestoftoday@jujutsuhigh.net",
          phoneNumber: "(973) 121-1212",
        },
      ],
      content: [
        "Gardens is a community that is extremely diverse and welcomes people of all different races and ethnicities. Yet, we are proud to say we are a primarily Hispanic community with over 80% of residents being of Hispanic origin. Naturally, this can be seen all around our community. There are tons of different pieces of Hispanic culture sprinkled around gardens as a whole. Our residents serve food from all over LatinAmerica such as Mexican food, Puerto Rican food, and many more Hispanic nations. We also take our celebration of Hispanic history month very seriously since we wish to preserve our roots and origin. It is very difficult to stroll around gardens without hearing Spanish since it is our second most spoken language.",
        "Our Hispanic culture is also seen throughout our artwork and music. Naturally we have many resources available to young aspiring artists in Gardens. We have many art exhibits and museums that you can apply to participate in. We also have many live music events where you can audition to play and be properly paid for your work. Art is something vital in preserving culture, so we offer many opportunities for artists to promote their work. If you are interested in literature, our book fair has many resources that provide you with things like internships, summer programs, and mentor experience. Strolling around gardens, it's almost impossible to miss the local vendors selling custom made items like paintings and sculptures to visitors from all over the world!",
        "We are also very proud of the African American population. During black history month we have multiple parades. Our local college also has scholarships available to minority groups such as African Americans. We want to increase our diversity in the community by promoting unity. Thus, we want to encourage people of different origins to reside in our wonderful community. For black history month we take our decorations very seriously! We also open up historical sites to educate residents of our community about the discrimination African Americans have faced in our country throughout hundreds of years. We wish to provide our African American residents with all the resources they need to be successful members of the community and continue to expand our familia!",
      ],
    },
    {
      id: "85da7c07-cba3-4d4e-8013-d16c3e472876",
      title: "Support Organizations",
      imageURL: "/resource-image/u_organization_meeting.webp",
      contacts: [
        {
          name: "Travis Cord",
          position: "Head of local Municipalities",
          phoneNumber: "(897) 234-7890",
          email: "t.cord@email.com",
        },
      ],
      content: [
        "Besides our local government, we want to also encourage our residents to take a stance with any issues that may concern them. Due to this naturally many of our very own garden residents have started their own organizations. The most popular being our various nonprofits that assist with things such as food insecurity, animal abuse, domestic violence, and the mistreatment of our youth. These organizations can be found all around our community and if you are looking for a specific one, you can visit our city hall so we can research further for you. These organizations are visible proof of our strong community and the commitment our residents have to make gardens a safer place for everyone.",
        "If you are a person looking for volunteer work, these organizations are absolutely perfect. Since most of them are nonprofits, it can be extremely costly for the organizer to find individuals to work for the organization. This means that volunteers are massively needed to assist in helping the organization remain active and continue to provide assistance to the community. Volunteers are normally assigned different tasks, and this can vary depending on the specific organization you choose to volunteer at. For instance, in our local animal shelter, you may be expected to do things such as cleaning up after the animals, brushing out fur, and feeding and bathing them regularly. The task you are given may also depend on how long you've been assisting the organization or your age. These organizations can provide volunteer forms in case you need to submit your volunteer work to your school.",
        "Community organizations also offer support systems for our residents. For instance, our city hall and local library holds various different meetings and clubs designated for adults. Our city hall meets once a month to decide on new laws, policies, and regulations that may be implemented into our local government and anyone if allowed to attend and give their input. There are also PTSA meetings monthly where you can find out more information about our school system and any policies that will be enforced promptly. Many of our elderly adults attend book clubs at our local library. Our community organizations bring all our residents together and make gardens truly united.",
      ],
    },
  ],
  "Community Organizations": [
    {
      id: "e82647b6-c8ce-4dc3-a367-980b8335057a",
      title: "Big Brothers Big Sisters",
      imageURL: "/resource-image/u_graduation.webp",
      contacts: [
        {
          name: "Shaggy Wilders",
          position: "Director of Programs",
          phoneNumber: "(305) 644-0066",
          email: "info@miamidade.org",
        },
      ],
      content: [
        "Big Brothers Big Sisters of Miami provides mentorship programs designed to guide youth toward academic success, positive decision-making, and career readiness. The organization matches young people with trained adult mentors who offer consistent support, encouragement, and role modeling. These relationships help students build confidence, improve communication skills, and set long-term goals.",
        "Programs include school-based mentoring, community-based mentoring, and college readiness initiatives. Youth participants benefit from one-on-one guidance, exposure to career opportunities, and structured enrichment activities. The organization also partners with local schools and businesses to expand opportunities for leadership development and scholarship access",
        "We have many different leaders that will be able to give your child accurate advice that will help them improve themselves as a person. They can range from highschoolers all the way up into adulthood depending on the situation your child may need assistance in. We believe no issue is too small and whether the event you're going through is life altering and devastating or is simply struggling to keep up with your homework assignments on time we have a mentor for you. Anyone, no matter how resilient, can benefit from a mentor that has more experience.",
        "Community members can get involved by volunteering as mentors, donating resources, or partnering with the organization to host events. Applications for both mentors and youth participants are available year-round.",
      ],
    },
    {
      id: "a46ad31f-978d-44e0-b69a-0296461e0ab8",
      title: "United Way",
      imageURL: "/resource-image/u_volunteer_drive.webp",
      contacts: [
        {
          name: "Gitadora Fuji",
          position: "Community Resource Specialist",
          phoneNumber: "211 or (305) 646-7000",
          email: "info@unitedwaymiami.org",
        },
      ],
      content: [
        "United Way of Miami-Dade works to strengthen the community by connecting residents with essential resources such as financial literacy programs, housing assistance referrals, and workforce development services. The organization collaborates with local nonprofits to provide access to job training, emergency assistance, and educational support initiatives.",
        "Through its 211 Helpline, residents can receive confidential referrals for food assistance, mental health support, employment services, and disaster relief programs. United Way also invests in youth education programs and community improvement projects to address long-term needs.",
        "Here at gardens all our residents should feel supported by members of their own community. This is why we highly value community service and believe everyone should play their part to ensure we maintain this high level of closeness our little community has established all these years. We also highly encourage children and teens to volunteer to learn the value of hard work and the struggles others face in the real world. We can provide community service forms and hour logs if your school requires a certain number of community service. We don't have a specific age requirement for volunteers we accept as long as they are able to physically do the labor without risk or harm. However, we can offer some accommodations by giving simpler and less rigorous tasks to physically incapable or younger volunteers. We will adapt to you and your needs!",
        "Individuals seeking help or looking to volunteer can contact the organization directly or call the 211 helpline for immediate guidance.",
      ],
    },
    {
      id: "8a0df1ba-daa3-4765-8bdd-d0cc1ad8f4a7",
      title: "The Salvation Army",
      imageURL: "/resource-image/u_drive_volunteering.webp",
      contacts: [
        {
          name: "Jonathan Star",
          position: "Social Services Coordinator",
          phoneNumber: "(305) 758-8347",
          email: "miami@uss.salvationarmy.org",
        },
      ],
      content: [
        "The Salvation Army of Miami provides emergency assistance programs that support individuals and families facing crisis situations. Services include food distribution, rental and utility assistance referrals, disaster relief services, and seasonal programs such as back-to-school drives and holiday support initiatives.",
        "In addition to emergency services, the organization offers youth development programs, after-school activities, and character-building initiatives designed to promote leadership and community involvement. Community members can access services by scheduling appointments or visiting designated service centers.",
        "In the tropical climate of Miami Florida we are prone to hurricanes. Due to this many victims are often left with their homes in shambles with little to no aid from the government. This is why we believe that organizations such as ours should come together and unite the entire community to help aid victims of such horrific situations. We will provide you or other victims with the resources needed. Although we are community based we also help victims all around the globe and have established locations in over 10 other different communities. ",
        "We are also always looking for new volunteers to play a crucial role in distributing and organizing our various goods and also aiding victims. As a nonprofit we also greatly encourage any donors or donations to continue to find our mission. When you donate an item to our organization you are helping an individual stabilize their life once more. Due to the nature of our work we encourage our volunteers to be above the age of 13 since some tasks may be considered too demanding and laborious for younger individuals as well as people on the older side of the spectrum as well. ",
        "Volunteers and donors play a vital role in maintaining these programs, and community members are encouraged to get involved through service opportunities or charitable contributions.",
      ],
    },
  ],
  "Emergency and Safety": [
    {
      id: "69f204b3-669d-43ce-a34c-b1c35f54f154",
      title: "Child Safety Programs",
      imageURL: "/resource-image/u_safety_workers.webp",
      contacts: [
        {
          name: "James Miller",
          position: "Public Education Officer",
          phoneNumber: "(555) 222-9900",
          email: "j.miller@city.gov",
        },
        {
          name: "Karen Lopez",
          position: "Prevention Specialist",
          phoneNumber: "(555) 333-8811",
          email: "k.lopez@safecouncil.org",
        },
      ],
      content: [
        "Although Gardens is most certainly one of the safest places to live with a young child, we still believe that it is essential for our youth to be aware of the possible dangers. Due to this we host safety courses in our very own city hall to ensure our youth is well equipped to handle any negative situations. In these courses we teach street safety such as how to properly cross the road and learn about stranger danger and to never approach an adult who you do not know. We believe this fosters our children's awareness skills and raises adults who think critically.",
        "Teach your child about the dangers of the world and sign them up for the free course held in our very own city hall today!",
        "Dangerous individuals are located no matter where your child goes. Our mission is to educate your child on ways they can say no to strangers and even fight back if situations get violent. We teach your child basic self defense skills that will give them the strength and knowledge needed to defend themselves from someone who is potentially trying to harm or abduct them. These programs focus more on buying your child time to alert your or another trusted adult of what is occurring before things escalate into something further",
        "One of our most common concerns from parents is that their child will become violent once upon completion of the program. Essentially using their knowledge to fight and act aggressively towards their peers if a disagreement does happen. This is an excellent concern and we are very grateful to hear our parents' voices on certain topics. However this is not the case since we ensure that your child is educated that their physical skills are only to be used in dangerous situations and can be severely punished if abused or used for the wrong reasons. Thankfully we have not had any incidents of children becoming violent after our program either.",
      ],
    },
    {
      id: "4652a125-cfb0-4034-b7ad-187928ac9fb8",
      title: "Miami-Dade Fire Rescue",
      imageURL: "/resource-image/u_firefighters.webp",
      contacts: [
        {
          name: "Mario De La Torres",
          position: "Public Information Officer",
          phoneNumber: "(305) 471-3600",
          email: "MDFRPIO@miamidade.gov",
        },
      ],
      content: [
        "Miami-Dade Fire Rescue provides critical emergency response services including fire suppression, emergency medical services (EMS), technical rescue operations, and disaster response coordination. The department operates multiple fire stations throughout the county, ensuring rapid response to emergencies such as house fires, medical crises, vehicle accidents, and severe weather incidents.",
        "In addition to emergency response, the department offers community safety education programs. These include CPR certification classes, fire prevention workshops, hurricane preparedness guidance, and smoke alarm installation assistance. Residents are encouraged to create emergency plans, prepare disaster supply kits, and stay informed during hurricane season.",
        "Miami-Dade Fire Rescue also works closely with local schools and businesses to conduct safety drills and preparedness training. Community members can request public education presentations or safety inspections through the department’s outreach division.",
      ],
    },
    {
      id: "e7c3681e-faac-4d70-98ab-099a5fd942b8",
      title: "Miami-Dade Police Department",
      imageURL: "/resource-image/u_police.webp",
      contacts: [
        {
          name: "Yite Lagami",
          phoneNumber: "(305) 476-5423",
          email: "police@mdpd.com",
          position: "Community Affairs Bureau Officer",
        },
      ],
      content: [
        "The Miami-Dade Police Department is responsible for maintaining public safety, enforcing laws, and preventing crime throughout the county. Officers respond to emergencies, investigate criminal activity, and work proactively to build trust within the community. Specialized units focus on traffic enforcement, cybercrime investigations, youth outreach, and neighborhood patrol operations.",
        "Community policing is a major priority for the department. Residents can participate in neighborhood watch programs, attend town hall meetings, and request crime prevention presentations. The department also provides online reporting options for non-emergency incidents and safety tips for protecting homes, vehicles, and personal property.",
        "In emergencies, residents should always call 911. For non-emergency matters, the department provides direct contact lines and community resource officers who assist with safety concerns and local issues.",
      ],
    },
  ],
  "Senior Services": [
    {
      id: "964b57b5-46d4-4bda-9ad4-5088a8ba4020",
      title: "Elderly Support Programs",
      imageURL: "/resource-image/u_chess_elder.webp",
      contacts: [
        {
          name: "Martha Stewart",
          phoneNumber: "(555) 121-3434",
          email: "m.stewart@goldenyrs.org",
          position: "Senior Advocate",
        },
        {
          name: "Arthur Phill",
          phoneNumber: "(555) 232-4545",
          email: "a.phill@legacynetwork.org",
          position: "Family Liaison",
        },
      ],
      content: [
        "We make it a priority in our community to offer aid to the elderly. Thus, we have a lot of different services and programs crafted towards the elderly who do not have any family members that are able to care for them. As well as senior citizens who suffer from a wide variety of different illnesses and disabilities. At gardens we have loads of adult daycares and professionals that are willing to help you care for your relatives. These resources are typically by insurance or are extremely cheap.",
        "We also have social programs because we believe the elderly still need to socialize. At our programs your family members can make friends with people of similar interests due to having the same age groups. Senior citizens deserve to have a community where they can feel welcome and don't have to feel like a burden on their relatives.Our community also allows certain pets and we have many cats around our facility.",
        "Many members like to engage in specific activities throughout the day such as a morning stroll around the center, an evening board game event, and even seasonal activities like knitting sweaters and passing out candy on halloween. Our centers have on site medics and doctors as well as personal nurses that are able to assist our residents with any medical concerns. At our centers senior citizens enjoy their remaining years in a peaceful yet calming manner.",
        "Please, if you require assistance caring for an elderly individual, do not hesitate to contact us for any aid we may be able to provide.",
      ],
    },
    {
      id: "0bebcb87-82f6-43a4-baaa-82d62fb7c9d5",
      title: "Miami-Dade County Elder Affairs",
      imageURL: "/resource-image/u_elder_sitting.webp",
      contacts: [
        {
          name: "Bryan Casas",
          phoneNumber: "(305) 670-6500",
          position: "Senior Services Program Supervisor",
          email: "aging@miamidade.gov",
        },
      ],
      content: [
        "Miami-Dade County offers a wide range of services designed to support older adults in maintaining independence, health, and quality of life. Through its Elder Affairs programs, seniors can access home-delivered meals, transportation assistance, caregiver support, and in-home care services. These programs help reduce isolation and ensure that older residents can safely remain in their homes for as long as possible.",
        "In addition to daily living support, the department provides case management, benefits counseling, and referrals for medical, legal, and housing assistance. Senior centers throughout the county offer recreational activities, educational workshops, fitness classes, and social engagement opportunities that promote active aging and community connection.",
        "Residents aged 60 and older, as well as caregivers seeking support resources, are encouraged to contact the department for eligibility information and enrollment assistance.",
      ],
    },
    {
      id: "15cca12a-c417-48fc-a1a6-bc8f037c8810",
      title: "Healthcare and Wellness Programs",
      imageURL: "/resource-image/u_elder_health.webp",
      contacts: [
        {
          name: "Dariel Fin",
          position: "Information and Referral Specialist",
          phoneNumber: "(800) 963-5337",
          email: "info@elderaffairs.org",
        },
      ],
      content: [
        "The Florida Department of Elder Affairs oversees statewide programs focused on protecting the well-being of older adults. Services include Medicare counseling, long-term care planning assistance, abuse prevention resources, and caregiver training programs. Through partnerships with local Area Agencies on Aging, the department ensures that seniors receive coordinated and accessible services.",
        "Wellness initiatives include fall prevention workshops, chronic disease self-management classes, and memory care support groups. These programs are designed to help seniors stay physically active, mentally engaged, and socially connected. The department also works to safeguard vulnerable adults by responding to reports of neglect, exploitation, or abuse.",
        "Seniors and caregivers can contact the department’s helpline for confidential assistance, program referrals, and information about available benefits.",
      ],
    },
  ],
  "Family Support": [
    {
      id: "33eda0ec-b323-4a77-a25c-611674411b5a",
      title: "Parent’s Support Programs",
      imageURL: "/resource-image/u_family_reading.webp",
      contacts: [
        {
          name: "Dr. Laura Palmer",
          position: "Lead Educator",
          phoneNumber: "(555) 787-9090",
          email: "l.palmer@foundations.org",
        },
      ],
      content: [
        "Being a parent is one of the hardest things someone can be, and here at Hialeah Gardens we truly understand the trouble. Luckily, we offer many different child development workshops as well as courses designed to help you become the best parent you can be. We understand parenting does not come naturally to most people, so we have the perfect solution. At these classes and workshops, we will teach you key skills designed to better your parenting methods, as well as host workshops to educate your child on things such as motor skills.",
        "We have specific courses as well designed to tailor to your specific needs as a parent. For instance one of our most popular classes revolved around handling tantrums. Tantrums are something most parents dread, especially when they happen in public spaces. It can be extremely embarrassing to handle a screaming child calmly in such a vulnerable state.After our course many parents are able to efficiently deescalate the situation and calm their child down almost immediately.",
        "One of our many resources is also free child therapy for more extreme cases. If your child is showing symptoms of a certain disability or mental illnesses you can have them do a psychological evaluation that will determine their condition. After their condition is determined we have a highly skilled therapist that will help your child regulate and manage their emotions while maneuvering their possible condition. After therapy sessions children are seen to develop more emotional intelligence and a decrease in aggressive and violent behavior.",
        "Be the best parent you can be to your child and sign up today! It is completely free and has many benefits that you will thank us for in the long run!",
      ],
    },
    {
      id: "e7c13c52-bedc-4e84-9e73-baff265cb8be",
      title: "Childcare and Family Support",
      imageURL: "",
      contacts: [],
      content: [
        "There are a massive number of resources available in our community dedicated to assisting struggling families. We take into account the size of a specific family when presenting our residents with their fees and taxes. If you have a larger family, this will most definitely result in many tax benefits. Being married will also result in tax benefits since we want to promote the formation of families in gardens to keep our community strong and active. Families choosing to expand through adoption, or the foster care system will receive a large amount of financial aid from both the federal and local government. There are many nutritious and food related assistance programs that can feed you and your family until you are financially stable.",
        "Our community also provides a long and generous maternity leave for both upcoming mothers and fathers. Women are given at minimum a 1 year paid maternity leave where they can focus on caring for their newborn child while not having the burden of managing a career. For male parents they are offered at minimum a month of leave to care for their new wife and child once the birth occurs. Our medical system also provides excellent care for pregnant women and ensures that healthy babies are delivered while supporting both parents in their journey into parenthood. Healthcare is extremely affordable here at the gardens and most of the time insurance covers mostly everything, meaning you do not have to pay a single cent for your children's birth or future healthcare.",
        "Our community also has a wide variety of childcare programs. If you are unable to care for your child, we encourage you to set them up for success by surrendering them to the community where they will be placed in a healthy, stable home and properly cared for. If you are simply busy with work or other obligations, our community has various childcare specialists like babysitters and daycare workers that will happily care for your child while you are away. Moreover, our community often hosts free parenting classes that will introduce new parents into different methods they can use to efficiently and healthily raise their child. These classes have set up many families for a bright future.",
      ],
    },
    {
      id: "ca9657ea-c4e6-44c1-98db-ebaa1ae20f66",
      title: "Senior and Veteran Family",
      imageURL: "",
      contacts: [],
      content: [
        "Gardens have a deep respect for its elders as they were the ones who helped build the community we have today. If you are an elderly person or a family member of an elderly individual, we have tons of different services and resources we can provide you with. First and foremost are our retirement funds. If you are over the age of 60, you can qualify for retirement funds and live off a stable income as a token of gratitude for your service. Secondly, gardens have a large sum of retirement homes that provide residents with a sense of community as well as well-trained caretakers and stable shelters. At these retirement homes elderly people engage in fun activities such as playing bingo or pool and are well taken care of. Our elderly residents can also be provided with medical services and be given things such as glasses, wheelchairs, and canes free of charge.",
        "With the recent rise in technology our elderly residents have unfortunately fallen victim to many scams via social media. Due to this our community thought it was necessary to hold scam prevention workshops as well as technology education classes to protect our vulnerable residents. Too many elderly individuals have been taken advantage of by scammers and hackers, and we make it a priority in the gardens to prevent this. Our technology and scam prevention workshops and classes are completely free to attend, and we aim to educate our senior citizens about the dangers of social media and how to protect themselves from scammers.",
        "If you are a veteran, we greatly commend you for your service and have a multitude of resources and honors, we can offer you. In almost any store or restaurant you can use your veterans discount card to obtain at least a 15% discount on any item and even receive certain privileges or free gifts. We also hold many events throughout the year to thank you for your service to our nation. Lastly, there are many specific financial aid programs dedicated to assisting veterans and their families. Our veterans are the pillars of our community, and we value them greatly!",
      ],
    },
  ],
  "Information and Advocacy": [
    {
      id: "8e7a241c-7d29-4e8e-94cf-25a1f6e70bb3",
      title: "Children’s Rights Advocacy League",
      imageURL: "",
      contacts: [
        {
          name: "Atticus Finch",
          position: "Information Officer",
          phoneNumber: "(555) 434-5656",
          email: "a.finch@childrights.org",
        },
      ],
      content: [
        "We believe that everyone's voice at the gardens should be heard especially when it comes to decisions about your children. This is why we have many children based advocacy groups in our community. These groups revolve around different things such as school related, sports related, and even club related. Together parents unite to advocate that their children are treated fairly and that everyone is included in certain activities. If you have a child we highly suggest you join any corresponding advocacy groups to vouch for your child.",
        "Recently a group of passionate parents fought to create a more inclusive community here at our local school. Due to these parents' fight for what they believed in our school is now a more safe place for everyone. We highly encourage everyone in our community to make their voice heard and protest against anything they deem unfair or unneeded. We encourage peaceful protests to be held, communities to be formed against certain issues, and for people to create logistical arguments to prove their points.",
        "We also encourage our hard working laborers to fight for things they feel they deserve. We understand certain jobs are extremely underpaid despite demanding long hours and challenging work that doesn't even get recognized by the masses. Due to this we encourage workers to try to bring awareness to the issues they face and demand better wages or more appreciation from their employers. You have the right to form an advocacy group in your work place to unite against unfair treatment and spread information and knowledge on the troubles you have to face daily.",
        "Stand up for your child today and join an advocacy group to fight for their rights! Or maybe even start one yourself if it does not already exist in our community.",
      ],
    },
    {
      id: "77c3e32d-0087-49c3-9b4b-7e6d8c68e05e",
      title: "Community Feedback",
      contacts: [],
      content: [
        "Our community is very open to hearing our residents' feedback on things we can do to improve and make gardens a better place for everyone to reside. We also want our residents to be aware of everything offered in our community, such as all our different resources like work programs, financial aid, and anything that may be beneficial to them. We are also huge on advocating for specific causes and holding safe protests and debate to ensure everyone's voice is heard. To efficiently spread information, we post mostly on this website, updating it extremely frequently with any new resources and events coming up. Due to this our residents have all the tools needed to be educated on everything occurring in our community.",
        "We also heavily promote advocacy for different causes. For instance, recently our educators at our local school went on strike to demand better pay. Outside, they held a safe nonviolent protest until they were given the increase in pay they went; they deserved. At gardens we encourage our residents to stand for what they believe in, and we even have a local committee dedicated to holding peaceful protests for all sorts of different causes. However, if protests become too bothersome for the community or become violent, and heinous authorities may be contacted, and you may be penalized or held responsible. For non-protesting advocacy, we often hold events for things such as cancer to promote being educated on issues in our very own community.",
        "If you are new to our community and unaware of certain pieces of information we greatly recommend you visit our city hall to get any questions you may have answered and become well acquainted with our communities' rules and policies. Our city hall front desk has many pamphlets and is educated on everything occurring in our community. This website is also an excellent resource you can use to make sure you are aware of everything occurring in the gardens. Ideally, we want all our residents to participate in our community events and have full transparency on everything happening or planning to happen in gardens. For more information on events, new regulations, or even just facts about our community please feel free to call or visit our city hall!",
      ],
    },
    {
      id: "0a248b11-382c-447b-8b04-e26c1497ae43",
      title: "Academic Resources",
      imageURL: "",
      contacts: [],
      content: [
        "We believe children are the future of our community. Thus, naturally we take a very big pride in our excellent education system and resources available to help your child thrive. Our main public school Gardens K-12 is ranked among the best in the district and has received many awards and recognitions. We offer challenging courses taught by skilled educators for all different grade levels ensuring your child receives the best possible education. If your child is struggling emotionally or academically, we have highly trained counselors and tutors that are readily available to assist your child. You can enroll your child starting next fall of the school year and let them begin their journey at one of the best schools in the entire county.",
        "Outside of academics our education system also offers lots of fun activities and extracurriculars for your child to participate in. We offer many clubs such as robotics, history, FBLA, and chess clubs. We also offer a notable number of sports like soccer, basketball, tennis, swimming, and American football. Lastly, we offer a ton of different artistic extracurriculars like dance, art classes, music, and theater. All of these activities are free to register for but may require auditions or try outs. Equipment is for the most part provided for by our school system. These activities are perfect for your child to interact with others and learn key social skills while remaining active and engaging in something productive. Outside of school your kid can also participate in free tutoring programs to earn stellar grades and prepare for their future.",
        "We offer loads of financial aid for children in the gardens. Our system gives your child access to free breakfast and lunch, and you can apply to receive items from our food pantry for after school snacks and meals. We can also provide vouchers for school supplies to ensure your child has all the resources they need to learn. Your child is also free to speak with a teacher or counselor to request aid if your home does not have things like running water, a stocked fridge, or any other necessities. This may result in a welfare check to your home and could possibly result in your child being placed in the foster care system. Our foster care system cares for over 100 kids in the gardens and gives them a stable home to live in until their parents are able to provide for them or they are above 18 however they can stay longer if needed.",
      ],
    },
  ],
};

export let CommunityResources: Writable<CommunityResourceList> = writable(
  OGResources,
  (set, update) => {
    if (browser) {
      if (dev) {
        localStorage.removeItem("COMMUNITY_RESOURCES"); // Remove in prod
      }

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

export let showSearch = writable(false);
