// src/components/sections/Services.tsx
'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Веб-разработка',
    description: 'Создание современных веб-приложений с использованием последних технологий',
    skills: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: Palette,
    title: 'UI/UX Дизайн',
    description: 'Продуманный дизайн с акцентом на удобство и эстетику',
    skills: ['Figma', 'Adobe', 'Prototyping'],
  },
  {
    icon: Smartphone,
    title: 'Адаптивная вёрстка',
    description: 'Идеальное отображение на всех устройствах и браузерах',
    skills: ['Mobile First', 'Responsive', 'Cross-browser'],
  },
  {
    icon: Globe,
    title: 'SEO Оптимизация',
    description: 'Продвижение сайта в поисковых системах',
    skills: ['Meta Tags', 'Performance', 'Analytics'],
  },
  {
    icon: Database,
    title: 'Backend Разработка',
    description: 'Надёжная серверная часть и работа с базами данных',
    skills: ['Node.js', 'PostgreSQL', 'API'],
  },
  {
    icon: Zap,
    title: 'Производительность',
    description: 'Быстрая загрузка и оптимизация кода',
    skills: ['Optimization', 'Caching', 'CDN'],
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="sumie-space max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-black">
            Услуги
          </h2>
          <div className="w-24 h-px bg-black mx-auto opacity-30" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-4 bg-black rounded-lg w-fit mb-6">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-serif font-light mb-3 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-light text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}