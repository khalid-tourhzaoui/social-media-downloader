import { useState } from 'react';
import { IoIosArrowDropup } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const ScrollButton = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  useMotionValueEvent(scrollY, 'change', latest => {
    if (parseInt(latest) > 20) setIsScrolled(true);
    else setIsScrolled(false);
  });

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={
            'fixed cursor-pointer bottom-24 right-4 bg-transparent backdrop-blur-xl text-6xl shadow-shad text-primary3 rounded-full z-30 hover:text-primary4'
          }
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.7 }}
        >
          <IoIosArrowDropup />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollButton;