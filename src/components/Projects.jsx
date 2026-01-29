import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'React Form Validation App',
    description:
      'A responsive React-based form validation application that validates user inputs such as email, password, and required fields with real-time error handling and clean UI feedback.',
    techStack: ['React.js'],
    liveUrl: 'https://react-formvalidation-kappa.vercel.app/',
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
  },
  {
    title: 'ReactRouter Form Validation App',
    description:
      'A responsive React-based using Router form validation application that validates user inputs such as Name,Email,number and required fields with real-time error handling and clean UI feedback.',
    techStack: ['React.js'],
    liveUrl: 'https://reactrouter-woad.vercel.app/',
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
  },
  {
    title: 'React Checkbox Validation App',
    description:
      'A React application that handles checkbox selection validation with user-friendly alerts and form submission control.',
    techStack: ['React.js'],
    liveUrl: 'https://react-check-box.vercel.app/',
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  },
  {
    title: 'Frontend UI Template Website',
    description:
      'A modern frontend template built using HTML and CSS with smooth animations and responsive layout design.',
    techStack: ['HTML', 'CSS', 'Animation'],
    liveUrl: 'https://front-end-clone.vercel.app/',
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-slate-800/80 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium text-center hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
