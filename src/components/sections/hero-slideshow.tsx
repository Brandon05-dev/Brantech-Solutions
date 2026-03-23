interface HeroSlideshowProps {
  onContactClick?: () => void;
}

export function HeroSlideshow({ onContactClick }: HeroSlideshowProps) {
  const items = [
    "Website Maintenance",
    "AI Integration",
    "Web Development",
    "Mobile Apps",
    "Cybersecurity",
    "E-Commerce",
    "SEO & Digital Marketing",
    "CMS Solutions",
  ];

  return (
    <section className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* Repeat multiple times for continuous loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={`set-${setIndex}`} className="flex gap-8 items-center px-6">
                {items.map((item) => (
                  <div
                    key={item}
                    className="flex-shrink-0 rounded-2xl border border-gray-100 dark:border-gray-700 bg-white/70 dark:bg-gray-800/50 px-6 py-3 shadow-sm"
                    aria-label={item}
                  >
                    <span className="whitespace-nowrap text-[13px] sm:text-sm font-semibold tracking-tight leading-none text-blue-600 dark:text-blue-400 [font-family:'Inter']">
                      {item}
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

