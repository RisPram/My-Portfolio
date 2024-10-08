import {
  linkedIn,
  github,
  twitter,
  // resume,
  html,
  css,
  js,
  bootstrap,
  sass,
  tailwind,
  reactjs,
  git,
  redux,
  nextjs,
  franchiseStore,
  franchiselanding,
  cashaqua,
  offerzone,
  loan,
  career,
} from "./Assets";
export const menu = [
  {
    id: "menuA",
    title: "Work",
    link: "/",
  },
  {
    id: "menuB",
    title: "About",
    link: "/about",
  },
  {
    id: "menuC",
    title: "Contact",
    link: "/contact",
  },

  {
    id: "menuD",
    title: "Resume",
    download:
      "https://drive.google.com/file/d/15jsh4SGoGmCxZ94mh1RpmXCoRTXa9uoi/view",
  },
];
export const skills = [
  {
    id: "skill1",
    name: "HTML",
    image: html,
  },
  {
    id: "skill2",
    name: "CSS",
    image: css,
  },

  {
    id: "skill3",
    name: "BootStrap",
    image: bootstrap,
  },

  {
    id: "skill4",
    name: "Sass",
    image: sass,
  },

  {
    id: "skill5",
    name: "Tailwind CSS",
    image: tailwind,
  },
  {
    id: "skill6",
    name: "JavaScript",
    image: js,
  },
  {
    id: "skill7",
    name: "React Js",
    image: reactjs,
  },
  {
    id: "skill8",
    name: "Next Js",
    image: nextjs,
  },
  {
    id: "skill9",
    name: "Redux",
    image: redux,
  },
  {
    id: "skill10",
    name: "Git",
    image: git,
  },
];

// export const myProject = [
//   {
//     id: "mpr1",
//     slug: "gift-card",
//     type: "Mobile App & Web Design ",
//     title: "Gift Card",
//     img: myProject1,
//     description:
//       "Buy gift cards of most popular brands like flipkart, amazon, myntra and many more. Get gift card number and redeem at the store/brand to get up to 100% cashback and rewards.",
//   },
//   {
//     id: "mpr2",
//     slug: "bsw",
//     type: "Mobile App & Web Design",
//     title: "Best Shopping Websites",
//     img: myProject2,
//     description:
//       "Buy gift cards of most popular brands like flipkart, amazon, myntra and many more. Get gift card number and redeem at the store/brand to get up to 100% cashback and rewards.",
//   },
//   {
//     id: "mpr3",
//     slug: "vendor",
//     type: "Mobile App",
//     title: "Vendor",
//     img: myProject3,
//     description:
//       "- GG Vendor & experience new growth in your Business.\n - Get your own personal Salesman at zero upfront cost and pay on real sales only",
//   },
//   {
//     id: "mpr4",
//     slug: "franchise360",
//     type: "Web Design",
//     title: "Franchise 360",
//     img: myProject4,
//     description: "Digital Franchise System",
//   },
// ];
export const socialMedia = [
  {
    id: "s1",
    icon: linkedIn,
    link: "https://www.linkedin.com/in/rishita-pramanick",
    name: "LinkedIn",
  },
  {
    id: "s2",
    icon: github,
    link: "https://github.com/RisPram",
    name: "Github",
  },
];

