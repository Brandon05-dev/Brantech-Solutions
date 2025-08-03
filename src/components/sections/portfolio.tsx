import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

interface PortfolioProps {
  onContactClick?: () => void;
}

export function Portfolio({ onContactClick }: PortfolioProps) {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "BMI Leather Shop",
      status: "Live",
      description: "Premium e-commerce platform for luxury leather goods featuring elegant product showcase, secure payment processing, and intuitive shopping experience. Built with modern web technologies to deliver seamless user interaction and robust inventory management.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      image: "https://brandon-omutiti.vercel.app/Images/BMI%20Project.png",
      liveUrl: "https://brandon05-dev.github.io/BMI-Leather-Art-Design/",
      githubUrl: "https://github.com/brandon05-dev/BMI-Leather-Art-Design"
    },
    {
      title: "UniAssist Hub",
      status: "Live",
      description: "Comprehensive university student assistance platform connecting students with academic resources, peer support, and administrative services. Features real-time chat, document sharing, and personalized dashboard for enhanced campus life experience.",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "https://brandon-omutiti.vercel.app/Images/uniassisthub%20Project.png",
      liveUrl: "https://uniassisthub-v2.onrender.com/",
      githubUrl: "https://github.com/brandon05-dev"
    },
    {
      title: "CleanKili",
      status: "Under Construction",
      description: "Environmental sustainability platform promoting waste management and recycling initiatives in Kilimani Locality. Features interactive maps, waste tracking, reward systems, and community engagement tools to drive positive environmental impact.",
      techStack: ["Vue.js", "Python", "Django", "PostgreSQL"],
      image: "https://brandon-omutiti.vercel.app/Images/Cleankili%20project.png",
      liveUrl: null,
      githubUrl: "https://github.com/brandon05-dev"
    },
    {
      title: "Shinda Play",
      status: "Under Construction",
      description: "Shinda Play is an interactive eFootball gaming and entertainment platform designed for passionate football gamers and esports fans. It brings players together for competitive multiplayer matches, live tournaments, and social interactions all powered by modern web technologies that ensure smooth gameplay, real-time updates, and an engaging community experience.",
      techStack: ["React", "WebSocket", "Express", "Redis"],
      image: "https://brandon-omutiti.vercel.app/Images/Shinda%20Play%20Project.png",
      liveUrl: null,
      githubUrl: "https://github.com/brandon05-dev"
    },
    {
      title: "Maal Traders Platform",
      status: "Under Construction",
      description: "Comprehensive trading bootcamp and educational platform designed to teach modern trading strategies, market analysis, and financial literacy. Features interactive learning modules, real-time market simulations, progress tracking, and community-driven learning experiences for aspiring traders.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      image: "https://brandon-omutiti.vercel.app/Images/FX%20Traders%20project.png",
      liveUrl: null,
      githubUrl: "https://github.com/brandon05-dev"
    }
  ];

  // Only show first 2 projects initially, or all if showAllProjects is true
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Some Things I've Built
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my skills in full-stack development and modern web technologies.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-elegant transition-all duration-300 bg-card border-border hover:border-primary/20 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              <div className="aspect-video overflow-hidden bg-muted relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Live" ? "default" : "secondary"}
                    className={project.status === "Live" ? "bg-green-500 hover:bg-green-600" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

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

                <div className="flex gap-2 mt-4">
                  {project.liveUrl && (
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex-1"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex-1"
                  >
                    GitHub
                    <Github className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {projects.length > 2 && (
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3"
            >
              {showAllProjects ? "Show Less" : "More Projects"}
              <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-200 ${showAllProjects ? "rotate-90" : ""}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}