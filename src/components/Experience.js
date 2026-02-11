import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    title: "Practicing Frontend Development with real-world UI projects",
    desc: "Hands-on experience building responsive interfaces and interactive components.",
  },
  {
    title: "Building reusable components and validation systems",
    desc: "Creating maintainable form validations and scalable UI patterns.",
  },
  {
    title: "Learning modern React architecture and deployment workflows",
    desc: "GitHub, Vercel, and production-ready deployment pipelines.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12"
        >
          Experience & Learning
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-violet -translate-x-1/2" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className={"relative flex gap-8 mb-12 last:mb-0 " + (i % 2 === 1 ? "md:flex-row-reverse" : "")}
            >
              <div className="flex-1 md:flex-[0_0_calc(50%-2rem)]" />
              <div className="flex-1 md:flex-[0_0_calc(50%-2rem)] pl-12 md:pl-0">
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary-500 -translate-x-1/2 top-1.5 mt-0.5" />
                <div className="bg-white dark:bg-slate-800/80 rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50">
                  <h3 className="font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
