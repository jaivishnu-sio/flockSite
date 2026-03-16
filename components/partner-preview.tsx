import Link from "next/link";

const partnerBenefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Support VBS Programs",
    description: "Help provide engaging materials that introduce children to the gospel.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "Train Missionaries",
    description: "Equip children's ministry workers with skills and resources.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Expand App Reach",
    description: "Help more children access free gospel content on their devices.",
  },
];

export function PartnerPreview() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#FF6B35]/5 via-background to-[#00C9B7]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wider">
              Partner With Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
              Join Our Mission to Reach the Next Generation
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Your generosity helps us create free resources, train missionaries, 
              and reach more children with the gospel message. Every contribution 
              makes a lasting impact.
            </p>

            <div className="mt-8 space-y-4">
              {partnerBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0 text-[#FF6B35]">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B35] text-white font-semibold rounded-full hover:bg-[#FF6B35]/90 transition-colors shadow-lg shadow-[#FF6B35]/20"
              >
                Become a Partner
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/partner#one-time"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#FF6B35] text-[#FF6B35] font-semibold rounded-full hover:bg-[#FF6B35] hover:text-white transition-colors"
              >
                Give One-Time Gift
              </Link>
            </div>
          </div>

          {/* Visual - Impact highlight cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="text-4xl lg:text-5xl font-bold text-[#00C9B7]">$50</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    provides VBS materials for 10 children
                  </p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="text-4xl lg:text-5xl font-bold text-[#7ED321]">$100</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    equips one Sunday School class for a quarter
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="text-4xl lg:text-5xl font-bold text-[#A78BFA]">$250</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    trains one missionary for children&apos;s ministry
                  </p>
                </div>
                <div className="bg-[#FF6B35] rounded-2xl p-6">
                  <div className="text-2xl lg:text-3xl font-bold text-white">Any Amount</div>
                  <p className="text-sm text-white/80 mt-2">
                    makes an eternal difference in a child&apos;s life
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFCA28]/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#00C9B7]/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
