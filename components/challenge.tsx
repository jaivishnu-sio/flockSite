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
                  relative p-6 lg:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm
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

        {/* Flock bridges that gap - More prominent section */}
        <div 
          className={`
            mt-20 lg:mt-28
            transform transition-all duration-700 ease-out delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <div className="relative bg-gradient-to-r from-[#00C9B7]/10 via-[#7ED321]/10 to-[#00C9B7]/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Animated background glow */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C9B7]/20 rounded-full blur-3xl animate-pulse" />
            </div>
            
            <div className="relative text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00C9B7]/20 mb-6">
                <svg className="w-8 h-8 text-[#00C9B7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4">
                <span className="text-[#00C9B7]">Flock</span> bridges that gap
              </h3>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                We connect the excitement of VBS to the lasting growth of Sunday School, 
                creating a seamless journey of faith for every child.
              </p>
              
              {/* Visual bridge representation */}
              <div className="flex items-center justify-center gap-4 lg:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-[#00C9B7] flex items-center justify-center text-white font-bold text-sm lg:text-base">
                    VBS
                  </div>
                  <span className="mt-2 text-xs lg:text-sm text-muted-foreground">Catching</span>
                </div>
                
                {/* Animated connecting dots */}
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#00C9B7] animate-pulse" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 rounded-full bg-[#00C9B7]/80 animate-pulse" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 rounded-full bg-[#7ED321]/80 animate-pulse" style={{ animationDelay: "300ms" }} />
                  <div className="w-2 h-2 rounded-full bg-[#7ED321] animate-pulse" style={{ animationDelay: "450ms" }} />
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-[#7ED321] flex items-center justify-center text-white font-bold text-sm lg:text-base text-center px-1">
                    Sunday School
                  </div>
                  <span className="mt-2 text-xs lg:text-sm text-muted-foreground">Nurturing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
