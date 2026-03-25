// src/components/sections/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, Send, GitBranch, Link as LinkIcon } from 'lucide-react';
import Sakura from './Sakura';
import { useState } from 'react';

const socialLinks = [
  { name: 'Email', icon: Mail, url: 'mailto:your.email@example.com', color: 'hover:bg-red-50 hover:border-red-200' },
  { name: 'Telegram', icon: Send, url: 'https://t.me/yourusername', color: 'hover:bg-blue-50 hover:border-blue-200' },
  { name: 'GitHub', icon: GitBranch, url: 'https://github.com/yourusername', color: 'hover:bg-gray-50 hover:border-gray-300' },
  { name: 'LinkedIn', icon: LinkIcon, url: 'https://linkedin.com/in/yourusername', color: 'hover:bg-indigo-50 hover:border-indigo-200' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Сакура */}
      <Sakura />

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
            Контакты
          </h2>
          <div className="w-24 h-px bg-black mx-auto opacity-30 mb-4" />
          <p className="text-gray-600 font-light text-lg">
            Давайте создадим что-то прекрасное вместе
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Контакты */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-serif font-light mb-8 text-black">Давайте свяжемся</h3>
            
            <div className="space-y-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-5 p-6 border-2 border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300 ${link.color}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-gray-100 rounded-full">
                    <link.icon size={24} className="text-gray-700" />
                  </div>
                  <span className="font-light text-lg text-gray-800">{link.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 rounded-lg">
              <h4 className="text-sm font-light tracking-wide mb-3 text-gray-600 uppercase">
                Как я работаю
              </h4>
              <p className="text-sm font-light text-gray-700">
                Отвечаю в течение 24 часов. Предпочитаю детальное обсуждение проекта 
                перед началом работы.
              </p>
            </div>
          </motion.div>

          {/* Форма */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-serif font-light mb-8 text-black">Напишите мне</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg border-2 border-gray-200 shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-light mb-2 text-gray-700">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-300 bg-gray-50 font-light focus:border-black focus:outline-none transition-colors text-black rounded"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-300 bg-gray-50 font-light focus:border-black focus:outline-none transition-colors text-black rounded"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light mb-2 text-gray-700">
                  Расскажите о проекте
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-gray-300 bg-gray-50 font-light focus:border-black focus:outline-none transition-colors resize-none text-black rounded"
                  placeholder="Опишите вашу идею..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-black text-white font-light tracking-wide hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  className="text-center text-sm font-light text-green-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✨ Спасибо! Я скоро свяжусь с вами.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}