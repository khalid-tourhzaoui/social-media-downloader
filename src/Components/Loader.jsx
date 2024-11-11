/* eslint-disable react/prop-types */
import '../static/Loader.css';
import Avatar from '../assets/avatar.png';
import {motion} from 'framer-motion';
const Loader = ({ hiddenText  }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="flex flex-col space-y-8 justify-center items-center">
        {hiddenText ? (
          <div className="loader pr-28 md:pr-0 md:pl-[25rem] ">
            <div className="loader__balls">
              <div className="loader__balls__group">
                <div className="ball item1"></div>
                <div className="ball item1"></div>
                <div className="ball item1"></div>
              </div>
              <div className="loader__balls__group">
                <div className="ball item2"></div>
                <div className="ball item2"></div>
                <div className="ball item2"></div>
              </div>
              <div className="loader__balls__group">
                <div className="ball item3"></div>
                <div className="ball item3"></div>
                <div className="ball item3"></div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
          >
            <div className="loader2 drop-shadow-back4 flex items-center justify-center pt-3 pr-1">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
                src={Avatar}
                alt="logo"
                width={140}
              />
            </div>
            <div data-glitch="Welcome..." className="glitch">
              Welcome...
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Loader;
