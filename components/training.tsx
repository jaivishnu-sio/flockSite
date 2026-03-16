"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const trainingHighlights = [
  {
    title: "VBS Leadership Training",
    date: "Annual",
    attendees: "500+",
    description: "Comprehensive training for VBS directors and team leaders.",
  },
  {
    title: "Sunday School Teacher Workshop",
    date: "Quarterly",
    attendees: "200+",
    description: "Practical skills for effective classroom teaching.",
  },
  {
    title: "Children's Ministry Conference",
    date: "Annual",
    attendees: "1000+",
    description: "Our flagship event bringing together ministry leaders.",
  },
];

const trainingImages = [
  "/images/ministry-1.png",
  "/images/ministry-2.png",
  "/images/ministry-3.png",
  "/images/ministry-4.png",
];

export function Training() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % trainingImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background images carousel */}
      <div className="absolute inset-0">
        {trainingImages.map((imagePath, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={imagePath}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay - 78% opacity */}
        <div className="absolute inset-0 bg-[#0A0F1A]/[0.78]" />
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {trainingImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentImageIndex ? "w-6 bg-[#A78BFA]" : "bg-white/50"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-[#A78BFA] uppercase tracking-wider">
              Training & Equipping
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Equip Your Team for Impact
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Effective children&apos;s ministry requires well-trained volunteers and leaders.
              Our training programs equip your team with practical skills, biblical foundations,
              and proven strategies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/training"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#A78BFA] text-white font-semibold rounded-full hover:bg-[#A78BFA]/90 transition-colors"
              >
                View All Training
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/training#upcoming"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Upcoming Events
              </Link>
            </div>
          </div>

          {/* Training Cards */}
          <div className="space-y-4">
            {trainingHighlights.map((training, index) => (
              <div
                key={training.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {training.title}
                    </h3>
                    <p className="text-sm text-white/70">
                      {training.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-[#A78BFA]">
                      {training.attendees}
                    </div>
                    <div className="text-xs text-white/60">
                      {training.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <Link
              href="/training"
              className="block bg-white/5 border-2 border-dashed border-white/20 rounded-2xl p-6 text-center hover:border-white/40 transition-colors group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <span className="font-semibold text-white">See All Training Programs</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
