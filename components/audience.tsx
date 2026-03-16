const audiences = [
  {
    title: "Churches",
    description:
      "Equip your congregation with comprehensive children's ministry programs that make an eternal impact.",
    color: "#00C9B7",
  },
  {
    title: "Pastors & Leaders",
    description:
      "Access proven curriculum and resources that simplify ministry planning and volunteer training.",
    color: "#7ED321",
  },
  {
    title: "Parents",
    description:
      "Partner with your church to reinforce faith at home through the Flock mobile app and family resources.",
    color: "#FF7B6F",
  },
  {
    title: "Children",
    description:
      "Experience the joy of learning about Jesus through songs, videos, and activities designed just for them.",
    color: "#A78BFA",
  },
];

export function Audience() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[#00C9B7] uppercase tracking-wider">
            Who We Serve
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
            Flock Is For Everyone
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From church leadership to the youngest members of your congregation,
            Flock serves the whole community of faith.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group text-center bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all"
            >
              <div 
                className="text-5xl font-bold mb-6"
                style={{ color: `${audience.color}40` }}
              >
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
