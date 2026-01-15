
import React, { useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${darkMode ? 'bg-slate-950/80' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center p-1.5 ${darkMode ? 'bg-white/10' : 'bg-slate-100'}`}>
              <img 
                src={darkMode ? "/components/asset/OGA AI Logo with Sapphire and Violet Gradient.png" : "/components/asset/OGA AI Logo with Indigo and Purple Gradients.png"} 
                alt="OgaAI Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">
              OGA<span className="text-blue-500">AI</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <a
              href="#onboarding"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className={`md:hidden p-4 space-y-2 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 text-base font-medium rounded-md ${darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-200'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#onboarding"
            className="block w-full text-center bg-blue-600 text-white px-3 py-3 rounded-md font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};
