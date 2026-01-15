
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { DemoVideos } from './components/DemoVideos';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Onboarding } from './components/Onboarding';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Features darkMode={darkMode} />
        <DemoVideos darkMode={darkMode} />
        <HowItWorks darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <Onboarding darkMode={darkMode} />
        <Pricing darkMode={darkMode} />
        <FAQ darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
