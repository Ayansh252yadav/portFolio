import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useCommandPalette } from './hooks/useCommandPalette';
import { navigationLinks } from './data/portfolioData';

// Component Imports
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Journey } from './components/journey/Journey';
import { Education } from './components/education/Education';
import { Activity } from './components/activity/Activity';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/common/CommandPalette';
import { NotFound } from './components/layout/NotFound';

export function App() {
  const { toggleTheme, isDark } = useTheme();
  const { isOpen, close, open } = useCommandPalette();
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const sectionIds = ['home', ...navigationLinks.map((n) => n.href.replace('#', ''))];
  const activeSection = useScrollSpy(sectionIds, 160);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Simple clean 404 router check
  if (currentPath !== '/' && currentPath !== '' && !currentPath.endsWith('/index.html')) {
    return (
      <NotFound
        onGoHome={() => {
          window.history.pushState({}, '', '/');
          setCurrentPath('/');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] dark:bg-[#090b10] dark:text-[#f8fafc] transition-colors duration-200">
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenCommandPalette={open}
      />

      {/* Main Content */}
      <main id="main-content">
        <Hero isDark={isDark} onOpenCommandPalette={open} />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        <Activity />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={isOpen}
        onClose={close}
        onToggleTheme={toggleTheme}
        isDark={isDark}
      />
    </div>
  );
}

export default App;
