import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = ({ onFinish }) => {
  React.useEffect(() => {
    const t = setTimeout(onFinish, 1800);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.4, duration: 0.4 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-14 h-14 rounded-full border-4 border-primary-500 border-t-transparent"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white font-medium"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PageLoader;
