// src/components/sections/SakuraTree.tsx
'use client';

import { motion } from 'framer-motion';

interface SakuraTreeProps {
  position?: 'left' | 'right';
  opacity?: number;
  color?: string;
}

export default function SakuraTree({ 
  position = 'left', 
  opacity = 0.2,
  color = '#000000'
}: SakuraTreeProps) {
  return (
    <motion.div
      className={`absolute ${position === 'left' ? 'left-0' : 'right-0'} top-0 z-0 hidden lg:block pointer-events-none`}
      style={{ opacity }}
      initial={{ opacity: 0, x: position === 'left' ? -100 : 100 }}
      whileInView={{ opacity, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <svg viewBox="0 0 500 900" className="w-96 h-full" fill={color}>
        {/* Основной ствол */}
        <path
          d="M 350 900 
             Q 340 850 335 800 
             Q 330 750 320 700 
             Q 310 650 300 600 
             Q 290 550 285 500"
          stroke="currentColor"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Главная ветвь вверх */}
        <path
          d="M 300 650 
             Q 280 600 270 550 
             Q 260 500 250 450 
             Q 240 400 235 350"
          stroke="currentColor"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Ветвь влево */}
        <path
          d="M 310 700 
             Q 270 690 230 680 
             Q 190 670 150 665 
             Q 110 660 70 660"
          stroke="currentColor"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Ветвь вправо-вверх */}
        <path
          d="M 290 600 
             Q 320 580 350 560 
             Q 380 540 410 515 
             Q 440 490 465 460"
          stroke="currentColor"
          strokeWidth="11"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Вторая главная ветвь */}
        <path
          d="M 285 500 
             Q 270 470 260 440 
             Q 250 410 240 380 
             Q 230 350 220 310"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Мелкие веточки от главной */}
        <path
          d="M 270 550 
             Q 250 540 230 535 
             Q 210 530 190 520"
          stroke="currentColor"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M 250 450 
             Q 230 440 210 435 
             Q 190 430 170 420"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M 350 560 
             Q 360 540 370 520 
             Q 380 500 395 480"
          stroke="currentColor"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M 410 515 
             Q 420 495 430 475 
             Q 440 455 455 440"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Тонкие веточки */}
        <path
          d="M 230 535 
             Q 215 525 200 520"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M 210 435 
             Q 195 425 180 420"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M 370 520 
             Q 380 505 390 490"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M 260 440 
             Q 245 430 230 425"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M 240 380 
             Q 225 370 210 365"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Дополнительные детали */}
        <path
          d="M 230 680 
             Q 210 675 190 670 
             Q 170 665 150 655"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M 150 665 
             Q 135 655 120 650"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M 285 800 
             Q 270 790 255 785"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Цветы сакуры (кружочки) */}
        {[ 
          [230, 535], [250, 450], [270, 550], [210, 435],
          [350, 560], [370, 520], [410, 515], [430, 475],
          [190, 520], [170, 420], [230, 380], [220, 310],
          [150, 655], [120, 650], [255, 785], [240, 320],
          [265, 490], [290, 580], [320, 540], [395, 480]
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle
              cx={cx}
              cy={cy}
              r="8"
              fill={color}
              opacity="0.6"
            />
            <circle
              cx={cx - 3}
              cy={cy - 2}
              r="3"
              fill={color}
              opacity="0.4"
            />
            <circle
              cx={cx + 4}
              cy={cy + 3}
              r="2.5"
              fill={color}
              opacity="0.4"
            />
          </g>
        ))}
      </svg>
    </motion.div>
  );
}