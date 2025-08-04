import { Navigation } from "@/components/ui/navigation";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      {/* Add some top padding to account for fixed navigation */}
      <div className="pt-16">
        <About onContactClick={handleContactClick} />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
