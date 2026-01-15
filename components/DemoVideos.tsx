
import React, { useRef, useState } from 'react';

interface VideoPlayerProps {
  title: string;
  description: string;
  color: string;
  step: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ title, description, color, step }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="space-y-6 group w-full flex flex-col items-center md:items-start">
      <h3 className="text-2xl font-bold flex items-center gap-3 self-center md:self-start">
        <span className={`w-8 h-8 rounded-full ${color} text-white flex items-center justify-center text-sm shadow-lg`}>
          {step}
        </span>
        {title}
      </h3>
      <div className={`relative aspect-[9/16] w-full rounded-[2.5rem] overflow-hidden border-[8px] md:border-[12px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] ${isPlaying ? 'border-slate-800' : 'border-slate-200 dark:border-slate-800'} max-w-[300px] sm:max-w-[340px] mx-auto md:mx-0 bg-black`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover cursor-pointer"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={togglePlay}
          playsInline
          loop
        >
          <source src={step === "1" ? "/components/asset/OgaAI_ Smartest Staff.mp4" : "/components/asset/OgaAI_ Smart Finance.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-opacity group-hover:bg-black/20"
            onClick={togglePlay}
          >
            <div className={`w-16 h-16 sm:w-20 sm:h-20 ${color} rounded-full flex items-center justify-center text-white shadow-2xl transform transition-transform hover:scale-110`}>
               <svg className="w-8 h-8 sm:w-10 sm:h-10 ml-1" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M4.5 3.5a1 1 0 00-1.5 1V15.5a1 1 0 001.5 1l11-5.5a1 1 0 000-2l-11-5.5z"></path>
               </svg>
            </div>
            <p className="mt-4 sm:mt-6 text-white font-bold text-base sm:text-lg tracking-wide uppercase">Watch Demo</p>
          </div>
        )}

        <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-6 right-4 sm:right-6 pointer-events-none">
          <div className="bg-black/70 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-2xl border border-white/10 shadow-lg">
            <p className="text-white text-xs sm:text-sm font-medium leading-tight text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DemoVideos: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="demos" className={`py-20 sm:py-32 ${darkMode ? 'bg-slate-950' : 'bg-slate-100/50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            See the <span className="gradient-text">Future</span> of Business
          </h2>
          <p className={`text-lg sm:text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Our AI agents handle the complex work so you can focus on strategy. Watch OgaAI in real-world scenarios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-24 md:gap-12 lg:gap-24 items-start">
          <VideoPlayer 
            step="1"
            title="OgaAI Voice Agent"
            description="Hello! I be OgaAI Voice Agent. I answer customer calls for your business, even when you're busy or sleeping."
            color="bg-blue-600"
          />
          <VideoPlayer 
            step="2"
            title="OgaAI Expense Tracker"
            description="The smart way for small businesses and freelancers to track expenses without stress. Snap, record, and categorize."
            color="bg-purple-600"
          />
        </div>

        <div className={`mt-20 sm:mt-32 p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] text-center border transition-all ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-green-500/10 text-green-500 text-xs sm:text-sm font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live Performance
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Multilingual & Autonomous</h3>
          <p className={`max-w-2xl mx-auto text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            As seen in the demos, OgaAI fluently handles both English and Pidgin, ensuring your business stays connected to everyone, everywhere, 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};
