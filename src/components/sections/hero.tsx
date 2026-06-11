import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Briefcase, Globe, Server, Shield, Brain, Cloud, Code2, Database, Cpu, Monitor, MessageCircle, User } from "lucide-react";

interface HeroProps {
  onContactClick?: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center justify-center bg-white relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000")' }}
        />
        {/* Professional dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        
        {/* Floating particles - minimal and clean */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 dark:bg-blue-300/20 rounded-full animate-float"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">


          {/* Content Section */}
          <div className="text-center lg:text-left w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-3xl">
            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 animate-fade-in text-balance" style={{ animationDelay: "0.2s" }}>
              Transform Your Business with
              <span className="text-blue-400 block mt-2">
                Smart Digital Solutions
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed animate-fade-in text-balance" style={{ animationDelay: "0.4s" }}>
              Brantech Solutions empowers startups, SMEs, and enterprises to innovate and grow through custom software, AI, cybersecurity, and digital solutions tailored for Africa's dynamic market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}