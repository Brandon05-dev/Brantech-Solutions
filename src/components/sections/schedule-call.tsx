import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

// Define the PopupButton type for when react-calendly is available
interface PopupButtonProps {
  url: string;
  text: string;
  className?: string;
  children?: React.ReactNode;
}

const ScheduleCall = () => {
  const [PopupButton, setPopupButton] = useState<React.ComponentType<PopupButtonProps> | null>(null);
  const [isCalendlyAvailable, setIsCalendlyAvailable] = useState(false);

  useEffect(() => {
    // Try to import react-calendly
    const loadCalendly = async () => {
      try {
        const calendlyModule = await import('react-calendly');
        setPopupButton(() => calendlyModule.PopupButton);
        setIsCalendlyAvailable(true);
      } catch (error) {
        console.log('react-calendly not available, using iframe fallback');
        setIsCalendlyAvailable(false);
      }
    };

    loadCalendly();
  }, []);

  const calendlyUrl = "https://calendly.com/brandonomutiti05/30min";

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Book a Meeting
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Schedule a Call
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to discuss your project? Book a free 30-minute consultation with our team. 
            We'll explore your needs, answer your questions, and outline how we can help bring your vision to life.
          </p>
        </div>

        {/* Calendly Integration */}
        <div className="max-w-4xl mx-auto">
          {isCalendlyAvailable && PopupButton ? (
            // Use PopupButton if react-calendly is available
            <div className="text-center mb-8">
              <PopupButton
                url={calendlyUrl}
                text="Schedule a Call"
                className=""
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold"
                >
                  <Clock className="mr-3 w-5 h-5" />
                  Schedule a Call
                </Button>
              </PopupButton>
              
              <p className="text-sm text-muted-foreground mt-4">
                Click the button above to schedule your free consultation
              </p>
            </div>
          ) : (
            // Fallback to iframe if react-calendly is not available
            <div className="space-y-6">
              <div className="text-center">
                <Button 
                  onClick={() => window.open(calendlyUrl, '_blank')}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold mb-6"
                >
                  <Clock className="mr-3 w-5 h-5" />
                  Open Calendly
                </Button>
              </div>
              
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <iframe
                  src={calendlyUrl}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  className="rounded-xl min-h-[700px] w-full"
                  title="Schedule a call with Brantech Solutions"
                />
              </div>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">30 Minutes</h4>
              <p className="text-sm text-muted-foreground">Free consultation call</p>
            </div>
            
            <div className="p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Flexible Timing</h4>
              <p className="text-sm text-muted-foreground">Choose a time that works for you</p>
            </div>
            
            <div className="p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 text-primary">💡</div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">No Commitment</h4>
              <p className="text-sm text-muted-foreground">Just a friendly conversation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCall;
