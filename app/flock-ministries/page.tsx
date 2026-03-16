"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useState } from "react";

const ministriesFeatures = [
  {
    title: "Action Videos",
    description: "Learn choreography and motions to worship songs with step-by-step video tutorials.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Worship Songs Library",
    description: "Stream the complete library of Flock worship songs designed for children's ministry.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
  },
  {
    title: "Daily Devotionals",
    description: "Short, engaging devotions designed specifically for young hearts and minds.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Church Connection",
    description: "Stay updated with announcements and events from your local church community.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const shepherdsFeatures = [
  {
    title: "Evangelism Tools",
    description: "Complete toolkit for sharing the gospel with children in age-appropriate ways.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
    ),
  },
  {
    title: "Training Videos",
    description: "Comprehensive video courses on children's ministry methods and best practices.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Resource Library",
    description: "Download printable materials, lesson plans, and ministry resources offline.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
    ),
  },
  {
    title: "Ministry Guides",
    description: "Step-by-step guides for starting and running children's ministry programs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How do I download the app?",
    answer:
      "The Flock apps are available on both iOS (App Store) and Android (Google Play). Search for 'Flock Ministries' or 'Flock Shepherds' to find and download the appropriate app.",
  },
  {
    question: "Is the content really free?",
    answer:
      "Yes! All songs, action videos, and devotional content are completely free. We believe the gospel is free and should be accessible to everyone. Premium features for churches are available for ministry management.",
  },
  {
    question: "How do I connect my church to the app?",
    answer:
      "Your church administrator will provide you with a unique church code. Enter this code in the app settings to connect and access your church's specific content.",
  },
  {
    question: "Can I use the app offline?",
    answer:
      "Yes! Most content can be downloaded for offline use. This is especially useful for missionaries working in areas with limited internet connectivity.",
  },
  {
    question: "How do I report technical issues?",
    answer:
      "You can report issues through the app's feedback feature or contact our support team directly via the contact form on this page.",
  },
];

// Gallery placeholder images
const galleryImages = [
  { id: 1, caption: "VBS 2025 - Chennai" },
  { id: 2, caption: "Sunday School Training" },
  { id: 3, caption: "Kids Worship" },
  { id: 4, caption: "Action Videos Recording" },
  { id: 5, caption: "Children's Conference" },
  { id: 6, caption: "Ministry Team" },
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
        className="relative rounded-[3rem] p-3 shadow-2xl"
        style={{ backgroundColor: color }}
      >
        {/* Notch */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 rounded-b-2xl"
          style={{ backgroundColor: color }}
        />
        {/* Screen */}
        <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
          <div className="h-full flex flex-col p-4">
            <div className="text-center py-8">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${color}15` }}
              >
                <svg 
                  className="w-8 h-8" 
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
              <h3 className="text-xl font-bold text-primary">{appName}</h3>
              <p className="text-xs text-muted-foreground mt-1">{tagline}</p>
            </div>
            <div className="flex-1 space-y-3">
              {items.map((item) => (
                <div key={item} className="p-3 rounded-xl bg-muted flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                  <span className="text-sm font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Store buttons below phone */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium"
          style={{ backgroundColor: `${color}15`, color }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          iOS
        </button>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium"
          style={{ backgroundColor: `${color}15`, color }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
          </svg>
          Android
        </button>
      </div>
    </div>
  );
}

export default function FlockMinistriesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 lg:pt-40 pb-20 px-6 bg-gradient-to-b from-[#00C9B7]/5 to-background relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-20 -right-20 w-96 h-96 bg-[#00C9B7]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#FF6B35]/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center max-w-4xl mx-auto">
              {/* Free badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7ED321]/15 border border-[#7ED321]/25 mb-8">
                <svg className="w-5 h-5 text-[#7ED321]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="text-sm font-semibold text-[#7ED321]">
                  All songs and content are FREE - the Gospel is free!
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6 text-balance">
                Flock Apps
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Two powerful mobile apps designed to equip kids, parents, pastors,
                and missionaries with everything needed for effective children&apos;s ministry.
              </p>
            </div>
          </div>
        </section>

        {/* Flock Ministries App Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-6"
                  style={{ backgroundColor: "#00C9B7" }}
                >
                  For Kids, Parents & Pastors
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-6">
                  Flock Ministries
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Keep children connected to their faith journey outside of church.
                  Watch action videos, listen to worship songs, and grow in their
                  relationship with God every day.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {ministriesFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#00C9B7]/10 flex items-center justify-center flex-shrink-0 text-[#00C9B7]">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="flex justify-center">
                <div className="w-64 sm:w-72 lg:w-80">
                  <PhoneMockup app="ministries" color="#00C9B7" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flock Shepherds App Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Phone Mockup */}
              <div className="flex justify-center order-2 lg:order-1">
                <div className="w-64 sm:w-72 lg:w-80">
                  <PhoneMockup app="shepherds" color="#FF6B35" />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-6"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  For Missionaries & Evangelists
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-6">
                  Flock Shepherds
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Everything missionaries need to effectively evangelize children.
                  Access training content, downloadable resources, and ministry
                  guides wherever you serve.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {shepherdsFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0 text-[#FF6B35]">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-[#A78BFA] uppercase tracking-wider">
                Ministry in Action
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                See Flock at Work
              </h2>
              <p className="mt-4 text-muted-foreground">
                Snapshots from churches and ministries using Flock resources around the world.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="aspect-square rounded-2xl overflow-hidden bg-muted relative group"
                >
                  {/* Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00C9B7]/20 to-[#FF6B35]/20 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                      </div>
                      <p className="text-xs text-white/80 font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 lg:py-28 bg-background scroll-mt-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#5ABCB9] uppercase tracking-wider">
                Support
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-primary">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Support CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
              Need Technical Support?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Our team is here to help you get the most out of Flock apps. Reach out with any questions or issues.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Contact Support
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
