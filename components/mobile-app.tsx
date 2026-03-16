"use client";

import Link from "next/link";

const apps = [
  {
    id: "ministries",
    name: "Flock Ministries",
    tagline: "For Kids, Parents & Pastors",
    description:
      "Watch songs, learn actions, and stay connected with the gospel message anytime, anywhere. All content is free for everyone.",
    features: ["Action Videos", "Worship Songs", "Daily Devotionals", "Church Updates"],
    color: "#00C9B7",
    highlight: "Free for Everyone",
  },
  {
    id: "shepherds",
    name: "Flock Shepherds",
    tagline: "For Missionaries & Evangelists",
    description:
      "Complete resources and training content to effectively evangelize and disciple children wherever you serve.",
    features: ["Evangelism Tools", "Training Videos", "Resource Library", "Ministry Guides"],
    color: "#FF6B35",
    highlight: "Gospel Resources",
  },
];

function PhoneMockup({ app, color }: { app: "ministries" | "shepherds"; color: string }) {
  const appName = app === "ministries" ? "Flock Ministries" : "Flock Shepherds";
  const tagline = app === "ministries" ? "Faith at your fingertips" : "Equipping evangelists";
  const items = app === "ministries" 
    ? ["Action Videos", "Worship Songs", "Devotionals"] 
    : ["Training Videos", "Resources", "Ministry Guides"];

  return (
    <div className="relative">
      {/* Phone frame */}
      <div 
        className="relative rounded-[2.5rem] p-2.5 shadow-2xl"
        style={{ backgroundColor: color }}
      >
        {/* Notch */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 rounded-b-xl"
          style={{ backgroundColor: color }}
        />
        {/* Screen */}
        <div className="bg-background rounded-[2rem] overflow-hidden aspect-[9/19]">
          <div className="h-full flex flex-col p-3">
            <div className="text-center py-6">
              <div 
                className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${color}15` }}
              >
                <svg 
                  className="w-6 h-6" 
                  style={{ color }} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={1.5}
                >
                  {app === "ministries" ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  )}
                </svg>
              </div>
              <h3 className="text-base font-bold text-primary">{appName}</h3>
              <p className="text-[10px] text-muted-foreground mt-0.5">{tagline}</p>
            </div>
            <div className="flex-1 space-y-2">
              {items.map((item) => (
                <div key={item} className="p-2.5 rounded-lg bg-muted flex items-center gap-2.5">
                  <div 
                    className="w-8 h-8 rounded-md flex items-center justify-center"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                  <span className="text-xs font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileApp() {
  return (
    <section id="app" className="py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-[#00C9B7] uppercase tracking-wider">
            Mobile Apps
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary text-balance">
            Faith at Their Fingertips
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Two powerful apps designed for different needs - one for kids and families,
            another for missionaries and ministry workers.
          </p>
          {/* Free content highlight */}
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7ED321]/15 border border-[#7ED321]/25">
            <svg className="w-5 h-5 text-[#7ED321]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <span className="text-sm font-semibold text-[#7ED321]">
              All songs and contents are FREE - because the Gospel is free!
            </span>
          </div>
        </div>

        {/* Apps with Mockups */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {apps.map((app, index) => (
            <div
              key={app.id}
              className="bg-card border border-border rounded-3xl p-6 lg:p-8 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-center">
                {/* Phone Mockup */}
                <div className={`w-40 sm:w-48 flex-shrink-0 ${index === 1 ? "md:order-2" : ""}`}>
                  <PhoneMockup app={app.id as "ministries" | "shepherds"} color={app.color} />
                </div>

                {/* Content */}
                <div className={`flex-1 text-center md:text-left ${index === 1 ? "md:order-1" : ""}`}>
                  {/* Highlight badge */}
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4"
                    style={{ backgroundColor: app.color }}
                  >
                    {app.highlight}
                  </div>

                  {/* App Header */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      {app.tagline}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                      {app.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm lg:text-base">
                    {app.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    {app.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 text-xs font-medium rounded-full"
                        style={{
                          backgroundColor: `${app.color}15`,
                          color: app.color,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Store Buttons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-colors text-white"
                      style={{ backgroundColor: app.color }}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      App Store
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-colors text-white"
                      style={{ backgroundColor: app.color }}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                      </svg>
                      Google Play
                    </button>
                  </div>

                  {/* Know More Link */}
                  <Link
                    href="/flock-ministries"
                    className="inline-flex items-center gap-2 font-semibold transition-colors text-sm mt-4"
                    style={{ color: app.color }}
                  >
                    Know More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
