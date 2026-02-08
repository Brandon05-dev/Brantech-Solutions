import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, MessageCircle, Rocket, TrendingUp, Crown } from "lucide-react";

interface PackagesProps {
  onContactClick?: () => void;
}

export function Packages({ onContactClick }: PackagesProps) {
  const packages = [
    {
      icon: MessageCircle,
      name: "Free Plan",
      price: "$0",
      description: "Perfect for consultation and planning",
      iconColor: "blue",
      features: [
        { name: "Custom Website Design and Development Consultation", included: true },
        { name: "Basic Security Assessment", included: true },
        { name: "SEO Optimization", included: false },
        { name: "Digital Marketing", included: false },
        { name: "Support", included: false },
        { name: "Hosting", included: false },
        { name: "Responsive Design", included: false },
        { name: "Cybersecurity Implementation", included: false },
        { name: "Dedicated Account Manager", included: false },
        { name: "E-commerce Solutions (if applicable)", included: false }
      ],
      cta: "Buy Now",
      popular: false,
      highlight: null
    },
    {
      icon: Rocket,
      name: "Basic Plan",
      price: "KSHS 25,000",
      description: "Essential features for small businesses",
      iconColor: "green",
      features: [
        { name: "Custom Website Design and Development", included: true },
        { name: "Basic SEO Optimization", included: true },
        { name: "Standard Support", included: true },
        { name: "Shared Hosting (Basic); 1 Year", included: true },
        { name: "Responsive Design", included: true },
        { name: "Basic Security Setup (SSL, Firewall)", included: true },
        { name: "Cybersecurity Consulting", included: false },
        { name: "Dedicated Account Manager", included: false },
        { name: "E-commerce Solutions (if applicable)", included: false }
      ],
      cta: "Buy Now",
      popular: false,
      highlight: null
    },
    {
      icon: TrendingUp,
      name: "Standard Plan",
      price: "KSHS 30,000",
      description: "Perfect for growing businesses",
      iconColor: "purple",
      features: [
        { name: "Custom Website Design and Development", included: true },
        { name: "Enhanced SEO and Digital Marketing", included: true },
        { name: "Priority Support", included: true },
        { name: "Shared Hosting (Advanced); 1 Year", included: true },
        { name: "Responsive Design", included: true },
        { name: "Enhanced Security Package (WAF, DDoS Protection)", included: true },
        { name: "Cybersecurity Audit & Consultation", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "E-commerce Solutions (if applicable)", included: true }
      ],
      cta: "Buy Now",
      popular: true,
      highlight: null
    },
    {
      icon: Crown,
      name: "Premium Plan",
      price: "KSHS 40,000",
      description: "Complete solution for established businesses",
      iconColor: "orange",
      features: [
        { name: "Custom Website Design and Development", included: true },
        { name: "Advanced SEO and Digital Marketing", included: true },
        { name: "24/7 Support", included: true },
        { name: "Dedicated Hosting (Advanced); 1 Year", included: true },
        { name: "Responsive Design", included: true },
        { name: "Complete Cybersecurity Suite", included: true },
        { name: "Security Monitoring & Threat Detection", included: true },
        { name: "Compliance Management (GDPR, Data Protection)", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "E-commerce Solutions (if applicable)", included: true }
      ],
      cta: "Buy Now",
      popular: false,
      highlight: null
    }
  ];

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Check Our Affordable Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your business needs. All plans include professional website development with modern design and functionality.
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            // Define color schemes for each icon
            const colorSchemes = {
              blue: {
                icon: "text-blue-600"
              },
              green: {
                icon: "text-green-600"
              },
              purple: {
                icon: "text-purple-600"
              },
              orange: {
                icon: "text-orange-600"
              }
            };
            
            const colors = colorSchemes[pkg.iconColor];
            
            return (
              <Card 
                key={pkg.name}
                className={`group relative transition-all duration-300 border-border animate-fade-in bg-card ${
                  pkg.popular 
                    ? 'ring-2 ring-primary scale-105 hover:shadow-2xl shadow-lg border-primary/50' 
                    : 'hover:shadow-xl hover:border-primary/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {pkg.highlight && (
                  <div className="absolute -top-3 right-4">
                    <Badge variant="outline" className="bg-secondary text-secondary-foreground px-2 py-1 text-xs">
                      {pkg.highlight}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-transparent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <pkg.icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  
                  <CardTitle className="text-xl text-foreground mb-2">
                    {pkg.name}
                  </CardTitle>
                  
                  <div className="mb-3">
                    <div className={`text-3xl font-bold ${pkg.popular ? 'text-primary' : 'text-foreground'} mb-2`}>
                      {pkg.price}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {pkg.description}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                        )}
                        <span className={`leading-relaxed ${feature.included ? 'text-muted-foreground' : 'text-muted-foreground/60 line-through'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={pkg.name === "Free Plan" 
                      ? () => window.open("https://calendly.com/brantech-solutions/30min", "_blank")
                      : onContactClick
                    }
                    className={`w-full transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg' 
                        : 'hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution or have questions about our plans?
          </p>
          <Button 
            variant="outline" 
            onClick={onContactClick}
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Contact Us for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
