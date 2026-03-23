interface HeroStatsProps {
  // Kept for API consistency with other sections if needed later.
  onContactClick?: () => void;
}

export function HeroStats({ onContactClick }: HeroStatsProps) {
  const stats = [
    {
      number: "50+",
      label: "Projects Shipped",
      numberClass: "text-blue-600 dark:text-blue-400",
    },
    {
      number: "7",
      label: "Service Areas",
      numberClass: "text-green-600 dark:text-green-400",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      numberClass: "text-purple-600 dark:text-purple-400",
    },
    {
      number: "3+",
      label: "Years Building",
      numberClass: "text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Professional Delivery, Measurable Outcomes
          </h2>
          <p className="text-muted-foreground">
            Built for performance, reliability, and long-term client success.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-x-10 gap-y-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center min-w-[160px]"
            >
              <div
                className={`text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums [font-family:'Space_Grotesk'] ${stat.numberClass}`}
              >
                {stat.number}
              </div>
              <div className="mt-1 text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

