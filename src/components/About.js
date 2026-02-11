import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const summary =
    "I'm a passionate Frontend Developer with strong expertise in HTML, CSS, JavaScript, and React.js. I specialize in creating responsive, interactive, and performance-optimized web applications. I have hands-on experience in building form validations, reusable UI components, and deploying production-ready applications using GitHub and Vercel. I enjoy transforming UI designs into functional, user-friendly interfaces and continuously improving my skills with modern frontend technologies.";

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-800/80 rounded-2xl p-8 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            {summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
