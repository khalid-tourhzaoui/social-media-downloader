
import SecName from './SecName';
import { FaHome } from 'react-icons/fa';
import {  motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Transition from './Transition';

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
  show: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' , delay:0.7 } },
};

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <Transition key={6} />
      <motion.div
        key={7}
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="cursor-custom relative pt-20 flex flex-col  space-y-20 md:space-y-14 items-center md:w-3/5 pl-10 mt-16 md:mt-0 md:pl-0 w-full h-full md:h-screen md:pt-32"
      >
        <div className="self-start -mt-9 flex justify-start ">
          <SecName secName="Introduce">
            <FaHome />
          </SecName>
        </div>

        <motion.div
          variants={staggerItem}
          className="space-y-5 self-start flex justify-center flex-col items-start"
        >
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}