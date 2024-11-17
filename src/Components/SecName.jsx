import { motion, AnimatePresence } from 'framer-motion';

export default function SecName({ secName, children }) {
  return (
    <AnimatePresence>
      <motion.div
        className={`self-start backdrop-blur-[3px] hover:text-primary1 transition-colors ease-in-out font-semibold  border 
          border-white px-7  rounded-full flex justify-around items-center  space-x-2 text-white  ${
          secName === 'Projects' ? 'py-1.5' : 'py-1'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay:0.4 ,  duration: 1, ease: 'easeInOut' }}
      >
        {children}{' '}
        <motion.div
          whileHover={{ textShadow: '1px 2px 9px rgba(111, 105, 253, 1)' }}
        >
          <span className={`inline-flex`}>
            {secName}
          </span>
        </motion.div>{' '}
      </motion.div>
    </AnimatePresence>
  );
}