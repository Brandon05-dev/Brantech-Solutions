import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Code2, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Send
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed successfully!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-secondary/30 via-background to-secondary/50 border-t border-border/50 backdrop-blur-sm">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="group cursor-pointer">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-blue transition-all duration-500 group-hover:scale-110">
                    <Code2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
                <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  Brantech Solutions
                </span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-sm">
              Transforming businesses across Africa and beyond with innovative technology solutions, AI systems, and digital products that scale.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="h-12 w-12 p-0 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-glow hover:scale-110 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:animate-pulse" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-12 w-12 p-0 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-blue hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-12 w-12 p-0 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-purple hover:scale-110 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 group-hover:animate-pulse" />
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="font-bold text-foreground text-lg relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-primary rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "#home", type: "scroll" },
                { label: "Services", href: "#services", type: "scroll" },
                { label: "Portfolio", href: "#portfolio", type: "scroll" },
                { label: "About", href: "#about", type: "scroll" },
                { label: "Testimonials", href: "#testimonials", type: "scroll" },
                { label: "FAQ", href: "/faq", type: "link" },
                { label: "Contact", href: "#contact", type: "scroll" }
              ].map((link) => (
                <li key={link.label}>
                  {link.type === "scroll" ? (
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:translate-x-1 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:translate-x-1 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-bold text-foreground text-lg relative">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-primary rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {[
                "Website Design and Development",
                "Mobile Development",
                "Cybersecurity",
                "E-Commerce Solutions",
                "Website Maintenance and Support",
                "SEO and Digital Marketing",
                "Content Management Systems (CMS)"
              ].map((service) => (
                <li key={service} className="group">
                  <span className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 cursor-default flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-3 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300"></div>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-bold text-foreground text-lg relative">
              Stay Updated
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-primary rounded-full"></div>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Subscribe to our newsletter for tech insights and project updates.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </Label>
                <div className="relative group">
                  <Input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10 border-border/50 focus:border-primary bg-background/50 backdrop-blur-sm rounded-xl transition-all duration-300 group-hover:shadow-glow"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 rounded-xl h-11 font-medium group"
                size="sm"
              >
                Subscribe
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-border/30 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-6 text-sm text-muted-foreground">
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
              <p className="font-medium">© {currentYear} Brantech Solutions. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link
                  to="/privacy-policy"
                  className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <span className="text-muted-foreground/50">•</span>
                <Link
                  to="/terms-of-service"
                  className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground/80">Built with</span>
              <span className="text-xs">❤️</span>
              <span className="text-muted-foreground/80">by</span>
              <a 
                href="https://linkedin.com/in/brandon-omutiti-400ab4362/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 relative"
              >
                Brandon Omutiti
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary rounded-full group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}