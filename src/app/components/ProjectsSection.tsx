"use client";
import React, { useState, useRef, use } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-shop",
    description: "E-commerce application build using MERN stack.",
    image: "/images/projects/1.png",
    tag: ["All", "React.js", "Study"],
    gitUrl: "https://github.com/HubertKorcala/e-shop",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Dev Overflow",
    description:
      "A collaborative Q&A web app, using Next.js, server actions, app router, MongoDB, ClerkId, Shadcn and Tailwind CSS.",
    image: "/images/projects/2.png",
    tag: ["All", "Next.js", "Study"],
    gitUrl: "https://github.com/HubertKorcala/dev-overflow",
    previewUrl: "https://dev-overflow-swart.vercel.app/",
  },
  {
    id: 3,
    title: "Douglas",
    description:
      "A web platform for Douglas Skin Care Weeks, allowing users to register for events seamlessly. I was responsible for developing the front-end in React.js, creating a responsive and user-friendly interface. The platform featured form validation, dynamic scheduling, and API integration with a Python-based backend.",
    image: "/images/projects/3.jpg",
    tag: ["All", "React.js", "Work"],
    gitUrl: "",
    previewUrl: "https://skincareweeks.pl/",
  },
  {
    id: 4,
    title: "Danky Cars",
    description:
      "Danky Cars is a luxury car rental platform for sports car enthusiasts. I developed the front-end using Next.js, TypeScript, Tailwind CSS, ShadCN, and Zod for form validation, ensuring a sleek and responsive UI. The platform includes a full admin panel for managing cars, bookings, and users, seamlessly integrating with a PHP Symfony backend for real-time availability and secure transactions.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Next.js", "Work"],
    gitUrl: "",
    previewUrl: "https://dankycars.pl/",
  },
  {
    id: 5,
    title: "K&K Contulting Group",
    description: "K&K Consulting Group is a tax return calculation platform for individuals working in the Netherlands. I developed the entire project using Next.js, TypeScript, ShadCN, Zod, and PostgreSQL. The platform features an advanced tax refund calculator, where users fill out a detailed form to estimate their eligible refund. It also includes a full admin panel for managing submissions and user data.",
    image: "/images/projects/5.jpg",
    tag: ["All", "Next.js", "Work"],
    gitUrl: "",
    previewUrl: "https://www.rozlicz-sie.nl/"
  }
  ,
  {
    id: 6,
    title: "Fair Promoter",
    description: "Fair Promoter is a landing page and blog for a company specializing in attracting industry professionals to trade fairs. I developed the landing page in Next.js and built the blog using Sanity CMS, ensuring a dynamic and easily manageable content structure. The site provides insights on trade fair strategies, case studies, and promotional solutions, offering a seamless user experience and efficient content management.",
    image: "/images/projects/6.jpg",
    tag: ["All", "Next.js", "Work"],
    gitUrl: "",
    previewUrl: "https://fairpromoter.com/"
  }
];

const ProjectsSection = () => {
  const [Tag, setTag] = useState("All");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (tag: string) => {
    setTag(tag);
  };

  const tagData = [
    {
      name: "All",
      isSelected: true,
      onClick: handleTagChange,
    },
    {
      name: "React.js",
      isSelected: false,
      onClick: handleTagChange,
    },
    {
      name: "Next.js",
      isSelected: false,
      onClick: handleTagChange,
    },
    {
      name: "Study",
      isSelected: false,
      onClick: handleTagChange,
    },
    {
      name: "Work",
      isSelected: false,
      onClick: handleTagChange,
    },
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(Tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-20">
      <h2 className="text-center text-4xl font-bold mt-4 mb-2">
        Study Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {tagData.map((tag) => (
          <ProjectTag
            key={tag.name}
            onClick={handleTagChange}
            isSelected={Tag === tag.name}
            name={tag.name}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            key={project.id}
          >
            <ProjectCard
              title={project.title}
              imgUrl={project.image}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectsSection;
