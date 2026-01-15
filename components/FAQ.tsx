import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  darkMode: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/30 transition-colors"
      >
        <span className="text-lg font-semibold pr-8">{question}</span>
        <svg
          className={`w-6 h-6 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className={`px-6 pb-5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const faqs = [
    {
      question: "How does OgaAI handle multiple languages?",
      answer: "OgaAI is fluent in both English and Nigerian Pidgin, with support for other languages coming soon. Our AI automatically detects the language your customers use and responds accordingly, ensuring seamless communication across diverse audiences."
    },
    {
      question: "Is my business data secure?",
      answer: "Absolutely. We use bank-level encryption (AES-256) for all data at rest and in transit. Your financial records and customer conversations are stored securely and never shared with third parties. We're also working towards SOC2 compliance."
    },
    {
      question: "Can I try OgaAI before committing?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can test the AI agent, expense tracker, and workflow automation to see how it fits your business."
    },
    {
      question: "What channels does OgaAI support?",
      answer: "Currently, OgaAI works with WhatsApp, Telegram, Email, and Web Chat. We're actively developing integrations for Instagram DMs, Facebook Messenger, and SMS. All channels are managed from one unified dashboard."
    },
    {
      question: "How does the expense tracker work?",
      answer: "Simply snap a photo of your receipt or upload an invoice. Our AI extracts the merchant name, amount, date, and category automatically. You can also manually log expenses via chat commands. Everything syncs to your dashboard in real-time."
    },
    {
      question: "Can OgaAI integrate with my existing tools?",
      answer: "Yes! OgaAI integrates with popular tools like Google Calendar, Slack, QuickBooks, and more. We also offer API access for custom integrations. Our team can help set up specific integrations during onboarding."
    },
    {
      question: "What happens if the AI doesn't know an answer?",
      answer: "OgaAI is smart enough to recognize when it needs human help. It will politely inform the customer and either escalate to you via notification or collect their contact info for follow-up. You maintain full control over the escalation rules."
    },
    {
      question: "How do I cancel or change my plan?",
      answer: "You can upgrade, downgrade, or cancel anytime from your account settings. There are no long-term contracts or cancellation fees. If you cancel, you'll retain access until the end of your billing period."
    },
    {
      question: "Do you offer support for enterprise customers?",
      answer: "Yes! Enterprise customers get a dedicated account manager, priority support, custom feature development, and white-label options. Contact our sales team to discuss your specific needs."
    },
    {
      question: "What's the difference between Basic and Pro plans?",
      answer: "Basic is perfect for solo entrepreneurs with 1 channel and 500 AI tasks/month. Pro unlocks all channels (WhatsApp, Telegram, Email, Web), 5,000 tasks/month, advanced analytics, workflow automation, and priority support. Most growing businesses choose Pro."
    }
  ];

  return (
    <section id="faq" className={`py-24 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Everything you need to know about OgaAI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} darkMode={darkMode} />
          ))}
        </div>

        <div className={`mt-12 p-8 rounded-2xl text-center ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-slate-50 border border-slate-200'}`}>
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className={`mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Our team is here to help you get started
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};
