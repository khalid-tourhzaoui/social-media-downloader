import SecName from './SecName';
import {  motion } from 'framer-motion';
import {  FaInstagram, FaTiktok } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import Transition from './Transition';

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
  show: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' , delay:0.3 } },
};

export default function AboutTikTok() {
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
          <FaTiktok className='text-xl' />
        </SecName>

        <motion.div
          variants={staggerItem}
          className="space-y-3 self-start flex justify-center flex-col items-start "
        >
          <div className="backdrop-blur-[3px] lg:text-3xl xl:text-3xl md:text-2xl text-start uppercase font-semibold tracking-wide mt-2 
          text-purple-100 transition-all duration-500">
          Download IG <span className="text-primary3">Stories & Reels</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}