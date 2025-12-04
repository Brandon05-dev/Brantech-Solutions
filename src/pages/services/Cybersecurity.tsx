import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, Eye } from "lucide-react";

const Cybersecurity = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "Security Audits",
      description: "Comprehensive assessment of your systems to identify vulnerabilities and security gaps.",
    },
    {
      icon: Lock,
      title: "Penetration Testing",
      description: "Ethical hacking to discover weaknesses before malicious actors can exploit them.",
    },
    {
      icon: Eye,
      title: "Threat Monitoring",
      description: "24/7 monitoring and real-time alerts to detect and respond to security threats.",
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Implement encryption, access controls, and backup strategies to protect sensitive data.",
    },
  ];

  const threats = [
    "Ransomware Attacks",
    "Data Breaches",
    "Phishing Scams",
    "Malware Infections",
    "DDoS Attacks",
    "Insider Threats",
    "Zero-Day Exploits",
    "Supply Chain Attacks",
  ];

  const stats = [
    { value: "Zero", label: "Security Breaches", subtitle: "On Our Watch" },
    { value: "24/7", label: "Monitoring", subtitle: "Round the Clock" },
    { value: "100%", label: "Compliance", subtitle: "Industry Standards" },
    { value: "<15min", label: "Response Time", subtitle: "Average" },
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-500/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2 bg-red-500/10 text-red-700 dark:text-red-300">
              <Shield className="w-4 h-4 mr-2" />
              Cybersecurity Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Protect Your Business From Cyber Threats
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Advanced cybersecurity solutions to safeguard your digital assets. From security audits to 
              threat monitoring, we keep your business secure 24/7.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact} className="bg-red-600 hover:bg-red-700">
                Secure Your Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Free Security Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 hover:border-red-500/50 transition-colors">
                <CardContent className="pt-8 pb-8">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Multi-layered protection to keep your business safe from evolving cyber threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-red-500/50 hover:shadow-xl transition-all">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-red-600 mb-4" />
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

      {/* Threats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Threats We Protect Against
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay ahead of cybercriminals with comprehensive protection against all major threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {threats.map((threat, index) => (
              <Card key={index} className="border-2 hover:border-red-500/50 transition-colors">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 text-red-600 mb-3" />
                  <p className="font-medium text-foreground">{threat}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-red-500/20 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500/10 to-transparent p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Choose Our Cybersecurity Services?
                </h2>
                <div className="space-y-4">
                  {[
                    "Expert team with industry certifications (CISSP, CEH, CompTIA Security+)",
                    "Proactive threat detection with AI-powered monitoring",
                    "Compliance with international standards (ISO 27001, GDPR, HIPAA)",
                    "Fast incident response with dedicated security team",
                    "Regular security updates and vulnerability assessments",
                    "Affordable solutions tailored for African businesses",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-500/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-red-500/20">
            <CardContent className="p-12 text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-red-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Don't Wait Until It's Too Late
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Cyber threats are evolving every day. Protect your business now with our comprehensive 
                cybersecurity solutions. Get a free security assessment today.
              </p>
              <Button size="lg" onClick={scrollToContact} className="bg-red-600 hover:bg-red-700">
                Get Protected Now
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

export default Cybersecurity;
