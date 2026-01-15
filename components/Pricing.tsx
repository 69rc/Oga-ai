
import React, { useState } from 'react';

export const Pricing: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');

  const tiers = [
    {
      name: "Basic",
      priceNGN: "₦15,000",
      priceUSD: "$19",
      description: "Perfect for freelancers and solo entrepreneurs.",
      features: [
        "1 Communication Channel",
        "500 AI Tasks / Month",
        "Expense Tracking Essentials",
        "Standard Analytics",
        "Email Support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro",
      priceNGN: "₦38,000",
      priceUSD: "$49",
      description: "Best for growing startups and small teams.",
      features: [
        "All Channels (WhatsApp, Telegram, Web)",
        "5,000 AI Tasks / Month",
        "Advanced Financial Analytics",
        "Priority Workflow Rules",
        "Integrations with 3rd-party Apps",
        "Priority Email Support"
      ],
      cta: "Get Started Pro",
      popular: true
    },
    {
      name: "Enterprise",
      priceNGN: "Custom",
      priceUSD: "Custom",
      description: "Tailored solutions for large scale operations.",
      features: [
        "Unlimited Channels",
        "Unlimited Tasks",
        "Dedicated Account Manager",
        "Custom Feature Development",
        "White-label Options",
        "24/7 Phone Support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
          <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-6`}>Choose the plan that fits your current stage of growth.</p>
          
          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-2 p-1 rounded-full bg-slate-200 dark:bg-slate-800">
            <button
              onClick={() => setCurrency('NGN')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                currency === 'NGN'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              NGN (₦)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                currency === 'USD'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-3xl border transition-all flex flex-col ${
                tier.popular 
                  ? (darkMode ? 'bg-slate-900 border-blue-500 shadow-blue-500/10' : 'bg-white border-blue-500 shadow-2xl scale-105 z-10') 
                  : (darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200')
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold">{currency === 'NGN' ? tier.priceNGN : tier.priceUSD}</span>
                  {tier.priceNGN !== "Custom" && <span className={darkMode ? 'text-slate-500' : 'text-slate-500'}>/month</span>}
                </div>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{tier.description}</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  tier.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30'
                    : (darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-800')
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className={darkMode ? 'text-slate-500' : 'text-slate-500'}>
                All plans include a 14-day free trial. We accept all major credit cards and wire transfers.
            </p>
        </div>
      </div>
    </section>
  );
};
