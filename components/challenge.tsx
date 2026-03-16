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

        {/* Bridge Design - Flock bridges that gap */}
        <div 
          className={`
            mt-16 lg:mt-20
            transform transition-all duration-700 ease-out delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Bridge SVG */}
            <svg 
              viewBox="0 0 800 200" 
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Left platform - VBS */}
              <rect x="0" y="120" width="150" height="80" fill="currentColor" className="text-[#00C9B7]/20" rx="8" />
              <rect x="0" y="120" width="150" height="12" fill="currentColor" className="text-[#00C9B7]" rx="4" />
              
              {/* Right platform - Sunday School */}
              <rect x="650" y="120" width="150" height="80" fill="currentColor" className="text-[#7ED321]/20" rx="8" />
              <rect x="650" y="120" width="150" height="12" fill="currentColor" className="text-[#7ED321]" rx="4" />
              
              {/* Bridge arch */}
              <path 
                d="M 150 126 Q 400 20 650 126" 
                fill="none" 
                stroke="currentColor" 
                className="text-primary"
                strokeWidth="8"
                strokeLinecap="round"
              />
              
              {/* Bridge deck */}
              <path 
                d="M 150 132 L 650 132" 
                fill="none" 
                stroke="currentColor" 
                className="text-primary"
                strokeWidth="8"
                strokeLinecap="round"
              />
              
              {/* Bridge supports */}
              <line x1="250" y1="132" x2="250" y2="95" stroke="currentColor" className="text-primary/60" strokeWidth="4" />
              <line x1="350" y1="132" x2="350" y2="55" stroke="currentColor" className="text-primary/60" strokeWidth="4" />
              <line x1="400" y1="132" x2="400" y2="45" stroke="currentColor" className="text-primary/60" strokeWidth="4" />
              <line x1="450" y1="132" x2="450" y2="55" stroke="currentColor" className="text-primary/60" strokeWidth="4" />
              <line x1="550" y1="132" x2="550" y2="95" stroke="currentColor" className="text-primary/60" strokeWidth="4" />
              
              {/* VBS Label */}
              <text x="75" y="165" textAnchor="middle" className="fill-[#00C9B7] text-sm font-bold" style={{ fontSize: '14px' }}>
                VBS
              </text>
              
              {/* Sunday School Label */}
              <text x="725" y="165" textAnchor="middle" className="fill-[#7ED321] text-sm font-bold" style={{ fontSize: '14px' }}>
                Sunday School
              </text>
              
              {/* Gap indicator - water/void below */}
              <path 
                d="M 180 200 Q 250 185 320 200 Q 400 185 480 200 Q 550 185 620 200" 
                fill="none" 
                stroke="currentColor" 
                className="text-muted-foreground/30"
                strokeWidth="2"
              />
            </svg>
            
            {/* Center badge on bridge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground shadow-xl">
                <div className="w-3 h-3 rounded-full bg-[#7ED321] animate-pulse" />
                <span className="text-base lg:text-lg font-bold whitespace-nowrap">
                  Flock bridges that gap
                </span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
