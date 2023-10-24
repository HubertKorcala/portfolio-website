"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

type TabData = {
  title: string;
  id: string;
  content: JSX.Element;
};

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Next.js</li>
        <li>Redux</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>XLII Liceum Ogólnokształcące im. Marii Konopnickiej w Warszawie</li>
        <li>SGGW w Warszawie - informatyka</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Trainee as Web Developer(react, nextjs) in Agileme company</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [tabData, setTabData] = useState<TabData>(TAB_DATA[0]);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });

    const selectedTabData = TAB_DATA.find((t) => t.id === id);

    if (selectedTabData) {
      setTabData(selectedTabData);
    }
  };

  return (
    <section id="about" className="text-text-100 pt-8">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about me picture"
          className="mb-auto my-4"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold  mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with TypeScript, Next.js, React, Redux, Node.js, Express,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications. :)
          </p>
          <div className="flex flex-row  mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">{tabData && tabData.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
