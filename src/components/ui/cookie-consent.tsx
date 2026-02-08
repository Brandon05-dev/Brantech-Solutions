import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
      } catch (e) {
        console.error("Failed to parse cookie preferences", e);
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    setShowSettings(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem("cookie-consent", JSON.stringify(necessaryOnly));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Necessary cookies can't be disabled
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-500">
        <div className="w-full max-w-4xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-700">
          <div className="relative bg-white backdrop-blur-2xl border border-primary/20 rounded-2xl shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}></div>
            
            <div className="relative z-10 p-5 sm:p-6 md:p-8">
              <div className="flex flex-col lg:flex-row items-start gap-5 md:gap-6">
                {/* Icon with gradient background */}
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Cookie className="w-8 h-8 sm:w-10 sm:h-10 text-primary drop-shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4 md:space-y-5">
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-tight">
                        Your Privacy Matters
                      </h3>
                      {/* Close button - mobile top right */}
                      <button
                        onClick={acceptNecessary}
                        className="lg:hidden flex-shrink-0 w-8 h-8 rounded-full bg-secondary/50 hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200 hover:rotate-90"
                        aria-label="Close"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                      We use cookies and similar technologies to enhance your browsing experience, deliver personalized content, 
                      and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
                      <a 
                        href="/privacy-policy" 
                        className="inline-flex items-center text-primary hover:text-primary/80 font-semibold underline underline-offset-2 decoration-primary/30 hover:decoration-primary/60 transition-all duration-200"
                      >
                        Learn more
                      </a>
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <Button
                      onClick={acceptAll}
                      size="lg"
                      className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/95 hover:via-primary/90 hover:to-primary/85 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 border border-primary/20 group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Accept All Cookies
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </Button>
                    <Button
                      onClick={acceptNecessary}
                      size="lg"
                      variant="outline"
                      className="font-semibold border-2 border-border/60 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                    >
                      Essential Only
                    </Button>
                    <Button
                      onClick={() => setShowSettings(true)}
                      size="lg"
                      variant="ghost"
                      className="font-semibold hover:bg-secondary/70 transition-all duration-300 group"
                    >
                      <Settings className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                      Customize
                    </Button>
                  </div>

                  {/* Trust indicators */}
                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-muted-foreground/70">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      <span>GDPR Compliant</span>
                    </div>
                    <span className="text-muted-foreground/40">•</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span>Secure & Encrypted</span>
                    </div>
                  </div>
                </div>

                {/* Close button - desktop */}
                <button
                  onClick={acceptNecessary}
                  className="hidden lg:flex flex-shrink-0 w-10 h-10 rounded-full bg-secondary/50 hover:bg-secondary items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200 hover:rotate-90"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Overlay backdrop for mobile only */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-500"
        onClick={acceptNecessary}
      ></div>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-card to-background border-primary/20">
          <DialogHeader className="space-y-3 pb-2">
            <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Cookie Preferences Center
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              Take control of your privacy. Choose which cookies you'd like to accept. You can change these settings at any time.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-6">
            {/* Necessary Cookies */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 p-5 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="necessary" className="text-base sm:text-lg font-bold text-foreground">
                      Necessary Cookies
                    </Label>
                    <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                      Always Active
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Essential for the website to function properly. These cookies enable core functionality such as security, 
                    network management, and accessibility. They cannot be disabled.
                  </p>
                </div>
                <Switch
                  id="necessary"
                  checked={preferences.necessary}
                  disabled
                  className="ml-4 mt-1"
                />
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="group relative overflow-hidden rounded-xl bg-card hover:bg-secondary/30 border-2 border-border/50 hover:border-primary/30 p-5 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="analytics" className="text-base sm:text-lg font-bold text-foreground cursor-pointer flex items-center gap-2">
                    Analytics Cookies
                    <span className="text-xs font-normal text-muted-foreground">(Recommended)</span>
                  </Label>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Help us understand how visitors interact with our website by collecting and reporting information anonymously. 
                    This helps us improve your experience.
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={() => togglePreference("analytics")}
                  className="ml-4 mt-1"
                />
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="group relative overflow-hidden rounded-xl bg-card hover:bg-secondary/30 border-2 border-border/50 hover:border-primary/30 p-5 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="marketing" className="text-base sm:text-lg font-bold text-foreground cursor-pointer">
                    Marketing Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Used to track visitors across websites to display relevant and engaging advertisements. 
                    These help us show you content that matches your interests.
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={() => togglePreference("marketing")}
                  className="ml-4 mt-1"
                />
              </div>
            </div>

            {/* Preference Cookies */}
            <div className="group relative overflow-hidden rounded-xl bg-card hover:bg-secondary/30 border-2 border-border/50 hover:border-primary/30 p-5 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="preferences" className="text-base sm:text-lg font-bold text-foreground cursor-pointer">
                    Preference Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Enable the website to remember your choices (such as language or region) and provide enhanced, 
                    personalized features tailored to you.
                  </p>
                </div>
                <Switch
                  id="preferences"
                  checked={preferences.preferences}
                  onCheckedChange={() => togglePreference("preferences")}
                  className="ml-4 mt-1"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t-2 border-border/50">
            <Button
              onClick={savePreferences}
              size="lg"
              className="flex-1 relative overflow-hidden bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/95 hover:via-primary/90 hover:to-primary/85 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
            >
              <span className="relative z-10">Save My Preferences</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            <Button
              onClick={acceptAll}
              size="lg"
              variant="outline"
              className="flex-1 font-semibold border-2 border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              Accept All
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
