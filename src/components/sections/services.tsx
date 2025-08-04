import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Shield, 
  ShoppingCart, 
  Wrench,
  Smartphone,
  Search,
  FileText
} from "lucide-react";

interface ServicesProps {
  onContactClick?: () => void;
}

export function Services({ onContactClick }: ServicesProps) {
  const services = [
    {
      icon: Globe,
      title: "Website Design and Development",
      description: "Custom websites and web applications built with modern technologies. From simple business sites to complex enterprise solutions.",
      hoverColor: "blue"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces and seamless performance.",
      hoverColor: "purple"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced cybersecurity solutions to protect your digital assets. Security audits, threat monitoring, and incident response.",
      hoverColor: "red"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete online store development and management. From product catalogs to payment processing and inventory management.",
      hoverColor: "green"
    },
    {
      icon: Wrench,
      title: "Website Maintenance and Support",
      description: "Ongoing website maintenance, updates, and technical support. Keep your website secure, fast, and up-to-date.",
      hoverColor: "orange"
    },
    {
      icon: Search,
      title: "SEO and Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence. SEO, social media, and content marketing.",
      hoverColor: "pink"
    },
    {
      icon: FileText,
      title: "Content Management Systems (CMS)",
      description: "Custom CMS solutions for easy content management. WordPress, Drupal, and custom-built systems for seamless content updates.",
      hoverColor: "indigo"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground">
            Empowering businesses with reliable, innovative tech solutions 
            that drive growth and digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = {
              blue: {
                iconBg: "bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-600",
                iconColor: "text-blue-600 group-hover:text-white",
                titleHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
                borderHover: "hover:border-blue-200 dark:hover:border-blue-800",
                gradientOverlay: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
                decorative1: "from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20",
                decorative2: "from-blue-200 to-blue-100 dark:from-blue-800/20 dark:to-blue-900/20"
              },
              purple: {
                iconBg: "bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-600",
                iconColor: "text-purple-600 group-hover:text-white",
                titleHover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
                borderHover: "hover:border-purple-200 dark:hover:border-purple-800",
                gradientOverlay: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
                decorative1: "from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20",
                decorative2: "from-purple-200 to-purple-100 dark:from-purple-800/20 dark:to-purple-900/20"
              },
              red: {
                iconBg: "bg-red-100 dark:bg-red-900/30 group-hover:bg-red-600",
                iconColor: "text-red-600 group-hover:text-white",
                titleHover: "group-hover:text-red-600 dark:group-hover:text-red-400",
                borderHover: "hover:border-red-200 dark:hover:border-red-800",
                gradientOverlay: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20",
                decorative1: "from-red-100 to-red-200 dark:from-red-900/20 dark:to-red-800/20",
                decorative2: "from-red-200 to-red-100 dark:from-red-800/20 dark:to-red-900/20"
              },
              green: {
                iconBg: "bg-green-100 dark:bg-green-900/30 group-hover:bg-green-600",
                iconColor: "text-green-600 group-hover:text-white",
                titleHover: "group-hover:text-green-600 dark:group-hover:text-green-400",
                borderHover: "hover:border-green-200 dark:hover:border-green-800",
                gradientOverlay: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
                decorative1: "from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20",
                decorative2: "from-green-200 to-green-100 dark:from-green-800/20 dark:to-green-900/20"
              },
              orange: {
                iconBg: "bg-orange-100 dark:bg-orange-900/30 group-hover:bg-orange-600",
                iconColor: "text-orange-600 group-hover:text-white",
                titleHover: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
                borderHover: "hover:border-orange-200 dark:hover:border-orange-800",
                gradientOverlay: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
                decorative1: "from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20",
                decorative2: "from-orange-200 to-orange-100 dark:from-orange-800/20 dark:to-orange-900/20"
              },
              pink: {
                iconBg: "bg-pink-100 dark:bg-pink-900/30 group-hover:bg-pink-600",
                iconColor: "text-pink-600 group-hover:text-white",
                titleHover: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
                borderHover: "hover:border-pink-200 dark:hover:border-pink-800",
                gradientOverlay: "from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20",
                decorative1: "from-pink-100 to-pink-200 dark:from-pink-900/20 dark:to-pink-800/20",
                decorative2: "from-pink-200 to-pink-100 dark:from-pink-800/20 dark:to-pink-900/20"
              },
              indigo: {
                iconBg: "bg-indigo-100 dark:bg-indigo-900/30 group-hover:bg-indigo-600",
                iconColor: "text-indigo-600 group-hover:text-white",
                titleHover: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
                borderHover: "hover:border-indigo-200 dark:hover:border-indigo-800",
                gradientOverlay: "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20",
                decorative1: "from-indigo-100 to-indigo-200 dark:from-indigo-900/20 dark:to-indigo-800/20",
                decorative2: "from-indigo-200 to-indigo-100 dark:from-indigo-800/20 dark:to-indigo-900/20"
              }
            };
            const colors = colorClasses[service.hoverColor];
            
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 ${colors.borderHover} hover:-translate-y-2`}
              >
                {/* Background gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradientOverlay} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-16 h-16 ${colors.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-all duration-500`}>
                    <IconComponent className={`h-8 w-8 ${colors.iconColor} transition-colors duration-500`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-4 ${colors.titleHover} transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className={`absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br ${colors.decorative2} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
