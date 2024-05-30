import { Link } from "react-router-dom";
import { socialLinks } from "../constants";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <>  
      <footer className="py-3 flex justify-center items-center flex-col bg-black-100">
        <h1 className="text-2xl font-bold p-2">Siddhu From Srikakulam</h1>
        <ul className="list-none md:flex flex-row gap-10 mb-5 mt-3">
          {/* Conditional rendering based on screen size */}
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                "text-white"
              } hover:text-white text-[18px] font-medium cursor-pointer hidden sm:block`}
              // ^^^ Add the 'hidden sm:block' classes here
            >
              <a href={`#${nav.id}`}> {nav.title} </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 items-center ">
          <p>+91 93988 48215</p>
          <span>|</span>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <Link to={link.link} key={link.name}>
                <div className="rounded-md bg-white">
                  <img src={link.icon} alt={link.name} width={24} height={24} />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: "grey", width: "100%", height: "2px", borderRadius: "10px", margin: "20px 0px" }}></div>
        <div>Copyright @ 2023 - All rights reserved</div>
      </footer>
    </>
  );
};

export default Footer;