export const myProject = [
  {
    id: "mpr1",
    slug: "offer-zone",
    name: "User Web App",
    date: "Jan,2023 - Present",
    dec: "Multi purpose e-commerce platform",
    image: offerzone,
    liveLink: "https://globalgarner.com/offer-zone",
    skills: [
      {
        id: "skill1",
        name: "HTML",
        image: html,
      },
      {
        id: "skill2",
        name: "CSS",
        image: css,
      },

      {
        id: "skill5",
        name: "Tailwind CSS",
        image: tailwind,
      },
      {
        id: "skill6",
        name: "JavaScript",
        image: js,
      },
      {
        id: "skill7",
        name: "React Js",
        image: reactjs,
      },

      {
        id: "skill9",
        name: "Redux",
        image: redux,
      },
      {
        id: "skill10",
        name: "Git",
        image: git,
      },
    ],

    details: [
      "Developed a <b>Multi purpose E-commerce platform </b> enabling sellers to offer products from popular <Travel> Gift Cards, Travel bookings (flight & bus), OfferZone ,Lab Tests, CashAqua, Bill Pay & Recharge, Best Shopping Websites </b> and connect with over 300+ Brands, 600k+ Users, 36k+ Vendors, 20k+ Upos Holder, 2Cr+ Products,  10+ Franchise.",
      "Optimized the platform for <b> SEO </b>, implementing best practices like meta tags, fast-loading pages, leading to improved search engine rankings and increased organic traffic.",
      "Implemented <b>skeleton loading (shimmer effects)</b> and <b>infinite scrolling </b> to enhance user experience when handling large data sets.",
      "Utilized <b> React Router </b> for navigation, optimizing performance through <b>Lazy loading and Memoization </b> techniques.",
      "Software development version control using <b> Bitbucket.</b>",
    ],
  },

  {
    id: "mpr2",
    slug: "cashaqua",
    name: "Cashaqua Website",
    date: "July, 2023 - October, 2023",
    dec: "“Pani Pe Petrol Ka Cashback”. Global garner water franchise website.",
    image: cashaqua,
    liveLink: "https://globalgarner.com/cashaqua",
    skills: [
      {
        id: "skill1",
        name: "HTML",
        image: html,
      },
      {
        id: "skill2",
        name: "CSS",
        image: css,
      },

      {
        id: "skill5",
        name: "Tailwind CSS",
        image: tailwind,
      },
      {
        id: "skill6",
        name: "JavaScript",
        image: js,
      },
      {
        id: "skill7",
        name: "React Js",
        image: reactjs,
      },

      {
        id: "skill9",
        name: "Redux",
        image: redux,
      },
      {
        id: "skill10",
        name: "Git",
        image: git,
      },
    ],
    details: [
      "Developed a business opportunity for a business person named <b>“CashAqua”.</b> It is a packaged drinking water bottle brand Just like Kinlay, Bisleri, or Aquafina. The word CashAqua consists of two words <b>“Cash”</b> used for Cashback and <b>“Aqua”</b> used for Water this means cashback on water. It has launched with the tagline <b>“Pani Pe Petrol Ka Cashback”.</b>",
      "Built a responsive UI using <strong> React, Tailwind, and integrated Google APIs <strong> for location.",
      "Implemented <b>skeleton loading (shimmer effects)</b> and <b>infinite scrolling </b> to enhance user experience when handling large data sets.",
      "Utilized <b> React Router </b> for navigation, optimizing performance through <b>lazy loading</b> techniques.",
    ],
  },
  {
    id: "mpr6",
    slug: "career",
    name: "Footer section",
    date: "Oct, 2023 - Nov, 2023",
    dec: "Wide openings",
    image: career,
    liveLink: "https://globalgarner.com/career",
    skills: [
      {
        id: "skill1",
        name: "HTML",
        image: html,
      },
      {
        id: "skill2",
        name: "CSS",
        image: css,
      },

      {
        id: "skill5",
        name: "Tailwind CSS",
        image: tailwind,
      },
      {
        id: "skill6",
        name: "JavaScript",
        image: js,
      },
      {
        id: "skill7",
        name: "React Js",
        image: reactjs,
      },

      {
        id: "skill10",
        name: "Git",
        image: git,
      },
    ],
    details: [
      "Experience the perfect work-life balance where flexibility enhances organizational performance, personal benefit, loyalty and dedication to team and individual objectives.",
      "This is an opportunity to work with GG.",
      "Built a responsive UI using <strong> React, Tailwind, and integrated APIs <strong>.",
      "Implemented <b>skeleton loading (shimmer effects)</b> and <b>infinite scrolling </b> to enhance user experience when handling large data sets.",
      "Utilized <b> React Router </b> for navigation, optimizing performance through <b>lazy loading</b> techniques.",
    ],
  },
  {
    id: "mpr3",
    slug: "loan",
    name: "Loan Website",
    date: "March, 2024 - June, 2024",
    dec: "Quick and Easy Loans in just minutes",
    image: loan,
    liveLink: "https://globalgarner.com/loan",
    skills: [
      {
        id: "skill1",
        name: "HTML",
        image: html,
      },
      {
        id: "skill2",
        name: "CSS",
        image: css,
      },

      {
        id: "skill5",
        name: "Tailwind CSS",
        image: tailwind,
      },
      {
        id: "skill6",
        name: "JavaScript",
        image: js,
      },
      {
        id: "skill7",
        name: "React Js",
        image: reactjs,
      },

      {
        id: "skill10",
        name: "Git",
        image: git,
      },
    ],
    details: [
      "Process your loans through Global Garner for a seamless and efficient experience, ensuring diverse loan options to suit your needs.",

      "Built a responsive UI using <strong> React, Tailwind",
      "Implemented <b>skeleton loading (shimmer effects)</b> and <b>infinite scrolling </b> to enhance user experience when handling large data sets.",
      "Utilized <b> React Router </b> for navigation, optimizing performance through <b>lazy loading</b> techniques.",
    ],
  },
  {
    id: "mpr4",
    slug: "franchise-store",
    name: "Franchise store Website",
    dec: "Shopping franchise website",
    date: "June, 2024 - present",
    image: franchiseStore,
    liveLink: "https://builder360-staging.web.app/store",
    skills: [
      {
        id: "skill1",
        name: "HTML",
        image: html,
      },
      {
        id: "skill2",
        name: "CSS",
        image: css,
      },

      {
        id: "skill5",
        name: "Tailwind CSS",
        image: tailwind,
      },
      {
        id: "skill6",
        name: "JavaScript",
        image: js,
      },
      {
        id: "skill7",
        name: "React Js",
        image: reactjs,
      },

      {
        id: "skill9",
        name: "Redux",
        image: redux,
      },
      {
        id: "skill10",
        name: "Git",
        image: git,
      },
    ],
    details: [
      "Designed and developed the website using <b>React.js</b> with a focus on clean, <b> reusable components </b> and <b>a user-friendly interface.</b>",
      "Styled the website with <b> Tailwind CSS </b>, creating a visually appealing and responsive design for optimal viewing across devices.",
      "Created sections highlighting the franchise’s <b> menu </b>, and information on how to become a <b> franchisee, </b><b> enhancing brand engagement.</b>",
      "Implemented <b> SEO </b> best practices to increase online visibility and attract potential franchise partners.",
    ],
  },
  {
    id: "mpr5",
    slug: "franchise-landing",
    name: "Franchise Website",
    dec: "Franchise website",
    date: "June, 2024 - present",
    image: franchiselanding,
    liveLink: "https://builder360-staging.web.app",
    skills: [
      {
        id: "skill1",
        name: "HTML",
        image: html,
      },
      {
        id: "skill2",
        name: "CSS",
        image: css,
      },

      {
        id: "skill5",
        name: "Tailwind CSS",
        image: tailwind,
      },
      {
        id: "skill6",
        name: "JavaScript",
        image: js,
      },
      {
        id: "skill7",
        name: "React Js",
        image: reactjs,
      },

      {
        id: "skill9",
        name: "Redux",
        image: redux,
      },
      {
        id: "skill10",
        name: "Git",
        image: git,
      },
    ],
    details: [
      "Designed and developed the website using <b>React.js</b> with a focus on clean, <b> reusable components </b> and <b>a user-friendly interface.</b>",
      "Styled the website with <b> Tailwind CSS </b>, creating a visually appealing and responsive design for optimal viewing across devices.",
      "Created sections highlighting the franchise’s <b> menu </b>, and information on how to become a <b> franchisee, </b><b> enhancing brand engagement.</b>",
      "Implemented <b> SEO </b> best practices to increase online visibility and attract potential franchise partners.",
    ],
  },
];
