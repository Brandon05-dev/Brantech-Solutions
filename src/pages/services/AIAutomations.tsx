import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Bot, Zap, CheckCircle2, ArrowRight, MessageSquare, Cpu, LineChart, Network, Code } from "lucide-react";

const AIAutomations = () => {
  const features = [
    "Custom LLM Integration",
    "Intelligent Chatbots",
    "Workflow Automation (RPA)",
    "Predictive Analytics",
    "Natural Language Processing",
    "Data Extraction & Parsing",
    "24/7 Automated Support",
    "Machine Learning Models",
  ];

  const technologies = [
    { name: "OpenAI", category: "Language Models" },
    { name: "LangChain", category: "Framework" },
    { name: "TensorFlow", category: "Machine Learning" },
    { name: "PyTorch", category: "Machine Learning" },
    { name: "Python", category: "Language" },
    { name: "Zapier / Make", category: "Automation Tools" },
    { name: "Hugging Face", category: "AI Models" },
    { name: "UIPath", category: "RPA Software" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Audit",
      description: "We analyze your current operational workflows to identify bottlenecks that are ripe for AI integration or automation.",
    },
    {
      number: "02",
      title: "Architecture Design",
      description: "We architect a scalable, secure AI pipeline tailored to your proprietary data and business logic.",
    },
    {
      number: "03",
      title: "Development & Training",
      description: "Our engineers build the automation scripts and fine-tune machine learning models to perform with high accuracy.",
    },
    {
      number: "04",
      title: "Integration & Testing",
      description: "We integrate the AI solutions into your existing software ecosystem, conducting rigorous testing to ensure zero downtime.",
    },
    {
      number: "05",
      title: "Deployment & Scaling",
      description: "Once live, we monitor the automated processes, providing ongoing optimization and scaling as your business grows.",
    },
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2">
              <Brain className="w-4 h-4 mr-2" />
              AI & Automations
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Scale Your Operations with Intelligent Systems
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Reduce manual overhead and accelerate growth by implementing enterprise-grade AI models, intelligent chatbots, and robust workflow automation pipelines.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact}>
                Automate Your Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = "/projects"}>
                View Use Cases
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
              We deploy sophisticated artificial intelligence to drastically reduce operational costs and boost efficiency.
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
              We leverage state-of-the-art frameworks to build secure, hallucination-free AI architectures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <Cpu className="w-8 h-8 mx-auto mb-3 text-primary" />
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
              Our Integration Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A precise methodology designed to safely bring AI into your production environment.
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
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20">
            <CardContent className="p-12 text-center">
              <Bot className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Implement AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how customized AI and automation pipelines can transform your operational efficiency. 
                Get a free technical consultation today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={scrollToContact}>
                  Book a Consultation
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

export default AIAutomations;
