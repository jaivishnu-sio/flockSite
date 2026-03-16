"use client";

import Image from "next/image";
import Link from "next/link";

export function AboutUs() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Founders Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-card">
              <Image
                src="/images/ministry-3.png"
                alt="Flock Founders"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00C9B7]/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#7ED321]/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-[#00C9B7] uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
              Meet the Heart Behind Flock
            </h2>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Flock was founded with a simple yet powerful vision: to ensure that no child 
              who encounters the Gospel through VBS is left without continued spiritual nurture. 
              Our founders have dedicated their lives to children&apos;s ministry, training thousands 
              of volunteers and reaching countless young hearts.
            </p>
            
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              With over 15 years of experience in children&apos;s evangelism and discipleship across 
              India, we understand the unique challenges churches face in sustaining engagement 
              after VBS ends. That&apos;s why we created Flock - a comprehensive solution that bridges 
              the gap between catching and nurturing.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#00C9B7]">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Years of Ministry</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#7ED321]">5000+</div>
                <div className="text-sm text-muted-foreground mt-1">Leaders Trained</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#A78BFA]">50K+</div>
                <div className="text-sm text-muted-foreground mt-1">Children Reached</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link 
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#00C9B7] text-white rounded-full font-semibold hover:bg-[#00C9B7]/90 transition-colors"
              >
                Know More About Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
