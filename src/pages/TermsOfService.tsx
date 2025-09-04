import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Users, 
  CreditCard, 
  Copyright, 
  Ban, 
  AlertTriangle,
  RefreshCw,
  Scale,
  Mail,
  MapPin
} from "lucide-react";

const TermsOfService = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    {
      icon: FileText,
      title: "Services",
      content: "Brantech Solutions provides custom website design, development, digital marketing, AI solutions, IoT systems, and related technology services as described on our website or agreed in writing with you."
    },
    {
      icon: Users,
      title: "User Responsibilities",
      content: "You agree to:",
      list: [
        "Provide accurate information when working with us",
        "Use our services legally and responsibly",
        "Not misuse our website or services in any way that could harm us or other users",
        "Respect intellectual property rights"
      ]
    },
    {
      icon: CreditCard,
      title: "Payments",
      content: "Details of pricing and payment terms are provided before the start of any project. Payments must be made according to the agreed schedule. Late payments may result in project delays or suspension of services."
    },
    {
      icon: Copyright,
      title: "Intellectual Property",
      content: "All content, designs, and code we create for you will be delivered as agreed. Brantech Solutions retains the right to display completed projects in our portfolio unless otherwise agreed in writing. You will own the final deliverables upon full payment."
    },
    {
      icon: Ban,
      title: "Termination",
      content: "We reserve the right to suspend or terminate services if these Terms are violated or if agreed payments are not made. Either party may terminate the agreement with written notice as specified in the project contract."
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: "Brantech Solutions is not liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our liability is limited to the amount paid for the specific service in question."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6">
                <Scale className="w-4 h-4 mr-2" />
                Terms of Service
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                These terms govern your access to and use of Brantech Solutions' website and services. 
                Please read them carefully.
              </p>
              <div className="text-sm text-muted-foreground">
                Effective Date: September 4, 2025
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Introduction */}
            <Card className="mb-8 bg-card border-border">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") govern your access to and use of Brantech Solutions' website and services. 
                  By using our site or services, you agree to these Terms. If you do not agree with any part of these terms, 
                  please do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Main Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <Card key={section.title} className="bg-card border-border hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      {index + 1}. {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {section.content}
                    </p>
                    {section.list && (
                      <ul className="list-disc pl-6 space-y-1">
                        {section.list.map((item, listIndex) => (
                          <li key={listIndex} className="text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}

              {/* Additional Sections */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-primary-foreground" />
                    </div>
                    7. Changes to These Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update these Terms occasionally. The current version will always be posted on our website. 
                    Continued use of our services after changes constitutes acceptance of the new terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Scale className="w-5 h-5 text-primary-foreground" />
                    </div>
                    8. Governing Law
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of Kenya. 
                    Any disputes arising from these Terms shall be subject to the jurisdiction of Kenyan courts.
                  </p>
                </CardContent>
              </Card>
              {/* Appended full Terms of Service text provided by user */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Full Terms of Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold">📄 Terms of Service – Brantech Solutions</p>
                    <p className="text-muted-foreground">Effective Date: September 4, 2025</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">1. Acceptance of Terms</h3>
                    <p className="text-muted-foreground">By using our services, you acknowledge that you have read, understood, and agree to these Terms of Service and our Privacy Policy. If you do not agree, you should not use our services.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">2. Services Provided</h3>
                    <p className="text-muted-foreground">Brantech Solutions provides web development, digital marketing, cybersecurity, e-commerce, and related technology solutions. Specific service details will be outlined in contracts, proposals, or project agreements with clients.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">3. User Responsibilities</h3>
                    <p className="text-muted-foreground">When using our services, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Provide accurate and up-to-date information.</li>
                      <li>Use our services only for lawful purposes.</li>
                      <li>Not engage in activities that could harm our systems, reputation, or other users.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">4. Payments and Billing</h3>
                    <p className="text-muted-foreground">Service fees are agreed upon before work begins and may vary depending on the scope of the project. Payments must be made according to the agreed schedule (e.g., deposits, milestones, or upon project completion). Late payments may result in suspension or termination of services.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">5. Intellectual Property</h3>
                    <p className="text-muted-foreground">All content, designs, code, and materials created by Brantech Solutions remain our property until full payment is received. After full payment, ownership of custom deliverables may transfer to the client (as agreed in writing). Clients may not resell, redistribute, or claim our work as their own without authorization.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">6. Confidentiality</h3>
                    <p className="text-muted-foreground">We respect the confidentiality of your business information and expect the same from you. Any confidential data shared during a project will be protected and not disclosed to third parties, except as required by law.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">7. Limitation of Liability</h3>
                    <p className="text-muted-foreground">Brantech Solutions is not liable for: Loss of profits, business opportunities, or data arising from use of our services; issues caused by third-party tools, platforms, or hosting providers; delays due to factors beyond our control (e.g., internet outages, third-party failures).</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">8. Termination of Services</h3>
                    <p className="text-muted-foreground">We reserve the right to suspend or terminate services if you violate these Terms, fail to pay invoices, or misuse our services. Clients may also terminate a project by providing written notice (subject to agreed cancellation terms).</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">9. Changes to Terms</h3>
                    <p className="text-muted-foreground">We may update these Terms of Service from time to time. Updates will be posted on this page with an updated “Effective Date.”</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">10. Governing Law</h3>
                    <p className="text-muted-foreground">These Terms are governed by the laws of Kenya. Any disputes will be handled under Kenyan jurisdiction.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">11. Contact Us</h3>
                    <p className="text-muted-foreground">For questions about these Terms of Service, contact us at:</p>
                    <p className="text-muted-foreground"><span className="font-medium">Email:</span> <a className="text-primary" href="mailto:info@brantechsolutions.net">info@brantechsolutions.net</a></p>
                    <p className="text-muted-foreground"><span className="font-medium">Website:</span> <a className="text-primary" href="https://www.brantechsolutions.net">www.brantechsolutions.net</a></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
