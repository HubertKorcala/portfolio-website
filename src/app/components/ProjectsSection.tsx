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
    tag: ["All", "React"],
    gitUrl: "https://github.com/HubertKorcala/e-shop",
    previewUrl: "https://e-shop-rwhl.onrender.com/",
  },
  {
    id: 2,
    title: "Dev Overflow",
    description:
      "A collaborative Q&A web app, using Next.js, server actions, app router, MongoDB, ClerkId, Shadcn and Tailwind CSS.",
    image: "/images/projects/2.png",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com/HubertKorcala/dev-overflow",
    previewUrl: "https://dev-overflow-swart.vercel.app/",
  },
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
      name: "React",
      isSelected: false,
      onClick: handleTagChange,
    },
    {
      name: "Next.js",
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
