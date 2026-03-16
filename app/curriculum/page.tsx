import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum | Flock - VBS & Sunday School Resources",
  description:
    "Download sample curriculum books for VBS and Sunday School. Complete ministry resources including teacher guides, student workbooks, and activity materials.",
};

const vbsCurriculum = [
  {
    title: "Kingdom Quest VBS 2026",
    description: "An epic adventure through Scripture as kids discover what it means to be part of God's kingdom.",
    ageGroup: "Ages 4-12",
    duration: "5 Days",
    includes: ["5 Daily Lessons", "Activity Guides", "Craft Templates", "Music & Videos"],
    color: "#00C9B7",
  },
  {
    title: "Ocean Deep VBS 2025",
    description: "Dive deep into God's Word and discover the depths of His love for every child.",
    ageGroup: "Ages 4-12",
    duration: "5 Days",
    includes: ["5 Daily Lessons", "Activity Guides", "Craft Templates", "Music & Videos"],
    color: "#00C9B7",
  },
  {
    title: "Space Explorers VBS 2024",
    description: "Blast off on a cosmic journey exploring God's amazing creation and His plan for us.",
    ageGroup: "Ages 4-12",
    duration: "5 Days",
    includes: ["5 Daily Lessons", "Activity Guides", "Craft Templates", "Music & Videos"],
    color: "#00C9B7",
  },
];

const sundaySchoolCurriculum = [
  {
    title: "Foundations of Faith - Year 1",
    description: "Build a strong biblical foundation covering creation, key Old Testament stories, and introduction to Jesus.",
    ageGroup: "Ages 6-8",
    duration: "52 Weeks",
    includes: ["Weekly Lessons", "Student Workbooks", "Memory Verses", "Parent Guides"],
    color: "#7ED321",
  },
  {
    title: "Foundations of Faith - Year 2",
    description: "Continue the journey through Jesus' life, teachings, and the early church.",
    ageGroup: "Ages 8-10",
    duration: "52 Weeks",
    includes: ["Weekly Lessons", "Student Workbooks", "Memory Verses", "Parent Guides"],
    color: "#7ED321",
  },
  {
    title: "Little Lambs Curriculum",
    description: "Age-appropriate Bible stories and activities designed specifically for preschoolers.",
    ageGroup: "Ages 3-5",
    duration: "52 Weeks",
    includes: ["Picture Lessons", "Coloring Pages", "Simple Activities", "Songs"],
    color: "#7ED321",
  },
];

function CurriculumCard({
  curriculum,
  type,
}: {
  curriculum: (typeof vbsCurriculum)[0];
  type: "vbs" | "sundayschool";
}) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      {/* Book cover placeholder */}
      <div
        className="h-48 flex items-center justify-center"
        style={{ backgroundColor: `${curriculum.color}15` }}
      >
        <div className="text-center">
          <div
            className="w-20 h-28 mx-auto rounded-lg shadow-lg flex items-center justify-center"
            style={{ backgroundColor: curriculum.color }}
          >
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="px-2 py-1 text-xs font-semibold rounded-full text-white"
            style={{ backgroundColor: curriculum.color }}
          >
            {curriculum.ageGroup}
          </span>
          <span className="text-xs text-muted-foreground">{curriculum.duration}</span>
        </div>

        <h3 className="text-xl font-bold text-primary mb-2">{curriculum.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {curriculum.description}
        </p>

        {/* Includes */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {curriculum.includes.map((item) => (
            <span
              key={item}
              className="px-2 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Download button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
          style={{
            backgroundColor: `${curriculum.color}15`,
            color: curriculum.color,
          }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Sample
        </button>
      </div>
    </div>
  );
}

export default function CurriculumPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 lg:pt-40 pb-16 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                <span className="text-sm text-muted-foreground font-medium">
                  Free Samples Available
                </span>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6 text-balance">
                Curriculum Library
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Browse and download sample curriculum for your VBS and Sunday School programs.
                All materials are gospel-centered and designed for effective children&apos;s ministry.
              </p>
            </div>
          </div>
        </section>

        {/* VBS Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4"
                  style={{ backgroundColor: "#00C9B7" }}
                >
                  Vacation Bible School
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                  VBS Curriculum
                </h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  Complete 5-day programs with everything you need for an unforgettable VBS experience.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-[#00C9B7] font-semibold hover:underline"
              >
                Order Full Curriculum
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vbsCurriculum.map((curriculum) => (
                <CurriculumCard key={curriculum.title} curriculum={curriculum} type="vbs" />
              ))}
            </div>
          </div>
        </section>

        {/* Sunday School Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4"
                  style={{ backgroundColor: "#7ED321" }}
                >
                  Year-Round Discipleship
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                  Sunday School Curriculum
                </h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  52-week programs designed to systematically build strong biblical foundations.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-[#7ED321] font-semibold hover:underline"
              >
                Order Full Curriculum
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sundaySchoolCurriculum.map((curriculum) => (
                <CurriculumCard key={curriculum.title} curriculum={curriculum} type="sundayschool" />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
              Need Custom Curriculum?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              We can work with your church to develop curriculum tailored to your specific needs and context.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Contact Us
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
