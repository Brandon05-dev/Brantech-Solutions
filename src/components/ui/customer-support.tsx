import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Input } from "./input";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function CustomerSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi there! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 👋 Welcome to Brantech Solutions! I'm here to help you with any questions about our services. What would you like to know?";
    }
    
    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer comprehensive digital solutions including:\n\n🌐 Web Development\n📱 Mobile Apps\n💼 E-commerce Solutions\n🎨 UI/UX Design\n🚀 Digital Marketing\n\nWhich service interests you most?";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return "Our pricing varies based on project requirements. We offer:\n\n💡 Free consultation\n📋 Custom quotes\n⚡ Flexible payment plans\n\nWould you like to schedule a free consultation to discuss your project?";
    }
    
    if (message.includes('contact') || message.includes('talk') || message.includes('human')) {
      return "I'd be happy to connect you with our team! 📞\n\n💬 WhatsApp: +254 790 889 066\n📧 Email: hello@brantech.solutions\n\nYou can also use the contact form on our website. Is there anything specific you'd like to discuss with them?";
    }
    
    if (message.includes('portfolio') || message.includes('work') || message.includes('examples')) {
      return "We've worked on amazing projects including:\n\n🏢 MAAL Trading Platform\n🎓 UniAssist Hub\n🛍️ BMI Leather Art Shop\n🧹 CleanKili Website\n\nYou can view our full portfolio on the website. What type of project are you planning?";
    }
    
    if (message.includes('time') || message.includes('how long') || message.includes('duration')) {
      return "Project timelines depend on complexity:\n\n⚡ Simple websites: 1-2 weeks\n🏢 Business sites: 2-4 weeks\n🛒 E-commerce: 3-6 weeks\n📱 Mobile apps: 4-8 weeks\n\nWhat kind of project do you have in mind?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! 😊 I'm here whenever you need help. Is there anything else you'd like to know about our services?";
    }
    
    // Default response
    return "That's a great question! 🤔 I'd recommend speaking with our team for detailed information. You can:\n\n💬 Chat with us on WhatsApp: +254 790 889 066\n📧 Email us: hello@brantech.solutions\n📝 Fill out our contact form\n\nIs there anything else I can help you with?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <div className="mb-4 w-96 h-[500px] animate-in slide-in-from-bottom-5 fade-in duration-500">
          <Card className="bg-gradient-to-br from-card/95 via-card/95 to-primary/5 backdrop-blur-xl border border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-300 h-full flex flex-col rounded-2xl overflow-hidden">
            <CardHeader className="pb-4 flex-shrink-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-border/30">
              <CardTitle className="text-lg text-foreground flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-full flex items-center justify-center shadow-lg">
                    <Bot className="w-5 h-5 text-white" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div>
                    <span className="text-base font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      Brantech AI Assistant
                    </span>
                    <div className="text-xs text-muted-foreground font-normal flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Online • Ready to help
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleWidget}
                  className="h-8 w-8 p-0 hover:bg-secondary/80 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
              </div>
              
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 animate-in slide-in-from-bottom-2 duration-300 ${
                      message.isUser ? 'justify-end' : 'justify-start'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {!message.isUser && (
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm border border-primary/20">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    <div className="flex flex-col max-w-[80%]">
                      <div
                        className={`p-4 rounded-2xl text-sm whitespace-pre-line shadow-sm transition-all duration-200 hover:shadow-md ${
                          message.isUser
                            ? 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-tr-md ml-4'
                            : 'bg-gradient-to-r from-secondary/80 to-secondary/60 text-foreground rounded-tl-md backdrop-blur-sm border border-border/30'
                        }`}
                      >
                        {message.text}
                      </div>
                      <div className={`text-xs text-muted-foreground mt-1 px-2 ${
                        message.isUser ? 'text-right' : 'text-left'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    {message.isUser && (
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3 justify-start animate-in slide-in-from-bottom-2 duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm border border-primary/20">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-gradient-to-r from-secondary/80 to-secondary/60 text-foreground p-4 rounded-2xl rounded-tl-md text-sm max-w-[80%] backdrop-blur-sm border border-border/30">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary/80 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary/80 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                        <div className="w-2 h-2 bg-primary/80 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Quick Actions */}
              <div className="px-4 py-2 border-t border-border/30 bg-gradient-to-r from-secondary/20 to-transparent">
                <div className="flex gap-2 flex-wrap">
                  {!messages.some(m => m.text.includes('services')) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputMessage("What services do you offer?")}
                      className="text-xs h-7 px-3 bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 transition-all duration-200"
                    >
                      Our Services
                    </Button>
                  )}
                  {!messages.some(m => m.text.includes('pricing')) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputMessage("What are your prices?")}
                      className="text-xs h-7 px-3 bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 transition-all duration-200"
                    >
                      Pricing
                    </Button>
                  )}
                  {!messages.some(m => m.text.includes('portfolio')) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputMessage("Show me your portfolio")}
                      className="text-xs h-7 px-3 bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 transition-all duration-200"
                    >
                      Portfolio
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Input Area */}
              <div className="p-4 border-t border-border/30 bg-gradient-to-r from-card/50 to-transparent backdrop-blur-sm">
                <div className="flex gap-3 items-end">
                  <div className="flex-1 relative">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything..."
                      className="pr-12 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl transition-all duration-200 shadow-sm"
                      disabled={isTyping}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <kbd className="text-xs bg-secondary/50 px-1.5 py-0.5 rounded">Enter</kbd>
                    </div>
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    size="sm"
                    className="px-4 h-10 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 rounded-xl"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative">
        <Button
          onClick={toggleWidget}
          className={`h-16 w-16 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 ${
            isOpen ? 'rotate-180 scale-95' : 'animate-pulse'
          } border-2 border-white/20`}
          size="sm"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="flex flex-col items-center relative">
              <Bot className="w-7 h-7 text-white drop-shadow-sm" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
          )}
        </Button>
        
        {/* Ripple effect */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
        )}
      </div>
    </div>
  );
}
