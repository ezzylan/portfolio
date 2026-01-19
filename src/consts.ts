// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type {
  About,
  Footer,
  Header,
  Pricing,
  Project,
  Service,
} from "./types.ts";

import ProfilePic from "./assets/profile-pic.jpg";

export const SITE_URL: string = "https://ezlanzulfiqree.netlify.app";

export const ENABLE_STARDUST_BG: boolean = true;

export const meta = {
  about: {
    // index page
    title: "Ezlan Zulfiqree",
    description:
      "Hi, I'm Ezlan Zulfiqree, a software engineer. Welcome to my little corner of the internet!",
  },
  services: {
    title: "Services | Ezlan Zulfiqree",
    description:
      "Here are some of the services I offer — things I can help you with.",
  },
  resume: {
    title: "Resume | Ezlan Zulfiqree",
    description:
      "This is my resume — a collection of my work experience, education, and skills.",
  },
  projects: {
    title: "Projects | Ezlan Zulfiqree",
    description:
      "Here are some of my projects — things I've built, experimented with, and had fun creating.",
  },
  blog: {
    title: "Blog | Ezlan Zulfiqree",
    description:
      "This is my blog — a place where I share thoughts, ideas, and things I'm learning along the way.",
  },
  // blog post title and description are taken from the variables in markdown file
};

export const header: Header = { logoTitle: "EZ" };

export const footer: Footer = {
  // parses html
  content:
    "Made with ❤️ by Ezlan Zulfiqree • <a href='https://github.com/ezzylan/portfolio' class='link' target='_blank'>Source Code</a>",
};

export const about: About = {
  // parses html
  headLine:
    "Hi, I'm <span class='fancy-highlight font-black'>Ezlan Zulfiqree</span>!",
  tagLine: "Software Engineer / Full Stack Developer",
  profilePic: ProfilePic,
  // parses html
  description:
    "I'm a <u>Software Engineer</u> graduate from Malaysia 🇲🇾 who likes to keep tackling new problems. Currently, I'm working on the <u>Vue.js and Laravel</u> side of things. Outside of this, I like to work on improving my photography skills.",
  links: [
    // Lucide icons
    { icon: "Github", href: "https://github.com/ezzylan/" },
    { icon: "Linkedin", href: "https://www.linkedin.com/in/ezlan-zulfiqree/" },
    { icon: "Instagram", href: "https://www.instagram.com/ezzy.snaps/" },
  ],
  resumeHref:
    "https://drive.google.com/file/d/1WK7RFa_s700-dwSo3HUGL4Z9Y9Ho9Dfb/view?usp=sharing",
  workExperience: [
    {
      title: "Full Stack Developer",
      timeline: "Jan 2025 - Present",
      company: "Mercedes-Benz Malaysia",
      description: [
        "Worked on the Vehicle Accident Management System (VAMS) project using Vue.js on the front-end to streamline accident reporting and processing for Mercedes-Benz vehicles.",
      ],
    },
    {
      title: "Technology Analyst",
      timeline: "Nov 2024 - Dec 2024",
      company: "Deloitte Consulting • Malaysia",
    },
    {
      title: "PASUM IT Tutor",
      timeline: "Aug 2024 - Nov 2024",
      company: "University of Malaya • Malaysia",
      description: [
        "Tutored four classes for the Information Technology (FAX1002) subject.",
        "Taught Microsoft Word, PowerPoint and Excel.",
      ],
    },
    {
      title: "Self Service Printing Shop and Stationary Manager",
      timeline: "Nov 2023 - Mar 2024",
      company: "ZassPrint • Malaysia",
      description: [
        "Developed a user-friendly website for customer file uploads and thesis orders using Nuxt to reduce customer processing time during working hours.",
        "Actively participated as a tester for ZassApp to enhance the overall mobile app experience for customers.",
      ],
    },
    {
      title: "Engineering Intern",
      timeline: "Jul 2021 - Jan 2022",
      company: "Digi-X • Malaysia",
      description: [
        "Worked on the altHR web application using Vue.js on the front-end to streamline HR processes.",
      ],
    },
  ],
  education: [
    {
      title: "Master of Software Engineering (Software Technology)",
      timeline: "Mar 2023 - Apr 2025",
      institution: "University of Malaya • Malaysia",
      description: [
        "Obtained a cumulative grade point average (CGPA) of 4.00",
        'Wrote a dissertation on "Graph-Based Energy Data Model for Energy Monitoring Systems in Residential Buildings"',
      ],
    },
    {
      title: "Bachelor of Computer Science (Software Engineering)",
      timeline: "Sep 2019 - Feb 2023",
      institution: "University of Malaya • Malaysia",
      description: [
        "Studied core computer science fundamentals including programming languages, data structures, algorithms, operating systems, and networking, with practical experience in Java, Python, JavaScript, PHP, and MySQL.",
        "Obtained a cumulative grade point average (CGPA) of 3.90",
        "Recipient of Dean's List Award 4 times",
        "Recipient of Yayasan Bank Rakyat (YBR)'s Pembiayaan Pendidikan Boleh Ubah (PPBU)",
        "Developed a Restaurant Online Ordering and Management System using Laravel as my Final Year Project",
      ],
    },
    {
      title: "Foundation in Physical Sciences",
      timeline: "Sep 2018 - Apr 2019",
      institution: "University of Malaya • Malaysia",
      description: ["Obtained a cumulative grade point average (CGPA) of 3.97"],
    },
  ],
  contact: {
    phone: "60122861700",
    email: "ezlan.hashim53@gmail.com",
  },
};

