// src/components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import Sakura from './Sakura';
import SakuraTree from './SakuraTree';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-20"
    >
      {/* Сакура */}
      <Sakura />

      {/* Дерево */}
      <SakuraTree position="right" opacity={0.08} />

      {/* Аватарка в левом верхнем углу */}
      <motion.div 
        className="fixed top-8 left-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-gray-700 to-gray-900">
          {/* ЗАМЕНИТЕ НА ВАШЕ ФОТО */}
          <img 
            src="/images/avatar.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Основной контент */}
      <div className="sumie-space relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-serif font-light mb-6 text-black"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            墨
          </motion.h1>
          
          <motion.div
            className="w-24 h-px bg-black mx-auto mb-8 opacity-30"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.7, duration: 1 }}
          />

          <motion.p 
            className="text-3xl md:text-5xl font-light text-black mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Разработчик
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl font-light text-gray-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Создаю цифровые произведения искусства
          </motion.p>

          <motion.p 
            className="text-base md:text-lg font-light text-gray-600 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Full-stack разработка • Минимализм • Эстетика
          </motion.p>

          {/* Кнопки */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.a
              href="#projects"
              className="group px-10 py-4 bg-black text-white font-light tracking-wide hover:bg-gray-800 transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="flex items-center gap-2">
                Смотреть работы
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-10 py-4 border-2 border-black text-black font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Связаться
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}