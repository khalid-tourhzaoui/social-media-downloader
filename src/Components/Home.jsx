import SecName from "./SecName";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Transition from "./Transition";
import { useEffect, useState } from "react";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delay: 0.5,
    },
  },
};

const staggerItem = {
  hidden: { x: 200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 0.7 },
  },
};

export default function Home() {
  const WORDS = ["FACEBOOK.", "INSTAGRAM", "YOUTUBE", "TIKTOK", "TWITTER"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [timeoutActive, setTimeoutActive] = useState(false);

  const typeSpeed = 100;
  const deleteSpeed = 200;
  const displayDelay = 1000;

  const getRandomChar = () => {
    const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return ALPHA[Math.floor(Math.random() * ALPHA.length)];
  };

  const getRandomChars = (length) => {
    return Array.from({ length }, () => getRandomChar()).join("");
  };

  useEffect(() => {
    const handleType = () => {
      const currentWord = WORDS[currentWordIndex];
      const currentLength = typedText.length;

      if (isDeleting) {
        if (currentLength > 0) {
          setTypedText(currentWord.substring(0, currentLength - 1));
          setDisplayText(currentWord.substring(0, currentLength - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
        }
      } else {
        if (currentLength < currentWord.length) {
          setTypedText(currentWord.substring(0, currentLength + 1));
          const randomChars = getRandomChars(
            currentWord.length - currentLength - 1
          );
          setDisplayText(
            currentWord.substring(0, currentLength + 1) + randomChars
          );
        } else {
          if (!timeoutActive) {
            setTimeoutActive(true);
            setTimeout(() => {
              setIsDeleting(true);
              setTimeoutActive(false);
            }, displayDelay);
          }
        }
      }
    };

    if (!timeoutActive) {
      const timeoutId = setTimeout(
        handleType,
        isDeleting ? deleteSpeed : typeSpeed
      );
      return () => clearTimeout(timeoutId);
    }
  }, [
    typedText,
    isDeleting,
    currentWordIndex,
    timeoutActive,
    WORDS,
    getRandomChars,
  ]);

  useEffect(() => {
    const cursorBlink = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(cursorBlink);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <Transition key={1} />
      <motion.div
        key={2}
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="cursor-custom relative pt-20 flex flex-col  space-y-20 md:space-y-14 items-center md:w-3/5 
        pl-10 mt-16 md:mt-0 md:pl-0 w-full h-full md:h-screen md:pt-32"
      >
        <div className="self-start -mt-6 flex justify-start ">
          <SecName secName="Introduce">
            <FaHome />
          </SecName>
        </div>

        <motion.div
          variants={staggerItem}
          className="space-y-5 self-start flex justify-center flex-col items-start"
        >
          <div className="w-full text-start">
            <h1 className="-mt-6 text-white text-me lg:text-3xl xl:text-3xl font-customFont font-semibold transition-all
               duration-500 backdrop-blur-[3px] uppercase">
              Download content from :
              <span
                className="text-me lg:text-3xl xl:text-3xl font-customFont text-primary1 font-semibold transition-all
               duration-500 backdrop-blur-[3px]"
              >
                  {displayText}
                <span className="inline-flex overflow-hidden text-primary1">
                  {blink ? "|" : "\u00A0"}
                </span>
              </span>
            </h1>
            <h2
              className="lg:text-3xl xl:text-3xl text-me uppercase font-semibold tracking-wide mt-2 text-purple-100 
            transition-all duration-500 backdrop-blur-[3px]"
            >
              hey,it&apos;s
              <span className="font-semibold text-primary1 tracking-normal ml-2">
                KHALID
              </span>
            </h2>
          </div>
          {/* <Paragraphe partie="0" /> */}
          <motion.div
            className="text-start leading-9 self-start w-[80%] font-customFont text-xl text-purple-100 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Welcome to our Social Media Downloader, where you can effortlessly
            download your favorite videos, images, and content from top social
            media platforms like Facebook, Instagram, TikTok, and Twitter.
            Simply paste the link of the post you want to download, choose your
            desired format (such as MP4 or MP3), and enjoy high-quality content
            saved directly to your device—ready for offline viewing anytime,
            anywhere.
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
