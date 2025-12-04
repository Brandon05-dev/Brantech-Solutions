import { useEffect } from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Chatbot } from "@/components/ui/chatbot";
import { FloatingButtons } from "@/components/ui/floating-buttons";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileDevelopment from "./pages/services/MobileDevelopment";
import Cybersecurity from "./pages/services/Cybersecurity";
import ECommerce from "./pages/services/ECommerce";
import WebsiteMaintenance from "./pages/services/WebsiteMaintenance";
import SEOMarketing from "./pages/services/SEOMarketing";
import CMS from "./pages/services/CMS";
import { Projects } from "./pages/Projects";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="brantech-ui-theme">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-development" element={<MobileDevelopment />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/ecommerce" element={<ECommerce />} />
          <Route path="/services/maintenance" element={<WebsiteMaintenance />} />
          <Route path="/services/seo-marketing" element={<SEOMarketing />} />
          <Route path="/services/cms" element={<CMS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingButtons />
        <Chatbot />
        <Analytics />
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
