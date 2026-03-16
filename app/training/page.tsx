import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training | Flock - Equipping Ministry Leaders",
  description:
    "Equip your children's ministry team with comprehensive training programs. View past events, upcoming workshops, and register for training.",
};

const upcomingTrainings = [
  {
    title: "VBS Leadership Intensive 2026",
    date: "May 15-17, 2026",
    location: "Chennai, India",
    type: "In-Person",
    description: "Three-day intensive training for VBS directors covering program planning, volunteer management, and effective teaching strategies.",
    spots: "Limited Spots",
    color: "#00C9B7",
  },
  {
    title: "Sunday School Teacher Workshop",
    date: "April 8, 2026",
    location: "Online",
    type: "Virtual",
    description: "Practical workshop on classroom management, lesson preparation, and engaging children with Scripture.",
    spots: "Open Registration",
    color: "#7ED321",
  },
  {
    title: "Children's Ministry Conference 2026",
    date: "July 20-22, 2026",
    location: "Bangalore, India",
    type: "In-Person",
    description: "Our flagship annual event featuring keynote speakers, breakout sessions, and networking with ministry leaders.",
    spots: "Early Bird Available",
    color: "#FF6B35",
  },
];

const pastTrainings = [
  {
    title: "VBS Leadership Training 2025",
    date: "May 2025",
    location: "Chennai",
    attendees: 450,
    topics: ["Theme Development", "Volunteer Training", "Safety Protocols"],
  },
  {
    title: "Children's Ministry Conference 2025",
    date: "July 2025",
    location: "Hyderabad",
    attendees: 1200,
    topics: ["Gospel-Centered Teaching", "Parent Partnership", "Special Needs Ministry"],
  },
  {
    title: "Sunday School Summit 2024",
    date: "October 2024",
    location: "Mumbai",
    attendees: 350,
    topics: ["Curriculum Design", "Small Groups", "Scripture Memory"],
  },
  {
    title: "Regional Workshop Series 2024",
    date: "March-June 2024",
    location: "Multiple Cities",
    attendees: 800,
    topics: ["Hands-on Training", "Local Context", "Practical Skills"],
  },
];

const trainingTracks = [
  {
    title: "VBS Track",
    description: "Everything you need to run successful Vacation Bible School programs.",
    modules: ["Program Planning", "Theme Development", "Volunteer Training", "Day-of Logistics", "Follow-up Ministry"],
    color: "#00C9B7",
  },
  {
    title: "Sunday School Track",
    description: "Build effective year-round discipleship for children.",
    modules: ["Curriculum Selection", "Classroom Management", "Teaching Methods", "Parent Communication", "Assessment"],
    color: "#7ED321",
  },
  {
    title: "Leadership Track",
    description: "Develop and lead high-functioning children's ministry teams.",
    modules: ["Vision Casting", "Team Building", "Volunteer Care", "Strategic Planning", "Budget Management"],
    color: "#A78BFA",
  },
  {
    title: "Evangelism Track",
    description: "Effectively share the gospel with children in age-appropriate ways.",
    modules: ["Child Development", "Gospel Presentation", "Counseling Kids", "Follow-up Discipleship", "Family Outreach"],
    color: "#FF6B35",
  },
];

export default function TrainingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero - Different design from main page */}
        <section className="pt-32 lg:pt-40 pb-16 px-6 bg-gradient-to-b from-[#A78BFA]/10 to-background relative overflow-hidden">
          {/* Abstract shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-20 w-80 h-80 bg-[#A78BFA]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse" />
                <span className="text-sm text-[#A78BFA] font-medium">
                  Training & Equipping Ministry
                </span>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6">
                Equip Your Team for <span className="text-[#A78BFA]">Kingdom Impact</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Practical, biblical training programs designed to equip volunteers and leaders
                for effective children&apos;s ministry.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#upcoming"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#A78BFA] text-white font-semibold rounded-full hover:bg-[#A78BFA]/90 transition-colors"
                >
                  View Upcoming Events
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border text-primary font-semibold rounded-full hover:bg-muted transition-colors"
                >
                  Request Custom Training
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Training Tracks */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-4">
                Training Tracks
              </h2>
              <p className="text-muted-foreground">
                Choose a specialized track based on your ministry role and needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainingTracks.map((track) => (
                <div
                  key={track.title}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${track.color}20` }}
                  >
                    <svg
                      className="w-6 h-6"
                      style={{ color: track.color }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{track.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{track.description}</p>
                  <div className="space-y-1.5">
                    {track.modules.slice(0, 3).map((module) => (
                      <div key={module} className="flex items-center gap-2 text-sm">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: track.color }}
                        />
                        <span className="text-muted-foreground">{module}</span>
                      </div>
                    ))}
                    {track.modules.length > 3 && (
                      <div className="text-xs text-muted-foreground pl-3.5">
                        +{track.modules.length - 3} more modules
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Trainings */}
        <section id="upcoming" className="py-16 lg:py-24 bg-secondary scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <span className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wider">
                  Mark Your Calendar
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                  Upcoming Training Events
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {upcomingTrainings.map((training) => (
                <div
                  key={training.title}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Header */}
                  <div
                    className="p-6"
                    style={{ backgroundColor: `${training.color}10` }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-2 py-1 text-xs font-semibold rounded-full text-white"
                        style={{ backgroundColor: training.color }}
                      >
                        {training.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{training.spots}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary">{training.title}</h3>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        {training.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        {training.location}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      {training.description}
                    </p>
                    <button
                      type="button"
                      className="w-full py-3 rounded-xl text-sm font-semibold transition-colors"
                      style={{
                        backgroundColor: `${training.color}15`,
                        color: training.color,
                      }}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Trainings */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Track Record
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                Previous Training Events
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {pastTrainings.map((training) => (
                <div
                  key={training.title}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-primary">{training.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {training.date} | {training.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#A78BFA]">{training.attendees}</div>
                      <div className="text-xs text-muted-foreground">Attendees</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {training.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-[#A78BFA]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Bring Training to Your Church
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We can bring customized training directly to your church or region. Contact us to discuss your needs.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#A78BFA] font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Request Training
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
