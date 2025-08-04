import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  UserCheck,
  Minimize2,
  Maximize2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋🏽 Hi my boss! How can we help you?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const botResponses = {
    greeting: [
      "Hello! Welcome to Brantech Solutions. We're here to empower students, startups, and SMEs across Africa with innovative digital solutions. How can I help you today?",
      "Hi there! I'm Temi from Brantech Support. We specialize in bridging the gap between brilliant ideas and practical digital implementation for Africa's youth and business community. What would you like to know?",
      "Welcome to Brantech Solutions! We're passionate about supporting African innovators with affordable, accessible technology solutions. How can I assist you?"
    ],
    services: [
      "Brantech Solutions offers comprehensive digital services: Custom Website Design & Development (campus platforms, business sites, e-commerce), Software Development & Automation Tools, Cybersecurity Audits & Data Protection, AI-Powered Solutions (chatbots, automation), Student Support Platforms (CV writing, portfolio sites), Technical Consultancy & Training, and IT Support for SMEs. Which service interests you most?",
      "We specialize in empowering African startups and students with: Web development, Mobile app creation, E-commerce platforms, AI integrations, Cybersecurity solutions, Brand design, and Digital transformation consulting. Our focus is making technology accessible and affordable for young entrepreneurs."
    ],
    students: [
      "Absolutely! Brantech is dedicated to empowering students across Africa. We offer CV writing services, professional portfolio websites, campus platform development, project assistance, and affordable digital solutions tailored for university students and young professionals. We understand student budgets!",
      "Yes! We're passionate about supporting African students. Our services include: Professional CV enhancement, Portfolio website creation, Academic project assistance, Campus innovation platforms, and budget-friendly digital solutions to help you showcase your skills and land opportunities."
    ],
    ecommerce: [
      "Definitely! We design and develop fully functional e-commerce websites for businesses of all sizes. Our e-commerce solutions include: Product catalog management, Secure payment integration (M-Pesa, card payments), Inventory management systems, Mobile-responsive design, and ongoing maintenance. What type of products are you looking to sell?",
      "Yes! E-commerce is one of our core specialties. We create complete online stores with: Custom design, Payment gateway integration, Order management, Customer accounts, SEO optimization, and mobile optimization. We've helped many African businesses go digital successfully."
    ],
    apps: [
      "Absolutely! We develop custom mobile applications for both Android and iOS platforms. Our app development services include: Native app development, Cross-platform solutions, Business apps, Educational platforms, E-commerce apps, and IoT integrations. What kind of mobile app do you have in mind?",
      "Yes! Mobile app development is a key service. We create: Business productivity apps, Learning platforms, E-commerce mobile apps, Social networking apps, and innovative startup solutions. We focus on user-friendly designs that work perfectly on African mobile networks."
    ],
    cybersecurity: [
      "Cybersecurity is crucial in today's digital world! We offer: Comprehensive security audits, Vulnerability testing and assessment, Data protection consulting, Security training for staff, Secure system implementation, and ongoing security monitoring. We help protect African businesses from digital threats.",
      "Yes! Our cybersecurity services include: Website security audits, Data breach prevention, Secure coding practices, Staff security training, GDPR compliance consulting, and 24/7 security monitoring. We make cybersecurity accessible for small businesses and startups."
    ],
    ai: [
      "We're excited about AI possibilities! Our AI services include: Custom chatbot development (like this one!), Process automation tools, Smart data analysis, AI-powered customer service, Intelligent business insights, and AI integration consulting. We help businesses leverage AI to improve efficiency and customer experience.",
      "AI is transforming business! We offer: Chatbot development for customer support, Automated workflow solutions, Predictive analytics, Smart recommendation systems, and AI consulting. We make artificial intelligence accessible and practical for African businesses."
    ],
    pricing: [
      "We understand that African startups and students often work with limited budgets, so we've designed our pricing to be accessible. Every project is unique, and we provide custom quotes based on your specific needs. We also offer free initial consultations and flexible payment plans. Would you like a personalized quote?",
      "Our pricing is specifically designed for the African market - affordable yet professional. We offer: Free consultations, Flexible payment options, Student discounts, Startup-friendly packages, and transparent pricing with no hidden costs. Let's discuss your project to provide an accurate quote."
    ],
    timeline: [
      "Project timelines depend on complexity and scope. Typically: Basic websites take 2-4 weeks, E-commerce sites take 4-6 weeks, Mobile apps take 6-12 weeks, and Custom software can take 2-6 months. We always provide realistic timelines upfront and keep you updated throughout the development process.",
      "We pride ourselves on efficient delivery! Standard timelines: Simple websites (2-3 weeks), Business websites (3-5 weeks), E-commerce platforms (5-8 weeks), Mobile applications (8-16 weeks). We provide detailed project schedules and regular progress updates."
    ],
    location: [
      "Brantech Solutions is proudly based in Kenya, serving clients across Africa and beyond. While we focus on empowering African startups, students, and SMEs, we work remotely with clients worldwide. Our team understands the unique challenges and opportunities in the African tech ecosystem.",
      "We're based in Nairobi, Kenya, but our impact reaches across Africa! We work remotely with clients from Cape Town to Cairo, understanding local markets, payment systems (like M-Pesa), and the unique needs of African businesses. Where are you located?"
    ],
    contact: [
      "You can reach us in several ways: Continue chatting here for immediate responses, Email us at info@brantech.co.ke, Fill out our contact form on the website, or Schedule a free consultation call. We typically respond within 24 hours and offer free initial consultations!",
      "Getting in touch is easy! You can: Chat with me right here, Send us an email at info@brantech.co.ke, Use our website contact form, or Book a free consultation call. We're always excited to discuss new projects and help bring your ideas to life!"
    ],
    training: [
      "Absolutely! We believe in empowering our clients with knowledge. Our training services include: Staff onboarding for new systems, Technical workshops, Digital literacy training, Website management tutorials, Social media marketing guidance, and ongoing support. We ensure you're confident using your new digital tools.",
      "Yes! Training is a crucial part of our service. We offer: System administration training, Content management workshops, Digital marketing guidance, Cybersecurity awareness training, and ongoing technical support. We want you to be fully independent with your digital solutions."
    ],
    maintenance: [
      "Ongoing support is essential! Our maintenance services include: Regular security updates, Content updates and changes, Performance optimization, Bug fixes and troubleshooting, Backup management, and 24/7 technical support. We ensure your digital assets continue performing at their best.",
      "We provide comprehensive maintenance packages: Monthly security updates, Performance monitoring, Content management support, Technical troubleshooting, Regular backups, and emergency support. Your digital solutions will always stay current and secure."
    ],
    portfolio: [
      "We're proud of our diverse portfolio! We've successfully delivered: E-commerce platforms for African retailers, Campus management systems for universities, Mobile learning apps for students, IoT monitoring systems for agriculture, Financial analytics dashboards, and innovative startup platforms. Check our Portfolio section for detailed case studies!",
      "Our portfolio showcases real impact across Africa: Student portfolio websites that landed jobs, E-commerce sites that boosted sales by 300%, Mobile apps with 50K+ downloads, Security systems that prevented breaches, and educational platforms serving thousands of students. Each project delivered measurable results!"
    ],
    partnership: [
      "We love collaborating with like-minded innovators! We're open to: Strategic partnerships, Joint ventures, Referral programs, Technology partnerships, Academic collaborations, and community initiatives. Whether you're a developer, designer, business, or institution, let's explore how we can work together to empower more African entrepreneurs!",
      "Partnerships drive innovation! We collaborate through: Developer partnerships, Design agency alliances, University partnerships, Startup incubator relationships, and community tech initiatives. We believe in building a stronger African tech ecosystem together."
    ],
    consultation: [
      "We offer completely FREE initial consultations with no obligations! During our consultation, we'll: Understand your goals and challenges, Provide expert recommendations, Discuss timeline and budget options, Answer all your questions, and create a custom proposal. It's a great way to explore possibilities without any commitment!",
      "Our free consultations are comprehensive and valuable. We'll: Analyze your current situation, Recommend the best solutions, Provide honest timelines and budgets, Share relevant case studies, and give you actionable insights even if you don't hire us. Book yours today!"
    ],
    company: [
      "Brantech Solutions was founded with a mission to democratize technology across Africa. We're a team of passionate developers, designers, and digital strategists based in Kenya. Our vision is to bridge the gap between brilliant African ideas and practical digital implementation, making technology accessible to students, startups, and growing businesses.",
      "We're more than a tech company - we're enablers of African innovation! Founded by young African entrepreneurs, we understand the unique challenges of building businesses in our markets. Our team combines technical expertise with local market knowledge to deliver solutions that truly work for African contexts."
    ],
    success: [
      "We measure success by our clients' achievements: Over 200 successful projects delivered, 95% client satisfaction rate, Helped 50+ startups launch their digital presence, Supported 100+ students with career-boosting portfolios, Average 250% increase in client online engagement, and countless success stories across Africa!",
      "Our track record speaks volumes: 3+ years serving the African market, 200+ websites and apps launched, 50+ businesses transformed digitally, 100+ students empowered with professional portfolios, Zero security breaches on our maintained systems, and growing community of satisfied clients!"
    ],
    default: [
      "That's a great question! I'd love to provide you with detailed information about that. Feel free to ask about our services, pricing, timeline, or anything else. You can also schedule a free consultation with our team for personalized guidance.",
      "Interesting question! I'm here to help you understand how Brantech Solutions can support your goals. Whether it's about our services, process, pricing, or success stories, I'm happy to provide more details. What specific aspect would you like to explore?",
      "I'd be happy to help you with that! Our team has extensive experience across various digital solutions. For detailed technical information or specific requirements, I can connect you with our specialists, or we can schedule a free consultation to discuss your needs in depth."
    ]
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes("hello") || message.includes("hi") || message.includes("hey") || message.includes("good morning") || message.includes("good afternoon")) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    }
    
    // Services and general what we do
    if (message.includes("service") || message.includes("what do you do") || message.includes("what does brantech") || message.includes("offer") || message.includes("help with")) {
      return botResponses.services[Math.floor(Math.random() * botResponses.services.length)];
    }
    
    // Student-specific queries
    if (message.includes("student") || message.includes("cv") || message.includes("portfolio") || message.includes("campus") || message.includes("university") || message.includes("college")) {
      return botResponses.students[Math.floor(Math.random() * botResponses.students.length)];
    }
    
    // E-commerce questions
    if (message.includes("ecommerce") || message.includes("e-commerce") || message.includes("online store") || message.includes("shop") || message.includes("sell online")) {
      return botResponses.ecommerce[Math.floor(Math.random() * botResponses.ecommerce.length)];
    }
    
    // Mobile app questions
    if (message.includes("mobile app") || message.includes("app") || message.includes("android") || message.includes("ios") || message.includes("phone app")) {
      return botResponses.apps[Math.floor(Math.random() * botResponses.apps.length)];
    }
    
    // Cybersecurity questions
    if (message.includes("security") || message.includes("cyber") || message.includes("protect") || message.includes("safe") || message.includes("hack") || message.includes("vulnerability")) {
      return botResponses.cybersecurity[Math.floor(Math.random() * botResponses.cybersecurity.length)];
    }
    
    // AI and automation
    if (message.includes("ai") || message.includes("artificial intelligence") || message.includes("automation") || message.includes("chatbot") || message.includes("smart")) {
      return botResponses.ai[Math.floor(Math.random() * botResponses.ai.length)];
    }
    
    // Location and Africa focus
    if (message.includes("where") || message.includes("location") || message.includes("kenya") || message.includes("africa") || message.includes("based")) {
      return botResponses.location[Math.floor(Math.random() * botResponses.location.length)];
    }
    
    // Pricing and budget
    if (message.includes("price") || message.includes("cost") || message.includes("quote") || message.includes("budget") || message.includes("affordable") || message.includes("cheap")) {
      return botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)];
    }
    
    // Timeline questions
    if (message.includes("how long") || message.includes("timeline") || message.includes("time") || message.includes("duration") || message.includes("weeks") || message.includes("months")) {
      return botResponses.timeline[Math.floor(Math.random() * botResponses.timeline.length)];
    }
    
    // Training questions
    if (message.includes("train") || message.includes("teach") || message.includes("learn") || message.includes("onboard") || message.includes("staff")) {
      return botResponses.training[Math.floor(Math.random() * botResponses.training.length)];
    }
    
    // Maintenance and support
    if (message.includes("maintenance") || message.includes("support") || message.includes("update") || message.includes("fix") || message.includes("manage")) {
      return botResponses.maintenance[Math.floor(Math.random() * botResponses.maintenance.length)];
    }
    
    // Portfolio and examples
    if (message.includes("portfolio") || message.includes("work") || message.includes("project") || message.includes("example") || message.includes("case study")) {
      return botResponses.portfolio[Math.floor(Math.random() * botResponses.portfolio.length)];
    }
    
    // Partnership and collaboration
    if (message.includes("partner") || message.includes("collaborate") || message.includes("join") || message.includes("work together") || message.includes("team up")) {
      return botResponses.partnership[Math.floor(Math.random() * botResponses.partnership.length)];
    }
    
    // Consultation
    if (message.includes("consult") || message.includes("meeting") || message.includes("call") || message.includes("free") || message.includes("advice")) {
      return botResponses.consultation[Math.floor(Math.random() * botResponses.consultation.length)];
    }
    
    // Company information
    if (message.includes("about") || message.includes("company") || message.includes("who are you") || message.includes("brantech") || message.includes("team")) {
      return botResponses.company[Math.floor(Math.random() * botResponses.company.length)];
    }
    
    // Success stories and achievements
    if (message.includes("success") || message.includes("achievement") || message.includes("results") || message.includes("track record") || message.includes("experience")) {
      return botResponses.success[Math.floor(Math.random() * botResponses.success.length)];
    }
    
    // Contact information
    if (message.includes("contact") || message.includes("reach") || message.includes("email") || message.includes("phone") || message.includes("get in touch")) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    }
    
    // Default response for unmatched queries
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative flex items-center gap-2 sm:gap-3">
            {/* Text bubble that appears when closed */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full shadow-xl whitespace-nowrap text-xs sm:text-sm font-medium border-2 border-white/30 backdrop-blur-lg relative max-w-[180px] sm:max-w-none">
              <div className="flex flex-col text-center">
                <span className="font-semibold">
                  <span className="hidden sm:inline">Ask Temi anything 💬</span>
                  <span className="sm:hidden">Ask Temi 💬</span>
                </span>
                <span className="text-xs opacity-90 mt-1">
                  <span className="hidden sm:inline">Our Customer Assistance</span>
                  <span className="sm:hidden">Customer Support</span>
                </span>
              </div>
              
              {/* Speech bubble arrow */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-primary border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent"></div>
            </div>
            
            <Button
              onClick={() => setIsOpen(true)}
              className="h-16 w-16 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-primary/20 flex items-center justify-center"
              style={{
                animation: 'float 3s ease-in-out infinite, glow 2s ease-in-out infinite alternate'
              }}
              size="sm"
            >
              <span className="text-3xl">👩🏽‍💼</span>
            </Button>
          </div>
        </div>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Card 
            className={cn(
              "bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl transition-all duration-500 overflow-hidden",
              isMinimized 
                ? "w-80 h-16 rounded-2xl" 
                : "w-96 h-[600px] rounded-2xl animate-in slide-in-from-bottom-4 fade-in-0"
            )}
          >
            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 text-lg">
                    👩🏽‍💼
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Temi - Customer Support</h3>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Online now</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="h-8 w-8 p-0 hover:bg-white/20 text-white/80 hover:text-white"
                  >
                    {isMinimized ? (
                      <Maximize2 className="w-4 h-4" />
                    ) : (
                      <Minimize2 className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 p-0 hover:bg-red-500/20 text-white/80 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-hidden bg-slate-800/50">
                  <ScrollArea className="h-[440px] p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={cn(
                            "flex gap-3 animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
                            message.sender === "user" ? "justify-end" : "justify-start"
                          )}
                        >
                          {message.sender === "bot" && (
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg text-sm">
                              <span className="text-lg">👩🏽‍💼</span>
                            </div>
                          )}
                          <div
                            className={cn(
                              "max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow-lg",
                              message.sender === "user"
                                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white ml-auto rounded-br-md"
                                : "bg-slate-700/80 text-slate-100 border border-slate-600/50 rounded-bl-md backdrop-blur-sm"
                            )}
                          >
                            {message.text}
                          </div>
                          {message.sender === "user" && (
                            <div className="w-8 h-8 bg-slate-600/80 rounded-full flex items-center justify-center flex-shrink-0 border border-slate-500/50">
                              <User className="w-4 h-4 text-slate-300" />
                            </div>
                          )}
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="flex gap-3 justify-start animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg text-sm">
                            <span className="text-lg">👩🏽‍💼</span>
                          </div>
                          <div className="bg-slate-700/80 text-slate-300 rounded-2xl rounded-bl-md px-4 py-3 text-sm border border-slate-600/50 backdrop-blur-sm">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-slate-800/80 border-t border-slate-700/50 backdrop-blur-sm">
                  <div className="flex gap-3">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-purple-500/50 focus:ring-purple-500/20 rounded-xl h-12 px-4"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white h-12 w-12 p-0 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      size="sm"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  );
}