import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { HeroStats } from "@/components/sections/hero-stats";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

const Index = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <HeroStats onContactClick={handleContactClick} />
      <Services onContactClick={handleContactClick} />
      <Portfolio onContactClick={handleContactClick} />
      <Stats onContactClick={handleContactClick} />
      <Testimonials onContactClick={handleContactClick} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
