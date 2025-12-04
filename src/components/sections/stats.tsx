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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            // Define color schemes for each stat
            const colorSchemes = {
              blue: {
                icon: "text-blue-600",
                number: "text-blue-600"
              },
              green: {
                icon: "text-green-600",
                number: "text-green-600"
              },
              purple: {
                icon: "text-purple-600",
                number: "text-purple-600"
              },
              orange: {
                icon: "text-orange-600",
                number: "text-orange-600"
              }
            };
            
            const colors = colorSchemes[stat.color];
            
            return (
              <div 
                key={stat.label}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-transparent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                  <stat.icon className={`w-8 h-8 ${colors.icon} transition-colors duration-500`} />
                </div>
                
                {/* Number */}
                <div className={`text-4xl font-bold ${colors.number} mb-3 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.number}
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trusted By Section - Company Logos Slideshow */}
        <div className="mt-20 mb-12">
          <h3 className="text-center text-2xl font-bold text-foreground mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
            
            {/* Scrolling container */}
            <div className="flex animate-scroll">
              {/* First set of logos - repeated multiple times for continuous effect */}
              {[...Array(3)].map((_, setIndex) => (
                <div key={`set-${setIndex}`} className="flex gap-12 items-center px-6">
                  <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/company1.png"
                      alt="Company 1"
                      className="max-w-full max-h-full object-contain p-4 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/company2.png"
                      alt="Company 2"
                      className="max-w-full max-h-full object-contain p-1 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/company3.png"
                      alt="Company 3"
                      className="max-w-full max-h-full object-contain p-1 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/company4.png"
                      alt="Company 4"
                      className="max-w-full max-h-full object-contain p-1 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/company5.png"
                      alt="Company 5"
                      className="max-w-full max-h-full object-contain p-1 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/company1.png"
                      alt="Company 1"
                      className="max-w-full max-h-full object-contain p-4 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/company2.png"
                      alt="Company 2"
                      className="max-w-full max-h-full object-contain p-1 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/company3.png"
                      alt="Company 3"
                      className="max-w-full max-h-full object-contain p-1 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/company4.png"
                      alt="Company 4"
                      className="max-w-full max-h-full object-contain p-1 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/company5.png"
                      alt="Company 5"
                      className="max-w-full max-h-full object-contain p-1 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}