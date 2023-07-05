import {
  programmingIcon,
  designIcon,
  backendIcon,
  c,
  python,
  js,
  canva,
  figma,
  mongodb,
  react,
  html,
  css,
  tailwind,
  sass,
  git,
  linux,
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
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
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
    titleIcon: designIcon,
    title: "FRONT-END DEVELOPMENT",
    itemIcon: [html, css, tailwind, sass, react],
    items: ["HTML", "CSS", "Tailwind CSS", "SASS", "React", "React Native"],
  },
  {
    titleIcon: backendIcon,
    title: "BACK-END DEVELOPMENT",
    itemIcon: [mongodb],
    items: ["ExpressJS", "MongoDB"],
  },
  {
    titleIcon: designIcon,
    title: "TOOLS AND SERVICES",
    itemIcon: [git,linux],
    items: ["Git", "Linux", "Amazon web services", "Firebase"],
  },
];
