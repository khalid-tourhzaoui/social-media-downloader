import { motion } from 'framer-motion';
import styles from '../static/bubble.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
  const Me = () => 'Social Media Downloader'.split('');
  return (
    <div className="fixed z-20 top-0 left-0 h-14 md:h-20 w-full flex justify-center items-center md:justify-start border-b-2
     border-primary3 backdrop-blur-md  md:backdrop-blur-[3px] bg-black/10 md:bg-transparent shadow-shad shadow-primary3
      md:border-0 md:shadow-none">
      <div className="flex justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: 'spring',
            stiffness: 100,
          }}
          className="text-center text-3xl md:text-5xl text-indigo-300 md:ml-20 font-medium md:font-thin"
        >
          <Link to="/">
            {Me().map((child, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.15 }}
                className={`${styles.hoverText}`} 
                
              >
                {child}
              </motion.span>
            ))}
          </Link>
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -20, rotate: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4 + Me().length * 0.15,
          }}
          className="text-red-700 self-end text-sm mb-1"
        >
        </motion.h2>
      </div>
    </div>
  );
};

export default Header;
