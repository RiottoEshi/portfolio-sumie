// src/components/sections/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import SumieCircle from '../ui/SumieCircle';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Полнофункциональная платформа электронной коммерции с админ-панелью и интеграцией платежей.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
    image: '/projects/project-1.jpg',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Приложение для управления задачами с реальным временем и командной работой.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#',
    image: '/projects/project-2.jpg',
  },
  {
    id: 3,
    title: 'Portfolio Template',
    description: 'Минималистичный шаблон портфолио для творческих профессионалов.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: '#',
    githubUrl: '#',
    image: '/projects/project-3.jpg',
  },
  {
    id: 4,
    title: 'API Dashboard',
    description: 'Панель управления для мониторинга и анализа API запросов.',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'Redis'],
    demoUrl: '#',
    githubUrl: '#',
    image: '/projects/project-4.jpg',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-mist relative">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 opacity-10 hidden lg:block">
        <SumieCircle size="xl" variant="outline" />
      </div>

      <div className="sumie-space">
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 sumie-ink">
            Проекты
          </h2>
          <div className="w-16 h-px bg-ink mx-auto opacity-30" />
          <p className="mt-4 text-stone font-light max-w-2xl mx-auto">
            Избранные работы, демонстрирующие подход к разработке и дизайну
          </p>
        </motion.div>

        {/* Сетка проектов */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group bg-paper border border-stone p-6 hover:border-ink transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Заголовок проекта */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-serif font-light group-hover:opacity-70 transition-opacity">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    className="p-2 hover:bg-ink hover:text-paper transition-colors"
                    aria-label="Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 hover:bg-ink hover:text-paper transition-colors"
                    aria-label="GitHub"
                  >
                    <GitBranch size={18} />
                  </a>
                </div>
              </div>

              {/* Описание */}
              <p className="text-stone font-light text-sm mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Технологии */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-mist text-xs font-light tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Декоративная линия */}
              <div className="w-full h-px bg-stone group-hover:bg-ink transition-colors duration-500" />
            </motion.article>
          ))}
        </div>

        {/* Призыв к действию */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/RiottoEshi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-ink font-light hover:bg-ink hover:text-paper transition-all duration-300"
          >
            <GitBranch size={18} />
            <span>Больше на GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}