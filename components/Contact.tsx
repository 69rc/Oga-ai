import React, { useState } from 'react';

export const Contact: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-24 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Have questions about OgaAI? Want to schedule a demo? Our team is ready to help you transform your business operations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-slate-800' : 'bg-blue-50'}`}>
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>hello@ogaai.com</p>
                  <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-slate-800' : 'bg-blue-50'}`}>
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Office</h3>
                  <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Kano, Nigeria</p>
                  <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>Remote-first company</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-slate-800' : 'bg-blue-50'}`}>
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Business Hours</h3>
                  <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Monday - Friday</p>
                  <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>9:00 AM - 6:00 PM WAT</p>
                </div>
              </div>
            </div>

            <div className={`mt-8 p-6 rounded-2xl ${darkMode ? 'bg-blue-600/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'}`}>
              <p className="text-blue-600 font-semibold mb-2">🚀 Quick Response</p>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                For urgent inquiries, reach us on WhatsApp or Telegram for instant support from our AI agent.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                    darkMode 
                      ? 'bg-slate-800 border-slate-700 focus:border-blue-500 text-white' 
                      : 'bg-white border-slate-300 focus:border-blue-500 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                    darkMode 
                      ? 'bg-slate-800 border-slate-700 focus:border-blue-500 text-white' 
                      : 'bg-white border-slate-300 focus:border-blue-500 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                    darkMode 
                      ? 'bg-slate-800 border-slate-700 focus:border-blue-500 text-white' 
                      : 'bg-white border-slate-300 focus:border-blue-500 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${
                    darkMode 
                      ? 'bg-slate-800 border-slate-700 focus:border-blue-500 text-white' 
                      : 'bg-white border-slate-300 focus:border-blue-500 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Tell us about your business needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/30 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-center">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
