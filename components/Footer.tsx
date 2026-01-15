
import React from 'react';

export const Footer: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <footer className={`pt-24 pb-12 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-12 rounded-[3rem] text-center mb-24 overflow-hidden relative ${darkMode ? 'bg-blue-600' : 'bg-blue-600'}`}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-700 opacity-50 -z-10"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your business?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">Join 2,500+ businesses using OgaAI to automate their growth and simplify their finances.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl">
               Get Started for Free
             </button>
             <button className="bg-blue-700/30 border border-blue-400 text-white hover:bg-blue-700/50 px-10 py-5 rounded-full text-xl font-bold transition-all">
               Schedule a Demo
             </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 border-t pt-16 border-slate-200 dark:border-slate-800">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">O</div>
               <span className="text-2xl font-bold">OGA<span className="text-blue-500">AI</span></span>
            </div>
            <p className={`mb-6 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              The autonomous operating system for modern businesses. Omnichannel engagement, financial tracking, and workflow intelligence.
            </p>
            <div className="flex gap-4">
               <a href="https://www.instagram.com/oga_ai_official/" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full border transition-colors ${darkMode ? 'border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-pink-500' : 'border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-pink-600'}`}>
                 <span className="sr-only">Instagram</span>
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
               </a>
               <a href="https://www.facebook.com/profile.php?id=61586275565520" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full border transition-colors ${darkMode ? 'border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-blue-500' : 'border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-blue-600'}`}>
                 <span className="sr-only">Facebook</span>
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                 </svg>
               </a>
               <a href="#" className={`p-2 rounded-full border transition-colors ${darkMode ? 'border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-blue-400' : 'border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-blue-500'}`}>
                 <span className="sr-only">Twitter</span>
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                 </svg>
               </a>
               <a href="#" className={`p-2 rounded-full border transition-colors ${darkMode ? 'border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-blue-400' : 'border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-blue-500'}`}>
                 <span className="sr-only">Telegram</span>
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                 </svg>
               </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className={`space-y-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><a href="#" className="hover:text-blue-500 transition-colors">AI Agent</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Expense Tracker</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Workflows</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className={`space-y-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className={`space-y-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className={`space-y-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li>hello@ogaai.com</li>
              <li>+1 (555) OGA-AI-01</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className={`mt-16 pt-8 border-t text-sm text-center ${darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-400'}`}>
          © {new Date().getFullYear()} OgaAI Technologies Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
