import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', icon: '📄' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Bootstrap', icon: '❄️' },
  { name: 'Tailwind CSS', icon: '⌛' },
  { name: 'JavaScript (ES6+)', icon: '⚡' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'SQL', icon: '🖇️' },
  { name: 'Git & GitHub', icon: '🔀' },
  { name: 'API', icon: '🚀' },
  { name: 'JSON', icon: '📱' },
  { name: 'UI/UX Basics', icon: '✨' },

];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-white dark:bg-slate-800/80 rounded-xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 flex flex-col items-center gap-3 transition-shadow hover:shadow-xl"
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="font-medium text-slate-700 dark:text-slate-200 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
