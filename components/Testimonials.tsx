import React from 'react';

export const Testimonials: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const testimonials = [
    {
      name: "Chioma Okafor",
      role: "Founder, ChiChi Fashion",
      company: "Lagos, Nigeria",
      image: "https://ui-avatars.com/api/?name=Chioma+Okafor&background=3b82f6&color=fff&size=150",
      quote: "OgaAI transformed how I handle customer orders on WhatsApp. I can now serve 10x more customers without hiring extra staff. The expense tracker also helps me see exactly where my money dey go.",
      rating: 5
    },
    {
      name: "Musa Ibrahim",
      role: "CEO, Arewa Logistics",
      company: "Kano, Nigeria",
      image: "https://ui-avatars.com/api/?name=Musa+Ibrahim&background=8b5cf6&color=fff&size=150",
      quote: "We scaled our customer support to 3 states in one month with zero additional hires. OgaAI handles English and Hausa seamlessly, making our customers feel at home.",
      rating: 5
    },
    {
      name: "Aisha Bello",
      role: "Freelance Designer",
      company: "Abuja, Nigeria",
      image: "https://ui-avatars.com/api/?name=Aisha+Bello&background=ec4899&color=fff&size=150",
      quote: "As a solo entrepreneur, OgaAI is like having a personal assistant. It tracks my project expenses, reminds me of deadlines, and even handles client inquiries while I sleep. Game changer!",
      rating: 5
    },
    {
      name: "Tunde Adeyemi",
      role: "Co-founder, FoodHub",
      company: "Ibadan, Nigeria",
      image: "https://ui-avatars.com/api/?name=Tunde+Adeyemi&background=10b981&color=fff&size=150",
      quote: "The workflow automation saved us 20 hours per week. Our AI agent takes orders, confirms delivery times, and updates our Google Calendar automatically. We focus on cooking, OgaAI handles the rest.",
      rating: 5
    },
    {
      name: "Ngozi Eze",
      role: "Operations Manager",
      company: "Enugu, Nigeria",
      image: "https://ui-avatars.com/api/?name=Ngozi+Eze&background=f59e0b&color=fff&size=150",
      quote: "Integration with our existing tools was seamless. The analytics dashboard gives us insights we never had before. ROI was positive within the first month.",
      rating: 5
    },
    {
      name: "Emeka Nwosu",
      role: "Small Business Owner",
      company: "Port Harcourt, Nigeria",
      image: "https://ui-avatars.com/api/?name=Emeka+Nwosu&background=06b6d4&color=fff&size=150",
      quote: "I was skeptical about AI, but OgaAI proved me wrong. Setup took less than 10 minutes, and my customers love the instant responses. My business never sleeps now!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className={`py-24 ${darkMode ? 'bg-slate-900/50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">Entrepreneurs</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Join 150+ businesses already scaling with OgaAI
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-8 rounded-3xl ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-slate-50 border border-slate-200'}`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">150+</div>
            <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">98%</div>
            <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">50K+</div>
            <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Tasks Automated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Always Available</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className={`mb-6 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {testimonial.role}
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className={`text-sm mb-6 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
            TRUSTED BY BUSINESSES ACROSS NIGERIA AND BEYOND
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className={`px-6 py-3 rounded-lg font-bold ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
              TECHSTARS
            </div>
            <div className={`px-6 py-3 rounded-lg font-bold ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
              Y COMBINATOR
            </div>
            <div className={`px-6 py-3 rounded-lg font-bold ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
              STRIPE
            </div>
            <div className={`px-6 py-3 rounded-lg font-bold ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
              AWS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
