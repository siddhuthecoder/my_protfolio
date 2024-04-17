import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, web3, Websites, apps } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <div >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const [tab, setTab] = useState("projects");
  const [currentProjects, setCurrentProjects] = useState([]);

  useEffect(() => {
    const getProjectsByTab = () => {
      switch (tab) {
        case "Websites":
          return Websites;
        case "apps":
          return apps;
        case "web3":
          return web3;
        default:
          return projects;
      }
    };

    setCurrentProjects(getProjectsByTab());
  }, [tab]); 

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="w-full flex justify-around  tab-bar mx-auto mt-7" style={{ width: "100%", maxWidth: "750px", alignItems: "center" }}>
        <div
          className={`tabName ${tab === "projects" && "active-tab"}`}
          onClick={() => setTab("projects")}
        >
          ALL
        </div>
        <div
          className={`tabName ${tab === "Websites" && "active-tab"}`}
          onClick={() => setTab("Websites")}
        >
          Websites
        </div>
        <div
          className={`tabName ${tab === "apps" && "active-tab"}`}
          onClick={() => setTab("apps")}
        >
          Apps
        </div>
        <div
          className={`tabName ${tab === "web3" && "active-tab"}`}
          onClick={() => setTab("web3")}
        >
          Web 3.0
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 align-items-center justify-center" >
        {currentProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
