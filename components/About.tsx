
import React from 'react';

export const About: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section className={`py-20 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for the Modern Entrepreneur</h2>
            <p className={`text-lg mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              OgaAI was born from a simple mission: to empower startups, businesses, and freelancers with the tools they need to operate at an enterprise level without the enterprise headcount.
            </p>
            <p className={`text-lg mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Unlike generic AI tools, OgaAI integrates deeply into your financial and communication channels, providing a unified brain for your entire operation.
            </p>
            <ul className="space-y-4">
              {[
                "24/7 Omnichannel Customer Support",
                "Automated Financial Intelligence",
                "Customizable Workflow Triggers",
                "No-code Integration Ecosystem"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className={`relative rounded-2xl overflow-hidden border ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
              <img src="https://picsum.photos/600/400?grayscale" alt="Team Work" className="w-full h-auto" />
              <div className="p-8">
                <blockquote className={`text-xl italic font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  "OgaAI allowed us to scale our customer support to 3 countries in one month with zero additional hires."
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                  <div>
                    <p className="font-bold">David Chen</p>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>CEO, Global logistics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
