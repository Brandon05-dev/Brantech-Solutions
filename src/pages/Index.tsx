import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Packages } from "@/components/sections/packages";
import { Stats } from "@/components/sections/stats";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Chatbot } from "@/components/ui/chatbot";

const Index = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <Services onContactClick={handleContactClick} />
      <Portfolio onContactClick={handleContactClick} />
      <Packages onContactClick={handleContactClick} />
      <Stats onContactClick={handleContactClick} />
      <Testimonials onContactClick={handleContactClick} />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
