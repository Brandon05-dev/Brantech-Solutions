import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Heart, 
  Users, 
  Linkedin, 
  ArrowRight,
  Award,
  Lightbulb,
  Shield
} from "lucide-react";

interface AboutProps {
  onContactClick?: () => void;
}

export function About({ onContactClick }: AboutProps) {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We build trust through transparency, reliability, and ethical business practices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners to achieve shared success."
    },
    {
      icon: Award,
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

        {/* Mission statement */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center mb-16 text-primary-foreground">
          <Target className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Brantech Solutions is your trusted partner for building high-quality software, AI systems, IoT prototypes, and digital products that scale. We bridge the gap between innovative ideas and practical solutions that transform businesses across Africa and beyond.
          </p>
        </div>

        {/* Founder section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Meet the Founder</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visionary leadership driving innovation and excellence in technology solutions.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-card border-border hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Profile image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-4xl lg:text-5xl font-bold shadow-glow">
                    BO
                  </div>
                </div>

                {/* Bio content */}
                <div className="flex-1 text-center lg:text-left">
                  <h4 className="text-2xl font-bold text-foreground mb-2">Brandon Omutiti</h4>
                  <p className="text-primary font-medium mb-4">Founder & Lead Developer</p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Brandon Omutiti is the visionary behind Brantech Solutions. With a passion for solving complex challenges through simple digital solutions, he leads the team with a commitment to quality, agility, and impact. His expertise spans across software development, AI implementation, and IoT systems, with a deep understanding of the unique challenges facing businesses in Africa.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
                    <Badge variant="secondary">Full-Stack Development</Badge>
                    <Badge variant="secondary">AI & Machine Learning</Badge>
                    <Badge variant="secondary">IoT Systems</Badge>
                    <Badge variant="secondary">Tech Leadership</Badge>
                  </div>

                  <Button
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
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
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
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

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Brantech Solutions transformed our operations completely. Their IoT solution reduced our downtime by 70% and the team was incredibly professional throughout the entire process."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-foreground">John Doe</p>
                  <p className="text-sm text-muted-foreground">CTO, Manufacturing Corp</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "The AI analytics dashboard they built for us has revolutionized our decision-making process. We now have insights we never had before, and the ROI has been exceptional."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  SM
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sarah Miller</p>
                  <p className="text-sm text-muted-foreground">CEO, FinTech Solutions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
          <Heart className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-4">
            Ready to Build Your Next Big Idea?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Let's talk today and discover how we can help transform your business with innovative technology solutions.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={onContactClick}
            className="bg-background text-foreground hover:bg-secondary transition-all duration-300"
          >
            Start the Conversation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}