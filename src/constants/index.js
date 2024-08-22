import {
  programmingIcon,
  designIcon,
  frontendIcon,
  backendIcon,
  toolIcon,
  c,
  python,
  laravel,
  js,
  canva,
  figma,
  node,
  express,
  mongodb,
  react,
  reactn,
  next,
  html,
  css,
  tailwind,
  sass,
  git,
  linux,
  aws,
  php,
  firebase,
  postgresql,
  ssImage,
  gylt,
  evolvximg,
  dClock,
  jobsapply,
  taza,

} from "../assets";

export const navLinks = [
  {
    id: "home",
    // title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "works",
    title: "Works",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

// SKILLS SECTION
export const cardData = [
  {
    titleIcon: programmingIcon,
    title: "PROGRAMMING LANGUAGES",
    itemIcon: [c, python, js, php],
    items: ["C", "Python", "Javascript", "PHP"],
  },
  {
    titleIcon: designIcon,
    title: "DESIGN",
    itemIcon: [figma, canva],
    items: ["Figma", "Canva"],
  },
  {
    titleIcon: frontendIcon,
    title: "FRONT-END DEVELOPMENT",
    itemIcon: [html, css, react, next, reactn, tailwind, sass, ],
    items: ["HTML", "CSS", "React", "Next.js", "React Native", "Tailwind CSS", "SASS",],
  },
  {
    titleIcon: backendIcon,
    title: "BACK-END DEVELOPMENT",
    itemIcon: [node,express,mongodb, postgresql, laravel],
    items: ["Node js","Express", "MongoDB", "PostgreSQL", "Laravel"],
  },
  {
    titleIcon: toolIcon,
    title: "TOOLS AND SERVICES",
    itemIcon: [git,linux,aws,firebase],
    items: ["Git", "Linux", "Amazon Web Services", "Firebase"],
  },
];

// WORKS  SECTION
export const caroItem = [
  {
    title:'SecureSpace',
    description:'A smart security surveillance system that can detect the presence of an intruder in the surveillance space and notify the user',
    image: ssImage,
    gitlink: 'https://github.com/orgs/Secure-Space/repositories'
  },
  {
    title:'GYLT',
    description:`Scheduling app built for students with the aim of simplifying the scheduling and completion of the user's daily tasks`,
    image: gylt,
    gitlink: ''
  },
  {
    title:'EvolvX',
    description:'Website for displaying information and registration details about the tech festival conducted in my college',
    image: evolvximg,
    gitlink: 'https://github.com/chetanmanoj/EvolvX_3D'
  },
  {
    title:'Display Clock',
    description:'Customizable clock that can have a custom background and text for a specific time set by the user',
    image: dClock,
    gitlink: 'https://github.com/chetanmanoj/clock-test'
  },
  {
    title:'JobsApply',
    description:'A dynamic job application platform that seamlessly integrates Adzuna.com\'s extensive job listings, providing users with up-to-date and relevant job opportunities.',
    image: jobsapply,
    gitlink: 'https://github.com/chetanmanoj/jobsapply'
  },
  {
    title:'Taza Restaurant',
    description:'An information website for Taza Restaurant situated in Dubai, UAE ',
    image: taza,
    gitlink: 'https://www.restauranttaza.com/'
  },
]
