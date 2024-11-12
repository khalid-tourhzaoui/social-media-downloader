import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import myLogo from "../assets/avatar.png";
import SocialMediaIcon from "./SocialMediaIcon";
import ScrollerVaul from "./ScrollerVaul";
import FooterImg from "../assets/FooterImg.png";

const Header = () => {
  const [isDivVisible, setIsDivVisible] = useState(true);
  const divRef = useRef(null);

  useEffect(() => {
    const checkVisibility = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();

        setIsDivVisible(rect.top + rect.height == 0);
      }
    };

    checkVisibility();
    window.addEventListener("resize", checkVisibility);
    window.addEventListener("scroll", checkVisibility);

    return () => {
      window.removeEventListener("resize", checkVisibility);
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={divRef}
        className="hidden backdrop-blur-sm md:flex cursor-custom ring-1 ring-primary3 border-slate-300 flex-col justify-between 
        space-y-5 items-center rounded-3xl shadow-shad md:fixed px-9 py-4 mt-24 mb-8 md:top-16 md:left-5 md:px-3 md:w-2/6 lg:w-1/3  
        lg:left-7 xl:w-1/4 xl:left-28 xl:py-6"
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
          stiffness: 40,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src={myLogo} className="w-30 drop-shadow-back" alt="Logo" />
        </motion.div>

        <motion.div
          className="text-white text-center text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          DEVELOPED BY  :{" "}
          <span className="md:text-lg">KHALID TOURHZAOUI</span>
          <br />
          BASED IN  :{" "}
          <span className="md:text-lg">TIFLET, MOROCCO</span>
          
        </motion.div>
        <SocialMediaIcon text="white" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Link
            className={`group font-semibold uppercase shadow-md shadow-primary3 relative inline-block overflow-hidden 
              rounded bg-primary1 ring-2 ring-white hover:ring-0 px-6 py-2 text-lg text-slate-800 hover:text-white 
              focus:outline-none focus:ring active:bg-indigo-600 active:text-white hover:scale-105 transition-all 
              duration-500 hover:shadow-shad hover:shadow-primary1`}
            to={"https://khalid-tourhzaoui.vercel.app/contactme"} target="_blank"
          >
            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-500 group-hover:w-full"></span>
            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-500 group-hover:h-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-500 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-500 group-hover:h-full"></span>
            Contact Me!
          </Link>
        </motion.div>
              <motion.div
                className="text-slate-300 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                &copy; 2024 Khalid Tourhzaoui All&nbsp;Rights&nbsp;Reserved
              </motion.div>
      </motion.div>

      {isDivVisible && (
        <div
          className="fixed flex justify-center z-30 bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 pb-4 h-36 
          pt-20 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${FooterImg})`,
          }}
        >
          <ScrollerVaul />
        </div>
      )}
    </>
  );
};

export default Header;
