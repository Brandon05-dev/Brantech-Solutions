import { useState } from "react";
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
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "#home", isRoute: false },
    { label: "About Us", href: "/about-us", isRoute: true },
    { label: "Services", href: "#services", isRoute: false },
    { label: "Packages", href: "#packages", isRoute: false },
    { label: "Testimonials", href: "#testimonials", isRoute: false },
    { label: "FAQ", href: "#faq", isRoute: false },
    { label: "Contact Us", href: "#contact", isRoute: false },
  ];

  const scrollToSection = (href: string, isRoute: boolean) => {
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
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // We're on a different page, navigate to home page with hash
        navigate(`/${href}`);
        // After navigation, scroll to the section
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => navigate("/")}
          >
            <div className="w-28 h-28 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src="/src/components/images/BS Icon.png" 
                alt="Brantech Solutions" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href, item.isRoute)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md transition-all duration-300",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="px-4 py-8 space-y-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href, item.isRoute)}
                className="block w-full text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}