export const services: Service[] = [
  {
    title: "Website Development",
    description:
      "I build modern, elegant, and high-performing websites designed to elevate your brand image and deliver a seamless user experience.",
  },
  {
    title: "Business Website",
    description:
      "Clean and professional websites tailored for small businesses to increase trust, credibility, and online presence.",
  },
  {
    title: "Corporate Website",
    description:
      "Comprehensive websites for companies with structured layouts, scalable pages, and consistent brand identity.",
  },
  {
    title: "Landing Page / Sales Page",
    description:
      "Conversion-focused pages crafted for marketing campaigns, lead generation, and high performance.",
  },
  {
    title: "Web Systems",
    description:
      "Custom dashboards, booking systems, user portals, LMS, and digital solutions built to improve operations.",
  },
  {
    title: "Website Revamp",
    description:
      "I can revamp any type of website with cleaner design, improved structure, faster loading speed, and a more modern, professional look.",
  },
];

export const pricings: Pricing[] = [
  {
    title: "Landing Page / 1-Page Website",
    amount: "RM1500 - RM1700",
    features: [
      "1-page premium landing design",
      "1 year domain & hosting",
      "1 year technical maintenance",
      "Professional copywriting",
      "Mobile & speed optimized",
    ],
    contactHref: `https://api.whatsapp.com/send/?phone=${about.contact.phone}&text=Hi%20Ezlan,%20I%20want%20to%20build%20a%20Landing%20Page`,
  },
  {
    title: "Business / Corporate Website",
    amount: "Starts from RM3800",
    features: [
      "Up to 10 structured pages",
      "Profile, services, forms",
      "1 year domain & hosting",
      "1 year technical maintenance",
      "Full design & copywriting",
      "SEO-ready structure",
      "Branding-consistent visuals",
    ],
    contactHref: `https://api.whatsapp.com/send/?phone=${about.contact.phone}&text=Hi%20Ezlan,%20I%20want%20a%20Corporate%20Website`,
  },
];

export const projects: Project[] = [
  {
    title: "PrayEZ",
    techs: ["Nuxt", "SQLite", "Tailwind CSS"],
    description: "A simple web-based Islamic prayer tracker built with Nuxt.",
    sourceHref: "https://github.com/ezzylan/prayer-tracker",
    liveHref: "https://prayez.netlify.app/",
    type: "side",
  },
  {
    title: "Pick A Strip",
    techs: ["React", "Tailwind CSS"],
    description:
      "A simple way to let friends pick a random strip and make spontaneous decisions, built as a React SPA.",
    sourceHref: "https://github.com/ezzylan/pick-a-strip",
    liveHref: "https://pickastrip.netlify.app/",
    type: "side",
  },
  {
    title: "ZassPrint Thesis Order",
    techs: ["Nuxt", "PostgreSQL", "Tailwind CSS"],
    description:
      "A Nuxt app for ZassPrint to keep track of customer thesis hard/soft bound orders.",
    sourceHref: "https://github.com/ezzylan/zassprint-thesis-order",
    liveHref: "https://zassprint-thesis-order.netlify.app/",
    type: "client",
    testimonial: {
      name: "Sharifah Nurashikin Wafa",
      position: "COO @ Zass Innovation Group",
      quote:
        "Solusi sistem yang komprehensif dan mudah digunakan oleh pelanggan dan pekerja. Dari order sampai delivery dalam satu platform ✨",
    },
  },
  {
    title: "GrantHub",
    techs: ["Nuxt", "SQLite", "Tailwind CSS"],
    description:
      "A Nuxt app that serves as a one-stop center for accessing grant information in Malaysia and facilitates multi-sector collaboration by enabling users from academia, industry, and the community to find and connect with potential partners for research and innovation projects.",
    sourceHref: "https://github.com/ezzylan/grant-hub",
    type: "client",
    testimonial: {
      name: "Dr Nur Nasuha Mohd Daud",
      position: "Senior Lecturer @ Universiti Malaya",
      quote:
        "Ezlan was involved in developing our Grant Management System as the main developer and consistently exceeded the project lead's expectations. Despite working within a strict timeline, he was able to translate the system vision into a functional and usable system with minimal guidance, demonstrating strong experience in delivering solutions that meet user needs.",
    },
  },
  {
    title: "ZassPrint KPS",
    techs: ["SvelteKit", "Supabase", "Tailwind CSS"],
    description:
      "A SvelteKit app for ZassPrint to handle customer file uploads to their shop in KPS UM, and keep track of customer thesis hard/softbound orders.",
    sourceHref: "https://github.com/ezzylan/zassprint-kps",
    type: "side",
  },
  {
    title: "MadaniBlog",
    techs: ["Django", "Bootstrap"],
    description:
      "A political analysis blog, built with Django, aiming to help Malaysian netizens keep up to date with current politics without being exposed to biased news.",
    sourceHref: "https://github.com/ezzylan/MadaniBlog",
    type: "side",
  },
  {
    title: "Restaurant Online Ordering and Management System",
    techs: ["Laravel", "Bootstrap", "MySQL"],
    description:
      "A Laravel app, developed as a Final Year Project for my Bachelor's Degree, to solve the problems of the manual ordering system by transforming the manual process of ordering system in a restaurant between the customer and staff and modernising and automating all processes.",
    sourceHref: "https://github.com/AfiqAmmar/Restaurant-Online-Order",
    type: "side",
  },
];

// add blog articles in /src/content/blog
