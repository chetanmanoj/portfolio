import {
  programmingIcon,
  designIcon,
  frontendIcon,
  backendIcon,
  toolIcon,
  c,
  python,
  js,
  canva,
  figma,
  node,
  express,
  mongodb,
  react,
  reactn,
  html,
  css,
  tailwind,
  sass,
  git,
  linux,
  aws,
  firebase,
  evlovxLogo,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  // {
  //   id: "works",
  //   title: "Works",
  // },
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
    itemIcon: [c, python, js],
    items: ["C", "Python", "Javascript"],
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
    itemIcon: [html, css, tailwind, sass, react,reactn],
    items: ["HTML", "CSS", "Tailwind CSS", "SASS", "React", "React Native"],
  },
  {
    titleIcon: backendIcon,
    title: "BACK-END DEVELOPMENT",
    itemIcon: [node,express,mongodb],
    items: ["Node js","Express", "MongoDB"],
  },
  {
    titleIcon: toolIcon,
    title: "TOOLS AND SERVICES",
    itemIcon: [git,linux,aws,firebase],
    items: ["Git", "Linux", "Amazon web services", "Firebase"],
  },
];

// WORKS  SECTION
export const caroItem = [
  {
    title:'SecureSpace',
    description:'A smart security surveillance system'
  },
  {
    title:'GYLT',
    description:'Scheduling app built for students'
  },
  {
    title:'EvolvX',
    description:'Website to display information and registration details about the tech festival conducted in my college.'
  },
  {
    title:'Display Clock',
    description:'Customizable clock that can have a custom background and text for a specific times',
  },
]
