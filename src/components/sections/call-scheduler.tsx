import { Button } from "@/components/ui/button";
import { Calendar, Clock, MessageCircle } from "lucide-react";

interface CallSchedulerProps {
  onContactClick?: () => void;
}

export function CallScheduler({ onContactClick }: CallSchedulerProps) {
  const openCalendly = () => {
    // Replace with your actual Calendly link
    window.open("https://calendly.com/brantech-solutions/30min", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Free Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Book a Free Call
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a 30-minute call with our team — no pressure, no fees. Let's discuss your project and find the perfect solution for your business.
            </p>
          </div>

          {/* Main CTA Card */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-12 hover:shadow-elegant transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Not sure which plan is right for you?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's talk first. We'll understand your needs, answer your questions, and recommend the best approach for your project.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>30 minutes, completely free</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span>No pressure, just helpful advice</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Available times to fit your schedule</span>
                  </div>
                </div>

                <Button
                  onClick={openCalendly}
                  size="lg"
                  className="w-full sm:w-auto transition-all duration-300"
                >
                  <Calendar className="mr-2 w-4 h-4" />
                  Schedule Now
                </Button>
              </div>

              <div className="hidden md:block">
                <div className="bg-secondary/30 rounded-xl p-6 text-center">
                  <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Easy Scheduling</h4>
                  <p className="text-sm text-muted-foreground">
                    Pick a time that works for you. We'll send you a calendar invite and meeting link.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Prefer to start with a quick chat?
            </p>
            <Button
              variant="outline"
              onClick={onContactClick}
              className="transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              Chat with Us Instead
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}