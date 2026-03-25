// src/components/sections/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Code, Palette, Globe, Database } from 'lucide-react';
import SumieCircle from '../ui/SumieCircle';
import Sakura from './Sakura';
import SakuraTree from './SakuraTree';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Полнофункциональная платформа электронной коммерции с админ-панелью, корзиной и интеграцией платежей Stripe.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
    icon: Globe,
    features: ['Онлайн оплата', 'Админ-панель', 'API'],
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Приложение для управления задачами с реальным временем, командной работой и аналитикой.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#',
    icon: Code,
    features: ['Real-time', 'Команды', 'Аналитика'],
  },
  {
    id: 3,
    title: 'Portfolio Template',
    description: 'Минималистичный шаблон портфолио для творческих профессионалов с анимациями.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: '#',
    githubUrl: '#',
    icon: Palette,
    features: ['Анимации', 'SEO', 'Адаптив'],
  },
  {
    id: 4,
    title: 'API Dashboard',
    description: 'Панель управления для мониторинга и анализа API запросов с графиками и статистикой.',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'Redis'],
    demoUrl: '#',
    githubUrl: '#',
    icon: Database,
    features: ['Мониторинг', 'Графики', 'Кэширование'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-white relative overflow-hidden">
      {/* Сакура */}
      <div className="text-pink-300/40">
        <Sakura />
      </div>

      {/* Дерево */}
      <SakuraTree position="right" opacity={0.08} color="#000000" />

      {/* Декор */}
      <div className="absolute top-20 left-10 opacity-5 hidden lg:block">
        <SumieCircle size="xl" variant="outline" />
      </div>

      <div className="sumie-space relative z-10 w-full">
        {/* Заголовок */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 text-black">
            Проекты
          </h2>
          <div className="w-24 h-px bg-black mx-auto opacity-30 mb-4" />
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
            Избранные работы, демонстрирующие подход к разработке и дизайну
          </p>
        </motion.div>

        {/* Сетка проектов */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.id}
                className="content-box"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                {/* Иконка и заголовок */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-black rounded-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-light text-black mb-2 group-hover:opacity-70 transition-opacity">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.demoUrl}
                      className="p-2 text-gray-600 hover:text-black hover:bg-gray-200 rounded transition-colors"
                      aria-label="Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 text-gray-600 hover:text-black hover:bg-gray-200 rounded transition-colors"
                      aria-label="GitHub"
                    >
                      <GitBranch size={20} />
                    </a>
                  </div>
                </div>

                {/* Описание */}
                <p className="text-gray-700 font-light text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Фичи */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-xs font-light rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Технологии */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-black text-white text-xs font-light rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Линия */}
                <div className="w-full h-px bg-gray-300 group-hover:bg-black transition-colors duration-500" />
              </motion.article>
            );
          })}
        </div>

        {/* Кнопка GitHub */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/ваш-логин"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 border-2 border-black text-black font-light hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
          >
            <GitBranch size={20} />
            <span>Больше проектов на GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}