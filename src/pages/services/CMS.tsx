import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Layout, Edit, Zap, CheckCircle2, ArrowRight, Lock, Smartphone } from "lucide-react";

const CMS = () => {
  const features = [
    {
      icon: Edit,
      title: "Easy Content Editing",
      description: "Update text, images, and media with a simple, intuitive interface. No coding required.",
    },
    {
      icon: Layout,
      title: "Custom Design",
      description: "Beautiful, branded designs that match your business identity perfectly.",
    },
    {
      icon: Lock,
      title: "User Management",
      description: "Control who can access and edit different parts of your website with role-based permissions.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "All our CMS solutions work perfectly on desktop, tablet, and mobile devices.",
    },
  ];

  const platforms = [
    {
      name: "WordPress",
      description: "The world's most popular CMS, powering 43% of all websites. Perfect for blogs, business sites, and e-commerce.",
      benefits: ["Huge plugin ecosystem", "SEO-friendly", "Easy to use", "Large community"],
    },
    {
      name: "Custom CMS",
      description: "Tailored solution built specifically for your unique needs and workflows. Maximum flexibility and control.",
      benefits: ["Complete customization", "Perfect fit", "Scalable", "No limitations"],
    },
    {
      name: "Headless CMS",
      description: "Modern API-driven CMS for complex, multi-platform content delivery. Ideal for apps and websites.",
      benefits: ["API-first", "Omnichannel", "Lightning fast", "Future-proof"],
    },
  ];

  const benefits = [
    "Update content anytime, anywhere",
    "No technical skills required",
    "Reduce maintenance costs",
    "Improve SEO rankings",
    "Better team collaboration",
    "Faster time to publish",
    "Multiple user roles",
    "Built-in security features",
  ];

  const industries = [
    { name: "Education", desc: "Universities, schools, e-learning platforms" },
    { name: "Healthcare", desc: "Hospitals, clinics, medical practices" },
    { name: "E-Commerce", desc: "Online stores and marketplaces" },
    { name: "NGOs", desc: "Non-profits and charitable organizations" },
    { name: "Corporate", desc: "Businesses and enterprises" },
    { name: "Media", desc: "News sites, blogs, and publishers" },
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-500/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
              <FileText className="w-4 h-4 mr-2" />
              Content Management Systems
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Manage Your Website Content With Ease
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take control of your website with powerful, user-friendly CMS solutions. 
              Update content, manage users, and grow your online presence without any coding knowledge.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact} className="bg-indigo-600 hover:bg-indigo-700">
                Get Your CMS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = "/#portfolio"}>
                View CMS Projects
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
              Powerful Features for Content Management
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to manage your website effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-indigo-500/50 hover:shadow-xl transition-all">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              CMS Solutions We Offer
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the platform that best fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-2 hover:border-indigo-500/50 transition-all">
                <CardHeader>
                  <FileText className="w-12 h-12 text-indigo-600 mb-4" />
                  <CardTitle className="text-2xl mb-3">{platform.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {platform.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why You Need a CMS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-indigo-500/50 transition-colors">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 text-indigo-600 mb-3" />
                  <p className="font-medium text-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Custom CMS solutions for every industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 hover:border-indigo-500/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-indigo-500/20 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500/10 to-transparent p-8 md:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What You Get With Our CMS
                </h2>
                <div className="space-y-4">
                  {[
                    "Fully customized to your brand and workflow",
                    "Comprehensive training for your team",
                    "Mobile-responsive admin interface",
                    "SEO tools and optimization features",
                    "Automated backups and security updates",
                    "24/7 support and maintenance",
                    "Easy media management",
                    "Multi-language support (if needed)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-gradient-to-br from-indigo-500/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-indigo-500/20">
            <CardContent className="p-12 text-center">
              <Zap className="w-16 h-16 mx-auto mb-6 text-indigo-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Take Control of Your Content?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get a powerful, user-friendly CMS that makes managing your website a breeze. 
                Let's discuss your needs and find the perfect solution.
              </p>
              <Button size="lg" onClick={scrollToContact} className="bg-indigo-600 hover:bg-indigo-700">
                Get Started Today
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

export default CMS;
