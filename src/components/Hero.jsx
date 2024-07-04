import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import "../index.css";

import { styles } from "../styles";

import meee from "../assets/meee.png";
import siddatha_yernagula_web from "../assets/siddatha_yernagula_web.pdf";

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, []);
  return (
    <section>
      <div
        className=" w-full  flex justify-center "
        style={{
          minHeight: "100vh",
          width: "100%",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          className={` ${
            width < 900 ? styles.paddingX : ""
          } flex mt-[50px] flex-row items-start gap-5`}
          style={{ maxWidth: "900px" }}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-[180px] h-[240px] violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              👋 Hi, I'm <span className="text-[#915EFF]">Siddartha</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A Professional <span className="text-[#915EFF]">Developer</span>
            </p>
            <p
              className="mt-2 md:text-[22px] text-1xl text-white-100 overflow-auto"
              style={{ lineHeight: "1.5" }}
            >
              {width > 900 ? (
                <>
                  A seasoned professional proficient in harnessing <br></br>the
                  power of MERN stack, Solidity, and React Native <br></br>to
                  craft dynamic web and blockchain apps.
                </>
              ) : (
                <>
                  A seasoned professional proficient in harnessing the power of
                  MERN stack, Solidity, and React Native to craft dynamic web
                  and blockchain apps.
                  {/* A seasoned professional proficient in leveraging the MERN
                  stack, Next.js, Solidity, and React Native to craft dynamic
                  Web3 applications, decentralized applications (dApps), and web
                  applications. Specializes in developing robust
                  blockchain-based solutions, ensuring seamless integration and
                  functionality across decentralized ecosystems. */}
                </>
              )}
            </p>
            <br />
            {
              <div className="flex justify-start my-[5px]">
                <a href="https://wa.me/9398848215" target="_blank">
                  <button className="edition-1 mr-3">Hire me</button>
                </a>
                <a
                  href="./siddatha_yernagula_web.pdf"
                  download="siddatha_yernagula_web.pdf"
                >
                  <button className="edition-2">Download Resume</button>
                </a>
              </div>
            }
          </div>
        </div>
        {/* <svg width={`${width >1000?"460":"300"}`} height={`${width >1000?"460":"390"}`} viewBox="0 0 396 490" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", zIndex: "1",overflow:"hidden" }}>
          <path d="M396 277.002C396 357.636 352.784 490.001 260 490.001C167.216 490.001 0 291.634 0 211C0 130.366 77.2166 0.000732422 170 0.000732422C262.784 0.000732422 396 196.368 396 277.002Z" fill="#915EFF" />
          <image href={me} alt="" x="-90" y="-110" style={{ width:"600",height:"600",position: "absolute", left: "-10%",top:"-40% ", zIndex: "2",marginRight:"20px" }} />

        </svg> */}

        <div className={`  flex flex-row items-start `}>
          <img src={meee} alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
