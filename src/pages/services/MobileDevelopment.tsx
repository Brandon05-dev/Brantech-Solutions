import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Zap, CheckCircle2, ArrowRight, Apple, Monitor } from "lucide-react";

const MobileDevelopment = () => {
  const features = [
    "Native iOS & Android Apps",
    "Cross-Platform Development",
    "Intuitive User Interfaces",
    "Offline Functionality",
    "Push Notifications",
    "In-App Purchases",
    "Real-time Synchronization",
    "App Store Optimization",
  ];

  const platforms = [
    { name: "iOS", icon: Apple, description: "Native Swift/SwiftUI apps for iPhone and iPad" },
    { name: "Android", icon: Smartphone, description: "Native Kotlin/Java apps for all Android devices" },
    { name: "Cross-Platform", icon: Monitor, description: "React Native & Flutter for both platforms" },
  ];

  const benefits = [
    {
      title: "Increase Engagement",
      description: "Mobile apps provide direct access to your users, increasing engagement and loyalty.",
    },
    {
      title: "Boost Revenue",
      description: "In-app purchases, subscriptions, and mobile commerce drive significant revenue growth.",
    },
    {
      title: "Enhanced User Experience",
      description: "Native features like camera, GPS, and push notifications create seamless experiences.",
    },
    {
      title: "Competitive Advantage",
      description: "Stand out from competitors with a professional mobile presence.",
    },
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-500/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2 bg-purple-500/10 text-purple-700 dark:text-purple-300">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile App Development
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Build Powerful Mobile Apps That Users Love
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create stunning native and cross-platform mobile applications for iOS and Android. 
              Reach millions of users with apps that deliver exceptional performance and user experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact} className="bg-purple-600 hover:bg-purple-700">
                Start Your App Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = "/#portfolio"}>
                View Our Apps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              We Build For All Platforms
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you need native apps or cross-platform solutions, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-2 hover:border-purple-500/50 transition-all hover:shadow-xl">
                <CardHeader>
                  <platform.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle className="text-2xl">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Powerful Features Out of the Box
            </h2>
            <p className="text-lg text-muted-foreground">
              We build mobile apps with all the features your users expect and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-purple-500/50 transition-colors">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 text-purple-600 mb-3" />
                  <p className="font-medium text-foreground">{feature}</p>
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
              Why Your Business Needs a Mobile App
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-purple-500/20">
            <CardContent className="p-12 text-center">
              <Zap className="w-16 h-16 mx-auto mb-6 text-purple-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Launch Your Mobile App?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's turn your app idea into reality. Get a free consultation and discover how we can help 
                you reach millions of mobile users.
              </p>
              <Button size="lg" onClick={scrollToContact} className="bg-purple-600 hover:bg-purple-700">
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

export default MobileDevelopment;
