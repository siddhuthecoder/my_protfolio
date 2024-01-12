import { motion } from "framer-motion";

import { styles } from "../styles";
import Computer from "../assets/pngwing.com.png";
import me from "../assets/me.jpg";
const Hero = () => {
  return (
    <section>
      <div className=" w-full  flex justify-center" style={{minHeight:"100vh",width:"100%",alignItems:"center",flexWrap:"wrap"}}>
        <div
          className={` ${styles.paddingX} flex flex-row items-start gap-5`}
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
            <p className="mt-2 text-2xl text-white-100">
            Web tech expert in MERN, PHP. Mobile savvy with Flutter, React Native. <br/>Blockchain enthusiast skilled in smart contracts, NFTs, DeFi, web3.<br/> Ready for diverse tech challenges.<br/>             
            </p>
          </div>
        </div>
        <div
          className={` ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <img src={me} alt="" style={{width:"80%",maxWidth:"400px",height:"350px"}}/>
        </div>

        
       
      </div>
    </section>
  );
};

export default Hero;
