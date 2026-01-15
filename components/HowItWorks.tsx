
import React from 'react';

export const HowItWorks: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const steps = [
    {
      step: "01",
      title: "Connect Channels",
      description: "Link your WhatsApp, Telegram, or Email account with a single secure connection."
    },
    {
      step: "02",
      title: "Configure Agent",
      description: "Set your business hours, FAQs, and persona. Your AI agent learns your tone instantly."
    },
    {
      step: "03",
      title: "Automate & Grow",
      description: "Watch as tasks are completed, receipts are tracked, and customers are delighted automatically."
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Seamless, Powerful</h2>
          <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Get up and running in minutes, not days.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-1 border-t-2 border-dashed border-blue-500/20 -z-10"></div>
          
          {steps.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl font-bold shadow-lg ${darkMode ? 'bg-slate-800 text-blue-500' : 'bg-blue-50 text-blue-600'}`}>
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-20 p-8 rounded-3xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-bold text-blue-500 mb-2">Workflow Example</h4>
              <h3 className="text-2xl font-bold mb-4">Engagement Automation</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">1</div>
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Customer sends WhatsApp message: "Are you open tomorrow?"</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">2</div>
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>OgaAI checks your integrated Google Calendar automatically.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">3</div>
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Agent replies in seconds with available slots and offers booking.</p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-500 mb-2">Finance Example</h4>
              <h3 className="text-2xl font-bold mb-4">Expense Tracking</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-[10px]">1</div>
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Snap a photo of your lunch receipt or upload a PDF invoice.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-[10px]">2</div>
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>AI extracts merchant, amount, tax, and category instantly.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-[10px]">3</div>
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Dashboard updates with real-time monthly budget analytics.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
