import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "About Us | Flock",
  description: "Learn about the heart and mission behind Flock - bridging the gap between VBS and Sunday School.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 -right-20 w-96 h-96 bg-[#00C9B7]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#7ED321]/10 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-sm font-semibold text-[#00C9B7] uppercase tracking-wider">
                Our Story
              </span>
              <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary">
                Building Faith, One Child at a Time
              </h1>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                Flock was born from a deep passion to see every child who hears the Gospel 
                continue to grow in their faith journey.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src="/images/ministry-3.png"
                    alt="Flock Founders"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                  Meet the Founders
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our founders began their journey in children&apos;s ministry over 15 years ago 
                  in the heart of India. What started as local VBS programs in small churches 
                  grew into a movement that has trained thousands of ministry leaders and 
                  reached tens of thousands of children.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Through years of hands-on experience, they witnessed a recurring challenge: 
                  churches would pour their hearts into VBS programs, drawing children in with 
                  the excitement of the Gospel, only to see most of them drift away within weeks.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This burden led to the creation of Flock - a comprehensive approach that 
                  doesn&apos;t just catch children at VBS but nurtures them through Sunday School 
                  and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold text-[#7ED321] uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
                Every Child Deserves a Faith Foundation
              </h2>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                We believe that every child who encounters the love of Jesus deserves the 
                opportunity to continue growing in that relationship. Our mission is to equip 
                churches with the tools, training, and resources they need to build lasting 
                faith foundations in the next generation.
              </p>
              
              <div className="mt-16 p-8 lg:p-12 bg-primary text-primary-foreground rounded-3xl">
                <blockquote className="text-2xl lg:text-3xl italic">
                  &ldquo;Train up a child in the way he should go; even when he is old he will not depart from it.&rdquo;
                </blockquote>
                <p className="mt-4 text-primary-foreground/70 font-semibold uppercase tracking-wider">
                  Proverbs 22:6
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-[#00C9B7] uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-primary">
                What Drives Us
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Gospel-Centered", description: "Everything we create points children to the saving grace of Jesus Christ.", color: "#00C9B7" },
                { title: "Church-Focused", description: "We exist to serve and strengthen local church children's ministries.", color: "#7ED321" },
                { title: "Excellence", description: "We strive for the highest quality in all our curriculum and resources.", color: "#FF7B6F" },
                { title: "Accessibility", description: "We believe resources should be freely available - the Gospel is free!", color: "#A78BFA" },
              ].map((value) => (
                <div key={value.title} className="text-center p-6">
                  <div 
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: value.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-[#FF7B6F] uppercase tracking-wider">
                Our Impact
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-primary">
                By God&apos;s Grace
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "15+", label: "Years of Ministry", color: "#00C9B7" },
                { value: "5000+", label: "Leaders Trained", color: "#7ED321" },
                { value: "500+", label: "Churches Equipped", color: "#FF7B6F" },
                { value: "50K+", label: "Children Reached", color: "#A78BFA" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-8 bg-card rounded-3xl">
                  <div 
                    className="text-5xl lg:text-6xl font-bold mb-3"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
