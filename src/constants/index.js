import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  mongodb,
  figma,
  docker,
  threejs,
  starbucks,
  tesla,
  manage,
  ghms,
  ecrush,
  sdcac,
  teckzite,



  flutter,
  linux,
  next,
  java,
  etherium,
  sql,
  sol,
  php,
  bootstrap,


  link,
  instagram,
  whatsapp,
  github,
  facebook,
  twitter,

  sdcac1,
  teckzite_logo,
  meebuddy_logo,
  ecrushlogo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "Skills",
    title: "Skills",
  },
  {
    id: "Exp",
    title: "Experience ",
  },
 
  {
    id: "work",
    title: "Projects",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designing",
    icon: web,
  },

  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "BlockChain Development",
    icon: manage,
  },

  {
    title: "UI/UX Designing & Product Designing",
    icon: creator,
  },
];

const skills = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "BootStrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "etherium",
    icon: etherium,
  },
  {
    name: "solidity",
    icon: sol,
  },
  {
    name: "Next",
    icon: next,
  }, 
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Linux",
    icon: linux,
  },
];
const experiences = [
  {
    title: "Full Stack Web Developer & React Native Developer",
    company_name: "MeeBuddy",
    icon: meebuddy_logo,
    iconBg: "#E6DEDD",
    date: "May 2022 - Till Now",
    points: [
      "MeeBuddy is a digital platform that is serving the needs of people in towns and rural areas of Andhra Pradesh",
      "Designing and developing Website Using MERN Stack and Figma",
      "Building and maintaining React Native mobile applications.",
      "Collaborating with team members to troubleshoot and optimize applications.",
    ],
  },
  {
    title: "Teckzite Web & App Manager",
    company_name: "Teckzite",
    icon: teckzite_logo,
    iconBg: "#383E56",
    date: "April 2023 - Till now",
    points: [
      "Teckzite, an annual National Level Techno-management fest celebrated and lionized by the student community of Rajiv Gandhi University of Knowledge Technologies, Nuzvid.",
      "Developing and maintaining web applications using React.js,Next.js,Express.js and related technologies and Developing android and ios app using React Native  ",
      "Leading a team in the design and implementation of web and app features.",
      "Ensuring the performance, security, and scalability of applications.",
    ],
  },
  {
    title: "Web Team Member",
    company_name: "Sdcac",
    icon: sdcac1,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - May 2023",
    points: [
      "Student Development and Campus Activity Cell warmly called as SDCAC by the students of RGUKT Nuzvid, is the prestigious organization of the University, working for overall individual development of students through co-curricular activities",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Collaborating with team members to solve technical challenges.",
      "Assisting in the maintenance and improvement of existing codebase.",
    ],
  },
  {
    title: "Web Team Lead",
    company_name: "Ecrush",
    icon: ecrushlogo,
    iconBg: "#383E56",
    date: "Jan 2022 - Aug 2023",
    points: [
      "Leading a web development team in the design and implementation of projects.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers.",
      "Ensuring the delivery of high-quality products within established timelines.",
      "Providing mentorship and guidance to team members for professional development.",
    ],
  },
];

const projects = [
  {
    name: "Ecrush",
    description: "Website of a student body organization at RGUKT,Nuzvid",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: ecrush,
    source_code_link: "https://github.com/Yasvanth-2005/ecrush",
  },
  {
    name: "GHMS",
    description: "A Hostel managment system with multiple features",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ghms,
    source_code_link: "https://github.com/Yasvanth-2005/ghms",
  },
  {
    name: "Teckzite",
    description: "A webiste for a techfest for the year 2023of RGUKT,Nuzvid",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: teckzite,
  },
];

const apps = [];
const Websites = [
  {
    name: "Ecrush",
    description: "Website of a student body organization at RGUKT,Nuzvid",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: ecrush,
    source_code_link: "https://github.com/Yasvanth-2005/ecrush",
  },
  {
    name: "GHMS",
    description: "A Hostel managment system with multiple features",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ghms,
    source_code_link: "https://github.com/Yasvanth-2005/ghms",
  },
  {
    name: "Teckzite",
    description: "A webiste for a techfest for the year 2023of RGUKT,Nuzvid",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: teckzite,
  },
];

const web3 = [
  {
    name: "GHMS",
    description: "A Hostel managment system with multiple features",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ghms,
    source_code_link: "https://github.com/Yasvanth-2005/ghms",
  },
  {
    name: "Teckzite",
    description: "A webiste for a techfest for the year 2023of RGUKT,Nuzvid",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: teckzite,
  },
];
const socialLinks = [
  { link: "",
   name: "github",
    icon: github },
  {
    link: "https://www.linkedin.com/in/siddartha-yernagula/",
    name: "link",
    icon: link,
  },
  {
    link: "",
    name: "instagram",
    icon: instagram,
  },
  {
    link: "",
    name: "twitter",
    icon: twitter,
  },
  {
    link: "",
    name: "whatsapp",
    icon: whatsapp,
  },
  {
    link: "",
    name: "facebook",
    icon: facebook,
  },
];

export {
  experiences,
  projects,
  Websites,
  web3,
  apps,
  services,
  skills,
  socialLinks,
};
