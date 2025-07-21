import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      // Here you would integrate with your email service (Mailchimp, ConvertKit, etc.)
      console.log("Newsletter signup:", { name, email });
      setIsSubmitted(true);
      setEmail("");
      setName("");
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Thank You!
              </h3>
              <p className="text-white/90 text-lg">
                Check your inbox for your free guide: <strong>"How to Launch Your Business Online"</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated!
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Get free tips and updates for growing your business online.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
              </div>
              
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-medium transition-all duration-300"
              >
                <Gift className="mr-2 w-4 h-4" />
                Subscribe & Get Free Guide
              </Button>
            </form>

            <p className="text-white/70 text-sm mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}