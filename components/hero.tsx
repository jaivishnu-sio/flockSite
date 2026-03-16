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
      {/* Animated background elements - more visible in dark mode */}
      <div className="absolute inset-0 overflow-hidden">
        {/* VBS / Catching elements - teal themed */}
        <div 
          className={`
            absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl
            transition-all duration-1000 ease-in-out
            ${activePhase === "catching" ? "opacity-50 scale-110" : "opacity-15 scale-100"}
          `}
          style={{ backgroundColor: "#00C9B7" }}
        />
        <div 
          className={`
            absolute top-1/4 right-10 w-56 h-56 rounded-full blur-2xl
            transition-all duration-1000 ease-in-out delay-200
            ${activePhase === "catching" ? "opacity-60 scale-110" : "opacity-15 scale-90"}
          `}
          style={{ backgroundColor: "#00C9B7" }}
        />
        
        {/* Sunday School / Nurturing elements - green themed */}
        <div 
          className={`
            absolute -bottom-20 -right-20 w-[28rem] h-[28rem] rounded-full blur-3xl
            transition-all duration-1000 ease-in-out
            ${activePhase === "nurturing" ? "opacity-50 scale-110" : "opacity-15 scale-100"}
          `}
          style={{ backgroundColor: "#7ED321" }}
        />
        <div 
          className={`
            absolute bottom-1/4 left-10 w-64 h-64 rounded-full blur-2xl
            transition-all duration-1000 ease-in-out delay-200
            ${activePhase === "nurturing" ? "opacity-60 scale-110" : "opacity-15 scale-90"}
          `}
          style={{ backgroundColor: "#7ED321" }}
        />

        {/* Additional floating gradient orbs */}
        <div 
          className={`
            absolute top-20 right-1/4 w-36 h-36 rounded-full blur-xl
            transition-all duration-700 ease-out
            ${activePhase === "catching" ? "opacity-50 translate-x-6 translate-y-2" : "opacity-20 -translate-x-4"}
          `}
          style={{ backgroundColor: "#00C9B7" }}
        />
        <div 
          className={`
            absolute bottom-32 left-1/4 w-44 h-44 rounded-full blur-xl
            transition-all duration-700 ease-out
            ${activePhase === "nurturing" ? "opacity-50 -translate-x-6 -translate-y-2" : "opacity-20 translate-x-4"}
          `}
          style={{ backgroundColor: "#7ED321" }}
        />

        {/* Center floating orb that pulses */}
        <div 
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl
            transition-all duration-1500 ease-in-out
            ${activePhase === "catching" ? "opacity-20 bg-[#00C9B7]" : "opacity-20 bg-[#7ED321]"}
          `}
        />

        {/* Floating icons that move with the phase */}
        <div 
          className={`
            absolute top-32 left-[15%] text-4xl
            transition-all duration-700 ease-out
            ${activePhase === "catching" ? "opacity-80 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-75"}
          `}
        >
          <div className="w-16 h-16 rounded-2xl bg-[#00C9B7]/25 dark:bg-[#00C9B7]/30 flex items-center justify-center backdrop-blur-sm border border-[#00C9B7]/40">
            <svg className="w-8 h-8 text-[#00C9B7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
            </svg>
          </div>
        </div>
        <div 
          className={`
            absolute top-48 right-[12%] text-4xl
            transition-all duration-700 ease-out delay-100
            ${activePhase === "catching" ? "opacity-70 translate-y-0 rotate-0" : "opacity-0 translate-y-8 rotate-12"}
          `}
        >
          <div className="w-14 h-14 rounded-xl bg-[#00C9B7]/20 dark:bg-[#00C9B7]/25 flex items-center justify-center backdrop-blur-sm border border-[#00C9B7]/30">
            <svg className="w-7 h-7 text-[#00C9B7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </div>
        </div>
        
        {/* Extra catching icon */}
        <div 
          className={`
            absolute top-64 left-[8%] text-4xl hidden lg:block
            transition-all duration-700 ease-out delay-200
            ${activePhase === "catching" ? "opacity-60 translate-y-0" : "opacity-0 translate-y-12"}
          `}
        >
          <div className="w-12 h-12 rounded-lg bg-[#00C9B7]/15 dark:bg-[#00C9B7]/25 flex items-center justify-center backdrop-blur-sm border border-[#00C9B7]/25">
            <svg className="w-6 h-6 text-[#00C9B7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
            </svg>
          </div>
        </div>

        <div 
          className={`
            absolute bottom-40 right-[20%] text-4xl
            transition-all duration-700 ease-out
            ${activePhase === "nurturing" ? "opacity-80 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-75"}
          `}
        >
          <div className="w-16 h-16 rounded-2xl bg-[#7ED321]/25 dark:bg-[#7ED321]/30 flex items-center justify-center backdrop-blur-sm border border-[#7ED321]/40">
            <svg className="w-8 h-8 text-[#7ED321]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
        </div>
        <div 
          className={`
            absolute bottom-28 left-[18%] text-4xl
            transition-all duration-700 ease-out delay-100
            ${activePhase === "nurturing" ? "opacity-70 translate-y-0 rotate-0" : "opacity-0 -translate-y-8 -rotate-12"}
          `}
        >
          <div className="w-14 h-14 rounded-xl bg-[#7ED321]/20 dark:bg-[#7ED321]/25 flex items-center justify-center backdrop-blur-sm border border-[#7ED321]/30">
            <svg className="w-7 h-7 text-[#7ED321]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </div>
        </div>
        
        {/* Extra nurturing icon */}
        <div 
          className={`
            absolute bottom-56 right-[8%] text-4xl hidden lg:block
            transition-all duration-700 ease-out delay-200
            ${activePhase === "nurturing" ? "opacity-60 translate-y-0" : "opacity-0 -translate-y-12"}
          `}
        >
          <div className="w-12 h-12 rounded-lg bg-[#7ED321]/15 dark:bg-[#7ED321]/25 flex items-center justify-center backdrop-blur-sm border border-[#7ED321]/25">
            <svg className="w-6 h-6 text-[#7ED321]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </div>
        </div>

        {/* Additional decorative circles - more visible */}
        <div 
          className={`
            absolute top-1/2 left-[8%] w-4 h-4 rounded-full
            transition-all duration-500 ease-out
            ${activePhase === "catching" ? "opacity-90 scale-100" : "opacity-30 scale-50"}
          `}
          style={{ backgroundColor: "#00C9B7" }}
        />
        <div 
          className={`
            absolute top-1/3 right-[8%] w-3 h-3 rounded-full
            transition-all duration-500 ease-out delay-150
            ${activePhase === "catching" ? "opacity-80 scale-100" : "opacity-20 scale-50"}
          `}
          style={{ backgroundColor: "#00C9B7" }}
        />
        <div 
          className={`
            absolute top-1/4 left-[25%] w-2 h-2 rounded-full
            transition-all duration-500 ease-out delay-100
            ${activePhase === "catching" ? "opacity-70 scale-100" : "opacity-10 scale-50"}
          `}
          style={{ backgroundColor: "#00C9B7" }}
        />
        <div 
          className={`
            absolute bottom-1/3 left-[5%] w-3 h-3 rounded-full
            transition-all duration-500 ease-out
            ${activePhase === "nurturing" ? "opacity-90 scale-100" : "opacity-30 scale-50"}
          `}
          style={{ backgroundColor: "#7ED321" }}
        />
        <div 
          className={`
            absolute bottom-1/2 right-[10%] w-4 h-4 rounded-full
            transition-all duration-500 ease-out delay-150
            ${activePhase === "nurturing" ? "opacity-80 scale-100" : "opacity-20 scale-50"}
          `}
          style={{ backgroundColor: "#7ED321" }}
        />
        <div 
          className={`
            absolute bottom-1/4 right-[30%] w-2 h-2 rounded-full
            transition-all duration-500 ease-out delay-100
            ${activePhase === "nurturing" ? "opacity-70 scale-100" : "opacity-10 scale-50"}
          `}
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

        {/* CTA Buttons - Conversational, answering "How can I be part of this?" */}
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
