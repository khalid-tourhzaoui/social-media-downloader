/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
export default function Paragraphe({ partie }) {
  if (partie == 0)
    return (
      <motion.div
        className="text-start self-start w-[75%] font-customFont text-1xl text-purple-100 backdrop-blur-[3px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        I am dedicated to harnessing technology to enhance people's lives and turn visionary ideas into reality. 
        My passion lies in building scalable and high-performance web applications that not only meet the demands of modern users 
        but also contribute to creating impactful digital experiences.
      </motion.div>
    );
  else if (partie == 1)
    return (
      <motion.div
        className="text-start w-5/6 font-customFont text-sm md:text-base text-purple-100  backdrop-blur-[3px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        I&apos;m a recent graduate in Computer Engineering and Digital Governance from the Higher School of Technology in Kénitra 
        <strong>(EST)</strong>,with a strong background in Web Development. I also hold a specialized technician diploma in Digital 
        Development (Web Full Stack) from <strong>OFPPT</strong>. Passionate about both software engineering and web technologies,
        I focus on writing clean, efficient, and reliable code. My primary motivation as a developer is to create impactful digital
        solutions that help people and improve their everyday experiences.
      </motion.div>
    );
}