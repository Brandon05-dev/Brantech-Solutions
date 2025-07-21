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
  Send,
  ArrowUp
} from "lucide-react";
import { useState } from "react";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Brantech Solutions
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming businesses across Africa and beyond with innovative technology solutions, AI systems, and digital products that scale.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="h-10 w-10 p-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 w-10 p-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 w-10 p-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Custom Software Development",
                "AI & Machine Learning",
                "IoT Solutions",
                "Web & Mobile Apps",
                "Tech Advisory"
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for tech insights and project updates.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </Label>
                <Input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border-border focus:border-primary"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                size="sm"
              >
                Subscribe
                <Send className="ml-2 w-3 h-3" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Brantech Solutions. All rights reserved.</p>
            <div className="flex gap-4">
              <button className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>

          {/* Back to top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="h-10 w-10 p-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}