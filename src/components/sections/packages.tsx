import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, MessageCircle, Rocket, TrendingUp, Crown, Star } from "lucide-react";

interface PackagesProps {
  onContactClick?: () => void;
}

export function Packages({ onContactClick }: PackagesProps) {
  const packages = [
    {
      icon: MessageCircle,
      name: "Free Plan",
      price: "FREE",
      description: "Perfect for getting started",
      features: [
        "Free 30-min consultation",
        "Get expert advice on your website idea", 
        "Rough cost & timeline estimate",
        "Ask any questions, no cost"
      ],
      cta: "Start for Free",
      popular: false,
      color: "bg-secondary"
    },
    {
      icon: Rocket,
      name: "Launch Plan",
      badge: "Silver",
      price: "From KSHS 25,000",
      description: "Great for small businesses",
      features: [
        "A simple custom website for your business",
        "Mobile-friendly design",
        "Basic search engine setup",
        "Email & chat support",
        "1 free update after launch"
      ],
      cta: "Get Started",
      popular: false,
      color: "bg-card"
    },
    {
      icon: TrendingUp,
      name: "Scale Plan",
      badge: "Gold",
      price: "From KSHS 50,000",
      description: "Perfect for growing businesses",
      features: [
        "Custom website with more pages & features",
        "Better search engine boost",
        "Connect with online payments if needed",
        "Priority support",
        "2 free updates after launch"
      ],
      cta: "Get Started",
      popular: true,
      color: "bg-card"
    },
    {
      icon: Crown,
      name: "Prime Plan",
      badge: "Diamond",
      price: "Custom Quote",
      description: "For established businesses",
      features: [
        "Full website or online store for your business",
        "Strong SEO to help people find you",
        "Extra tools — booking, payments, newsletters",
        "Dedicated manager for your project",
        "3 months of free support & updates"
      ],
      cta: "Talk to Us",
      popular: false,
      color: "bg-card"
    },
    {
      icon: Star,
      name: "Platinum Plan",
      badge: "Premium",
      price: "Custom Quote",
      description: "Enterprise-level solutions",
      features: [
        "Everything in Prime — plus more!",
        "Full custom online system for large businesses",
        "Special features just for your business",
        "Dedicated team, faster delivery",
        "Full support & updates for 6 months",
        "Personal check-ins with our experts"
      ],
      cta: "Talk to Us",
      popular: false,
      color: "bg-card"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Affordable Plans for Every Business
          </h2>
          <p className="text-lg text-muted-foreground">
            We help you get online, grow your business, and succeed with the right website and digital solutions. Pick the plan that fits your budget — or chat with us for a custom plan.
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              className={`group relative hover:shadow-elegant transition-all duration-300 border-border hover:border-primary/20 animate-fade-in ${pkg.color} ${pkg.popular ? 'ring-2 ring-primary scale-105' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 ${pkg.popular ? 'bg-gradient-primary' : 'bg-secondary'} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  <pkg.icon className={`w-6 h-6 ${pkg.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>
                
                <div className="space-y-2">
                  <CardTitle className="text-lg text-foreground">
                    {pkg.name}
                  </CardTitle>
                  {pkg.badge && (
                    <Badge variant="outline" className="text-xs">
                      {pkg.badge}
                    </Badge>
                  )}
                  <div className="text-2xl font-bold text-primary">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {pkg.description}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={onContactClick}
                  className="w-full transition-all duration-300"
                >
                  {pkg.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-secondary/30 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Not sure what you need?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's talk — we'll help you pick the right plan or build one just for you.
          </p>
          <Button
            variant="default"
            size="lg"
            onClick={onContactClick}
            className="transition-all duration-300"
          >
            <MessageCircle className="mr-2 w-4 h-4" />
            Start Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}