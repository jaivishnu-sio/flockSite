import Link from "next/link";

const curriculumTypes = [
  {
    title: "VBS Curriculum",
    subtitle: "Vacation Bible School",
    description:
      "Complete 5-day VBS programs with themes, lessons, activities, and everything you need for a memorable week of ministry.",
    color: "#00C9B7",
    items: ["Teacher Guides", "Student Workbooks", "Activity Sheets", "Craft Templates"],
    featured: "Kingdom Quest VBS 2026",
  },
  {
    title: "Sunday School Curriculum",
    subtitle: "Year-Round Discipleship",
    description:
      "52-week curriculum designed to systematically teach children the Bible, building strong foundations in faith.",
    color: "#7ED321",
    items: ["Lesson Plans", "Bible Story Books", "Memory Verse Cards", "Take-Home Materials"],
    featured: "Foundations of Faith Series",
  },
];

export function Curriculum() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wider">
            Curriculum
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary text-balance">
            Our Dedicated Curriculum
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Bridge the gap with our comprehensive, gospel-centered curriculum
            designed for both VBS and Sunday School programs.
          </p>
        </div>

        {/* Curriculum Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {curriculumTypes.map((curriculum) => (
            <div
              key={curriculum.title}
              className="relative bg-card border border-border rounded-3xl p-8 lg:p-10 overflow-hidden group hover:shadow-xl transition-shadow"
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
                style={{ backgroundColor: curriculum.color }}
              />

              <div className="relative">
                {/* Badge */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4"
                  style={{ backgroundColor: curriculum.color }}
                >
                  {curriculum.subtitle}
                </span>

                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-3">
                  {curriculum.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {curriculum.description}
                </p>

                {/* Featured */}
                <div
                  className="p-4 rounded-2xl mb-6"
                  style={{ backgroundColor: `${curriculum.color}10` }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Featured
                  </div>
                  <div
                    className="text-lg font-bold"
                    style={{ color: curriculum.color }}
                  >
                    {curriculum.featured}
                  </div>
                </div>

                {/* Items */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {curriculum.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Book preview placeholder */}
                <div className="flex items-center gap-4 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-20 rounded-lg border-2 flex items-center justify-center text-xs font-medium"
                      style={{
                        borderColor: `${curriculum.color}40`,
                        backgroundColor: `${curriculum.color}05`,
                        color: `${curriculum.color}`,
                      }}
                    >
                      Book {i}
                    </div>
                  ))}
                  <div className="w-16 h-20 rounded-lg border-2 border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">
                    +more
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/curriculum"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B35] text-white font-semibold rounded-full hover:bg-[#FF6B35]/90 transition-colors shadow-lg shadow-[#FF6B35]/25"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Sample Books
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Preview our curriculum before ordering for your church
          </p>
        </div>
      </div>
    </section>
  );
}
