import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, UserCheck, FileText, Mail, MapPin } from "lucide-react";

const PrivacyPolicy = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you contact us, sign up for a consultation, or use our services, we may collect your name, email address, phone number, and business details."
        },
        {
          subtitle: "Usage Data",
          text: "We may collect information on how you interact with our website (such as IP address, browser type, and pages visited) to improve our site and services."
        },
        {
          subtitle: "Cookies",
          text: "We may use cookies and similar technologies to personalize your experience and analyze site traffic."
        }
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "",
          text: "We use your information to:",
          list: [
            "Provide and improve our services",
            "Communicate with you about your project or inquiry",
            "Send updates, newsletters, or promotional materials (only if you've opted in)",
            "Maintain security and prevent fraud"
          ]
        }
      ]
    },
    {
      icon: Shield,
      title: "How We Protect Your Information",
      content: [
        {
          subtitle: "",
          text: "We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, please remember that no method of transmission over the Internet is 100% secure."
        }
      ]
    },
    {
      icon: Lock,
      title: "Sharing Your Information",
      content: [
        {
          subtitle: "",
          text: "We do not sell or rent your personal information. We may share it with trusted partners or service providers who assist us in operating our website or delivering our services — under strict confidentiality."
        }
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        {
          subtitle: "",
          text: "You can:",
          list: [
            "Request access to or correction of your personal information",
            "Opt out of receiving marketing emails at any time",
            "Request deletion of your data (subject to legal obligations)"
          ]
        }
      ]
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
                <Shield className="w-4 h-4 mr-2" />
                Privacy Policy
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Your Privacy Matters
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We respect your privacy and are committed to protecting your personal information. 
                Learn how we collect, use, and safeguard your data.
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
                  Brantech Solutions ("we", "us", or "our") respects your privacy and is committed to protecting your personal information. 
                  This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
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
                  <CardContent className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {item.subtitle && (
                          <h4 className="font-semibold text-foreground mb-2">{item.subtitle}</h4>
                        )}
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          {item.text}
                        </p>
                        {item.list && (
                          <ul className="list-disc pl-6 space-y-1">
                            {item.list.map((listItem, listIndex) => (
                              <li key={listIndex} className="text-muted-foreground">
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}

              {/* Additional Sections */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">6. Third-Party Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to other sites we do not control. We are not responsible for the privacy practices of these websites.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">7. Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy occasionally. We will post any changes on this page and update the "Last updated" date.
                  </p>
                </CardContent>
              </Card>

              {/* Appended full policy text provided by user */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Full Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold">🔒 Privacy Policy for Brantech Solutions</p>
                    <p className="text-muted-foreground">Effective Date: September 4, 2025</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">1. Information We Collect</h3>
                    <p className="text-muted-foreground">We may collect the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide when contacting us or filling out forms.</li>
                      <li><strong>Business Information:</strong> Details related to your company if you engage with us for web development, digital marketing, or other services.</li>
                      <li><strong>Usage Data:</strong> IP addresses, browser type, device details, and how you interact with our website.</li>
                      <li><strong>Cookies:</strong> We may use cookies to improve user experience, track site performance, and deliver relevant content.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">2. How We Use Your Information</h3>
                    <p className="text-muted-foreground">We use the information collected to:</p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Provide and improve our services.</li>
                      <li>Respond to inquiries and customer support requests.</li>
                      <li>Send updates, newsletters, or promotional materials (you may opt-out at any time).</li>
                      <li>Analyze site usage and improve user experience.</li>
                      <li>Comply with legal and regulatory requirements.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">3. Information Sharing</h3>
                    <p className="text-muted-foreground">We do not sell, rent, or trade your personal information. We may share your information only in these cases:</p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>With trusted third-party service providers who help us operate our business (e.g., hosting, analytics, payment processing).</li>
                      <li>To comply with legal obligations, government requests, or to protect our rights.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">4. Data Security</h3>
                    <p className="text-muted-foreground">We implement reasonable technical and organizational measures to protect your information. However, no system is 100% secure, and we cannot guarantee absolute protection against unauthorized access.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">5. Your Rights</h3>
                    <p className="text-muted-foreground">You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Access, update, or request deletion of your personal information.</li>
                      <li>Opt-out of receiving marketing communications.</li>
                      <li>Request details of how your data is processed.</li>
                    </ul>
                    <p className="text-muted-foreground">To exercise these rights, please contact us at <a className="text-primary" href="mailto:info@brantechsolutions.net">info@brantechsolutions.net</a>.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">6. Third-Party Links</h3>
                    <p className="text-muted-foreground">Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review their privacy policies before providing any information.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">7. Children’s Privacy</h3>
                    <p className="text-muted-foreground">Our services are not directed to children under 13. We do not knowingly collect personal information from minors. If you believe we have collected such information, please contact us immediately.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">8. Changes to This Policy</h3>
                    <p className="text-muted-foreground">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Effective Date.”</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">9. Contact Us</h3>
                    <p className="text-muted-foreground">If you have questions or concerns about this Privacy Policy or how we handle your data, contact us at:</p>
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

export default PrivacyPolicy;
