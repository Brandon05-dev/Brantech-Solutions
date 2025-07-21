import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface PortfolioProps {
  onContactClick?: () => void;
}

export function Portfolio({ onContactClick }: PortfolioProps) {
  const projects = [
    {
      title: "E-Commerce Platform",
      client: "Retail Startup",
      description: "Built a complete e-commerce solution with inventory management, payment processing, and real-time analytics dashboard.",
      challenge: "Client needed a scalable platform to handle growing customer base and inventory complexity.",
      solution: "Developed a microservices architecture with React frontend, Node.js backend, and PostgreSQL database.",
      outcome: "40% increase in sales, 60% reduction in inventory management time, improved customer satisfaction.",
      techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
    },
    {
      title: "IoT Monitoring System",
      client: "Manufacturing Company",
      description: "Developed an IoT solution for real-time equipment monitoring with predictive maintenance capabilities.",
      challenge: "Client experienced frequent equipment failures leading to costly downtime.",
      solution: "Implemented sensor network with ML algorithms for predictive analysis and automated alerts.",
      outcome: "70% reduction in unplanned downtime, 30% decrease in maintenance costs, improved operational efficiency.",
      techStack: ["Python", "TensorFlow", "InfluxDB", "React", "MQTT"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      client: "Financial Services",
      description: "Created an intelligent dashboard providing real-time insights and automated reporting for financial data.",
      challenge: "Manual reporting processes were time-consuming and prone to errors.",
      solution: "Built ML-powered analytics with automated data processing and visualization.",
      outcome: "90% reduction in report generation time, improved accuracy, enhanced decision-making capabilities.",
      techStack: ["Python", "React", "D3.js", "FastAPI", "Redis"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "Mobile Learning Platform",
      client: "Education Provider",
      description: "Developed a comprehensive mobile learning platform with interactive courses and progress tracking.",
      challenge: "Client needed to reach students in remote areas with limited internet connectivity.",
      solution: "Built offline-capable progressive web app with adaptive content delivery.",
      outcome: "300% increase in student engagement, 50% improvement in course completion rates.",
      techStack: ["React Native", "Node.js", "MongoDB", "PWA", "GraphQL"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      title: "Supply Chain Management",
      client: "Logistics Company",
      description: "Built an integrated supply chain management system with real-time tracking and automated workflows.",
      challenge: "Client struggled with visibility across their supply chain operations.",
      solution: "Developed comprehensive tracking system with API integrations and automated notifications.",
      outcome: "50% improvement in delivery times, 35% reduction in operational costs, enhanced customer satisfaction.",
      techStack: ["Vue.js", "Django", "PostgreSQL", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
    },
    {
      title: "Healthcare Management System",
      client: "Healthcare Provider",
      description: "Developed a patient management system with appointment scheduling and telemedicine capabilities.",
      challenge: "Client needed to streamline patient care and enable remote consultations.",
      solution: "Built secure, HIPAA-compliant platform with video conferencing and electronic health records.",
      outcome: "60% increase in patient satisfaction, 40% reduction in administrative overhead, improved care delivery.",
      techStack: ["React", "Node.js", "MySQL", "WebRTC", "AWS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Success Stories That Inspire
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how we've helped businesses across various industries achieve their goals through innovative technology solutions.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-elegant transition-all duration-300 bg-card border-border hover:border-primary/20 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <span className="font-semibold text-foreground text-sm">Challenge:</span>
                    <p className="text-sm text-muted-foreground">{project.challenge}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground text-sm">Solution:</span>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground text-sm">Outcome:</span>
                    <p className="text-sm text-muted-foreground">{project.outcome}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-semibold text-foreground text-sm mb-2 block">Tech Stack:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center bg-secondary rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Build Your Success Story?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your project and create a solution that delivers exceptional results for your business.
          </p>
          <Button
            size="lg"
            onClick={onContactClick}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}