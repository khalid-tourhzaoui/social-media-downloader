import SocialMedias from './SocialMedias';
import { motion } from 'framer-motion';

const beforeAnimation = {
  hidden: {
    top: '1em',
    right: '1.9em',
  },
  visible: {
    top: ['1em', '-1em', '-0.6em'],
    right: ['1.9em', '-0.5em', '0.3em'],
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      times: [0.1, 0.5, 1],
    },
  },
};
const SocialMediaIcon = ({text}) => {
  return (
    <div className="relative flex items-start space-x-3 text-3xl">
      {SocialMedias.map(socialMedia => (
        <motion.div
          key={socialMedia.id}
          className={`hover:text-${text} hover:shadow-primary3 text-primary1 backdrop-blur-[3px] hover:shadow-shad shadow-sm 
          p-2 rounded-md hover:scale-110 relative overflow-hidden ring-2 ring-offset-0 ring-primary3 hover:ring-primary3 transition-all
           duration-500 cursor-pointer`}
          whileHover="visible"
        >
          <a href={socialMedia.url}>{socialMedia.icon}</a>
          <motion.div
            className="absolute -z-10 w-7 h-16 bg-primary1 -rotate-45"
            style={{ top: '1em', right: '1.9em' }}
            variants={beforeAnimation}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SocialMediaIcon;