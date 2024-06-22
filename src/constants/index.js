import {
   backend,
    web,
    javascript,
    typescript,
    html,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    oops,
    esfera,
    nielit,
    docedit,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "IOT Dev",
      company_name: "NIELET",
      icon: nielit,
      iconBg: "#383E56",
      date: "March 2022 - Sept 2022",
      points: [
        "Developing and maintaining Arduino and Raspberry modules",
        "Prototypes for iot services and technoogies.",
        "Implementing Python logics into the embeddings.",
        "Participating in AI face regonition tracker project.",
      ],
    },
    {
      title: "React Developer",
      company_name: "OOPS info solutions",
      icon: oops,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "MERN stack Developer",
      company_name: "Esferasoft solutions",
      icon: esfera,
      iconBg: "#383E56",
      date: "Jun 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and Node.js as backend.",
        "Collaborating with cross-platform teams including designers, mobile dev team, product managers, and other developers to high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Learned new technologies such as Next.js & D-apps.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
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
  
  const projects = [
    {
      name: "Trips",
      description:
        "A platform through which users can search, book and expolre more about the locations around the world.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/s43khu/React_tour",
    },
    {
      name: "Instant Docs",
      description:
        "Web application that enables users instantly generate a full fledged doc from just a template.",
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
      image: docedit,
      source_code_link: "https://github.com/s43khu/practice_file",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };