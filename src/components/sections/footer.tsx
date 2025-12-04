import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Code2, 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  Send,
  Instagram
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
                <div className="w-28 h-28 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-all duration-500">
                  <img 
                    src="/BS Icon.png" 
                    alt="Brantech Solutions" 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-sm">
              Transforming businesses across Africa and beyond with innovative technology solutions, AI systems, and digital products that scale.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                className="h-12 w-12 p-0 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-glow hover:scale-110 transition-all duration-300 group"
                asChild
              >
                <a href="https://github.com/brandon05-dev" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 group-hover:animate-pulse" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-12 w-12 p-0 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-blue hover:scale-110 transition-all duration-300 group"
                asChild
              >
                <a href="https://linkedin.com/company/brantech-solutions" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-12 w-12 p-0 rounded-xl border-border/50 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-500 hover:shadow-pink hover:scale-110 transition-all duration-300 group"
                asChild
              >
                <a href="https://www.instagram.com/brantech_solutions_official?igsh=eXVmbmx0MDMxdndh" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 group-hover:animate-pulse" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-12 w-12 p-0 rounded-xl border-border/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-500 hover:shadow-cyan hover:scale-110 transition-all duration-300 group"
                asChild
              >
                <a href="https://www.tiktok.com/@brantech.solution?_r=1&_t=ZM-91x4CAFweue" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-12 w-12 p-0 rounded-xl border-border/50 hover:border-blue-600/50 hover:bg-blue-600/10 hover:text-blue-600 hover:shadow-blue hover:scale-110 transition-all duration-300 group"
                asChild
              >
                <a href="https://facebook.com/brantechsolutions" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 group-hover:animate-pulse" />
                </a>
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
                { label: "Home", href: "/", type: "link" },
                { label: "Services", href: "/#services", type: "link" },
                { label: "Portfolio", href: "/projects", type: "link" },
                { label: "About", href: "/about-us", type: "link" },
                { label: "Testimonials", href: "/#testimonials", type: "link" },
                { label: "FAQ", href: "/faq", type: "link" },
                { label: "Contact", href: "/#contact", type: "link" }
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:translate-x-1 flex items-center group"
                    onClick={() => {
                      if (link.href.includes('#')) {
                        setTimeout(() => {
                          const hash = link.href.split('#')[1];
                          const element = document.getElementById(hash);
                          element?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }
                    }}
                  >
                    <span className="w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
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
                { label: "Website Design and Development", route: "/services/web-development" },
                { label: "Mobile Development", route: "/services/mobile-development" },
                { label: "Cybersecurity", route: "/services/cybersecurity" },
                { label: "E-Commerce Solutions", route: "/services/ecommerce" },
                { label: "Website Maintenance and Support", route: "/services/maintenance" },
                { label: "SEO and Digital Marketing", route: "/services/seo-marketing" },
                { label: "Content Management Systems (CMS)", route: "/services/cms" }
              ].map((service) => (
                <li key={service.label} className="group">
                  <Link 
                    to={service.route}
                    className="text-muted-foreground text-sm hover:text-primary transition-all duration-300 cursor-pointer flex items-center hover:translate-x-1"
                  >
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-3 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300"></div>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Illustration */}
          <div className="space-y-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-xs">
              <img 
                src="/footer.png" 
                alt="Developer working" 
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
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