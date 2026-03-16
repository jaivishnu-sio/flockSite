"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [activePhase, setActivePhase] = useState<"catching" | "nurturing">("catching");

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev === "catching" ? "nurturing" : "catching"));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-32 lg:pt-36 pb-16 px-6 bg-background relative overflow-hidden">
      {/* Optimized animated background - CSS only, no JS overhead */}
      <div className="absolute inset-0 overflow-hidden">
        {/* VBS / Catching gradient orb */}
        <div 
          className={`
            absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl
            transition-all duration-1000 ease-in-out
            ${activePhase === "catching" ? "opacity-40 scale-110" : "opacity-10 scale-100"}
          `}
          style={{ backgroundColor: "#00C9B7" }}
        />
        <div 
          className={`
            absolute top-1/4 right-10 w-56 h-56 rounded-full blur-2xl
            transition-all duration-1000 ease-in-out delay-200
            ${activePhase === "catching" ? "opacity-50 scale-110" : "opacity-10 scale-90"}
          `}
          style={{ backgroundColor: "#00C9B7" }}
        />
        
        {/* Sunday School / Nurturing gradient orb */}
        <div 
          className={`
            absolute -bottom-20 -right-20 w-[28rem] h-[28rem] rounded-full blur-3xl
            transition-all duration-1000 ease-in-out
            ${activePhase === "nurturing" ? "opacity-40 scale-110" : "opacity-10 scale-100"}
          `}
          style={{ backgroundColor: "#7ED321" }}
        />
        <div 
          className={`
            absolute bottom-1/4 left-10 w-64 h-64 rounded-full blur-2xl
            transition-all duration-1000 ease-in-out delay-200
            ${activePhase === "nurturing" ? "opacity-50 scale-110" : "opacity-10 scale-90"}
          `}
          style={{ backgroundColor: "#7ED321" }}
        />

        {/* Center glow */}
        <div 
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl
            transition-all duration-1500 ease-in-out
            ${activePhase === "catching" ? "opacity-15 bg-[#00C9B7]" : "opacity-15 bg-[#7ED321]"}
          `}
        />

        {/* Simple decorative dots - lightweight */}
        <div 
          className={`absolute top-1/2 left-[8%] w-3 h-3 rounded-full transition-opacity duration-500 ${activePhase === "catching" ? "opacity-80" : "opacity-20"}`}
          style={{ backgroundColor: "#00C9B7" }}
        />
        <div 
          className={`absolute top-1/3 right-[8%] w-2 h-2 rounded-full transition-opacity duration-500 ${activePhase === "catching" ? "opacity-70" : "opacity-15"}`}
          style={{ backgroundColor: "#00C9B7" }}
        />
        <div 
          className={`absolute bottom-1/3 left-[5%] w-2 h-2 rounded-full transition-opacity duration-500 ${activePhase === "nurturing" ? "opacity-80" : "opacity-20"}`}
          style={{ backgroundColor: "#7ED321" }}
        />
        <div 
          className={`absolute bottom-1/2 right-[10%] w-3 h-3 rounded-full transition-opacity duration-500 ${activePhase === "nurturing" ? "opacity-70" : "opacity-15"}`}
          style={{ backgroundColor: "#7ED321" }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Headline with animated emphasis */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-12 text-primary">
          <span 
            className={`
              block transition-all duration-500 ease-out
              ${activePhase === "catching" ? "scale-105 text-primary" : "scale-100 text-muted-foreground"}
            `}
          >
            <span className={`transition-colors duration-500 ${activePhase === "catching" ? "text-[#00C9B7]" : ""}`}>
              Catching
            </span>{" "}
            at VBS.
          </span>
          <span 
            className={`
              block transition-all duration-500 ease-out
              ${activePhase === "nurturing" ? "scale-105 text-primary" : "scale-100 text-muted-foreground"}
            `}
          >
            <span className={`transition-colors duration-500 ${activePhase === "nurturing" ? "text-[#7ED321]" : ""}`}>
              Nurturing
            </span>{" "}
            at Sunday School.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          Complete ministry resources that help churches reach children through engaging VBS 
          programs and nurture them through structured Sunday School discipleship.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/curriculum"
            className="px-8 py-4 bg-[#00C9B7] text-white font-semibold rounded-full hover:bg-[#00C9B7]/90 transition-colors text-base shadow-lg shadow-[#00C9B7]/25 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            Start My Ministry
          </Link>
          <Link
            href="/partner"
            className="px-8 py-4 bg-[#FF6B35] text-white font-semibold rounded-full hover:bg-[#FF6B35]/90 transition-colors text-base shadow-lg shadow-[#FF6B35]/25 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            Join the Mission
          </Link>
        </div>
      </div>
    </section>
  );
}
