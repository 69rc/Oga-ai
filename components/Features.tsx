
import React from 'react';

const featureData = [
  {
    title: "Omnichannel AI Agent",
    description: "Automate customer engagement across Telegram, WhatsApp, Email, and web chat. Handles queries and generates reports instantly.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: "bg-blue-500"
  },
  {
    title: "Smart Expense Tracker",
    description: "Track income and expenses, categorize spending, and get real-time financial alerts to simplify management.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-green-500"
  },
  {
    title: "Workflow Automation",
    description: "Create automated rules for repetitive tasks, reminders, and complex business processes without coding.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-purple-500"
  },
  {
    title: "Analytics Dashboards",
    description: "Visual charts showing insights, KPIs, and trends for both customer engagement and business finance.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "bg-orange-500"
  },
  {
    title: "Integration Ready",
    description: "Seamlessly connect with third-party CRMs, payment gateways, and productivity tools in one click.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    color: "bg-cyan-500"
  }
];

export const Features: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Everything you need to automate your business lifecycle.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 hover:shadow-xl ${
                darkMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-blue-200'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
