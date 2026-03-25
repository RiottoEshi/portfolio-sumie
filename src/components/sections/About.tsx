// src/components/sections/About.tsx
'use client';

import { motion } from 'framer-motion';
import SumieCircle from '../ui/SumieCircle';
import SumieBranch from '../ui/SumieBranch';

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
    <section id="about" className="min-h-screen py-20 bg-paper relative">
      {/* Декоративные элементы */}
      <div className="absolute top-40 right-20 opacity-20 hidden lg:block">
        <SumieCircle size="lg" variant="outline" />
      </div>
      
      <div className="absolute bottom-20 left-10 opacity-30 hidden lg:block">
        <SumieBranch direction="vertical" length="long" />
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
            Обо мне
          </h2>
          <div className="w-16 h-px bg-ink mx-auto opacity-30" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Левая колонка — Описание */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-light mb-6">Путь разработчика</h3>
            
            <div className="space-y-6 font-light text-stone">
              <p>
                Я создаю цифровые продукты на пересечении технологии и эстетики. 
                Каждый проект — это возможность выразить идею через чистый код 
                и продуманный дизайн.
              </p>
              
              <p>
                Мой подход сочетает японскую философию минимализма с современными 
                веб-технологиями. Я верю, что меньше — значит больше, и что каждый 
                элемент должен иметь значение.
              </p>

              <p>
                Открыт к сотрудничеству над интересными проектами, где важны 
                качество, внимание к деталям и художественное видение.
              </p>
            </div>

            {/* Опыт работы */}
            <div className="mt-10">
              <h4 className="text-lg font-serif font-light mb-4">Опыт работы</h4>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="border-l border-stone pl-4 py-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-sm font-light text-ink">{exp.role}</div>
                    <div className="text-xs text-stone">{exp.company} • {exp.year}</div>
                    <div className="text-xs text-stone mt-1">{exp.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Правая колонка — Навыки */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-light mb-6">Навыки</h3>
            
            <div className="space-y-8">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.15 }}
                >
                  <h4 className="text-sm font-light tracking-wide mb-3 text-stone uppercase">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 border border-stone text-sm font-light hover:bg-ink hover:text-paper transition-all duration-300 cursor-default"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: groupIndex * 0.15 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Декоративный элемент */}
            <div className="mt-12 flex justify-center">
              <SumieCircle size="md" variant="double" animate />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}