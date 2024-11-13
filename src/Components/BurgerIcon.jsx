
import { motion } from 'framer-motion';

const BurgerIcon = ({ active }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.6,
        duration: 0.5,
        ease: 'easeInOut',
      }}
      className={`fixed top-24 z-50 transition-colors rounded-full right-7 ${
        !active ? '' : ''
      }`}
    >
      <motion.button
        initial={false}
        animate={active ? 'open' : 'closed'}
        className="relative h-12 w-12 rounded-full bg-primary3 ring-1  transition-colors "
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-7 bg-white"
          style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-7 bg-white"
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-4 bg-white"
          style={{
            x: '-90%',
            y: '50%',
            bottom: '10%',
            left: 'calc(50% + 10px)',
          }}
        />
      </motion.button>
    </motion.div>
  );
};

export default BurgerIcon;

const VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['30%', '50%', '50%'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '30%'],
    },
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg'],
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg'],
    },
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      bottom: ['37%', '50%', '50%'],
      opacity: [1, 0.5, 0],

      left: '50%',
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      bottom: ['50%', '55%', '30%'],
      opacity: [1, 1, 1],

      left: 'calc(50% + 12px)',
    },
  },
};