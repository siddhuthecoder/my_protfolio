import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";
import me from "../assets/me.jpg";
import me1 from "../assets/me1.jpg";
import me2 from "../assets/me2.jpg";
import me3 from "../assets/me3.jpg";
import me4 from "../assets/me4.jpg";

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, []);
  const userData = [
    {
      title: "Name",
      data: "Siddartha Yernagula",
    },
    {
      title: "Age",
      data: "19 years(20-05-2005)",
    },
    {
      title: "Nationality",
      data: "Indian",
    },
    {
      title: "Address",
      data: "6-1-102 I.J Naidu Colony , Amadalavalsa , Srikakulam , 532185",
    },
    {
      title: "Education",
      data: "Btech-CSE",
    },
    {
      title: "College",
      data: "Rajiv Gandhi university of Knowledge and technologies Nuzvid",
    },
    {
      title: "Email",
      data: "codewithsiddu@gmail.com",
    },
    {
      title: "Contact",
      data: "+91 93988 48215",
    },
  ];
  return (
    <>
      <section>
        <h2 className={`text-sm${styles.sectionHeadText} + theme-color `}>
          About.
        </h2>
        <div
          className="flex justify-between "
          style={{ height: "auto", width: "100%", flexWrap: "wrap" }}
        >
          <div className={`mx-auto`}>
            <img
              src={me1}
              alt=""
              style={{ maxWidth: "420px", width: "97%", height: "100%" }}
            />
          </div>

          <div
            variants={textVariant()}
            style={{ width: "100%", maxWidth: "600px" }}
          >
            {/* <p className={styles.sectionSubText}>Introduction</p>  */}

            <div>
              <p className="mt-2" style={{ color: "grey" }}>
                Experienced in cutting-edge web technologies with a strong
                emphasis on blockchain integration and Web3 development.
                Proficient in utilizing MERN stack, NEXT.js, PHP, and MySQL to
                craft dynamic and engaging web applications. Specializing in the
                implementation of blockchain technology, smart contracts, NFTs,
                and DeFi solutions, with a keen understanding of decentralized
                systems and protocols. Skilled in Flutter and React Native for
                seamless cross-platform mobile development, ensuring
                comprehensive coverage across web, mobile, and blockchain
                landscapes. 
              </p>
              {/* <div className="flex  gap-2 mt-4">
                {socialLinks.map((link) => (
                  <Link to={link.link}>
                    <div className="rounded-md bg-gray-300">
                      <img
                        src={link.icon}
                        alt={link.name}
                        style={{ maxWidth: "25px", height: "25px" }}
                      />
                    </div>
                  </Link>
                ))}
              </div> */}
              <div
                style={{
                  backgroundColor: "grey",
                  width: "100%",
                  height: "2px",
                  borderRadius: "10px",
                  margin: "10px 0px 0px 0px ",
                }}
              ></div>

              <h1 className="mt-3 text-2xl ">Personal information</h1>

              {/* <div className="flex">
                        <div className="title" style={{color:"grey",}}>Name</div>
                        <div className="symb" style={{padding:"0px 20px"}}> : </div>
                        <div className="data" style={{color:"aqua"}}>Siddu</div>
                      </div> */}
              {userData.map((item) => (
                <div className="flex mt-3">
                  <div
                    className="a-title"
                    style={{ color: "grey", minWidth: "70px" }}
                  >
                    {item.title}
                  </div>
                  <div className="symb" style={{ padding: "0px 20px" }}>
                    {" "}
                    :{" "}
                  </div>
                  <div className="a-data theme-color" style={{ color: "" }}>
                    {item.data}
                  </div>
                </div>
              ))}
            </div>

            {width < 800 ? (
              <>
                <div
                  style={{
                    backgroundColor: "grey",
                    width: "100%",
                    height: "2px",
                    borderRadius: "10px",
                    margin: "10px 0px 0px 0px ",
                  }}
                ></div>
                <div className="flex justify-start my-[20px]">
                  <a href="https://wa.me/9398848215" target="_blank">
                    <button className="edition-1 mr-3">Hire me</button>
                  </a>
                  <button className="edition-2 " herf="./siddatha_yernagula_web.pdf" download="siddartha_yernagula_web.pdf">Download Resume</button>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(About, "about");
{
  /* <motion.div
variants={fadeIn("", "", 0.1, 1)}
className="w-[320px] flex justify-center items-center max-md:mb-5"
>
<img src={me} alt="Yasvanth" className="h-[360px] rounded-md" />
</motion.div> */
}

{
  /* 

              <div className="flex justify-between items-center max-md:flex-col mt-[40px] w-full max-w-3xl">
            
                
              </div> 
 */
}
