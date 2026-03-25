// src/components/sections/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, Send, GitBranch, Link as LinkIcon } from 'lucide-react';
import SumieCircle from '../ui/SumieCircle';
import { useState } from 'react';

const socialLinks = [
  { name: 'Email', icon: Mail, url: 'mailto:your.email@example.com' },
  { name: 'Telegram', icon: Send, url: 'https://t.me/yourusername' },
  { name: 'GitHub', icon: GitBranch, url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: LinkIcon, url: 'https://linkedin.com/in/yourusername' },
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
    
    // Имитация отправки (замените на реальный API)
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
    <section id="contact" className="min-h-screen py-20 bg-paper relative">
      {/* Декоративные элементы */}
      <div className="absolute bottom-40 right-20 opacity-20 hidden lg:block">
        <SumieCircle size="lg" variant="double" />
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
            Контакты
          </h2>
          <div className="w-16 h-px bg-ink mx-auto opacity-30" />
          <p className="mt-4 text-stone font-light max-w-2xl mx-auto">
            Открыт для интересных проектов и сотрудничества
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Левая колонка — Контакты */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif font-light mb-6">Свяжитесь со мной</h3>
            
            <div className="space-y-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-stone hover:border-ink hover:bg-mist transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <link.icon size={20} />
                  <span className="font-light">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Дополнительная информация */}
            <div className="p-6 bg-mist border border-stone">
              <h4 className="text-sm font-light tracking-wide mb-3 text-stone uppercase">
                Предпочтения
              </h4>
              <p className="text-sm font-light text-stone">
                Предпочитаю письменное общение через email или Telegram. 
                Отвечаю в течение 24 часов в рабочие дни.
              </p>
            </div>
          </motion.div>

          {/* Правая колонка — Форма */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif font-light mb-6">Напишите мне</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone bg-paper font-light focus:border-ink focus:outline-none transition-colors"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone bg-paper font-light focus:border-ink focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-stone bg-paper font-light focus:border-ink focus:outline-none transition-colors resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-ink text-paper font-light tracking-wide hover:bg-shadow transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить'}
              </button>

              {submitStatus === 'success' && (
                <motion.p
                  className="text-center text-sm font-light text-stone"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Спасибо! Сообщение отправлено.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}