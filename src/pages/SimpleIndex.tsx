import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";

const SimpleIndex = () => {
  const handleContactClick = () => {
    console.log("Contact clicked");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Test Navigation Component */}
      <Navigation onContactClick={handleContactClick} />
      
      {/* Test Hero Component */}
      <Hero onContactClick={handleContactClick} />
      
      {/* Test Services Component */}
      <Services onContactClick={handleContactClick} />
      
      <div className="p-8">
        <div className="space-y-4">
          <div className="p-4 bg-card rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2">Navigation Test ✅</h2>
            <p>Navigation component loaded successfully.</p>
          </div>
          
          <div className="p-4 bg-card rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2">Hero Test ✅</h2>
            <p>Hero component loaded successfully.</p>
          </div>
          
          <div className="p-4 bg-card rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2">Services Test</h2>
            <p>If you can see this AND the services section above, Services component works!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleIndex;
