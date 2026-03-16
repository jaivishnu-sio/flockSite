"use client";

import { useState } from "react";

interface Announcement {
  id: string;
  type: "event" | "update" | "news";
  title: string;
  description: string;
  date: string;
  link?: string;
}

const announcements: Announcement[] = [
  {
    id: "1",
    type: "event",
    title: "VBS 2026 Registration Now Open",
    description: "Secure your spot for this summer's Vacation Bible School program.",
    date: "Mar 15, 2026",
    link: "#contact",
  },
  {
    id: "2",
    type: "update",
    title: "New Sunday School Curriculum Released",
    description: "Fresh lessons and activities for the spring quarter are now available.",
    date: "Mar 10, 2026",
  },
  {
    id: "3",
    type: "news",
    title: "Volunteer Training Workshop",
    description: "Join us for our upcoming training session for new ministry volunteers.",
    date: "Mar 5, 2026",
    link: "#contact",
  },
];

const typeColors = {
  event: "bg-[#00C9B7]",
  update: "bg-[#7ED321]",
  news: "bg-[#FF7B6F]",
};

const typeLabels = {
  event: "Event",
  update: "Update",
  news: "News",
};

export function Announcements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAnnouncement = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const prevAnnouncement = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const current = announcements[currentIndex];

  return (
    <section className="py-4 px-6 bg-secondary/50 relative z-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Navigation Arrow - Left */}
          <button
            onClick={prevAnnouncement}
            className="p-2 text-muted-foreground hover:text-primary transition-colors shrink-0"
            aria-label="Previous announcement"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Announcement Content */}
          <div className="flex-1 flex items-center justify-center gap-4 min-w-0">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${typeColors[current.type]} shrink-0`}>
              {typeLabels[current.type]}
            </span>
            <div className="flex items-center gap-3 min-w-0">
              <span className="font-semibold text-primary truncate text-sm">
                {current.title}
              </span>
              <span className="hidden md:inline text-muted-foreground truncate text-sm">
                {current.description}
              </span>
            </div>
            {current.link && (
              <a
                href={current.link}
                className="text-[#00C9B7] underline underline-offset-2 text-sm font-medium hover:text-[#00C9B7]/80 transition-colors shrink-0"
              >
                Learn more
              </a>
            )}
          </div>

          {/* Navigation Arrow - Right */}
          <button
            onClick={nextAnnouncement}
            className="p-2 text-muted-foreground hover:text-primary transition-colors shrink-0"
            aria-label="Next announcement"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-2">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#00C9B7]" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to announcement ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
