import { Header } from "@/components/header";
import { Announcements } from "@/components/announcements";
import { Hero } from "@/components/hero";
import { Challenge } from "@/components/challenge";
import { Approach } from "@/components/approach";
import { Curriculum } from "@/components/curriculum";
import { Training } from "@/components/training";
import { MobileApp } from "@/components/mobile-app";
import { PartnerPreview } from "@/components/partner-preview";
import { Audience } from "@/components/audience";
import { Mission } from "@/components/mission";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Announcements />
        <Challenge />
        <Approach />
        <Curriculum />
        <Training />
        <MobileApp />
        <PartnerPreview />
        <Audience />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
