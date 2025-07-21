import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Bot,
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
      text: "Hello! I'm here to help you learn more about Brantech Solutions. How can I assist you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const botResponses = {
    greeting: [
      "Hello! Welcome to Brantech Solutions. How can I help you today?",
      "Hi there! I'm here to answer any questions about our services.",
      "Welcome! Feel free to ask me anything about our technology solutions."
    ],
    services: [
      "We offer custom software development, AI & machine learning solutions, IoT systems, web & mobile apps, and tech advisory services. Which area interests you most?",
      "Our main services include building custom software, implementing AI solutions, developing IoT systems, creating web and mobile applications, and providing strategic tech guidance."
    ],
    pricing: [
      "Our pricing varies based on project scope and requirements. I'd recommend scheduling a consultation to discuss your specific needs and get a detailed quote.",
      "Every project is unique, so we provide custom quotes based on your requirements. Would you like to schedule a call to discuss your project?"
    ],
    portfolio: [
      "We've successfully delivered projects across e-commerce, IoT monitoring, AI analytics, mobile learning platforms, and more. You can see detailed case studies in our portfolio section above.",
      "Our portfolio includes diverse projects from manufacturing IoT systems to financial analytics dashboards. Each project delivered measurable results for our clients."
    ],
    contact: [
      "You can reach us at hello@brantech.solutions or through the contact form above. We typically respond within 24 hours!",
      "Feel free to fill out the contact form above or email us directly. We'd love to discuss your project with you!"
    ],
    default: [
      "That's a great question! For detailed information about that topic, I'd recommend scheduling a consultation with our team.",
      "I'd be happy to connect you with our experts who can provide detailed information about that. Would you like to get in touch?",
      "Let me connect you with our team for more specific information. You can use the contact form above or email us directly."
    ]
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    }
    
    if (message.includes("service") || message.includes("what do you do") || message.includes("offer")) {
      return botResponses.services[Math.floor(Math.random() * botResponses.services.length)];
    }
    
    if (message.includes("price") || message.includes("cost") || message.includes("quote")) {
      return botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)];
    }
    
    if (message.includes("portfolio") || message.includes("work") || message.includes("project")) {
      return botResponses.portfolio[Math.floor(Math.random() * botResponses.portfolio.length)];
    }
    
    if (message.includes("contact") || message.includes("reach") || message.includes("email")) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    }
    
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
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-primary hover:shadow-glow transition-all duration-300 z-50 shadow-elegant"
          size="sm"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card 
          className={cn(
            "fixed right-6 z-50 shadow-elegant transition-all duration-300",
            isMinimized 
              ? "bottom-6 w-80 h-16" 
              : "bottom-6 w-80 h-96 sm:w-96 sm:h-[500px]"
          )}
        >
          {/* Header */}
          <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              Brantech Assistant
            </CardTitle>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0"
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
                className="h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              {/* Messages */}
              <CardContent className="p-0 flex-1">
                <ScrollArea className="h-80 sm:h-96 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          "flex gap-2",
                          message.sender === "user" ? "justify-end" : "justify-start"
                        )}
                      >
                        {message.sender === "bot" && (
                          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-primary-foreground" />
                          </div>
                        )}
                        <div
                          className={cn(
                            "max-w-[70%] rounded-lg p-3 text-sm",
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground ml-auto"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {message.text}
                        </div>
                        {message.sender === "user" && (
                          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex gap-2 justify-start">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div className="bg-muted text-muted-foreground rounded-lg p-3 text-sm">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 border-border focus:border-primary"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="sm"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  );
}