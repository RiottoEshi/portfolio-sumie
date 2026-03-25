// src/components/ui/SumieCircle.tsx
'use client';

import { motion } from 'framer-motion';

interface SumieCircleProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline' | 'double';
  className?: string;
  animate?: boolean;
}

export default function SumieCircle({ 
  size = 'md', 
  variant = 'outline', 
  className = '',
  animate = false 
}: SumieCircleProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
  };

  const baseClasses = `sumie-circle ${sizeClasses[size]} ${className}`;

  const circleContent = () => {
    switch (variant) {
      case 'solid':
        return (
          <div className="w-full h-full bg-ink rounded-full opacity-10" />
        );
      case 'double':
        return (
          <>
            <div className="absolute inset-0 border border-ink rounded-full" />
            <div className="absolute inset-2 border border-ink rounded-full opacity-60" />
            <div className="absolute inset-6 border border-ink rounded-full opacity-30" />
          </>
        );
      default:
        return null;
    }
  };

  if (animate) {
    return (
      <motion.div
        className={baseClasses}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.19, 1, 0.22, 1] 
        }}
      >
        {circleContent()}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses}>
      {circleContent()}
    </div>
  );
}