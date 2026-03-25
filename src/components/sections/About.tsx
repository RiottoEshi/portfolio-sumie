// src/components/sections/About.tsx
'use client';

import { motion } from 'framer-motion';
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
      <div className="text-pink-300/40">
        <Sakura />
      </div>

      {/* Дерево */}
      <SakuraTree position="left" opacity={0.08} color="#000000" />

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
            Обо мне
          </h2>
          <div className="w-24 h-px bg-black mx-auto opacity-30" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Левая колонка */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="content-box"
          >
            <h3 className="text-3xl font-serif font-light mb-6 text-black">Путь разработчика</h3>
            
            <div className="space-y-4 font-light text-gray-700 mb-8">
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
            <div>
              <h4 className="text-2xl font-serif font-light mb-6 text-black">Опыт работы</h4>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 border-l-4 border-black pl-6 py-4 p-4 rounded"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ x: 5, backgroundColor: '#f0f0f0' }}
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
            className="content-box"
          >
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
                  <h4 className="text-sm font-light tracking-widest mb-4 text-gray-600 uppercase border-b-2 border-gray-200 pb-2">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-5 py-2.5 border-2 border-black text-black text-sm font-light hover:bg-black hover:text-white transition-all duration-300 cursor-default rounded"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}