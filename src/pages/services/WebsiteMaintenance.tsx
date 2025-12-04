import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, RefreshCw, Shield, Zap, CheckCircle2, ArrowRight, Clock, AlertCircle } from "lucide-react";

const WebsiteMaintenance = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Regular Updates",
      description: "Keep your website up-to-date with the latest software versions, security patches, and feature updates.",
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "Continuous monitoring for malware, vulnerabilities, and security threats with immediate response.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Regular speed tests and optimizations to ensure your site loads fast and runs smoothly.",
    },
    {
      icon: Clock,
      title: "Backup & Recovery",
      description: "Automated daily backups with quick restoration capabilities in case of any issues.",
    },
  ];

  const maintenancePlans = [
    {
      name: "Basic",
      price: "KES 5,000",
      period: "/month",
      features: [
        "Monthly updates & backups",
        "Basic security monitoring",
        "Content updates (up to 2 pages)",
        "Email support",
        "Performance monitoring",
      ],
    },
    {
      name: "Professional",
      price: "KES 10,000",
      period: "/month",
      popular: true,
      features: [
        "Weekly updates & backups",
        "Advanced security monitoring",
        "Content updates (unlimited)",
        "Priority email & phone support",
        "Performance optimization",
        "Monthly analytics reports",
        "Plugin/theme updates",
      ],
    },
    {
      name: "Enterprise",
      price: "KES 20,000",
      period: "/month",
      features: [
        "Daily updates & backups",
        "24/7 security monitoring",
        "Unlimited content updates",
        "24/7 priority support",
        "Advanced performance optimization",
        "Weekly analytics reports",
        "Emergency response",
        "Dedicated account manager",
      ],
    },
  ];

  const issues = [
    "Website downtime",
    "Slow loading speeds",
    "Security vulnerabilities",
    "Broken links & errors",
    "Outdated content",
    "Plugin conflicts",
    "Browser compatibility issues",
    "Mobile responsiveness problems",
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-500/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2 bg-orange-500/10 text-orange-700 dark:text-orange-300">
              <Wrench className="w-4 h-4 mr-2" />
              Website Maintenance & Support
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Keep Your Website Running Smoothly 24/7
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional website maintenance and support services to keep your site secure, fast, and up-to-date. 
              Focus on your business while we handle the technical details.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact} className="bg-orange-600 hover:bg-orange-700">
                Get Maintenance Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Plans & Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What's Included in Our Maintenance
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive care for your website so it stays secure, fast, and reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-orange-500/50 hover:shadow-xl transition-all">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-orange-600 mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Flexible Maintenance Plans
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that best fits your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${
                  plan.popular 
                    ? 'border-2 border-orange-500 shadow-xl scale-105' 
                    : 'border-2 hover:border-orange-500/50'
                } transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-orange-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-orange-600">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${
                      plan.popular 
                        ? 'bg-orange-600 hover:bg-orange-700' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={scrollToContact}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Issues Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AlertCircle className="w-16 h-16 mx-auto mb-6 text-orange-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              We Fix Common Website Issues
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't let technical problems hurt your business. We handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {issues.map((issue, index) => (
              <Card key={index} className="border-2 hover:border-orange-500/50 transition-colors">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 text-orange-600 mb-3" />
                  <p className="font-medium text-foreground">{issue}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-orange-500/20">
            <CardContent className="p-12 text-center">
              <Wrench className="w-16 h-16 mx-auto mb-6 text-orange-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Let Us Take Care of Your Website
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Focus on running your business while we handle all the technical maintenance. 
                Get peace of mind with professional website support.
              </p>
              <Button size="lg" onClick={scrollToContact} className="bg-orange-600 hover:bg-orange-700">
                Start Maintenance Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteMaintenance;
