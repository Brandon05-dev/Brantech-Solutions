import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Heart, 
  Linkedin, 
  ArrowRight,
  Eye
} from "lucide-react";

interface AboutProps {
  onContactClick?: () => void;
}

export function About({ onContactClick }: AboutProps) {
  const values = [
    {
      svg: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a6 6 0 0 0-4 10c0 1.5.5 2 1 3h6c.5-1 .9-1.5 1-3a6 6 0 0 0-4-10z" />
        </svg>
      ),
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
    },
    {
      svg: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 2l7 4v6c0 5-3.3 9.7-7 10-3.7-.3-7-5-7-10V6l7-4z" />
        </svg>
      ),
      title: "Integrity",
      description: "We build trust through transparency, reliability, and ethical business practices."
    },
    {
      svg: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" />
          <path d="M6 11c1.7 0 3-1.3 3-3S7.7 5 6 5 3 6.3 3 8s1.3 3 3 3z" />
          <path d="M2 19c0-2.2 3-4 7-4s7 1.8 7 4" />
          <path d="M16 16c-.1-.2-.2-.4-.4-.6" />
        </svg>
      ),
      title: "Collaboration",
      description: "We work closely with our clients as partners to achieve shared success."
    },
    {
      svg: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 2l2.6 5.3L20 8l-4 3.6L17 18l-5-2.6L7 18l1-6.4L4 8l5.4-.7L12 2z" />
          <path d="M12 22v-6" />
        </svg>
      ),
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations and drive real results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Building the Future of Technology in Africa
          </h2>
          <p className="text-lg text-muted-foreground">
            At Brantech Solutions, we're passionate about transforming businesses through innovative technology solutions that drive growth and create lasting impact.
          </p>
        </div>

        {/* Mission, Vision, and Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Mission statement */}
          <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative">
              <img 
                src="/mission.png" 
                alt="Our Mission" 
                className="w-full h-auto object-contain max-h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                <div className="w-10 h-10 mb-2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                <p className="text-xs text-white/95 leading-relaxed">
                  To make modern technology simple, affordable, and truly useful for every entrepreneur, small business, and startup so they can focus on what they do best.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm">Accessible</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm">Affordable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision statement */}
          <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative">
              <img 
                src="/vision.png" 
                alt="Our Vision" 
                className="w-full h-auto object-contain max-h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                <div className="w-10 h-10 mb-2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Our Vision</h3>
                <p className="text-xs text-white/95 leading-relaxed">
                  To be the trusted digital partner that transforms how businesses build, launch, and scale making modern tech accessible, affordable, and impactful for everyone.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm">Innovation</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm">Impact</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Card */}
          <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative">
              <img 
                src="/values.png" 
                alt="Our Core Values" 
                className="w-full h-auto object-contain max-h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                <div className="w-10 h-10 mb-2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Our Values</h3>
                <p className="text-xs text-white/95 leading-relaxed">
                  The principles that guide everything we do and define how we work with our clients and partners.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm">Excellence</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm">Integrity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder / Team profiles section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">The Team</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visionary leadership driving innovation and excellence in technology solutions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Founder - Brandon */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                    <img src="/me.jpg" alt="Brandon Omutiti - Founder & Lead Developer" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Brandon Omutiti</h4>
                    <p className="text-primary font-medium text-sm">Founder & Lead Developer</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Brandon leads Brantech Solutions with a focus on quality, agility, and meaningful impact. He specializes in full-stack development, AI, and IoT.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3 justify-center">
                    <Badge variant="secondary">Full-Stack</Badge>
                    <Badge variant="secondary">AI</Badge>
                    <Badge variant="secondary">IoT</Badge>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => window.open("https://www.linkedin.com/in/brandon-omutiti-400ab4362/", "_blank")}
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Co-Founder - Placeholder 1 */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                    <img src="/BS Icon.png" alt="Co-Founder" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Amina Njoroge</h4>
                    <p className="text-primary font-medium text-sm">Co-Founder & CTO</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Amina oversees our technical strategy and architecture. She brings a strong background in scalable systems and cloud-native design.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3 justify-center">
                    <Badge variant="secondary">Cloud</Badge>
                    <Badge variant="secondary">Systems</Badge>
                    <Badge variant="secondary">Architecture</Badge>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => window.open("https://www.linkedin.com/", "_blank")}
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Head of Product - Placeholder 2 */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                    <img src="/BS Icon.png" alt="Head of Product" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">John Kamau</h4>
                    <p className="text-primary font-medium text-sm">Head of Product</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    John leads product strategy and delivery, ensuring our solutions solve real customer problems and deliver measurable value.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3 justify-center">
                    <Badge variant="secondary">PM</Badge>
                    <Badge variant="secondary">Design</Badge>
                    <Badge variant="secondary">Strategy</Badge>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => window.open("https://www.linkedin.com/", "_blank")}
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Head of Marketing - New Profile */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                    <img src="/BS Icon.png" alt="Head of Marketing" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Sarah Wanjiku</h4>
                    <p className="text-primary font-medium text-sm">Head of Marketing</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Sarah drives our brand strategy and customer engagement initiatives. She specializes in digital marketing, content strategy, and growth optimization.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3 justify-center">
                    <Badge variant="secondary">Marketing</Badge>
                    <Badge variant="secondary">Growth</Badge>
                    <Badge variant="secondary">Content</Badge>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => window.open("https://www.linkedin.com/", "_blank")}
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define how we work with our clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="group hover:shadow-elegant transition-all duration-300 bg-card border-border hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300">
                    <div className="w-16 h-16 text-primary group-hover:text-primary/80 transition-colors duration-300">
                      {value.svg}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

  {/* CTA removed as requested */}
      </div>
    </section>
  );
}