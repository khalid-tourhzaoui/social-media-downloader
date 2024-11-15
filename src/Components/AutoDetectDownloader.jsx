import SecName from "./SecName";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import Transition from "./Transition";
import { useEffect, useRef, useState } from "react";
import { getYoutubeData,getSocialMediaData} from "../API/Data";
import DataResult from "./DataResult";

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
export default function AutoDetectDownloader({ platform }) {
  const platformIcons = {
    instagram: <FaInstagram className="text-xl" />,
    facebook: <FaFacebook className="text-xl" />,
    tiktok: <FaTiktok className="text-xl" />,
    youtube: <FaYoutube className="text-xl" />,
    twitter: <FaTwitter className="text-xl" />,
    instagramTitle: "Download IG Stories & Reels",
    facebookTitle: "Download Facebook Video",
    tiktokTitle: "Download Tiktok Videos",
    youtubeTitle: "Download Youtube Videos",
    twitterTitle: "Download Twitter Videos",
  };
  const form = useRef();
  const [userUrl, setUserUrl] = useState("");
  const [errors, setErrors] = useState({ url: false });
  const [data, setData] = useState(null);
  const [send, setSend] = useState("Download");
  const [focus, setFocus] = useState({ url: false });

  const handleChange = (e) => {
    const value = e.target.value;
    setUserUrl(value);
    setErrors({ url: value.trim() === "" });
  };

  const handleFocus = (field) => {
    setFocus({ ...focus, [field]: true });
  };

  const handleBlur = (field) => {
    setFocus({ ...focus, [field]: false });
  };

  const sub = async (e) => {
    e.preventDefault();
    if (!userUrl.trim() || !platform) {
      setErrors({ url: "Valid URL is required" });
      return;
    }

    setSend("Downloading...");

    try {
      let response;
      switch (platform) {
        case "youtube":
          response = await getYoutubeData(userUrl);
          break;
        case "instagram":
          response = await getSocialMediaData(userUrl);
          break;
        default:
          throw new Error("Unsupported platform");
      }

      // Format data if it's not an array
      // const formattedData = Array.isArray(response) ? response : [response];
      setData(response);
    } catch (error) {
      console.error(`Error fetching data for ${platform}:`, error);
      setErrors({ url: `Error fetching data from ${platform}` });
    } finally {
      setSend("Download");
    }
  };

  useEffect(() => {
    form.current.reset();
    setUserUrl("");
    setErrors({ url: false });
    setData(null); // Clear data when component re-renders
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        <Transition key={1} />
        <motion.div
          key={2}
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="cursor-custom relative flex flex-col space-y-12 items-start md:w-3/5 w-full h-full md:mb-16  
        mt-16 md:mt-0 pt-12 md:pt-24 ml-20"
        >
          <SecName secName={platform || "unknown"}>
            {platform ? platformIcons[platform] : null}
          </SecName>

          <motion.div
            variants={staggerItem}
            className="space-y-3 self-start flex justify-center flex-col items-start "
          >
            <div
              className="backdrop-blur-[3px] lg:text-3xl xl:text-3xl md:text-2xl text-me uppercase font-semibold tracking-wide -mt-2 
          text-purple-100 transition-all duration-500"
            >
              {platform ? platformIcons[`${platform}Title`] : "Unknown"}
            </div>
          </motion.div>
          <form
            className="space-y-4 self-start flex justify-center flex-col items-start"
            onSubmit={sub}
            ref={form}
          >
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
            ></motion.div>
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
          {/* <Service/> */}
          {data &&  <DataResult data={data} />}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
