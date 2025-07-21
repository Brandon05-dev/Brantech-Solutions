import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQProps {
  onContactClick?: () => void;
}

export function FAQ({ onContactClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our process, pricing, and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/20 transition-colors duration-200"
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button
            variant="default"
            size="lg"
            onClick={onContactClick}
            className="transition-all duration-300"
          >
            <MessageCircle className="mr-2 w-4 h-4" />
            Chat with Us!
          </Button>
        </div>
      </div>
    </section>
  );
}