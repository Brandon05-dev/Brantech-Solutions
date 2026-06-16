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
      title: "GSDA Summit",
      status: "Live",
      category: "Event & Conference",
      description: "Official digital platform for the Grand Salon de la Data en Afrique. Features a comprehensive event portal with an integrated ticketing system, dynamic scheduling, and interactive speaker profiles.",
      techStack: ["React", "Next.js", "Tailwind CSS"],
      image: "/Portfolio/Gdsa.png",
      liveUrl: "https://www.gsdasummit.org/",
      githubUrl: null
    },
    {
      title: "Zambia Investment Summit",
      status: "Live",
      category: "Event & Conference",
      description: "Premium event portal hosting high-level initiatives like the Zambia Trade & Investment Mission and Digital Currency Forum, connecting global capital with local opportunities.",
      techStack: ["React", "Next.js", "Tailwind CSS"],
      image: "/Portfolio/Zambia.png",
      liveUrl: "https://zambiainvestmentsummit.vercel.app/",
      githubUrl: null
    },
    {
      title: "Global Policy House",
      status: "Live",
      category: "Corporate",
      description: "Digital presence for the Global Policy House, highlighting their international advisory services and sustainable development initiatives.",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      image: "/Portfolio/Gph.png",
      liveUrl: "https://globalpolicyhouse-ten.vercel.app/",
      githubUrl: null
    },
    {
      title: "Paychain Kenya",
      status: "Live",
      category: "FinTech",
      description: "Simple tools for a secure business. Paychain makes it simple to accept secure payments while providing inflation protection, global bulk payouts, and automated business tools.",
      techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      image: "/Portfolio/Paychain.png",
      liveUrl: "https://www.paychain.co.ke/",
      githubUrl: null
    },
    {
      title: "WSHG",
      status: "Live",
      category: "Sustainability",
      description: "An interdisciplinary group combating climate change through climate-smart agriculture. We design systems—from manual irrigation to agroforestry—bridging the gap between vulnerability and resilience.",
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      image: "/Portfolio/Wshg.png",
      liveUrl: "https://wshg.co.ke/",
      githubUrl: null
    },
    {
      title: "Tattoo Nation Kenya",
      status: "Live",
      category: "Art & Design",
      description: "Professional tattoo studio website showcasing artistic designs, portfolio, and booking services for tattoo enthusiasts in Kenya.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "/tattoonationkenya.png",
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
      techStack: ["React", "Tailwind CSS"],
      image: "/Portfolio/Bmi.png",
      liveUrl: "https://bmileatherart.vercel.app/",
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

  // Only show first 6 projects
  const displayedProjects = projects.slice(0, 6);

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
      y: 40,
      scale: 0.98,
      filter: "blur(8px)"
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1]
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-900/50">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-items-center"
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
                className="group hover:shadow-elegant transition-all duration-500 bg-white border border-slate-200 shadow-sm ring-1 ring-slate-900/5 hover:border-primary/20 overflow-hidden h-full hover:-translate-y-1 rounded-lg w-full max-w-[340px] flex flex-col"
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
                    <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>


                <div className="mt-4 flex justify-center">
                  {project.liveUrl ? (
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="w-full h-9 text-xs font-semibold rounded-md shadow-sm"
                    >
                      Visit Site
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="w-full h-9 text-xs font-semibold rounded-md shadow-sm"
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
        <div className="text-center max-w-2xl mx-auto mt-12 bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-3">Looking for more?</h3>
          <p className="text-slate-600 mb-6">
            Explore our complete portfolio to see how we've helped diverse businesses scale, innovate, and achieve their digital transformation goals.
          </p>
          <Button 
            variant="default" 
            size="lg"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate('/projects');
            }}
            className="px-8 py-3 font-medium bg-primary hover:bg-primary/90 text-white rounded-lg shadow-sm"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}