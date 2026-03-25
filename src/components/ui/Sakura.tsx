// src/components/sections/Sakura.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export default function Sakura() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 10,
      size: 8 + Math.random() * 8,
      opacity: 0.3 + Math.random() * 0.4,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: '-20px',
            width: petal.size,
            height: petal.size,
            opacity: petal.opacity,
          }}
          initial={{ y: -20, rotate: 0, x: 0 }}
          animate={{
            y: ['0vh', '100vh'],
            rotate: [0, 360],
            x: [0, Math.sin(petal.id) * 100, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-sm"
          >
            <path
              d="M50 0 C20 20 0 50 0 70 C0 90 20 100 50 100 C80 100 100 90 100 70 C100 50 80 20 50 0 Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}