interface HeroSlideshowProps {
  onContactClick?: () => void;
}

export function HeroSlideshow({ onContactClick }: HeroSlideshowProps) {
  const items = [
    { text: "Website Maintenance", bg: "bg-blue-600", border: "border-blue-700" },
    { text: "AI Integration", bg: "bg-orange-500", border: "border-orange-600" },
    { text: "Web Development", bg: "bg-indigo-600", border: "border-indigo-700" },
    { text: "Mobile Apps", bg: "bg-teal-600", border: "border-teal-700" },
    { text: "Cybersecurity", bg: "bg-slate-800", border: "border-slate-900" },
    { text: "E-Commerce", bg: "bg-cyan-600", border: "border-cyan-700" },
    { text: "SEO & Digital Marketing", bg: "bg-blue-500", border: "border-blue-600" },
    { text: "CMS Solutions", bg: "bg-emerald-500", border: "border-emerald-600" },
  ];

  return (
    <section className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 dark:z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 dark:z-10" />

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* Repeat multiple times for continuous loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={`set-${setIndex}`} className="flex gap-8 items-center px-6">
                {items.map((item) => (
                  <div
                    key={item.text}
                    className={`flex-shrink-0 rounded-lg border ${item.border} ${item.bg} px-6 py-3 shadow-md`}
                    aria-label={item.text}
                  >
                    <span className="whitespace-nowrap text-[13px] sm:text-sm font-bold tracking-tight leading-none text-white [font-family:'Inter']">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

