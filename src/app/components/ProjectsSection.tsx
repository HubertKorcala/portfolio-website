"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "E-shop",
    description: "Shop site for selling products",
    image: "/images/projects/1.png",
    tag: ["All", "React"],
    gitUrl: "",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [Tag, setTag] = useState("All");

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

  return (
    <section>
      <h2 className="text-center text-4xl font-bold mt-4 mb-8">
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgUrl={project.image}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
