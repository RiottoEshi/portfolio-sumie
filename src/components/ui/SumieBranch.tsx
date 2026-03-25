// src/components/ui/SumieBranch.tsx
'use client';

import { motion } from 'framer-motion';

interface SumieBranchProps {
  direction?: 'vertical' | 'horizontal' | 'diagonal';
  length?: 'short' | 'medium' | 'long';
  className?: string;
}

export default function SumieBranch({ 
  direction = 'vertical', 
  length = 'medium',
  className = '' 
}: SumieBranchProps) {
  const lengthClasses = {
    short: direction === 'vertical' ? 'h-24' : 'w-24',
    medium: direction === 'vertical' ? 'h-48' : 'w-48',
    long: direction === 'vertical' ? 'h-96' : 'w-96',
  };

  const directionClasses = {
    vertical: 'flex-col',
    horizontal: 'flex-row',
    diagonal: 'rotate-45',
  };

  return (
    <motion.div 
      className={`sumie-branch flex ${directionClasses[direction]} ${lengthClasses[length]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 0.3, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
    >
      {/* Ветвистые линии */}
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-ink to-transparent opacity-40" />
        <div className="absolute top-1/4 left-1/2 w-8 h-px bg-ink opacity-20 -rotate-30" />
        <div className="absolute top-1/2 left-1/2 w-6 h-px bg-ink opacity-20 rotate-45" />
        <div className="absolute top-3/4 left-1/2 w-10 h-px bg-ink opacity-20 -rotate-15" />
      </div>
    </motion.div>
  );
}