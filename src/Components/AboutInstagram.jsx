import SecName from "./SecName";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import Transition from "./Transition";
import { useEffect, useRef, useState } from "react";
import { getInstagram,getTikTokData } from "../API/Data"; // Ensure this function returns data properly

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { x: 200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.3 },
  },
};

export default function AboutInstagram() {
  const form = useRef();
  const [userUrl, setUserUrl] = useState('');
  const [errors, setErrors] = useState({ url: false });
  const [focus, setFocus] = useState({ url: false });
  const [data, setData] = useState(null); // Store fetched data
  const [send, setSend] = useState('Send Message!');

  const handleChange = (e) => {
    const value = e.target.value;
    setUserUrl(value);
    setErrors({ url: value.trim() === '' });
  };

  const handleFocus = (field) => {
    setFocus({ ...focus, [field]: true });
  };

  const handleBlur = (field) => {
    setFocus({ ...focus, [field]: false });
  };

  const sub = async (e) => {
    e.preventDefault();
    if (!userUrl.trim()) {
      setErrors({ url: 'URL is required' });
      return;
    }

    try {
      const response = await getTikTokData(userUrl); // Await data from API
      setData(response);
      console.log(response); // Log response for debugging
      setSend('Sending...');
      setTimeout(() => setSend('Send Message!'), 1000);
    } catch (error) {
      console.error('Error fetching Instagram data:', error);
      setErrors({ url: 'Error fetching Instagram data' });
    }
  };

  useEffect(() => {
    form.current.reset();
    setUserUrl('');
    setErrors({ url: false });
  }, []);

  
  return (
    <AnimatePresence mode="wait">
      <Transition key={1} />
      <motion.div
        key={2}
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="cursor-custom relative flex flex-col space-y-12 items-center md:w-3/5 w-full h-full md:mb-16  
        mt-16 md:mt-0 pt-12 md:pt-24 ml-20"
      >
        <SecName secName="instagram">
          <FaInstagram className="text-xl" />
        </SecName>

        <motion.div
          variants={staggerItem}
          className="space-y-3 self-start flex justify-center flex-col items-start "
        >
          <div
            className="backdrop-blur-[3px] lg:text-3xl xl:text-3xl md:text-2xl text-me uppercase font-semibold tracking-wide -mt-2 
          text-purple-100 transition-all duration-500"
          >
            Download IG <span className="text-primary3">Stories & Reels</span>
          </div>
        </motion.div>
        <form className="space-y-4 self-start flex justify-center flex-col items-start" onSubmit={sub} ref={form}>
          <motion.div
            className={`flex flex-col  text-white ${
              focus.url ? "backdrop-blur-[3px]" : ""
            }`}
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <input
              id="url"
              value={userUrl}
              onChange={(e) => handleChange(e, setUserUrl, "url")}
              name="user_url"
              type="text"
              onFocus={() => handleFocus("url")}
              onBlur={() => handleBlur("url")}
              className={`border-b border-gray-300 pt-2 focus:border-b-2 focus:border-primary2 transition-colors 
                focus:outline-none peer bg-inherit w-full text-md ${
                errors.url ? "border-red-500" : ""
              }`}
            />
            <label
              htmlFor="url"
              className={`absolute left-0 cursor-text transition-all ${
                userUrl !== "" ? "-top-4 text-md text-primary2 " : "top-1"
              } peer-focus:text-md peer-focus:-top-4 peer-focus:text-primary2 `}
            >
              url
            </label>
            {errors.url && (
              <p className="self-start text-red-500 text-xs">
                * url is required
              </p>
            )}
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
          </motion.div>
          <motion.div
            className="flex justify-start space-x-7"
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <motion.button
              type="submit"
              className="backdrop-blur-md after:backdrop-blur-md before:backdrop-blur-md  group group-hover:before:duration-500 
              group-hover:after:duration-500 after:duration-500 border-primary1 shadow-shad hover:shadow-primary3 hover:border-primary5 
              hover:ring-2 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 
              underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left 
              hover:decoration-2 bg-transparent relative bg-neutral-800 pl-3 h-14 w-56 border-2 text-left p-1 text-gray-50 text-base 
              font-bold rounded-lg overflow-hidden before:absolute before:w-10 before:h-10 before:content[''] before:right-1 
              before:top-1 before:z-10 before:bg-red-700 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-16 
              after:h-16 after:content[''] after:bg-primary2 hover:text-white after:right-8 after:top-3 after:rounded-full after:blur-lg"
            >
              {send}
            </motion.button>
          </motion.div>
        </form>
      
      </motion.div>
    </AnimatePresence>
  );
}