
import React from 'react';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 blur-3xl opacity-20 pointer-events-none`}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6">
          The Smartest Way to <br />
          <span className="gradient-text">Scale Your Business</span>
        </h1>
        <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          OgaAI is your all-in-one autonomous partner. Manage customer engagement, track expenses, and automate workflows across WhatsApp, Telegram, and Email.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl hover:shadow-blue-500/40">
            Get Started Free
          </button>
          <button className={`px-8 py-4 rounded-full text-lg font-bold transition-all border-2 ${darkMode ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-100'}`}>
            Try Free Demo
          </button>
        </div>

        {/* Hero Visual Placeholder */}
        <div className={`mt-16 relative rounded-2xl border ${darkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-slate-50'} p-4 shadow-2xl`}>
          <div className="aspect-video rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center relative">
            <img src="https://picsum.photos/1200/675" alt="Dashboard Preview" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-slate-950/60 text-white">
              <span className="text-3xl font-bold mb-4">Autonomous Business Control</span>
              <p className="max-w-md text-center text-slate-300">Experience a platform that works even while you sleep. Omni-channel engagement, real-time analytics, and seamless integrations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
