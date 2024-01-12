import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { skills } from "../constants";
import { slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const SkillCard = ({ name, icon }) => (
  <div
    style={{
      width: "120px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background:"rgba(196, 196, 196, 0.19);",
      boxShadow: "5px 5px 5px 5px rgba(0.9,0.9,0.9,0.9)",
      padding: "10px",
    }}
  >
    <img src={icon} alt={name} style={{ width: "80px" }} />
    <p
      style={{
        fontWeight: "400",
        marginTop: "10px",
        textAlign: "center",
        textTransform: "uppercase",
      }}
    >
      {name}
    </p>
  </div>
);

function Skills() {
  return (
    <section className="max-w-7xl mx-auto relative z-0 overflow-hidden ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What do I know</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <motion.div
        className="mt-20 mb-5 flex flex-wrap gap-10 max-sm:gap-5"
        style={{ justifyContent: "center", alignItems: "stretch" }}
        variants={slideIn("left", "tween", 0.2, 0.5)}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Skills, "Skills");
