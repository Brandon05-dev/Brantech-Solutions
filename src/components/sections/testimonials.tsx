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
      content: "Brandon is not just a skilled software engineer he's part of the family behind MAAL Trading. We trust him with our vision to build an investment and trading platform that empowers young people in our community.",
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
      content: "At BMI Leather Art Shop, every piece tells a story of timeless quality and care. Our goal is simple: beautiful leather goods that last. Thank you for trusting us and thanks to Brantech Solution for building our online shop.",
      rating: 4.5,
      initials: "AA"
    },
    {
      name: "James Kimanzi",
      role: "Team Lead, CleanKili",
      content: "Brantech Solution gave us the technical support and practical advice we needed to launch CleanKili's website. Their team was always ready to guide us and share ideas that made our work better.",
      rating: 4,
      initials: "JK"
    }
  ];

  // Duplicate testimonials for infinite loop effect
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Auto-rotate testimonials every 5.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get three testimonials to display (previous, current, next)
  const getDisplayedTestimonials = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;
    
    return [
      { ...testimonials[prevIndex], position: 'left' },
      { ...testimonials[currentIndex], position: 'center' },
      { ...testimonials[nextIndex], position: 'right' }
    ];
  };

  return (
    <section id="testimonials" className="py-20 bg-background overflow-hidden">
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

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-0">
          <div className="flex justify-center items-stretch gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            {getDisplayedTestimonials().map((testimonial, index) => {
              const isCenter = testimonial.position === 'center';
              const isLeft = testimonial.position === 'left';
              const isRight = testimonial.position === 'right';
              
              return (
                <div
                  key={`${testimonial.name}-${currentIndex}-${index}`}
                  className={`transition-all duration-700 ease-in-out flex-shrink-0 ${
                    isCenter 
                      ? 'scale-105 opacity-100 z-10 w-full max-w-sm md:w-64 lg:w-72 xl:w-80' 
                      : 'scale-90 opacity-60 z-0 hidden md:block md:w-64 lg:w-72 xl:w-80'
                  } ${
                    isLeft ? 'lg:-translate-x-4 xl:-translate-x-6' : isRight ? 'lg:translate-x-4 xl:translate-x-6' : ''
                  }`}
                >
                  <Card 
                    className={`h-full bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 ${
                      isCenter ? 'ring-2 ring-primary/20' : ''
                    }`} 
                    style={{ 
                      minHeight: '450px', 
                      maxHeight: '450px'
                    }}
                  >
                    <CardContent className="p-6 md:p-8 h-full flex flex-col justify-between">
                      {/* Star Rating */}
                      <div className="flex items-center justify-center gap-1 mb-2 flex-shrink-0">
                        {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                          />
                        ))}
                        {testimonial.rating % 1 !== 0 && (
                          <div className="relative">
                            <Star className="w-5 h-5 text-gray-300" />
                            <div className="absolute inset-0 overflow-hidden w-1/2">
                              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            </div>
                          </div>
                        )}
                        {[...Array(5 - Math.ceil(testimonial.rating))].map((_, i) => (
                          <Star 
                            key={i + Math.ceil(testimonial.rating)} 
                            className="w-5 h-5 text-gray-300" 
                          />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1 flex items-center justify-center mb-6">
                        <blockquote 
                          className="text-muted-foreground leading-7 italic text-center text-base h-full max-h-[200px] overflow-hidden"
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 8,
                            WebkitBoxOrient: 'vertical'
                          }}
                        >
                          <span>"{testimonial.content}"</span>
                        </blockquote>
                      </div>

                      {/* Author Info */}
                      <div className="flex flex-col items-center gap-2 flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                          {testimonial.initials}
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-foreground text-lg mb-1 leading-tight">
                            {testimonial.name}
                          </p>
                          <p className="text-muted-foreground text-sm leading-tight">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
