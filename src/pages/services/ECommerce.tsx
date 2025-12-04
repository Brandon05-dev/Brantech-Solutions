import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, CreditCard, Package, TrendingUp, CheckCircle2, ArrowRight, BarChart, Users } from "lucide-react";

const ECommerce = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Shopping Cart & Checkout",
      description: "Seamless shopping experience with intuitive cart and secure checkout process.",
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Accept payments via M-Pesa, cards, PayPal, and other popular payment methods.",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track stock levels, manage products, and automate reordering processes.",
    },
    {
      icon: BarChart,
      title: "Analytics & Reports",
      description: "Detailed insights into sales, customers, and product performance.",
    },
    {
      icon: Users,
      title: "Customer Accounts",
      description: "Allow customers to create accounts, track orders, and save preferences.",
    },
    {
      icon: TrendingUp,
      title: "Marketing Tools",
      description: "Built-in SEO, email marketing, and promotional tools to drive sales.",
    },
  ];

  const platforms = [
    "WooCommerce",
    "Shopify",
    "Custom Solutions",
    "Magento",
  ];

  const benefits = [
    "Increase sales with 24/7 online store",
    "Reach customers across Africa and beyond",
    "Reduce operational costs",
    "Easy product management",
    "Automated order processing",
    "Mobile-responsive design",
    "Secure payment processing",
    "Customer relationship management",
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-500/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2 bg-green-500/10 text-green-700 dark:text-green-300">
              <ShoppingCart className="w-4 h-4 mr-2" />
              E-Commerce Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Launch Your Online Store & Grow Your Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Complete e-commerce solutions from product catalog to payment processing. 
              Sell online, manage inventory, and reach customers across Africa and beyond.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact} className="bg-green-600 hover:bg-green-700">
                Start Selling Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = "/#portfolio"}>
                View E-Commerce Projects
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
              Everything You Need to Sell Online
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features to help you manage and grow your online business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-green-500/50 hover:shadow-xl transition-all">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-green-600 mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
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
              We Work With Leading Platforms
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the platform that best fits your business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-green-500/50">
                <CardContent className="pt-8 pb-8">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-3 text-green-600" />
                  <h3 className="font-semibold text-foreground">{platform}</h3>
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
              Why Your Business Needs E-Commerce
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-green-500/50 transition-colors">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                  <p className="font-medium text-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-green-500/20 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500/10 to-transparent p-8 md:p-12">
                <Badge className="mb-6 bg-green-500/10 text-green-700 dark:text-green-300">
                  Success Story
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  300% Increase in Online Sales
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  "Brantech Solutions transformed our retail business with a beautiful, easy-to-use online store. 
                  Within 6 months, our online sales tripled, and we're now reaching customers across Kenya and beyond."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                    BM
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">BMI Leather Art</div>
                    <div className="text-sm text-muted-foreground">E-Commerce Client</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-green-500/20">
            <CardContent className="p-12 text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-6 text-green-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Start Selling Online?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of African businesses already selling online. Get a custom e-commerce solution 
                tailored to your needs and budget.
              </p>
              <Button size="lg" onClick={scrollToContact} className="bg-green-600 hover:bg-green-700">
                Launch Your Store Today
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

export default ECommerce;
