import { useState } from "react";

export function TopBarTicker() {
  const services = [
    "Website Design, Development & Maintainance",
    "Mobile Development",
    "Cybersecurity",
    "E-Commerce Solutions",
    "SEO & Digital Marketing",
    "Content Management Systems",
    "AI & Automations",
    "Graphic Design Services",
  ];

  return (
    <div className="w-full bg-slate-900 text-white py-2 overflow-hidden border-b border-slate-800">
      <div className="relative flex whitespace-nowrap">
        <div 
          className="flex animate-scroll items-center" 
          style={{ animationDuration: '40s' }}
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={`ticker-set-${setIndex}`} className="flex items-center">
              {services.map((service, index) => (
                <div key={`${setIndex}-${index}`} className="flex items-center">
                  <span className="text-xs sm:text-sm font-medium tracking-wide uppercase px-4 sm:px-8 opacity-90 hover:opacity-100 transition-opacity cursor-default">
                    {service}
                  </span>
                  <span className="text-blue-500 text-xs">◆</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
