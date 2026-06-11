import { Button } from "@/components/ui/button";
import {
  Globe,
  Shield,
  ShoppingCart,
  Smartphone,
  Search,
  FileText,
  Cpu,
  Palette,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ServicesProps {
  onContactClick?: () => void;
}

export function Services({ onContactClick }: ServicesProps) {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const services = [
    {
      icon: Globe,
      title: "Website Design, Development & Maintainance",
      description:
        "Custom websites and web applications built with modern technologies. From simple business sites to complex enterprise solutions.",
      hoverColor: "blue",
      useImage: true,
      imageSrc: "/Web1.png",
      route: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces and seamless performance.",
      hoverColor: "purple",
      useImage: true,
      imageSrc: "/mobile dev.png",
      route: "/services/mobile-development"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Advanced cybersecurity solutions to protect your digital assets. Security audits, threat monitoring, and incident response.",
      hoverColor: "red",
      useImage: true,
      imageSrc: "/cybersec .png",
      route: "/services/cybersecurity"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Complete online store development and management. From product catalogs to payment processing and inventory management.",
      hoverColor: "green",
      useImage: true,
      imageSrc: "/eccomerce.png",
      route: "/services/ecommerce"
    },

    {
      icon: Search,
      title: "SEO and Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your online presence. SEO, social media, and content marketing.",
      hoverColor: "pink",
      useImage: true,
      imageSrc: "/seo.png",
      route: "/services/seo-marketing"
    },
    {
      icon: FileText,
      title: "Content Management Systems (CMS)",
      description:
        "Custom CMS solutions for easy content management. WordPress, Drupal, and custom-built systems for seamless content updates.",
      hoverColor: "indigo",
      useImage: true,
      imageSrc: "/cms.png",
      route: "/services/cms"
    },
    {
      icon: Cpu,
      title: "AI & Automations",
      description:
        "Integrate intelligent AI models and automated workflows to streamline operations, reduce manual tasks, and boost business efficiency.",
      hoverColor: "teal",
      useImage: true,
      imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      route: "/services/ai-automations"
    },
    {
      icon: Palette,
      title: "Graphic Design Services",
      description:
        "Professional branding, logo design, and marketing materials that capture your unique identity and communicate your message clearly.",
      hoverColor: "cyan",
      useImage: true,
      imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
      route: "/services/graphic-design"
    },
  ];

  const colorClasses: Record<string, any> = {
    blue: {
      iconBg: "bg-primary/5 group-hover:bg-primary",
      iconColor: "text-primary group-hover:text-white",
      titleHover: "group-hover:text-primary",
      borderHover: "hover:border-primary/20",
      gradientOverlay: "",
      decorative1: "",
      decorative2: "",
    },
    purple: {
      iconBg: "bg-primary/5 group-hover:bg-primary",
      iconColor: "text-primary group-hover:text-white",
      titleHover: "group-hover:text-primary",
      borderHover: "hover:border-primary/20",
      gradientOverlay: "",
      decorative1: "",
      decorative2: "",
    },
    red: {
      iconBg: "bg-primary/5 group-hover:bg-primary",
      iconColor: "text-primary group-hover:text-white",
      titleHover: "group-hover:text-primary",
      borderHover: "hover:border-primary/20",
      gradientOverlay: "",
      decorative1: "",
      decorative2: "",
    },
    green: {
      iconBg: "bg-primary/5 group-hover:bg-primary",
      iconColor: "text-primary group-hover:text-white",
      titleHover: "group-hover:text-primary",
      borderHover: "hover:border-primary/20",
      gradientOverlay: "",
      decorative1: "",
      decorative2: "",
    },
    orange: {
      iconBg: "bg-primary/5 group-hover:bg-primary",
      iconColor: "text-primary group-hover:text-white",
      titleHover: "group-hover:text-primary",
      borderHover: "hover:border-primary/20",
      gradientOverlay: "",
      decorative1: "",
      decorative2: "",
    },
    pink: {
      iconBg: "bg-primary/5 group-hover:bg-primary",
      iconColor: "text-primary group-hover:text-white",
      titleHover: "group-hover:text-primary",
      borderHover: "hover:border-primary/20",
      gradientOverlay: "",
      decorative1: "",
      decorative2: "",
    },
    indigo: {
      iconBg: "bg-primary/5 group-hover:bg-primary",
      iconColor: "text-primary group-hover:text-white",
      titleHover: "group-hover:text-primary",
      borderHover: "hover:border-primary/20",
      gradientOverlay: "",
      decorative1: "",
      decorative2: "",
    },
    teal: {
      iconBg: "bg-primary/5 group-hover:bg-primary",
      iconColor: "text-primary group-hover:text-white",
      titleHover: "group-hover:text-primary",
      borderHover: "hover:border-primary/20",
      gradientOverlay: "",
      decorative1: "",
      decorative2: "",
    },
    cyan: {
      iconBg: "bg-primary/5 group-hover:bg-primary",
      iconColor: "text-primary group-hover:text-white",
      titleHover: "group-hover:text-primary",
      borderHover: "hover:border-primary/20",
      gradientOverlay: "",
      decorative1: "",
      decorative2: "",
    },
  };

  return (
    <section id="services" className="py-24 relative bg-slate-50 dark:bg-slate-900 overflow-hidden z-0">
      {/* Premium Background Patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] z-[-1]"></div>
      <div className="absolute left-0 right-0 top-1/4 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-blue-600 opacity-10 blur-[120px]"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-600 opacity-10 blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            What We Build
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Eight services. <span className="text-blue-600">One partner.</span>
          </h2>
          <p className="text-lg text-slate-500">
            From your first website to enterprise-grade cloud infrastructure, we cover the full technology stack so you never need to manage multiple agencies.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colors = colorClasses[service.hoverColor as keyof typeof colorClasses];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] ring-1 ring-slate-900/5 hover:border-blue-500/30 hover:shadow-elegant overflow-hidden h-full hover:-translate-y-1 rounded-xl p-3 sm:p-6 flex flex-col transition-all duration-500"
              >
                {/* Inner card premium decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                <div className={`absolute inset-0 ${colors.gradientOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10 flex flex-col h-full">
                  {service.useImage && service.imageSrc ? (
                    <div className="w-full h-16 sm:h-32 rounded-md mb-3 sm:mb-5 overflow-hidden group-hover:scale-[1.02] transition-all duration-500">
                      <img src={service.imageSrc} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 ${colors.iconBg} rounded-md mb-3 sm:mb-5 transition-all duration-500`}>
                      <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 ${colors.iconColor} transition-colors duration-500`} />
                    </div>
                  )}
                  <h3 className={`text-[13px] sm:text-lg font-bold text-slate-800 mb-2 sm:mb-3 leading-tight ${colors.titleHover} transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-[10px] sm:text-sm flex-grow mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-none">{service.description}</p>
                  
                  <div className="mt-auto border-t border-slate-100 pt-3 sm:pt-4">
                    <Button 
                      variant="ghost" 
                      className="w-full h-8 sm:h-10 px-2 sm:px-4 justify-between text-[11px] sm:text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 group/btn rounded-lg"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        navigate(service.route);
                      }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
