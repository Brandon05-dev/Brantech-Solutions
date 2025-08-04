import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

interface TestimonialsProps {
  onContactClick?: () => void;
}

export function Testimonials({ onContactClick }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Adrian Adagala",
      role: "Co-Founder, MAAL TD",
      content: "Brandon is not just a skilled software engineer he's part of the family behind MAAL Trading. We trust him with our vision to build an investment and trading platform that empowers young people in our community. It's a dream we've nurtured for years, and having him on board brings us closer to that goal.",
      rating: 5,
      initials: "AA"
    },
    {
      name: "Yvonne Eshitemi",
      role: "Co-Founder, UniAssist Hub",
      content: "At UniAssist Hub, we help students go beyond the classroom from CVs and reports to personal websites and online services. Thanks to Brantech Solution, our vision is now a practical platform supporting students every day.",
      rating: 3,
      initials: "YE"
    },
    {
      name: "CEO BMI Leather Art Shop",
      role: "BMI Leather Art Shop",
      content: "At BMI Leather Art Shop, every piece tells a story of timeless quality and care. Our goal is simple: beautiful leather goods that last. Thank you for trusting us and thanks to Brantech Solution for building our online shop to share this craft with you.",
      rating: 4.5,
      initials: "AA"
    },
    {
      name: "James Kimanzi",
      role: "Group Leader, CleanKili",
      content: "Brantech Solution gave us the technical support and practical advice we needed to launch CleanKili's website. Their team was always ready to guide us and share ideas that made our work better. We're excited to keep growing this project with their continued support.",
      rating: 4,
      initials: "JK"
    }
  ];

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get testimonial position style based on index relative to current
  const getTestimonialStyle = (index: number) => {
    const position = (index - currentIndex + testimonials.length) % testimonials.length;
    
    switch (position) {
      case 0: // Center (current)
        return {
          transform: 'translateX(0%) scale(1.1)',
          opacity: 1,
          zIndex: 3,
          filter: 'brightness(1.1) contrast(1.2)'
        };
      case 1: // Right
        return {
          transform: 'translateX(80%) scale(0.9)',
          opacity: 0.7,
          zIndex: 2,
          filter: 'brightness(0.8)'
        };
      case testimonials.length - 1: // Left
        return {
          transform: 'translateX(-80%) scale(0.9)',
          opacity: 0.7,
          zIndex: 2,
          filter: 'brightness(0.8)'
        };
      default:
        return {
          transform: 'translateX(0%) scale(0.8)',
          opacity: 0.3,
          zIndex: 1,
          filter: 'brightness(0.6)'
        };
    }
  };

  // Get text style based on position
  const getTextStyle = (index: number) => {
    const position = (index - currentIndex + testimonials.length) % testimonials.length;
    return position === 0 ? 'text-foreground' : 'text-muted-foreground';
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from businesses we've helped transform with innovative technology solutions.
          </p>
        </div>

        {/* Testimonials - Rotating Carousel */}
        <div className="relative h-96 overflow-hidden">
          <div className="flex items-center justify-center h-full">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={`${testimonial.name}-${index}`}
                className="absolute bg-card border-border hover:shadow-xl transition-all duration-1000 ease-in-out w-80 h-80"
                style={getTestimonialStyle(index)}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <div className="relative">
                        <Star className="w-4 h-4 text-gray-300" />
                        <div className="absolute inset-0 overflow-hidden w-1/2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </div>
                      </div>
                    )}
                    {[...Array(5 - Math.ceil(testimonial.rating))].map((_, i) => (
                      <Star 
                        key={i + Math.ceil(testimonial.rating)} 
                        className="w-4 h-4 text-gray-300" 
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className={`mb-6 leading-relaxed text-sm italic flex-grow overflow-hidden ${getTextStyle(index)}`}>
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0">
                      {testimonial.initials}
                    </div>
                    <div className="min-w-0">
                      <p className={`font-semibold text-sm truncate ${getTextStyle(index)}`}>{testimonial.name}</p>
                      <p className={`text-xs truncate ${index === ((currentIndex + testimonials.length) % testimonials.length) ? 'text-muted-foreground' : 'text-gray-400'}`}>{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
