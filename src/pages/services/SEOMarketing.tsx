import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Target, BarChart3, CheckCircle2, ArrowRight, Users, Globe } from "lucide-react";

const SEOMarketing = () => {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Improve your website's visibility on Google and other search engines with proven SEO strategies.",
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across Facebook, Instagram, Twitter, and LinkedIn.",
    },
    {
      icon: Target,
      title: "Content Marketing",
      description: "Create compelling content that attracts, engages, and converts your target audience.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights and regular reports to track performance and ROI.",
    },
  ];

  const seoFeatures = [
    "Keyword Research & Strategy",
    "On-Page SEO Optimization",
    "Technical SEO Audit",
    "Link Building",
    "Local SEO",
    "Content Optimization",
    "Competitor Analysis",
    "Google My Business Setup",
  ];

  const results = [
    { metric: "250%", label: "Average Traffic Increase" },
    { metric: "180%", label: "Lead Generation Growth" },
    { metric: "3-6", label: "Months to Page 1 Ranking" },
    { metric: "95%", label: "Client Satisfaction Rate" },
  ];

  const digitalChannels = [
    { name: "Google Ads", description: "Paid search advertising for immediate visibility" },
    { name: "Facebook & Instagram", description: "Social media advertising and engagement" },
    { name: "LinkedIn Marketing", description: "B2B marketing and professional networking" },
    { name: "Email Marketing", description: "Automated campaigns and newsletters" },
    { name: "Content Marketing", description: "Blogs, videos, and valuable content creation" },
    { name: "Influencer Marketing", description: "Collaborate with African influencers" },
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-pink-500/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2 bg-pink-500/10 text-pink-700 dark:text-pink-300">
              <Search className="w-4 h-4 mr-2" />
              SEO & Digital Marketing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Grow Your Online Presence & Drive Real Results
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive digital marketing strategies to increase visibility, attract customers, and grow your business. 
              From SEO to social media, we help you dominate your market.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact} className="bg-pink-600 hover:bg-pink-700">
                Boost Your Visibility
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Free SEO Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Real Results for African Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {results.map((result, index) => (
              <Card key={index} className="text-center border-2 hover:border-pink-500/50 transition-colors">
                <CardContent className="pt-8 pb-8">
                  <div className="text-4xl font-bold text-pink-600 mb-2">{result.metric}</div>
                  <div className="text-sm text-muted-foreground">{result.label}</div>
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
              Comprehensive Marketing Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to succeed in the digital marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-pink-500/50 hover:shadow-xl transition-all">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-pink-600 mb-4" />
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

      {/* SEO Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Complete SEO Package
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything needed to rank higher on Google and drive organic traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {seoFeatures.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-pink-500/50 transition-colors">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 text-pink-600 mb-3" />
                  <p className="font-medium text-foreground">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Channels Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Multi-Channel Marketing Strategy
            </h2>
            <p className="text-lg text-muted-foreground">
              Reach your audience wherever they are with integrated marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {digitalChannels.map((channel, index) => (
              <Card key={index} className="border-2 hover:border-pink-500/50 transition-colors">
                <CardHeader>
                  <Globe className="w-8 h-8 text-pink-600 mb-2" />
                  <CardTitle className="text-lg">{channel.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{channel.description}</p>
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
            <Card className="border-2 border-pink-500/20 overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500/10 to-transparent p-8 md:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Marketing Process
                </h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Audit & Research", desc: "Analyze your current presence and competitors" },
                    { step: "2", title: "Strategy Development", desc: "Create custom marketing plan aligned with goals" },
                    { step: "3", title: "Implementation", desc: "Execute campaigns across multiple channels" },
                    { step: "4", title: "Monitor & Optimize", desc: "Track results and continuously improve performance" },
                    { step: "5", title: "Report & Scale", desc: "Regular reports and scale successful campaigns" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-pink-500/20">
            <CardContent className="p-12 text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-6 text-pink-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Dominate Your Market?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get a free SEO audit and digital marketing consultation. Let's create a strategy that drives 
                real results for your business.
              </p>
              <Button size="lg" onClick={scrollToContact} className="bg-pink-600 hover:bg-pink-700">
                Get Free SEO Audit
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

export default SEOMarketing;
