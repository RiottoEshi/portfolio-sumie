// src/components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import SumieCircle from '../ui/SumieCircle';
import SumieBranch from '../ui/SumieBranch';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-paper"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 opacity-20">
        <SumieCircle size="lg" variant="double" />
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-30">
        <SumieBranch direction="diagonal" length="long" />
      </div>

      <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-stone rounded-full opacity-10" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 border border-stone rounded-full opacity-5" />

      {/* Основной контент */}
      <div className="sumie-space text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 sumie-ink">
            Разработчик
          </h1>
          
          <motion.div
            className="w-24 h-px bg-ink mx-auto mb-8 opacity-30"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <p className="text-xl md:text-2xl font-light text-shadow mb-4">
            Создаю цифровые произведения искусства
          </p>
          
          <motion.p 
            className="text-base md:text-lg font-light text-stone mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Full-stack разработка • Минимализм • Эстетика
          </motion.p>

          {/* Кнопки действий */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-ink text-paper font-light tracking-wide hover:bg-shadow transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Смотреть работы
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-3 border border-ink font-light tracking-wide hover:bg-ink hover:text-paper transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Связаться
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Индикатор прокрутки */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-ink to-transparent opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}