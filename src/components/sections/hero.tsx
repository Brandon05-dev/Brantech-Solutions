import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Briefcase, Globe } from "lucide-react";

interface HeroProps {
  onContactClick?: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-primary opacity-5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-primary opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Bringing Your Ideas to Life with Smart Technology
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Transform Your Business with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            We craft custom software, AI solutions, IoT systems, and digital products that scale your business across Africa and beyond.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              onClick={onContactClick}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:bg-secondary transition-colors duration-300"
            >
              View Our Work
            </Button>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">20+</span>
              <span>Successful Projects</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">10+</span>
              <span>Happy Partners</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Globe className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">5+</span>
              <span>Industries Served</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}