import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";

interface NavigationProps {
  onContactClick?: () => void;
}

export function Navigation({ onContactClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "#home", isRoute: false, section: "home" },
    { label: "About Us", href: "/about-us", isRoute: true, section: "about-us" },
    { label: "Services", href: "#services", isRoute: false, section: "services" },
    { label: "Packages", href: "#packages", isRoute: false, section: "packages" },
    { label: "Testimonials", href: "#testimonials", isRoute: false, section: "testimonials" },
    { label: "FAQ", href: "/faq", isRoute: true, section: "faq" },
    { label: "Contact Us", href: "#contact", isRoute: false, section: "contact" },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        const sections = ["home", "services", "packages", "testimonials", "contact"];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Set active section based on current route
  useEffect(() => {
    if (location.pathname === "/about-us") {
      setActiveSection("about-us");
    } else if (location.pathname === "/faq") {
      setActiveSection("faq");
    } else if (location.pathname === "/") {
      setActiveSection("home");
    }
  }, [location.pathname]);

  const scrollToSection = (href: string, isRoute: boolean, section: string) => {
    // Close mobile menu immediately for better UX
    setIsOpen(false);
    
    // Set active section
    setActiveSection(section);
    
    if (isRoute) {
      // Navigate to the route
      navigate(href);
    } else if (href === "#contact" && onContactClick) {
      onContactClick();
    } else {
      // Check if we're on the home page
      if (location.pathname === "/") {
        // We're on home page, scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // We're on a different page, navigate to home page with hash
        navigate(`/${href}`);
        // After navigation, scroll to the section
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isOpen 
        ? "bg-background border-b border-border shadow-lg" 
        : "bg-background/80 backdrop-blur-md border-b border-border"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => navigate("/")}
          >
            <div className="w-28 h-28 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src="/BS Icon.png" 
                alt="Brantech Solutions" 
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href, item.isRoute, item.section)}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium",
                    isActive && "text-primary font-semibold"
                  )}
                >
                  {item.label}
                </button>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "relative z-50 p-2 rounded-lg transition-all duration-200",
                isOpen 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "hover:bg-accent"
              )}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                {isOpen ? (
                  <X className="h-5 w-5 transition-transform duration-200 rotate-90" />
                ) : (
                  <Menu className="h-5 w-5 transition-transform duration-200" />
                )}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            {/* Overlay/Shadow Background */}
            <div
              className="md:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-sm transition-all duration-300 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu Content */}
            <div
              className={cn(
                "md:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-md border-b border-border shadow-2xl transition-all duration-300 z-50",
                isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
              )}
            >
              <div className="px-6 py-8 space-y-4 max-h-[70vh] overflow-y-auto">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.section;
                  return (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href, item.isRoute, item.section)}
                      className={cn(
                        "block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 border border-transparent animate-in slide-in-from-top-4 fade-in-0",
                        "hover:bg-primary/10 hover:border-primary/20 hover:text-primary active:scale-95",
                        isActive 
                          ? "text-primary font-semibold bg-primary/10 border-primary/30 shadow-sm" 
                          : "text-muted-foreground"
                      )}
                      style={{
                        animationDelay: `${index * 75}ms`,
                        animationDuration: '300ms'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        {isActive && (
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        )}
                      </div>
                    </button>
                  );
                })}
                
                {/* Contact CTA in mobile menu */}
                <div className="pt-6 mt-6 border-t border-border">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Ready to start your project?
                    </p>
                    <Button 
                      onClick={() => {
                        if (onContactClick) onContactClick();
                        setIsOpen(false);
                      }}
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}