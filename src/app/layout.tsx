// src/app/layout.tsx
import type { Metadata } from "next";
import { Noto_Serif_JP, Inter } from "next/font/google";
import "./globals.css";

// Подключаем шрифты с правильной конфигурацией
const notoSerif = Noto_Serif_JP({
  subsets: ["latin"], // ✅ Только latin (японские глифы загрузятся автоматически)
  weight: ["300", "400", "500", "700"],
  variable: "--font-primary",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"], // ✅ Для кириллицы и латиницы
  weight: ["300", "400", "500", "600"],
  variable: "--font-secondary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Портфолио разработчика | Sumi-e Style",
  description: "Персональное портфолио в японской эстетике суми-э",
  keywords: ["портфолио", "разработчик", "Next.js", "суми-э", "дизайн"],
  authors: [{ name: "Ваше имя" }],
  creator: "Ваше имя",
  publisher: "Ваше имя",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ваш-логин.github.io"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${notoSerif.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}