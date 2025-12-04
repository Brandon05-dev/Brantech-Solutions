import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Code, Smartphone, Zap, CheckCircle2, ArrowRight } from "lucide-react";

const WebDevelopment = () => {
  const features = [
    "Responsive & Mobile-First Design",
    "Modern UI/UX Best Practices",
    "SEO Optimization",
    "Fast Loading Speed",
    "Cross-Browser Compatibility",
    "Scalable Architecture",
    "Content Management Systems",
    "API Integration",
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a strategic development plan.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Our designers create stunning mockups and interactive prototypes for your approval before development begins.",
    },
    {
      number: "03",
      title: "Development",
      description: "Our expert developers bring your vision to life using cutting-edge technologies and best practices.",
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Rigorous testing ensures everything works perfectly before we launch your website to the world.",
    },
    {
      number: "05",
      title: "Support & Maintenance",
      description: "We provide ongoing support, updates, and optimization to keep your website running smoothly.",
    },
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2">
              <Globe className="w-4 h-4 mr-2" />
              Website Design & Development
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Custom Websites That Drive Results
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your online presence with stunning, high-performance websites built with modern technologies. 
              From simple business sites to complex web applications, we deliver excellence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact}>
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = "/#portfolio"}>
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What We Deliver
            </h2>
            <p className="text-lg text-muted-foreground">
              Every website we build comes packed with features designed to help your business succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-medium text-foreground">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-muted-foreground">
              We leverage the latest and most powerful technologies to build exceptional websites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <Code className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven process that delivers exceptional results, every time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20">
            <CardContent className="p-12 text-center">
              <Zap className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Build Your Website?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a website that exceeds your expectations. 
                Get a free consultation and quote today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={scrollToContact}>
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = "/faq"}>
                  View FAQs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
