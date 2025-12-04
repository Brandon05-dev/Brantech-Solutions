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
  const [messages, setMessages] = useState<Message[]>([]);
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
      "Hello! I'm Temi, your customer support assistant. How can I help you today?",
      "Hi there! Welcome to Brantech Solutions. I'm Temi, here to assist you. What would you like to know?",
      "Hey! I'm Temi from Brantech customer support. What brings you here?"
    ],
    services: [
      "We offer web development, mobile apps, e-commerce platforms, cybersecurity, AI solutions, SEO and marketing, plus UI/UX design. Which interests you?",
      "Our services include building websites, mobile applications, online stores, AI integration, cybersecurity protection, digital marketing, and design. What would you like to know more about?"
    ],
    students: [
      "Yes! We offer CV writing, portfolio websites, and affordable digital solutions for students. Student discounts available!",
      "Absolutely! We help students with professional portfolios, CV services, and budget-friendly websites."
    ],
    ecommerce: [
      "Yes! We build e-commerce sites with payment integration (M-Pesa, Stripe), inventory management, and mobile design. What are you selling?",
      "Absolutely! We create online stores with secure payments, product management, and order tracking."
    ],
    apps: [
      "Yes! We build Android and iOS apps using native or cross-platform tech. What kind of app do you need?",
      "Absolutely! We develop mobile apps for business, e-commerce, education, and social networking."
    ],
    cybersecurity: [
      "We offer security audits, vulnerability testing, data protection, and 24/7 monitoring. Want a free security assessment?",
      "Yes! We provide security audits, breach prevention, and compliance consulting for businesses of all sizes."
    ],
    ai: [
      "We build AI chatbots, automation tools, and smart analytics. Like this chatbot you're using! Interested?",
      "We offer chatbot development, workflow automation, and AI consulting to boost efficiency."
    ],
    pricing: [
      "Pricing varies by project. Basic websites start at $500. We offer free consultations and flexible payment plans. Want a quote?",
      "We provide affordable, transparent pricing with flexible payment options and student discounts. Ready for a free consultation?"
    ],
    timeline: [
      "Timelines: Basic websites (2-4 weeks), E-commerce (4-6 weeks), Mobile apps (6-12 weeks). What are you building?",
      "Delivery times: Websites (2-5 weeks), E-commerce (5-8 weeks), Apps (8-16 weeks). We keep you updated throughout."
    ],
    location: [
      "We're based in Nairobi, Kenya, serving clients across Africa and globally. We work remotely worldwide.",
      "Based in Kenya, working with clients across Africa and beyond. We understand M-Pesa and local markets!"
    ],
    contact: [
      "Email us at info@brantech.co.ke, WhatsApp +254 790 889066, or continue chatting here!",
      "Reach us via email at info@brantech.co.ke, WhatsApp at +254 790 889066, or book a free consultation."
    ],
    training: [
      "Yes! We provide staff training, system onboarding, and ongoing support for all our projects.",
      "Absolutely! Training is included with every project - we ensure you're confident using your new systems."
    ],
    maintenance: [
      "We offer maintenance packages with security updates, backups, bug fixes, and 24/7 support starting at $50/month.",
      "Yes! Maintenance includes updates, monitoring, backups, and technical support to keep your site secure."
    ],
    portfolio: [
      "Check out our Projects page for featured work like Glamongo Spa booking platform, Belo Digital marketing site, Maal Traders e-commerce store with M-Pesa integration, and Shinda Play gaming platform. Each project has measurable results.",
      "Our portfolio showcases diverse solutions from spa management systems to online stores. Visit the Projects page to see detailed case studies with client testimonials and success metrics."
    ],
    partnership: [
      "We're open to partnerships, referral programs, and collaborations. Let's discuss how we can work together!",
      "Yes! We partner with developers, agencies, universities, and businesses. Interested in collaborating?"
    ],
    consultation: [
      "We offer FREE consultations with no obligation. Book a call to discuss your project and get expert advice!",
      "Yes! Free 30-minute consultations available. We'll discuss your goals, timeline, and provide recommendations."
    ],
    company: [
      "Founded by Brandon Omutiti, we're a Kenya-based technology company that has delivered over 200 projects across Africa and globally. We specialize in full-stack development, AI integration, and cybersecurity. Our mission is making modern technology simple, affordable, and truly useful for every entrepreneur and business.",
      "Brantech Solutions is led by Brandon Omutiti, a passionate software developer and entrepreneur. We're a dedicated team serving clients from startups to established enterprises with 95% client satisfaction. Our vision is to be the trusted digital partner that transforms how businesses build, launch, and scale."
    ],
    success: [
      "We've delivered over 200 projects with 95% client satisfaction. Our clients have seen real results including 300% sales increases for e-commerce businesses, successful startup launches, and graduates landing dream jobs with portfolios we built.",
      "Our track record includes 200+ successful projects across Africa, serving businesses from startups to established enterprises across multiple industries. We've helped businesses grow, students build winning portfolios, and startups successfully enter the market."
    ],
    default: [
      "I can help with services, pricing, timelines, portfolio, or general questions. What would you like to know?",
      "I'm here to answer questions about Brantech's services, pricing, projects, or anything else. How can I help?",
      "Not sure I understood that. Ask me about our services, pricing, timeline, or portfolio. What interests you?"
    ],
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
      return "We build modern websites using React, TypeScript, and Node.js. Timeline: 2-4 weeks, starting at $500. What type of site do you need?";
    }
    
    // Services and general what we do - enhanced understanding
    if (message.match(/\b(service|services|what do you|what can you|capabilities|offerings|solutions|help with|provide)\b/) && !message.includes("web")) {
      return botResponses.services[Math.floor(Math.random() * botResponses.services.length)];
    }
    
    // Student-specific queries with empathy
    if (message.match(/\b(student|students|cv|resume|portfolio|campus|university|college|graduate|intern|career)\b/)) {
      return botResponses.students[Math.floor(Math.random() * botResponses.students.length)];
    }
    
    // E-commerce with business insights
    if (message.match(/\b(ecommerce|e-commerce|online store|shop|sell online|retail|marketplace|shopping cart|checkout)\b/)) {
      return botResponses.ecommerce[Math.floor(Math.random() * botResponses.ecommerce.length)];
    }
    
    // Mobile app with technical depth
    if (message.match(/\b(mobile app|app|application|android|ios|phone app|mobile development)\b/)) {
      return botResponses.apps[Math.floor(Math.random() * botResponses.apps.length)];
    }
    
    // Cybersecurity with authority
    if (message.match(/\b(security|cyber|cybersecurity|protect|protection|safe|secure|hack|hacker|vulnerability|breach|encryption)\b/)) {
      return botResponses.cybersecurity[Math.floor(Math.random() * botResponses.cybersecurity.length)];
    }
    
    // AI and automation with excitement
    if (message.match(/\b(ai|artificial intelligence|machine learning|automation|chatbot|bot|smart|intelligent|neural)\b/)) {
      return botResponses.ai[Math.floor(Math.random() * botResponses.ai.length)];
    }
    
    // Location with local context
    if (message.match(/\b(where|location|located|based|office|address|kenya|nairobi|africa)\b/)) {
      return botResponses.location[Math.floor(Math.random() * botResponses.location.length)];
    }
    
    // Pricing with value emphasis
    if (message.match(/\b(price|prices|pricing|cost|costs|quote|budget|affordable|cheap|expensive|pay|payment|fee)\b/)) {
      return botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)];
    }
    
    // Timeline with project management insights
    if (message.match(/\b(how long|timeline|time|duration|when|fast|quick|weeks|months|deadline|delivery)\b/)) {
      return botResponses.timeline[Math.floor(Math.random() * botResponses.timeline.length)];
    }
    
    // Why choose us / comparison
    if (message.match(/\b(why|why should|better|best|difference|compared|versus|vs|choose|recommend)\b/)) {
      return "Modern tech stack, transparent pricing, 200+ successful projects, 95% satisfaction rate, zero security breaches. We're affordable and reliable!";
    }
    
    // Training questions with educational approach
    if (message.match(/\b(train|training|teach|learn|learning|onboard|onboarding|staff|tutorial|guide)\b/)) {
      return botResponses.training[Math.floor(Math.random() * botResponses.training.length)];
    }
    
    // Maintenance and support with reliability emphasis
    if (message.match(/\b(maintenance|maintain|support|update|updates|fix|fixes|manage|management|hosting|backup)\b/)) {
      return botResponses.maintenance[Math.floor(Math.random() * botResponses.maintenance.length)];
    }
    
    // Portfolio with social proof
    if (message.match(/\b(portfolio|work|projects|project|examples|example|case study|case studies|showcase|gallery)\b/)) {
      return botResponses.portfolio[Math.floor(Math.random() * botResponses.portfolio.length)];
    }
    
    // Partnership with collaboration spirit
    if (message.match(/\b(partner|partnership|collaborate|collaboration|join|team up|work together|alliance)\b/)) {
      return botResponses.partnership[Math.floor(Math.random() * botResponses.partnership.length)];
    }
    
    // Consultation with invitation
    if (message.match(/\b(consult|consultation|meeting|call|talk|discuss|chat|free|advice|demo)\b/)) {
      return botResponses.consultation[Math.floor(Math.random() * botResponses.consultation.length)];
    }
    
    // Company information with storytelling
    if (message.match(/\b(about|company|who are you|brantech|team|founder|brandon|story|mission|vision)\b/)) {
      return botResponses.company[Math.floor(Math.random() * botResponses.company.length)];
    }
    
    // Success stories with metrics
    if (message.match(/\b(success|successful|achievement|achievements|results|outcome|track record|experience|clients|testimonial)\b/)) {
      return botResponses.success[Math.floor(Math.random() * botResponses.success.length)];
    }
    
    // Contact information with urgency
    if (message.match(/\b(contact|reach|email|phone|call|whatsapp|get in touch|message|connect)\b/)) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    }
    
    // Thank you responses
    if (message.match(/\b(thank|thanks|thank you|appreciate|grateful)\b/)) {
      return "You're welcome! Anything else I can help with?";
    }
    
    // Goodbye responses
    if (message.match(/\b(bye|goodbye|see you|talk later|gtg|have to go)\b/)) {
      return "Goodbye! Feel free to return anytime. WhatsApp us at +254 790 889066 or check our portfolio. Good luck!";
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
                  <span className="hidden sm:inline">Ask Temi 🤖</span>
                  <span className="sm:hidden">Ask Temi 🤖</span>
                </span>
                <span className="text-xs opacity-90 mt-1">
                  <span className="hidden sm:inline">Customer Support</span>
                  <span className="sm:hidden">Support</span>
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