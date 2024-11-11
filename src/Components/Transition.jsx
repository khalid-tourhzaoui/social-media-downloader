import { motion } from 'framer-motion';

const transitionAnimation = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: { x: 0, width: 0 },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className=" fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-primary4"
        variants={transitionAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
      ></motion.div>
      <motion.div
        className=" fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-primary3"
        variants={transitionAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
      ></motion.div>{' '}
      <motion.div
        className=" fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary2"
        variants={transitionAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
      ></motion.div>
    </>
  );
};

export default Transition;