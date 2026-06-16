import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  Users, 
  Star, 
  TrendingUp, 
  ArrowRight,
  Building2
} from "lucide-react";

interface StatsProps {
  onContactClick?: () => void;
}

export function Stats({ onContactClick }: StatsProps) {
  const stats = [
    {
      icon: Globe,
      number: "25+",
      label: "Websites Launched",
      description: "Live projects across Africa",
      color: "blue"
    },
    {
      icon: Building2,
      number: "30+", 
      label: "Businesses Helped",
      description: "From startups to enterprises",
      color: "green"
    },
    {
      icon: Users,
      number: "5+",
      label: "Countries Reached",
      description: "International client base",
      color: "purple"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Client Rating",
      description: "Satisfaction guaranteed",
      color: "orange"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Transforming Businesses <span className="text-primary">Across Africa</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results for real businesses. Here's the impact we've created together with our amazing clients.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12">
          {stats.map((stat, index) => {
            // Define color schemes for each stat
            const colors = {
              icon: "text-primary",
              number: "text-primary"
            };
            
            return (
              <div 
                key={stat.label}
                className="group relative bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-elegant transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-8 h-8 bg-primary/5 rounded-md flex items-center justify-center mb-3 transition-all duration-500">
                  <stat.icon className={`w-4 h-4 ${colors.icon} transition-colors duration-500`} />
                </div>
                
                {/* Number */}
                <div className={`text-xl font-bold ${colors.number} mb-1 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.number}
                </div>
                
                {/* Label */}
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trusted By Section - Company Logos Slideshow */}
        <div className="mt-32 mb-12 relative">
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-border"></div>
            <h3 className="text-center text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-muted-foreground">
              Trusted by Leading Companies
            </h3>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-border"></div>
          </div>
          
          <div className="relative overflow-hidden group py-4">
            {/* Elegant Gradient overlays for smooth fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex flex-col gap-10 md:gap-14">
              {/* Row 1: Scrolling Left */}
              <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={`row1-${setIndex}`} className="flex gap-10 md:gap-16 items-center px-5 md:px-8">
                    {[
                      "/Logos/fyaluchi%20consts.png", "/Logos/gloria%20limited.png", "/Logos/gloria%20research.png", 
                      "/Logos/gsda.png", "/Logos/paychain.png", "/Logos/wshg.png", 
                      "/Logos/zambia.png", "/company1.png", "/company2.png"
                    ].map((src, i) => (
                      <div 
                        key={`logo-r1-${setIndex}-${i}`} 
                        className="flex-shrink-0 w-32 h-20 md:w-48 md:h-28 flex items-center justify-center transition-all duration-500 hover:scale-110 cursor-pointer bg-white dark:bg-gray-800/50 rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-elegant hover:border-primary/20"
                      >
                        <img loading="lazy" decoding="async" 
                          src={src}
                          alt="Partner Company"
                          className="max-w-full max-h-full object-contain drop-shadow-sm transition-all duration-500"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Row 2: Scrolling Right */}
              <div className="flex w-max animate-scroll-reverse group-hover:[animation-play-state:paused]">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={`row2-${setIndex}`} className="flex gap-10 md:gap-16 items-center px-5 md:px-8">
                    {[
                      "/company3.png", "/company4.png", "/company5.png", "/company6.png", 
                      "/company%207.png", "/company%208.png", "/company%209.png", "/company%2011.png"
                    ].map((src, i) => (
                      <div 
                        key={`logo-r2-${setIndex}-${i}`} 
                        className="flex-shrink-0 w-32 h-20 md:w-48 md:h-28 flex items-center justify-center transition-all duration-500 hover:scale-110 cursor-pointer bg-white dark:bg-gray-800/50 rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-elegant hover:border-primary/20"
                      >
                        <img loading="lazy" decoding="async" 
                          src={src}
                          alt="Partner Company"
                          className="max-w-full max-h-full object-contain drop-shadow-sm transition-all duration-500"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to become our next success story?
          </p>
          <Button 
            onClick={onContactClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}