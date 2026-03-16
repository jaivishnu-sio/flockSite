import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Flock | Support Children's Ministry",
  description:
    "Support Flock's mission to raise the next generation in faith. Partner with us through giving, prayer, and volunteering to reach more children with the gospel.",
};

const impactAreas = [
  {
    title: "VBS Programs",
    description:
      "Support the development of engaging Vacation Bible School materials that introduce children to the gospel.",
    amount: "$50",
    impact: "provides VBS materials for 10 children",
    color: "#00C9B7",
  },
  {
    title: "Sunday School Resources",
    description:
      "Fund curriculum development for year-round discipleship and spiritual growth.",
    amount: "$100",
    impact: "equips one Sunday School class for a quarter",
    color: "#7ED321",
  },
  {
    title: "Missionary Training",
    description:
      "Empower missionaries with training and resources to effectively evangelize children.",
    amount: "$250",
    impact: "trains one missionary for children's ministry",
    color: "#FF6B35",
  },
  {
    title: "App Development",
    description:
      "Help us continue improving our mobile apps to reach children wherever they are.",
    amount: "$500",
    impact: "sponsors app development for one month",
    color: "#FF7B6F",
  },
];

const partnershipLevels = [
  {
    name: "Friend",
    amount: "Any Amount",
    benefits: [
      "Quarterly ministry updates",
      "Prayer request access",
      "Digital thank you card",
    ],
  },
  {
    name: "Partner",
    amount: "$50/month",
    benefits: [
      "All Friend benefits",
      "Monthly video updates",
      "Early access to new resources",
      "Partner recognition",
    ],
    featured: true,
  },
  {
    name: "Champion",
    amount: "$100+/month",
    benefits: [
      "All Partner benefits",
      "Direct ministry impact reports",
      "VIP event invitations",
      "Named sponsorship opportunities",
    ],
  },
];

export default function PartnerPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 lg:pt-40 pb-20 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                <span className="text-sm text-muted-foreground font-medium">
                  Join Our Mission
                </span>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6 text-balance">
                Partner With Flock
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Your generosity helps us reach more children with the gospel,
                equip more churches for ministry, and train more missionaries
                to serve the next generation.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#00C9B7] uppercase tracking-wider">
              Your Impact
            </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
                Where Your Gift Goes
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Every contribution directly supports our mission to raise the
                next generation in faith.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactAreas.map((area) => (
                <div
                  key={area.title}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${area.color}20` }}
                  >
                    <span
                      className="text-xl font-bold"
                      style={{ color: area.color }}
                    >
                      {area.amount}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {area.description}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: area.color }}
                  >
                    {area.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Levels */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#00C9B7] uppercase tracking-wider">
              Partnership Levels
            </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
                Become a Monthly Partner
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Consistent monthly support helps us plan and expand our ministry
                reach to more children and churches.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {partnershipLevels.map((level) => (
                <div
                  key={level.name}
                  className={`relative bg-card border rounded-3xl p-8 ${
                    level.featured
                      ? "border-[#FF6B35] shadow-xl scale-105"
                      : "border-border"
                  }`}
                >
                  {level.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FF6B35] text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-primary">
                      {level.name}
                    </h3>
                    <p className="text-3xl font-bold text-[#FF6B35] mt-2">
                      {level.amount}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {level.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[#00C9B7] flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`w-full py-3 rounded-full font-semibold transition-colors ${
                      level.featured
                        ? "bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Become a {level.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* One-Time Gift */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-4">
                  Make a One-Time Gift
                </h2>
                <p className="text-lg text-muted-foreground">
                  Every gift, no matter the size, makes a difference in a
                  child&apos;s life.
                </p>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
                {["$25", "$50", "$100", "$250", "$500", "$1000"].map(
                  (amount) => (
                    <button
                      key={amount}
                      type="button"
                      className="py-3 px-4 border border-border rounded-xl font-semibold text-primary hover:border-[#FF6B35] hover:bg-[#FF6B35]/5 transition-colors"
                    >
                      {amount}
                    </button>
                  )
                )}
              </div>

              <div className="mb-8">
                <label
                  htmlFor="customAmount"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <input
                    type="number"
                    id="customAmount"
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] text-primary"
                  />
                </div>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-[#FF6B35] text-white font-semibold rounded-full hover:bg-[#FF6B35]/90 transition-colors text-lg"
              >
                Give Now
              </button>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Flock Ministry is a registered 501(c)(3) nonprofit organization.
                Your gift is tax-deductible to the fullest extent allowed by law.
              </p>
            </div>
          </div>
        </section>

        {/* Other Ways to Partner */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-4">
                Other Ways to Partner
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Financial support is just one way to join our mission.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#00C9B7]/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#00C9B7]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Pray</h3>
                <p className="text-muted-foreground">
                  Join our prayer team and receive monthly prayer requests for
                  our ministry, missionaries, and the children we serve.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#7ED321]/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#7ED321]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Volunteer
                </h3>
                <p className="text-muted-foreground">
                  Use your skills and talents to serve - from content creation
                  to event support and everything in between.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#FF6B35]/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#FF6B35]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Share</h3>
                <p className="text-muted-foreground">
                  Help spread the word about Flock to churches and ministries in
                  your network who could benefit from our resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Have Questions About Partnering?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              We&apos;d love to talk with you about how you can be part of raising
              the next generation in faith.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Contact Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
