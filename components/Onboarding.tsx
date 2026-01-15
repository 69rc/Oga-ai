
import React from 'react';

export const Onboarding: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const steps = [
    {
      title: "Account Setup",
      content: "Sign up with your business email. Complete your profile by selecting your industry and primary automation goals."
    },
    {
      title: "Channel Sync",
      content: "Go to 'Connections' and scan the QR code for WhatsApp or grant API access for Telegram and Email."
    },
    {
      title: "First Automation",
      content: "Use our 'Quick Start' templates to create your first auto-reply or expense tracking trigger in under 2 minutes."
    }
  ];

  return (
    <section id="onboarding" className={`py-24 ${darkMode ? 'bg-slate-900/40' : 'bg-slate-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Your First 10 Minutes</h2>
          <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>We've simplified onboarding to be friction-free.</p>
        </div>

        <div className="space-y-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className={`flex gap-6 p-8 rounded-2xl border ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl">
            Start Your Setup Now
          </button>
          <p className={`mt-4 text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>No credit card required for free trial.</p>
        </div>
      </div>
    </section>
  );
};
