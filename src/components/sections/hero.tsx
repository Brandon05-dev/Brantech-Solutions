import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Briefcase, Globe, Server, Shield, Brain, Cloud, Code2, Database, Cpu, Monitor, MessageCircle, User } from "lucide-react";

interface HeroProps {
  onContactClick?: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-50/50 via-transparent to-transparent dark:from-gray-800/50 dark:via-transparent dark:to-transparent" />
        
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Image/Icon Section - Shows first on mobile */}
          <div className="flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Icon image with floating animation - transparent background */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] flex items-center justify-center animate-float">
                <img 
                  src="/BS Icon.png" 
                  alt="Brantech Solutions" 
                  className="w-full h-full object-contain cursor-pointer transition-all duration-300"
                  loading="eager"
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                    transition: 'filter 0.3s ease-in-out, transform 0.3s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 10px 25px rgba(59, 130, 246, 0.4)) drop-shadow(0 0 50px rgba(168, 85, 247, 0.3))';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
              <div className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "2s" }} />
              <div className="absolute top-1/2 -left-6 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "3s" }} />
              <div className="absolute top-1/4 -right-6 sm:-right-8 w-4 h-4 sm:w-5 sm:h-5 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>

          {/* Content Section - Shows second on mobile */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Transform Your Business with{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Smart Digital Solutions
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Brantech Solutions empowers startups, SMEs, and enterprises to innovate and grow through custom software, AI, cybersecurity, and digital solutions tailored for Africa's dynamic market.
            </p>

            {/* Contact CTA */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="inline-flex items-center gap-2 rounded-full px-6 py-3 transition-all duration-300">
                <span className="text-gray-700 dark:text-gray-300 font-bold text-sm sm:text-base md:text-lg">
                  Trusted by <span className="font-bold text-blue-600 dark:text-blue-400">50+</span> Clients
                </span>
                {/* Profile avatars (icons) */}
                <div className="flex items-center -space-x-2 pl-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      className="w-7 h-7 rounded-full border border-white dark:border-gray-800 bg-gradient-to-br from-blue-500/15 to-purple-500/15 flex items-center justify-center transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <User className="w-4 h-4 text-blue-700/80 dark:text-blue-300/80" />
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