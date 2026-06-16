import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onContactClick?: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 mix-blend-luminosity transition-opacity duration-1000"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000")' }}
        />
        {/* Advanced dark gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />
        
        {/* Subtle glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-32">
        <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto">
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-in tracking-tight leading-tight text-balance drop-shadow-2xl" style={{ animationDelay: "0.2s" }}>
            Transform Your Business with <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 inline-block pb-2">
              Smart Digital Solutions
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-200 mb-10 max-w-3xl leading-relaxed animate-fade-in text-balance font-light" style={{ animationDelay: "0.4s" }}>
            Brantech Solutions empowers startups, SMEs, and enterprises to innovate and grow through custom software, AI, cybersecurity, and digital solutions tailored for Africa's dynamic market.
          </p>

        </div>
      </div>

      {/* Professional Curved Separator */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-full h-[60px] md:h-[120px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.29,197.97,108.1,239.5,101.17,281.4,85.16,321.39,56.44Z" 
            className="fill-white dark:fill-gray-900"
          ></path>
        </svg>
      </div>
    </section>
  );
}