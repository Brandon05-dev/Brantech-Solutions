import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { About } from "@/components/sections/about";
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
      <About onContactClick={handleContactClick} />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
