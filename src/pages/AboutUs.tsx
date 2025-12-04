import { Navigation } from "@/components/ui/navigation";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Navigate to home page and scroll to contact section
    navigate("/#contact");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-content");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/about1.png"
            alt="About Brantech Solutions"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Building Digital Solutions That <span className="text-primary">Transform</span> Businesses
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              We're a passionate team of developers, designers, and innovators dedicated to creating exceptional digital experiences that drive growth and success.
            </p>
          </motion.div>
        </div>

        {/* Decorative gradient overlays */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>
      
      {/* About Content Section */}
      <div id="about-content">
        <About onContactClick={handleContactClick} />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
