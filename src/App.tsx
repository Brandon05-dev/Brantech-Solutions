import { ThemeProvider } from "@/components/ui/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Chatbot } from "@/components/ui/chatbot";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="brantech-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
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
        <Chatbot />
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
