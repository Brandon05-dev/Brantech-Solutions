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
      description: "Live projects across Africa"
    },
    {
      icon: Building2,
      number: "30+", 
      label: "Businesses Helped",
      description: "From startups to enterprises"
    },
    {
      icon: Users,
      number: "5+",
      label: "Countries Reached",
      description: "International client base"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Client Rating",
      description: "Satisfaction guaranteed"
    },
    {
      icon: TrendingUp,
      number: "150%",
      label: "Average Growth",
      description: "Client business increase"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Work So Far
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results for real businesses. Here's what we've achieved together with our amazing clients.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="group text-center hover:shadow-elegant transition-all duration-300 bg-card border-border hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                
                <h3 className="font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}