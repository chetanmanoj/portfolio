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
  firebase
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
