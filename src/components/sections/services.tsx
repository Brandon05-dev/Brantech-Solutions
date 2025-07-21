import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Brain, 
  Radio, 
  Smartphone, 
  Users, 
  ArrowRight 
} from "lucide-react";

interface ServicesProps {
  onContactClick?: () => void;
}

export function Services({ onContactClick }: ServicesProps) {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies to solve your unique business challenges and drive growth.",
      features: ["Web Applications", "Desktop Software", "API Development", "System Integration"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent systems that learn and adapt to optimize your business processes and unlock valuable insights from your data.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automation"]
    },
    {
      icon: Radio,
      title: "IoT Solutions", 
      description: "Connect your physical world to the digital realm with smart sensors, devices, and comprehensive IoT ecosystems.",
      features: ["Smart Sensors", "Device Management", "Data Analytics", "Cloud Integration"]
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Apps",
      description: "Beautiful, responsive applications that deliver exceptional user experiences across all devices and platforms.",
      features: ["Progressive Web Apps", "Native Mobile Apps", "Cross-platform Development", "UI/UX Design"]
    },
    {
      icon: Users,
      title: "Tech Advisory",
      description: "Strategic technology guidance to help you make informed decisions and accelerate your digital transformation journey.",
      features: ["Technology Strategy", "Architecture Review", "Team Mentoring", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, we provide end-to-end technology services that transform your ideas into powerful digital solutions.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-elegant transition-all duration-300 bg-card border-border hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  onClick={onContactClick}
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}