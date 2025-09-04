import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageSquare
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectDetails: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const subject = formData.subject || `New Contact Form Submission from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'General Inquiry'}

Message:
${formData.projectDetails}

---
This message was sent from the Brantech Solutions contact form.
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:brandonomutiti@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');

      toast({
        title: "Email client opened!",
        description: "Your default email client should open with the message ready to send.",
      });

      // Clear form after successful submission
      setFormData({ name: "", email: "", subject: "", projectDetails: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Contact Us
          </div>
          <p className="text-lg text-muted-foreground">
            Ready to transform your business with cutting edge technology? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-xl border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
              <CardHeader className="relative">
                <CardTitle className="text-3xl font-bold text-foreground flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  Get in Touch
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Let's discuss your project and bring your ideas to life
                </p>
              </CardHeader>
              <CardContent className="relative space-y-8 p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3 group">
                      <Label htmlFor="name" className="text-foreground font-semibold text-sm uppercase tracking-wide">Name *</Label>
                      <div className="relative">
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                          className="border-border/60 focus:border-primary bg-background/80 backdrop-blur-sm rounded-xl py-3 px-4 text-base transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 group-hover:border-primary/50"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="space-y-3 group">
                      <Label htmlFor="email" className="text-foreground font-semibold text-sm uppercase tracking-wide">Email *</Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="your.email@company.com"
                          required
                          className="border-border/60 focus:border-primary bg-background/80 backdrop-blur-sm rounded-xl py-3 px-4 text-base transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 group-hover:border-primary/50"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="subject" className="text-foreground font-semibold text-sm uppercase tracking-wide">Subject</Label>
                    <div className="relative">
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        placeholder="What is this regarding? (e.g., Web Development, Mobile App, etc.)"
                        className="border-border/60 focus:border-primary bg-background/80 backdrop-blur-sm rounded-xl py-3 px-4 text-base transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 group-hover:border-primary/50"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="projectDetails" className="text-foreground font-semibold text-sm uppercase tracking-wide">Message *</Label>
                    <div className="relative">
                      <Textarea
                        id="projectDetails"
                        value={formData.projectDetails}
                        onChange={(e) => handleChange("projectDetails", e.target.value)}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        rows={6}
                        required
                        className="border-border/60 focus:border-primary bg-background/80 backdrop-blur-sm rounded-xl py-4 px-4 text-base resize-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 group-hover:border-primary/50"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 border-0 group relative overflow-hidden"
                    size="lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                    <div className="relative flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {/* Contact details */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground"></CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@brantech.solutions</p>
                  </div>
                </div>

                <div 
                  className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 p-2 rounded-lg transition-colors duration-300"
                  onClick={() => window.open("https://wa.me/254790889066", "_blank")}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">+254 790 889 066</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response time */}
            <Card className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground border-0 shadow-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Fast Response Guaranteed</h3>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  We typically respond to all inquiries within 24 hours. For urgent projects, feel free to reach out via WhatsApp for instant support.
                </p>
                <Button
                  onClick={() => window.open("https://wa.me/254790889066?text=Hi! I'm interested in your services and would like to discuss my project.", "_blank")}
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold px-6 py-3 rounded-xl border-0 group"
                  size="lg"
                >
                  <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Quick Response
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}