// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // ✅ Статический экспорт для GitHub Pages
  images: {
    unoptimized: true, // ✅ Отключаем оптимизацию изображений для статического экспорта
  },
  trailingSlash: true, // ✅ Добавляем слэш в конце URL
};

export default nextConfig;