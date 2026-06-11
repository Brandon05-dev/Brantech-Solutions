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
          <div className="w-full flex flex-col items-center justify-center text-center lg:items-start lg:text-left mx-auto">
            {/* Main headline */}
            <h1 className="w-full text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 animate-fade-in text-balance" style={{ animationDelay: "0.2s" }}>
              Transform Your Business with
              <span className="text-blue-400 block mt-2">
                Smart Digital Solutions
              </span>
            </h1>

            {/* Subtext */}
            <p className="w-full text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in text-balance" style={{ animationDelay: "0.4s" }}>
              Brantech Solutions empowers startups, SMEs, and enterprises to innovate and grow through custom software, AI, cybersecurity, and digital solutions tailored for Africa's dynamic market.
            </p>

            {/* Contact CTA */}
            <div className="animate-fade-in flex justify-center lg:justify-start w-full" style={{ animationDelay: "0.6s" }}>
              <div className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 transition-all duration-300">
                <span className="text-slate-200 font-bold text-sm sm:text-base md:text-lg">
                  Trusted by <span className="font-bold text-blue-400">50+</span> Clients
                </span>
                {/* Profile avatars (icons) */}
                <div className="flex items-center -space-x-2 pl-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      className="w-7 h-7 rounded-full border border-white dark:border-gray-800 bg-blue-500/15 flex items-center justify-center transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <User className="w-4 h-4 text-blue-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}