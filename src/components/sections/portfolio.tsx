import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface PortfolioProps {
  onContactClick?: () => void;
}

export function Portfolio({ onContactClick }: PortfolioProps) {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Tattoo Nation Kenya",
      status: "Live",
      category: "Art & Design",
      description: "Professional tattoo studio website showcasing artistic designs, portfolio, and booking services for tattoo enthusiasts in Kenya.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "/tattoo-nation-kenya.png",
      liveUrl: "https://www.tattoonationkenya.com",
      githubUrl: null
    },
    {
      title: "Glamongo Spa",
      status: "Live",
      category: "Beauty & Wellness",
      description: "Elegant spa booking platform with seamless appointment scheduling and professional service management.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "/glamongo-spa.png",
      liveUrl: "https://glamongospa.netlify.app/",
      githubUrl: "https://github.com/brandon05-dev"
    },
    {
      title: "Belo Digital",
      status: "Live",
      category: "Digital Marketing",
      description: "Modern digital marketing agency platform showcasing creative services, portfolio, and client success stories.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/belo-digital.png",
      liveUrl: "https://belodigital.netlify.app/",
      githubUrl: "https://github.com/brandon05-dev"
    },
    {
      title: "Maal Traders Platform",
      status: "Live",
      category: "Education",
      description: "Trading bootcamp platform with interactive modules, market simulations, and progress tracking for aspiring traders.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      image: "https://brandon-omutiti.vercel.app/Images/FX%20Traders%20project.png",
      liveUrl: "https://maaltraders.netlify.app/",
      githubUrl: "https://github.com/brandon05-dev"
    },
    {
      title: "BMI Leather Shop",
      status: "Live",
      category: "E-Commerce",
      description: "Premium e-commerce platform for luxury leather goods with secure payments and elegant product showcase.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      image: "https://brandon-omutiti.vercel.app/Images/BMI%20Project.png",
      liveUrl: "https://brandon05-dev.github.io/BMI-Leather-Art-Design/",
      githubUrl: "https://github.com/brandon05-dev/BMI-Leather-Art-Design"
    },
    {
      title: "UniAssist Hub",
      status: "Live",
      category: "Education",
      description: "University student assistance platform with real-time chat, document sharing, and personalized dashboard.",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "https://brandon-omutiti.vercel.app/Images/uniassisthub%20Project.png",
      liveUrl: "https://uniassisthub-v2.onrender.com/",
      githubUrl: "https://github.com/brandon05-dev"
    },
    {
      title: "CleanKili",
      status: "Under Construction",
      category: "Sustainability",
      description: "Environmental platform for waste management and recycling with interactive maps and community engagement.",
      techStack: ["Vue.js", "Python", "Django", "PostgreSQL"],
      image: "https://brandon-omutiti.vercel.app/Images/Cleankili%20project.png",
      liveUrl: null,
      githubUrl: "https://github.com/brandon05-dev"
    },
    {
      title: "Shinda Play",
      status: "Live",
      category: "Entertainment",
      description: "Interactive eFootball gaming platform with competitive multiplayer matches, live tournaments, and real-time updates.",
      techStack: ["React", "WebSocket", "Express", "Redis"],
      image: "https://brandon-omutiti.vercel.app/Images/Shinda%20Play%20Project.png",
      liveUrl: "https://shindaplay.netlify.app/",
      githubUrl: "https://github.com/brandon05-dev"
    },
  ];

  // Only show first 3 projects
  const displayedProjects = projects.slice(0, 3);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      },
    },
  };

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
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
            >
              <Card 
                className="group hover:shadow-elegant transition-all duration-500 bg-card border-border hover:border-primary/20 overflow-hidden h-full hover:-translate-y-2 hover:scale-[1.02]"
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

                <div className="mt-4 flex justify-center">
                  {project.liveUrl ? (
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="w-auto px-6"
                    >
                      Visit Site
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="w-auto px-6"
                    >
                      GitHub
                      <Github className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/projects')}
            className="px-8 py-3"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}