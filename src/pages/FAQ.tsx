import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How long does it take to build my website?",
      answer: "Most websites take 2–4 weeks, depending on your needs. Simple websites can be ready in 1-2 weeks, while complex online stores or custom systems may take 4-6 weeks."
    },
    {
      question: "Can I pay in installments?",
      answer: "Yes! We offer flexible payment plans for all budgets. You can split payments into 2-3 installments, making it easier to get started without a large upfront cost."
    },
    {
      question: "What do I need to get started?",
      answer: "Just your idea, some basic info about your business, and we'll guide you from there. We'll help you with content, images, and everything else you need."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Absolutely! All our plans include ongoing support. We're here to help with updates, questions, and any issues that come up after your website launches."
    },
    {
      question: "Can you help with digital marketing too?",
      answer: "Yes! We offer SEO optimization, social media setup, and digital marketing strategy as part of our higher-tier plans or as add-on services."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, reliable technologies including React, TypeScript, Node.js, and cloud platforms like AWS and Vercel. We choose the best tools for each project to ensure optimal performance and scalability."
    },
    {
      question: "Do you provide hosting services?",
      answer: "Yes, we provide hosting as part of our packages. We offer both shared hosting for smaller sites and dedicated hosting for larger, more complex applications with high traffic requirements."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely! We can redesign your existing website to improve its appearance, functionality, and performance. We'll work with you to understand what's working and what needs improvement."
    },
    {
      question: "Do you offer e-commerce solutions?",
      answer: "Yes, we develop complete e-commerce solutions including product catalogs, shopping carts, payment processing, inventory management, and order tracking systems."
    },
    {
      question: "What about mobile responsiveness?",
      answer: "All our websites are fully responsive and optimized for mobile devices. We follow mobile-first design principles to ensure your site looks great on phones, tablets, and desktops."
    },
    {
      question: "Do you provide SEO services?",
      answer: "Yes, we offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, content strategy, and ongoing performance monitoring to improve your search rankings."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a satisfaction guarantee. If you're not happy with our work within the first 30 days, we'll work with you to make it right or provide a full refund."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If contact section doesn't exist on this page, navigate to home page contact
      navigate("/#contact");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8">
              Frequently Asked Questions
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Everything You Need to Know
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Get answers to common questions about our process, pricing, services, and more. 
              Can't find what you're looking for? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary/10 transition-colors duration-200"
                  >
                    <span className="font-semibold text-foreground text-lg pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-muted-foreground transition-transform duration-200 shrink-0 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto border border-primary/10 shadow-xl">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <MessageCircle className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Still Have Questions?
              </h3>
              
              <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                We're here to help! Get in touch with our team for personalized answers 
                and to discuss your specific project needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => window.open("https://wa.me/254790889066", "_blank")}
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold"
                >
                  <MessageCircle className="mr-3 w-5 h-5" />
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open("https://calendly.com/brandonomutiti05/30min", "_blank")}
                  className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
