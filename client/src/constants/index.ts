import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  figma,
  docker,
  meta,
  tesla,
  placeholderIcon,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services: TService[] = [
  {
    title: "Web Developer (React & Laravel)",
    icon: web,
  },
  {
    title: "Android Developer (Kotlin)",
    icon: mobile,
  },
  {
    title: "UI/UX Designer (Figma & Illustrator)",
    icon: backend, 
  },
  {
    title: "Video Editor (After Effects)",
    icon: creator,
  },
];


const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Java Developer",
    companyName: "Windows Rental System",
    icon: placeholderIcon,
    iconBg: "#E6DEDD",
    date: "2021",
    points: [
      "Developed a desktop-based Java application for managing sports field rentals such as soccer, volleyball, and others.",
      "Included features like booking management, transaction reports, and inventory tracking.",
    ],
  },
  {
    title: "Laravel Developer",
    companyName: "Ratu Boga Digital System",
    icon: placeholderIcon,
    iconBg: "#383E56",
    date: "Jan - Jun 2022",
    points: [
      "Built a digital restaurant system using Laravel for food ordering and sales management.",
      "Implemented dynamic menus, transaction workflows, and multi-level user access.",
    ],
  },
  {
    title: "Web Designer & Developer",
    companyName: "Faculty of Pharmacy – Hasanuddin University",
    icon: placeholderIcon,
    iconBg: "#E6DEDD",
    date: "Jul - Dec 2022",
    points: [
      "Designed and developed a final project management system and digital correspondence platform.",
      "Created a faculty information system with user-friendly UI/UX and efficient data flow.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Mathematics Student Association – Hasanuddin University",
    icon: placeholderIcon,
    iconBg: "#383E56",
    date: "Early 2023",
    points: [
      "Developed a Laravel-based website for the student organization.",
      "Provided features such as news management, event scheduling, and documentation.",
    ],
  },
  {
    title: "Full-Stack Developer & ML Collaborator",
    companyName: "Automated Inventory Prediction System",
    icon: placeholderIcon,
    iconBg: "#E6DEDD",
    date: "Mid 2023",
    points: [
      "Collaborated with the Machine Learning team to develop a predictive system for inventory management.",
      "Integrated Laravel backend with predictive models for real-time insights.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Citta Tourism Village Website",
    icon: placeholderIcon,
    iconBg: "#383E56",
    date: "Early 2024",
    points: [
      "Created a tourism website for Citta Village to promote local destinations and culture.",
      "Built an admin dashboard with responsive design for public access.",
    ],
  },
  {
    title: "Web Developer & Video Editor",
    companyName: "Digital Village Platform & A-Wing Group",
    icon: placeholderIcon,
    iconBg: "#E6DEDD",
    date: "2025 – Present",
    points: [
      "Developing a digital village government platform to support rural communities in Maluku.",
      "Edited corporate profile and event videos for A-Wing Group using Adobe After Effects.",
      "Produced a cultural documentary on Citta Village (Soppeng, Central Maluku) in 2024.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
