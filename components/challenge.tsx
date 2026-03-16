"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "70%", label: "of children leave church by age 18", color: "#FF7B6F" },
  { value: "85%", label: "of VBS attendees don't return to Sunday School", color: "#FF6B35" },
  { value: "2 weeks", label: "average engagement after VBS ends", color: "#A78BFA" },
];

export function Challenge() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main content - flowing layout */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-[#00C9B7] uppercase tracking-wider">
            The Challenge
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-primary">
            VBS attracts many.
            <br />
            <span className="text-muted-foreground">But they drift away.</span>
          </h2>
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Many churches successfully gather children through VBS but struggle 
            to continue nurturing them afterward. Without structured follow-up, 
            most children don&apos;t continue their faith journey after VBS ends.
          </p>
        </div>

        {/* Stats in a flowing wave layout */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  relative p-6 lg:p-8 rounded-3xl border border-border bg-card
                  transform transition-all duration-700 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  ${index === 1 ? "lg:-translate-y-4" : ""}
                `}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Accent dot */}
                <div 
                  className="absolute -top-2 left-8 w-4 h-4 rounded-full"
                  style={{ backgroundColor: stat.color }}
                />
                
                <div 
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-3"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Flock bridges that gap - Simple pill */}
        <div 
          className={`
            mt-16 lg:mt-20 text-center
            transform transition-all duration-700 ease-out delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground shadow-xl">
            <div className="w-3 h-3 rounded-full bg-[#7ED321] animate-pulse" />
            <span className="text-lg lg:text-xl font-bold">
              Flock bridges that gap
            </span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
