// src/components/sections/About.tsx
'use client';

import { motion } from 'framer-motion';
import SumieCircle from '../ui/SumieCircle';
import Sakura from './Sakura';
import SakuraTree from './SakuraTree';

const skills = [
  { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'REST API'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code'] },
];

const experience = [
  {
    year: '2024—2026',
    role: 'Senior Frontend Developer',
    company: 'Tech Company',
    description: 'Разработка масштабируемых веб-приложений',
  },
  {
    year: '2022—2024',
    role: 'Full-stack Developer',
    company: 'Startup Lab',
    description: 'Создание MVP и прототипов продуктов',
  },
  {
    year: '2020—2022',
    role: 'Junior Developer',
    company: 'Digital Agency',
    description: 'Вёрстка и поддержка клиентских проектов',
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-white relative overflow-hidden">
      {/* Сакура */}
      <Sakura />

      {/* Дерево */}
      <SakuraTree position="left" opacity={0.12} />

      <div className="sumie-space relative z-10 max-w-6xl mx-auto">
        {/* Заголовок */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 text-black">
            Обо мне
          </h2>
          <div className="w-24 h-px bg-black mx-auto opacity-30" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Левая колонка */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-gray-50 p-8 rounded-lg border border-gray-200"
          >
            <h3 className="text-3xl font-serif font-light mb-8 text-black">Путь разработчика</h3>
            
            <div className="space-y-6 font-light text-gray-800">
              <p>
                Я создаю цифровые продукты на пересечении технологии и эстетики. 
                Каждый проект — это возможность выразить идею через чистый код 
                и продуманный дизайн.
              </p>
              
              <p>
                Мой подход сочетает японскую философию минимализма с современными 
                веб-технологиями. Я верю, что меньше — значит больше.
              </p>

              <p>
                Открыт к сотрудничеству над интересными проектами.
              </p>
            </div>

            {/* Опыт работы */}
            <div className="mt-12">
              <h4 className="text-2xl font-serif font-light mb-6 text-black">Опыт работы</h4>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-gray-300 pl-6 py-4 bg-white p-4 rounded shadow-sm"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ x: 10, borderColor: '#000' }}
                  >
                    <div className="text-lg font-light text-black">{exp.role}</div>
                    <div className="text-sm text-gray-600 mt-1">{exp.company} • {exp.year}</div>
                    <div className="text-sm text-gray-600 mt-2">{exp.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Правая колонка */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-3xl font-serif font-light mb-8 text-black">Навыки</h3>
              
              <div className="space-y-8">
                {skills.map((skillGroup, groupIndex) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.2, duration: 0.6 }}
                  >
                    <h4 className="text-sm font-light tracking-widest mb-4 text-gray-600 uppercase border-b border-gray-300 pb-2">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-5 py-2.5 border-2 border-black text-black text-sm font-light hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: groupIndex * 0.2 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}