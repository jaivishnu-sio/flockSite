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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* VBS / Catching elements - teal themed */}
        <div 
          className={`
            absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl
            transition-all duration-1000 ease-in-out
            ${activePhase === "catching" ? "opacity-40 scale-110" : "opacity-10 scale-100"}
          `}
          style={{ backgroundColor: "#00C9B7" }}
        />
        <div 
          className={`
            absolute top-1/4 right-10 w-40 h-40 rounded-full blur-2xl
            transition-all duration-1000 ease-in-out delay-200
            ${activePhase === "catching" ? "opacity-50 scale-110" : "opacity-10 scale-90"}
          `}
          style={{ backgroundColor: "#00C9B7" }}
        />
        
        {/* Sunday School / Nurturing elements - green themed */}
        <div 
          className={`
            absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl
            transition-all duration-1000 ease-in-out
            ${activePhase === "nurturing" ? "opacity-40 scale-110" : "opacity-10 scale-100"}
          `}
          style={{ backgroundColor: "#7ED321" }}
        />
        <div 
          className={`
            absolute bottom-1/4 left-10 w-48 h-48 rounded-full blur-2xl
            transition-all duration-1000 ease-in-out delay-200
            ${activePhase === "nurturing" ? "opacity-50 scale-110" : "opacity-10 scale-90"}
          `}
          style={{ backgroundColor: "#7ED321" }}
        />

        {/* Floating icons that move with the phase */}
        <div 
          className={`
            absolute top-32 left-1/4 text-4xl
            transition-all duration-700 ease-out
            ${activePhase === "catching" ? "opacity-60 translate-y-0" : "opacity-0 -translate-y-10"}
          `}
        >
          <div className="w-12 h-12 rounded-xl bg-[#00C9B7]/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#00C9B7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
            </svg>
          </div>
        </div>
        <div 
          className={`
            absolute bottom-40 right-1/4 text-4xl
            transition-all duration-700 ease-out
            ${activePhase === "nurturing" ? "opacity-60 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="w-12 h-12 rounded-xl bg-[#7ED321]/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#7ED321]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-10">
          <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">
            Building Strong Foundations for the Next Generation Starting from Kids
          </span>
        </div>

        {/* Main Headline with animated emphasis */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8 text-primary">
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

        {/* Phase indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActivePhase("catching")}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activePhase === "catching" 
                ? "bg-[#00C9B7] text-white scale-105" 
                : "bg-muted text-muted-foreground hover:bg-muted/80"}
            `}
          >
            <span className={`w-2 h-2 rounded-full ${activePhase === "catching" ? "bg-white" : "bg-[#00C9B7]"}`} />
            VBS
          </button>
          <div className="w-8 h-0.5 bg-border rounded" />
          <button
            onClick={() => setActivePhase("nurturing")}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activePhase === "nurturing" 
                ? "bg-[#7ED321] text-white scale-105" 
                : "bg-muted text-muted-foreground hover:bg-muted/80"}
            `}
          >
            <span className={`w-2 h-2 rounded-full ${activePhase === "nurturing" ? "bg-white" : "bg-[#7ED321]"}`} />
            Sunday School
          </button>
        </div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          Complete ministry resources that help churches reach children through engaging VBS 
          programs and nurture them through structured Sunday School discipleship.
        </p>

        {/* CTA Buttons - emphasizing the key actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/curriculum"
            className="px-8 py-4 bg-[#00C9B7] text-white font-semibold rounded-full hover:bg-[#00C9B7]/90 transition-colors text-base shadow-lg shadow-[#00C9B7]/25 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            Get VBS / Sunday School Materials
          </Link>
          <Link
            href="/partner"
            className="px-8 py-4 bg-[#FF6B35] text-white font-semibold rounded-full hover:bg-[#FF6B35]/90 transition-colors text-base shadow-lg shadow-[#FF6B35]/25 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
