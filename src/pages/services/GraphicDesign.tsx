import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, PenTool, CheckCircle2, ArrowRight, Image as ImageIcon, Layout, Type, MousePointer2 } from "lucide-react";

const GraphicDesign = () => {
  const features = [
    "Corporate Identity & Branding",
    "UI/UX & Web Design",
    "Social Media & Marketing Assets",
    "Print & Packaging Design",
    "Motion Graphics & Animation",
    "Infographics & Data Viz",
    "Custom Illustrations",
    "Digital Ad Creatives",
  ];

  const technologies = [
    { name: "Photoshop", category: "Image Editing" },
    { name: "Illustrator", category: "Vector Graphics" },
    { name: "Figma", category: "UI/UX Design" },
    { name: "After Effects", category: "Motion Graphics" },
    { name: "InDesign", category: "Layout Design" },
    { name: "Sketch", category: "Interface Design" },
    { name: "Cinema 4D", category: "3D Modeling" },
    { name: "Midjourney", category: "AI Generation" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Creative Brief",
      description: "We start by deeply understanding your brand, target audience, and the goals of the specific design assets required.",
    },
    {
      number: "02",
      title: "Concept Development",
      description: "Our designers brainstorm and create initial mockups, establishing the core visual language and direction.",
    },
    {
      number: "03",
      title: "Feedback & Refinement",
      description: "We present the concepts to you and iterate based on your feedback until the design perfectly aligns with your vision.",
    },
    {
      number: "04",
      title: "Final Polish",
      description: "Every pixel is perfected. We ensure color profiles, typography, and visual hierarchies are flawless across all formats.",
    },
    {
      number: "05",
      title: "Asset Delivery",
      description: "You receive all high-resolution source files and exported formats ready for print, web, or social media deployment.",
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
              <Palette className="w-4 h-4 mr-2" />
              Graphic Design Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Elevate Your Brand with Premium Design
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From compelling corporate identities to stunning digital interfaces, we craft visual experiences that capture attention and communicate your brand's unique value.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact}>
                Start a Design Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = "/projects"}>
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
              Our Design Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide a full spectrum of high-end graphic design services tailored for modern enterprises.
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
              Tools of the Trade
            </h2>
            <p className="text-lg text-muted-foreground">
              Our designers are experts in industry-standard creative software and emerging generative tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <PenTool className="w-8 h-8 mx-auto mb-3 text-primary" />
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
              Our Creative Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A collaborative and structured approach to bringing your visual ideas to life.
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
              <ImageIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Upgrade Your Brand?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your design needs and create visuals that leave a lasting impact. 
                Get a free consultation and project quote today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={scrollToContact}>
                  Start Designing
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

export default GraphicDesign;
