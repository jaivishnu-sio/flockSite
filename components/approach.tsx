"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ministryImages = [
  "/images/ministry-1.png",
  "/images/ministry-2.png",
  "/images/ministry-3.png",
  "/images/ministry-4.png",
];

const steps = [
  {
    number: "01",
    title: "Catching at VBS",
    description:
      "Engaging songs, action videos, and easy-to-follow programs that attract children and introduce them to the gospel message through fun, memorable experiences.",
    features: [
      "High-energy worship songs",
      "Interactive action videos",
      "Simple gospel presentations",
      "Engaging group activities",
    ],
    color: "#00C9B7",
  },
  {
    number: "02",
    title: "Nurturing at Sunday School",
    description:
      "Structured lessons and teaching materials that help children grow in biblical understanding and character development throughout the year.",
    features: [
      "Age-appropriate curriculum",
      "Character-building lessons",
      "Bible memory programs",
      "Teacher training resources",
    ],
    color: "#7ED321",
  },
  {
    number: "03",
    title: "Staying Connected",
    description:
      "A mobile app where children can watch songs and action videos, helping them stay connected to the gospel message even outside of church.",
    features: [
      "On-demand song library",
      "Action video tutorials",
      "Weekly devotionals",
      "Family discussion guides",
    ],
    color: "#FF7B6F",
  },
];

function BackgroundCarousel({ color }: { color: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ministryImages.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      {/* Background images */}
      {ministryImages.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
      {/* 75% opacity black overlay for better image visibility */}
      <div className="absolute inset-0 bg-black/75" />
      
      {/* Subtle color tint */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundColor: color }}
      />
      
      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {ministryImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "w-6" : "bg-primary/30"
            }`}
            style={{
              backgroundColor: idx === currentIndex ? color : undefined,
            }}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export function Approach() {
  return (
    <section id="approach" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-20">
          <span className="text-sm font-semibold text-[#00C9B7] uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-primary">
            The Flock Ministry Journey
          </h2>
          <p className="mt-4 lg:mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
            A comprehensive approach to children&apos;s ministry that catches,
            nurtures, and keeps children connected to their faith.
          </p>
        </div>

        {/* Steps - Unified card design with background images */}
        <div className="space-y-6 lg:space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-border min-h-[280px] lg:min-h-[320px]"
            >
              {/* Background carousel */}
              <BackgroundCarousel color={step.color} />
              
              {/* Content overlay */}
              <div className="relative z-10 p-6 lg:p-10 h-full flex flex-col justify-center">
                <div className="max-w-2xl">
                  {/* Header */}
                  <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-5">
                    <span
                      className="text-4xl lg:text-6xl font-bold"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-2xl lg:text-4xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-white/80 leading-relaxed mb-5 lg:mb-6">
                    {step.description}
                  </p>

                  {/* Features as pills */}
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {step.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium rounded-full backdrop-blur-sm border transition-colors"
                        style={{
                          backgroundColor: `${step.color}20`,
                          borderColor: `${step.color}40`,
                          color: step.color,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
