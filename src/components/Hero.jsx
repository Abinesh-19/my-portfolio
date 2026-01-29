import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = ['Frontend Developer', 'React Developer', 'UI Developer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (text.length > 0) {
            setText(current.slice(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const cursor = '|';

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-primary-950/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/20 dark:bg-accent-violet/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-2">
            Abinesh G
          </h1>
          <div className="h-10 sm:h-12 flex items-center justify-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300">
              {text}
              <span className="animate-pulse">{cursor}</span>
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            Building Responsive, Scalable and User-Friendly Web Interfaces
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-xl border-2 border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
