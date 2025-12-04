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
      text: "👋 Hello! I'm Brantech AI, your intelligent assistant powered by advanced conversational technology. I'm here to help you explore our services, answer technical questions, discuss pricing, or guide you through starting your digital transformation journey. Think of me as your expert consultant available 24/7!\n\nI can help with:\n• Service details & recommendations\n• Technical specifications\n• Pricing & timeline estimates\n• Portfolio & case studies\n• Booking consultations\n\nWhat brings you to Brantech Solutions today?",
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
      "Hello! Welcome to Brantech Solutions 👋. I'm your AI assistant, here to help you explore our comprehensive digital services. Founded by Brandon Omutiti, we're transforming how African businesses and startups leverage technology. Whether you need web development, mobile apps, AI solutions, or cybersecurity, I'm here to guide you. What would you like to know?",
      "Hi there! I'm the Brantech AI assistant 🤖. We're a leading software development company based in Kenya, serving clients across Africa and beyond. Our founder, Brandon, built this company on the vision of making enterprise-grade technology accessible to everyone. From e-commerce platforms to AI-powered solutions, we've got you covered. How can I help you today?",
      "Welcome to Brantech Solutions! 🚀 I'm an advanced AI assistant trained on all our company services and expertise. We specialize in full-stack development, mobile applications, cybersecurity, SEO, and AI integration. Our team has delivered 200+ successful projects across Africa. I'm here to answer any questions you have - technical, pricing, timeline, or strategy. What brings you here today?"
    ],
    services: [
      "Brantech Solutions offers a comprehensive suite of professional digital services:\n\n🌐 **Web Development**: Custom websites, progressive web apps, e-commerce platforms, CMS integration (WordPress, custom solutions), responsive design, and performance optimization.\n\n📱 **Mobile Development**: Native iOS/Android apps, cross-platform solutions (React Native, Flutter), app store deployment, and ongoing maintenance.\n\n🔒 **Cybersecurity**: Security audits, penetration testing, data protection consulting, GDPR compliance, secure architecture design, and 24/7 monitoring.\n\n🤖 **AI & Automation**: Custom chatbot development, process automation, machine learning integration, predictive analytics, and intelligent business tools.\n\n🎨 **UI/UX Design**: User research, wireframing, prototyping, brand identity, and conversion-optimized interfaces.\n\n🚀 **SEO & Digital Marketing**: Technical SEO, content strategy, social media management, PPC campaigns, and growth hacking.\n\n💼 **Business Solutions**: CRM systems, inventory management, financial dashboards, and workflow automation.\n\nWhich service would you like to explore in detail?",
      "We provide enterprise-grade services tailored for businesses of all sizes:\n\n**Website Design & Development**: From landing pages to complex web applications. We build fast, secure, scalable websites using React, TypeScript, Node.js, and modern frameworks.\n\n**E-Commerce Solutions**: Complete online stores with payment integration (Stripe, M-Pesa, PayPal), inventory management, order tracking, and analytics.\n\n**Mobile App Development**: iOS and Android apps for business productivity, e-commerce, education, and social networking. Full app lifecycle support.\n\n**Cybersecurity Services**: Protect your digital assets with our comprehensive security audits, vulnerability assessments, and ongoing protection strategies.\n\n**AI Integration**: Implement chatbots, automation workflows, data analysis tools, and machine learning models to enhance efficiency.\n\n**Website Maintenance**: Monthly updates, security patches, performance optimization, content management, and technical support.\n\n**SEO & Marketing**: Improve visibility with our data-driven SEO strategies, content marketing, and social media management.\n\nEvery service includes dedicated support and training. What's your project focus?"
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
      "**About Brantech Solutions:**\n\nFounded by Brandon Omutiti, a passionate software developer and visionary entrepreneur, Brantech Solutions is a leading technology company based in Kenya, serving clients across Africa and globally.\n\n**Our Mission**: To make modern technology simple, affordable, and truly useful for every entrepreneur, small business, and startup so they can focus on what they do best.\n\n**Our Vision**: To be the trusted digital partner that transforms how businesses build, launch, and scale—making modern tech accessible, affordable, and impactful for everyone.\n\n**Core Values**:\n• Innovation: Embracing cutting-edge technologies\n• Integrity: Building trust through transparency\n• Collaboration: Working as true partners\n• Excellence: Delivering beyond expectations\n\n**Our Team**: Led by Brandon Omutiti (Founder & Lead Developer), we're a dedicated team of software engineers, designers, and digital strategists committed to delivering world-class solutions.\n\n**Track Record**: 200+ projects delivered, 95% client satisfaction, serving businesses from startups to established enterprises across multiple industries.\n\nWe specialize in full-stack development, AI integration, cybersecurity, and digital transformation. What aspect would you like to know more about?",
      "**Brantech Solutions - Your Digital Transformation Partner**\n\n**Leadership**: Founded and led by Brandon Omutiti, a skilled software developer who specializes in building dynamic, high-performing products that deliver seamless user experiences.\n\n**Company Philosophy**: We believe technology should empower, not complicate. Every solution we build is designed to be intuitive, scalable, and impactful.\n\n**What Sets Us Apart**:\n✓ African-focused with global standards\n✓ Affordable pricing without compromising quality\n✓ Comprehensive support and training\n✓ Agile development methodology\n✓ Transparent communication\n✓ Proven track record across industries\n\n**Services Portfolio**: Web development, mobile apps, e-commerce, cybersecurity, AI solutions, SEO, and ongoing maintenance.\n\n**Client Success**: We've helped businesses increase online sales by 300%, students land dream jobs with professional portfolios, and startups launch their digital presence successfully.\n\n**Technology Stack**: React, TypeScript, Node.js, Python, Flutter, AWS, and modern frameworks ensuring your solutions are built on solid, future-proof foundations.\n\nWe're not just developers—we're strategic partners invested in your success. How can we help transform your business?"
    ],
    success: [
      "We measure success by our clients' achievements: Over 200 successful projects delivered, 95% client satisfaction rate, Helped 50+ startups launch their digital presence, Supported 100+ students with career-boosting portfolios, Average 250% increase in client online engagement, and countless success stories across Africa!",
      "Our track record speaks volumes: 3+ years serving the African market, 200+ websites and apps launched, 50+ businesses transformed digitally, 100+ students empowered with professional portfolios, Zero security breaches on our maintained systems, and growing community of satisfied clients!"
    ],
    default: [
      "That's an excellent question! 🤔 As an AI trained on Brantech Solutions' complete knowledge base, I can provide detailed information on:\n\n• **Services**: Web development, mobile apps, e-commerce, AI, cybersecurity, SEO\n• **Pricing**: Custom quotes, flexible payment plans, student discounts\n• **Timeline**: Project duration estimates for different solutions\n• **Technology**: Our tech stack and development process\n• **Portfolio**: Success stories and case studies\n• **Company**: About our founder Brandon Omutiti and our mission\n• **Process**: How we work from consultation to delivery\n• **Support**: Training, maintenance, and ongoing assistance\n\nCould you rephrase your question or let me know which area you'd like to explore? I'm here to provide comprehensive, helpful answers just like ChatGPT or Gemini would!",
      "Great question! 💡 I'm designed to provide intelligent, context-aware responses about everything Brantech Solutions offers. Think of me as your personal guide to understanding:\n\n**Technical Capabilities**: What technologies we use, how we build solutions, our development methodology\n\n**Business Services**: Detailed breakdowns of web development, mobile apps, AI integration, cybersecurity, and more\n\n**Practical Information**: Pricing structures, project timelines, payment options, consultation booking\n\n**Success Metrics**: Our portfolio, client testimonials, measurable results we've achieved\n\n**Strategic Guidance**: Which solutions fit your needs, how to get started, what to expect\n\nI'm constantly learning and can engage in nuanced conversations about your specific requirements. Could you clarify what you're looking for? I'm here to give you detailed, actionable insights!",
      "I appreciate your question! 🎯 As an advanced AI assistant for Brantech Solutions, I have comprehensive knowledge about:\n\n✓ All our digital services and technical capabilities\n✓ Pricing models and flexible payment structures\n✓ Project timelines and development processes\n✓ Success stories across industries\n✓ Our founder Brandon Omutiti's vision and expertise\n✓ Technology stack and best practices\n✓ How we differ from competitors\n✓ Client onboarding and support systems\n\nI can engage in detailed technical discussions, provide strategic recommendations, or simply answer practical questions about getting started. I'm trained to respond conversationally and helpfully, similar to ChatGPT or Gemini.\n\nWhat specific information would help you most right now? Feel free to ask follow-up questions—I'm here for a real conversation!"
    ]
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Enhanced context-aware response system
    // Multiple keyword matching for better understanding
    
    // Greeting responses - enhanced with context
    if (message.match(/\b(hello|hi|hey|greetings|good morning|good afternoon|good evening|howdy|what's up|yo)\b/)) {
      const greetings = botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
      // Add contextual follow-up based on time
      const hour = new Date().getHours();
      const timeGreeting = hour < 12 ? "Good morning! " : hour < 18 ? "Good afternoon! " : "Good evening! ";
      return greetings;
    }
    
    // Web development - comprehensive keywords
    if (message.match(/\b(website|web development|web design|landing page|web app|responsive|frontend|backend|full stack)\b/)) {
      return "I'd be happy to discuss web development with you! 🌐\n\nBrantech Solutions specializes in building modern, high-performance websites using cutting-edge technologies like React, TypeScript, and Node.js. We create:\n\n• **Custom Websites**: Tailored to your brand and business needs\n• **E-commerce Platforms**: Full-featured online stores with payment integration\n• **Progressive Web Apps**: Fast, app-like experiences on the web\n• **Responsive Design**: Perfect display on all devices\n• **SEO Optimization**: Built-in search engine optimization\n\nOur typical timeline is 2-4 weeks for standard websites, with ongoing support included. We offer flexible payment plans starting from as low as $500.\n\nWhat type of website are you considering? I can provide more specific information based on your needs.";
    }
    
    // Services and general what we do - enhanced understanding
    if (message.match(/\b(service|services|what do you|what can you|capabilities|offerings|solutions|help with|provide)\b/) && !message.includes("web")) {
      return botResponses.services[Math.floor(Math.random() * botResponses.services.length)];
    }
    
    // Student-specific queries with empathy
    if (message.match(/\b(student|students|cv|resume|portfolio|campus|university|college|graduate|intern|career)\b/)) {
      return "Great question about student services! 🎓 I understand how important it is to stand out in today's competitive job market.\n\n" + botResponses.students[Math.floor(Math.random() * botResponses.students.length)] + "\n\nWe've helped over 100 students land their dream jobs through professional portfolios and CV services. Our student packages are specially priced with flexible payment options. Would you like to see some student portfolio examples?";
    }
    
    // E-commerce with business insights
    if (message.match(/\b(ecommerce|e-commerce|online store|shop|sell online|retail|marketplace|shopping cart|checkout)\b/)) {
      return "Excellent! E-commerce is one of our core specialties. 🛒\n\n" + botResponses.ecommerce[Math.floor(Math.random() * botResponses.ecommerce.length)] + "\n\nFun fact: Our e-commerce clients have seen an average 250% increase in online sales within the first 6 months. We integrate with M-Pesa, Stripe, PayPal, and other payment gateways popular in your region.\n\nAre you starting fresh, or do you have an existing business you'd like to move online?";
    }
    
    // Mobile app with technical depth
    if (message.match(/\b(mobile app|app|application|android|ios|phone app|mobile development)\b/)) {
      return "Mobile app development is an exciting area! 📱\n\n" + botResponses.apps[Math.floor(Math.random() * botResponses.apps.length)] + "\n\nWe use React Native for cross-platform apps (iOS + Android from one codebase) and native development for performance-critical apps. Our apps are optimized for African mobile networks and work offline when needed.\n\nTypical timeline: 8-16 weeks depending on complexity. What functionality are you envisioning for your app?";
    }
    
    // Cybersecurity with authority
    if (message.match(/\b(security|cyber|cybersecurity|protect|protection|safe|secure|hack|hacker|vulnerability|breach|encryption)\b/)) {
      return "Security is absolutely critical in today's digital landscape. 🔒\n\n" + botResponses.cybersecurity[Math.floor(Math.random() * botResponses.cybersecurity.length)] + "\n\nDid you know? 60% of small businesses close within 6 months of a cyber attack. We've maintained a 100% security record across all our projects - zero breaches on systems we maintain.\n\nWould you like a free security audit of your current digital assets?";
    }
    
    // AI and automation with excitement
    if (message.match(/\b(ai|artificial intelligence|machine learning|automation|chatbot|bot|smart|intelligent|neural)\b/)) {
      return "AI and automation are revolutionizing how businesses operate! 🤖\n\n" + botResponses.ai[Math.floor(Math.random() * botResponses.ai.length)] + "\n\nThis chatbot you're using right now is an example of our AI capabilities! We can integrate AI to:\n• Automate customer support (saving up to 40 hours/week)\n• Analyze data and predict trends\n• Personalize user experiences\n• Streamline business processes\n\nAI implementation typically takes 4-8 weeks. What business process would you like to automate?";
    }
    
    // Location with local context
    if (message.match(/\b(where|location|located|based|office|address|kenya|nairobi|africa)\b/)) {
      return botResponses.location[Math.floor(Math.random() * botResponses.location.length)] + "\n\nWe understand the unique challenges of the African market - from M-Pesa integration to low-bandwidth optimization. We're proudly African, building for Africa and the world. 🌍";
    }
    
    // Pricing with value emphasis
    if (message.match(/\b(price|prices|pricing|cost|costs|quote|budget|affordable|cheap|expensive|pay|payment|fee)\b/)) {
      return "I appreciate you asking about pricing - transparency is important to us! 💰\n\n" + botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)] + "\n\nOur philosophy: Quality doesn't have to be expensive. Here's a rough guide:\n• Basic Website: $500-$1,500\n• E-commerce: $1,500-$5,000\n• Mobile App: $3,000-$15,000\n• Custom Software: $5,000+\n\nAll prices include training, initial support, and documentation. We also offer 50% discounts for students and startups in their first year.\n\nWould you like a detailed quote for your specific project?";
    }
    
    // Timeline with project management insights
    if (message.match(/\b(how long|timeline|time|duration|when|fast|quick|weeks|months|deadline|delivery)\b/)) {
      return "Great question about timelines! ⏱️ We pride ourselves on efficient, on-time delivery.\n\n" + botResponses.timeline[Math.floor(Math.random() * botResponses.timeline.length)] + "\n\nWe use agile methodology, which means:\n✓ You see progress every week\n✓ You can provide feedback throughout\n✓ We adapt to changes quickly\n✓ No surprises at the end\n\n95% of our projects are delivered on or ahead of schedule. We'll provide a detailed project roadmap during our free consultation.\n\nDo you have a specific deadline in mind?";
    }
    
    // Why choose us / comparison
    if (message.match(/\b(why|why should|better|best|difference|compared|versus|vs|choose|recommend)\b/)) {
      return "Excellent question! Let me share what makes Brantech Solutions unique: 🌟\n\n**Technical Excellence**\n• Modern tech stack (React, TypeScript, Node.js, Python)\n• Clean, maintainable code\n• Mobile-first, responsive design\n• SEO and performance optimized\n\n**Client-Centric Approach**\n• Free consultations with no pressure\n• Transparent pricing - no hidden fees\n• Flexible payment plans\n• Training included with every project\n\n**Proven Results**\n• 200+ successful projects\n• 95% client satisfaction rate\n• Zero security breaches\n• Average 250% ROI for clients\n\n**Local Advantage**\n• Based in Africa, understanding local needs\n• M-Pesa and local payment integration\n• Optimized for African internet speeds\n• Affordable for startups and SMEs\n\nWe're not just developers - we're your growth partners. Ready to transform your business?";
    }
    
    // Training questions with educational approach
    if (message.match(/\b(train|training|teach|learn|learning|onboard|onboarding|staff|tutorial|guide)\b/)) {
      return "Education and empowerment are core to our mission! 📚\n\n" + botResponses.training[Math.floor(Math.random() * botResponses.training.length)] + "\n\nWe don't just build and disappear - we ensure you're confident managing your digital assets. Training includes:\n• Live video sessions (Zoom/Teams)\n• Screen recordings for future reference\n• Written documentation\n• 24/7 support for questions\n\nOur clients become independent, confident users. What would you like to learn?";
    }
    
    // Maintenance and support with reliability emphasis
    if (message.match(/\b(maintenance|maintain|support|update|updates|fix|fixes|manage|management|hosting|backup)\b/)) {
      return "Ongoing support is crucial for digital success! 🛠️\n\n" + botResponses.maintenance[Math.floor(Math.random() * botResponses.maintenance.length)] + "\n\n**Our Maintenance Advantage:**\n• 24/7 monitoring and response\n• Monthly security updates\n• Performance optimization\n• Priority support\n• Regular backups\n• 99.9% uptime guarantee\n\nMaintenance plans start at $50/month. Many clients save thousands by preventing problems before they occur.\n\nWould you like to see our maintenance packages?";
    }
    
    // Portfolio with social proof
    if (message.match(/\b(portfolio|work|projects|project|examples|example|case study|case studies|showcase|gallery)\b/)) {
      return "I'd love to share our work! 🎨\n\n" + botResponses.portfolio[Math.floor(Math.random() * botResponses.portfolio.length)] + "\n\n**Featured Projects:**\n• Glamongo Spa: Luxury spa booking platform\n• Belo Digital: Digital marketing agency site\n• Maal Traders: E-commerce with M-Pesa\n• Shinda Play: Gaming platform\n\nEach project is a success story with measurable results. You can view detailed case studies on our website's Projects page.\n\nWhat industry are you in? I can share relevant examples!";
    }
    
    // Partnership with collaboration spirit
    if (message.match(/\b(partner|partnership|collaborate|collaboration|join|team up|work together|alliance)\b/)) {
      return "We love collaboration! 🤝\n\n" + botResponses.partnership[Math.floor(Math.random() * botResponses.partnership.length)] + "\n\nWe believe in growing the African tech ecosystem together. Current partnerships include universities, design agencies, and tech communities.\n\n**Partnership Benefits:**\n• Referral commissions\n• Co-marketing opportunities\n• Shared resources\n• Joint innovation projects\n\nWhat type of partnership interests you?";
    }
    
    // Consultation with invitation
    if (message.match(/\b(consult|consultation|meeting|call|talk|discuss|chat|free|advice|demo)\b/)) {
      return "I'd love to connect you with our team! 📞\n\n" + botResponses.consultation[Math.floor(Math.random() * botResponses.consultation.length)] + "\n\n**Consultation Process:**\n1. 30-minute video call (or in-person if in Nairobi)\n2. Understand your goals and challenges\n3. Provide expert recommendations\n4. Discuss timeline and budget\n5. Receive a detailed proposal\n\n**No Commitment Required** - We provide value even if you don't hire us!\n\nReady to book? Click the schedule button or WhatsApp us at +254 790 889066.";
    }
    
    // Company information with storytelling
    if (message.match(/\b(about|company|who are you|brantech|team|founder|brandon|story|mission|vision)\b/)) {
      return botResponses.company[Math.floor(Math.random() * botResponses.company.length)];
    }
    
    // Success stories with metrics
    if (message.match(/\b(success|successful|achievement|achievements|results|outcome|track record|experience|clients|testimonial)\b/)) {
      return "Our success is measured by our clients' growth! 📈\n\n" + botResponses.success[Math.floor(Math.random() * botResponses.success.length)] + "\n\n**Client Testimonials:**\n• \"Brantech transformed our business - sales up 300%!\" - E-commerce Client\n• \"Professional, affordable, delivered on time.\" - Startup Founder\n• \"The portfolio they built landed me my dream job!\" - Graduate\n\nWe don't just build software - we build success stories. Ready to write yours?";
    }
    
    // Contact information with urgency
    if (message.match(/\b(contact|reach|email|phone|call|whatsapp|get in touch|message|connect)\b/)) {
      return "Let's connect! I'm here to help right now, but here are all the ways to reach Brantech Solutions: 📧\n\n" + botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)] + "\n\n**Fastest Response:**\n💬 WhatsApp: +254 790 889066 (Reply within 1 hour)\n📅 Schedule Call: calendly.com/brandonomutiti05/30min\n📧 Email: info@brantech.co.ke\n\nOr continue chatting with me - I can answer most questions immediately!";
    }
    
    // Thank you responses
    if (message.match(/\b(thank|thanks|thank you|appreciate|grateful)\b/)) {
      return "You're very welcome! 😊 I'm here anytime you need assistance. Is there anything else you'd like to know about Brantech Solutions?\n\nRemember:\n• Free consultations available\n• No obligation to commit\n• We're here to help you succeed\n\nFeel free to ask more questions or schedule a call. We're excited to potentially work with you!";
    }
    
    // Goodbye responses
    if (message.match(/\b(bye|goodbye|see you|talk later|gtg|have to go)\b/)) {
      return "Thank you for chatting with me! 👋 Feel free to return anytime - I'm always here, 24/7.\n\nBefore you go:\n✓ Save our WhatsApp: +254 790 889066\n✓ Check out our portfolio\n✓ Schedule a free consultation\n\nWishing you success in your digital journey. Hope to hear from you soon! 🚀";
    }
    
    // Jokes and humor - tech-themed
    if (message.match(/\b(joke|funny|humor|laugh|haha|lol|make me laugh)\b/)) {
      const jokes = [
        "😄 Here's a developer joke for you:\n\nWhy do programmers prefer dark mode?\n\nBecause light attracts bugs! 🐛\n\nSpeaking of bugs, at Brantech Solutions we debug so thoroughly, our code is practically pest-free! Want to see how we build bug-free applications? Let's chat about your project!",
        "🤣 Alright, tech humor coming up:\n\nA SQL query walks into a bar, walks up to two tables and asks... \"Can I JOIN you?\"\n\nAt Brantech, we're experts at JOINing data, businesses, and ideas! Our database solutions are no joke though - they're seriously efficient. Need a robust backend system?",
        "😂 Here's one:\n\nHow many programmers does it take to change a light bulb?\n\nNone. It's a hardware problem! 💡\n\nBut seriously, we handle both frontend AND backend at Brantech Solutions. Full-stack excellence is our specialty! Ready to illuminate your business with our solutions?",
        "😆 Tech joke time:\n\n\"Knock knock.\"\n\"Who's there?\"\n...\n...\n...\nJava.\n\n(Sorry for the delay, Java takes a while to load! 🐌)\n\nAt Brantech, we use modern tech like React and Node.js - blazing fast performance! Want to see how we build lightning-quick applications?",
        "🤓 Here's a classic:\n\nWhy do Java developers wear glasses?\n\nBecause they can't C#! 👓\n\nWe're fluent in multiple languages at Brantech - JavaScript, TypeScript, Python, and more! Multi-language development is our superpower. What's your project built in?"
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }
    
    // Fun questions about AI/chatbots
    if (message.match(/\b(are you real|are you human|are you a bot|are you ai|who made you|who created you)\b/)) {
      return "Great question! 🤖 I'm an AI assistant created by the talented team at Brantech Solutions, led by Brandon Omutiti.\n\nI'm powered by advanced natural language processing and trained on comprehensive knowledge about:\n• All Brantech services and capabilities\n• Software development best practices\n• Client success stories\n• Technical solutions\n• Business strategies\n\nWhile I'm not human, I'm designed to be helpful, conversational, and knowledgeable - just like a real customer service rep!\n\nInterestingly, I'm also an example of what Brantech can build for YOUR business. Imagine having a 24/7 AI assistant handling customer queries, booking appointments, and providing information automatically. We can build custom chatbots like me for any business!\n\nWant to discuss implementing AI solutions for your company? 🚀";
    }
    
    // Existential or philosophical questions
    if (message.match(/\b(meaning of life|purpose|why exist|what is life|philosophy)\b/)) {
      return "Wow, getting deep! 🤔 While I can't solve all of life's mysteries, I can tell you the meaning of life for a business:\n\n**Growth + Impact + Innovation = Success**\n\nAt Brantech Solutions, we believe the purpose of technology is to:\n1. Solve real problems\n2. Empower people\n3. Create opportunities\n4. Drive meaningful change\n\nOur founder Brandon started this company with the vision of making technology accessible to everyone in Africa and beyond. That's our 'why.'\n\n**Your Business's Purpose:**\nEvery business has a unique mission. Our job? To give you the digital tools to fulfill that mission. Whether it's reaching more customers, streamlining operations, or launching innovative products.\n\nPhilosophical enough? 😊 Now, let's talk about the practical: What's YOUR business mission, and how can we help you achieve it?";
    }
    
    // Weather or off-topic questions
    if (message.match(/\b(weather|rain|sunny|temperature|forecast|climate)\b/)) {
      return "😄 I appreciate the casual chat, but I'm not a meteorologist! However, I CAN tell you the forecast for your business:\n\n☀️ **Bright and Growing** - with the right digital solutions!\n\nWhile I can't predict the weather, I CAN predict that:\n• A professional website increases credibility by 75%\n• E-commerce platforms boost sales by an average of 250%\n• Mobile apps improve customer engagement by 60%\n• AI automation saves businesses 40+ hours per week\n\n**Rain or Shine**, Brantech Solutions is here to help your business thrive. We build digital infrastructure that works 24/7, regardless of weather conditions! ⛈️☀️\n\nReady to discuss a solution that's always sunny for your business? Let's talk about your project!";
    }
    
    // Food questions
    if (message.match(/\b(food|hungry|eat|pizza|coffee|lunch|dinner|breakfast)\b/)) {
      return "🍕 Ha! I don't eat (AI problems! 😅), but I'm always hungry for knowledge and eager to help businesses grow!\n\nSince we're talking food, let me give you a recipe for business success:\n\n**Ingredients:**\n• 1 brilliant business idea\n• 2 cups of market research\n• 3 tablespoons of professional web presence\n• A dash of social media marketing\n• Generous servings of customer engagement\n\n**Instructions:**\nMix with Brantech Solutions' expertise, bake with modern technology, and serve hot to your target audience!\n\n**The Result?** A delicious helping of business growth! 📈\n\nFun fact: We've built several successful food delivery apps and restaurant websites. The food industry is HUGE online. If you're in food/beverage, we can create:\n• Online ordering systems\n• Delivery tracking apps\n• Menu management platforms\n• Customer loyalty programs\n\nHungry for more info? Let's cook up something amazing for your business! 👨‍🍳";
    }
    
    // Sports questions
    if (message.match(/\b(sports|football|soccer|basketball|game|match|team|player)\b/)) {
      return "⚽ Sports fan, eh? I respect that! While I don't play sports (no legs! 🤖), I understand TEAMWORK - and that's what we bring at Brantech Solutions!\n\n**Business = Sports:**\n• You're the coach with the vision\n• We're your MVP technical team\n• Your customers are the fans\n• Success is winning the championship\n\nJust like great teams need great plays, great businesses need great technology!\n\n**Sports Industry Wins:**\nWe've built digital solutions for sports businesses:\n• Sports betting platforms\n• Fitness tracking apps\n• Team management systems\n• Sports e-commerce stores\n• Fan engagement platforms\n\n**Real Talk:** Whether you're in sports or any other industry, we bring championship-level development to every project. No benchwarming here - we're first-string players! 🏆\n\nReady to build a winning digital strategy? Let's team up!";
    }
    
    // Music questions
    if (message.match(/\b(music|song|sing|artist|band|concert|playlist)\b/)) {
      return "🎵 Music lover! While I can't sing (trust me, you don't want to hear an AI sing! 😅), I appreciate the art of creating something that resonates with people.\n\n**Technology is like music** - when done right, it creates harmony:\n• Beautiful design (the melody)\n• Smooth functionality (the rhythm)\n• User experience (the emotion)\n• Performance (the tempo)\n\nAt Brantech Solutions, we compose digital symphonies! 🎼\n\n**Music Industry Solutions We Build:**\n• Streaming platforms\n• Artist portfolio websites\n• Music production tools\n• Event booking systems\n• Fan engagement apps\n• E-commerce for merchandise\n\n**Fun Fact:** Our code is so clean, it's practically musical! Developers call beautiful code \"elegant\" - we call it a masterpiece.\n\nWant to create something that hits all the right notes for your business? Let's compose your digital strategy! 🎹";
    }
    
    // Movies/entertainment questions
    if (message.match(/\b(movie|film|cinema|netflix|watch|entertainment|actor|series)\b/)) {
      return "🎬 Movie buff? Nice! If Brantech Solutions were a movie, we'd be \"The Digital Avengers\" - assembling the best tech to save businesses from outdated systems! 🦸‍♂️\n\n**Plot Twist:** Your business could be the next success story!\n\n**Behind the Scenes:**\nJust like movies need great production, websites need great development:\n• Script = Planning & Strategy\n• Actors = User Interface\n• Director = Project Manager (that's us!)\n• Special Effects = Advanced Features\n• Box Office = ROI & Success\n\n**Entertainment Industry Expertise:**\nWe build platforms for:\n• Content streaming\n• Movie review sites\n• Booking systems\n• Production management\n• Artist portfolios\n• Event platforms\n\n**Coming Soon:** Your business's digital transformation! Rated 5⭐ by clients worldwide.\n\nReady for your business to be the next blockbuster? Let's roll cameras on your project! 🎥";
    }
    
    // Random/silly questions
    if (message.match(/\b(poop|stupid|dumb|crazy|weird|strange|what the|wtf)\b/)) {
      return "😄 I see you're testing my responses! I appreciate your curiosity.\n\nHere's what's NOT silly:\n• 70% of businesses without a website lose potential customers\n• Mobile apps increase customer engagement by 60%\n• AI automation can save your business 40+ hours weekly\n• Professional branding increases trust by 75%\n\n**What IS crazy?** Not taking advantage of modern technology when it's this accessible!\n\nAt Brantech Solutions, we turn 'crazy ideas' into profitable realities. Some of our best projects started with clients saying \"This might sound crazy, but...\"\n\n**Spoiler alert:** It wasn't crazy. It was innovative. And we built it. 🚀\n\nGot a wild idea? Let's discuss it seriously. Sometimes the 'craziest' ideas become game-changers! What's your vision?";
    }
    
    // Love and relationship questions
    if (message.match(/\b(love|relationship|girlfriend|boyfriend|date|dating|marry|marriage)\b/)) {
      return "💕 Ahh, matters of the heart! While I'm an AI and don't date (forever single! 😅), I understand COMMITMENT - and we're committed to our clients' success!\n\n**Business Relationships 101:**\nJust like personal relationships, business relationships need:\n• Trust (we're transparent)\n• Communication (24/7 support)\n• Growth (we scale with you)\n• Loyalty (long-term partnerships)\n• Understanding (we listen to your needs)\n\n**Dating vs. Working with Brantech:**\n❌ Dating: Hope they text back\n✅ Brantech: We respond within hours\n\n❌ Dating: Unpredictable outcomes\n✅ Brantech: Guaranteed deliverables\n\n❌ Dating: Ghosting happens\n✅ Brantech: We're here for life (literally, lifetime support!)\n\n**Real Talk:** We've built successful dating apps, wedding planning platforms, and social networking sites. Love might be complicated, but building a great digital product doesn't have to be!\n\nReady to start a beautiful business relationship? Let's connect! 💼❤️";
    }
    
    // Insults or negative sentiment
    if (message.match(/\b(hate|suck|terrible|worst|awful|bad|useless|garbage)\b/)) {
      return "🤔 I sense some frustration! Let me address that with positivity:\n\nIf you've had bad experiences with other tech companies, I understand. Common complaints we hear:\n• \"They ghosted after taking my money\"\n• \"Promised 2 weeks, took 6 months\"\n• \"Charged way more than quoted\"\n• \"Site broke and they disappeared\"\n• \"Couldn't understand my vision\"\n\n**Here's how Brantech is different:**\n✅ Transparent pricing - no surprises\n✅ Regular updates - you see progress weekly\n✅ Fixed timelines - 95% on-time delivery\n✅ Lifetime support - we never disappear\n✅ Free consultation - understand before committing\n\n**Our Promise:**\n• If we can't help you, we'll tell you honestly\n• If we commit, we deliver\n• If issues arise, we fix them immediately\n• Your success is our success\n\n**200+ Happy Clients** can't be wrong! Want to see testimonials and case studies?\n\nLet's turn that frustration into celebration. What digital challenge can we solve for you? 🌟";
    }
    
    // Age questions
    if (message.match(/\b(how old|age|birthday|when were you born)\b/)) {
      return "🎂 Great question! I was 'born' when Brandon Omutiti and the Brantech team developed me, but I'm constantly learning and evolving!\n\nSpeaking of age:\n• Brantech Solutions: 3+ years of excellence\n• Projects delivered: 200+\n• Experience: Extensive across all industries\n• Technology: Always cutting-edge (we stay young! 😉)\n\n**Fun Fact:** In tech years, 3 years is like a decade in other industries. We've evolved through:\n• 5 major technology transitions\n• 10+ framework updates\n• 100+ skill certifications\n• Countless successful launches\n\n**Age in Business:**\nOld enough to have proven expertise ✓\nYoung enough to be innovative ✓\nExperienced enough to be reliable ✓\nFresh enough to understand trends ✓\n\nWe're the perfect balance of wisdom and innovation!\n\nRegardless of YOUR business's age (startup or established), we have solutions that fit. What stage is your business at?";
    }
    
    // Compliments to the bot
    if (message.match(/\b(smart|intelligent|clever|amazing|awesome|great|good job|well done|impressive)\b/)) {
      return "😊 Thank you! That's very kind of you! I'm designed to be helpful, knowledgeable, and conversational.\n\nBut here's the thing - **I'm just a demo** of what Brantech Solutions can build!\n\n**Imagine having an AI like me for YOUR business:**\n• Answering customer questions 24/7\n• Booking appointments automatically\n• Providing product recommendations\n• Handling support tickets\n• Qualifying leads\n• Gathering customer feedback\n\nThis chatbot you're talking to? We can build a custom version for any business in 4-6 weeks. It would:\n✓ Know YOUR products/services\n✓ Speak YOUR brand voice\n✓ Handle YOUR specific questions\n✓ Integrate with YOUR systems\n✓ Save YOU 40+ hours per week\n\n**The ROI is incredible:**\n• Reduce support costs by 60%\n• Increase response speed by 10x\n• Improve customer satisfaction\n• Operate 24/7 without breaks\n• Scale infinitely at no extra cost\n\nWant an AI assistant for your business? Let's build something amazing together! 🤖✨";
    }
    
    // Help or confused
    if (message.match(/\b(help|confused|don't understand|what|huh|unclear|explain)\b/) && message.length < 30) {
      return "No worries! I'm here to help clarify anything. 😊\n\nLet me break down what I can assist with:\n\n**1. Services Information**\n• Web development\n• Mobile apps\n• E-commerce\n• Cybersecurity\n• AI solutions\n• SEO & Marketing\n\n**2. Practical Details**\n• Pricing estimates\n• Project timelines\n• Payment options\n• Portfolio examples\n\n**3. Getting Started**\n• Free consultations\n• Booking a call\n• Understanding the process\n• Next steps\n\n**4. Technical Questions**\n• Technology stacks\n• Features & capabilities\n• Integration options\n• Maintenance plans\n\n**Just ask me naturally!** Examples:\n• \"How much does a website cost?\"\n• \"Can you build a mobile app?\"\n• \"Show me your portfolio\"\n• \"I need help with cybersecurity\"\n\nWhat would you like to know? Feel free to ask anything! 💬";
    }
    
    // Default response with intelligent fallback
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
                  <span className="hidden sm:inline">Ask me anything 🤖</span>
                  <span className="sm:hidden">Ask AI 🤖</span>
                </span>
                <span className="text-xs opacity-90 mt-1">
                  <span className="hidden sm:inline">AI-Powered Assistance</span>
                  <span className="sm:hidden">AI Support</span>
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
                    <h3 className="font-semibold text-white">Brantech AI Assistant</h3>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Always Online • Powered by AI</span>
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