// src/app/page.tsx
import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="bg-paper min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      
      <footer className="py-8 border-t border-gray-300 bg-white">
        <div className="sumie-space text-center">
          <p className="text-sm font-light text-gray-600">
            © 2026 Портфолио разработчика. Создано с эстетикой суми-э.
          </p>
        </div>
      </footer>
    </main>
  );
}