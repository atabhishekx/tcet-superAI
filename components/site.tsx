"use client";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { HeroSection } from "./sections/HeroSection";
import { ImpactSection } from "./sections/ImpactSection";
import { AboutSection } from "./sections/AboutSection";
import { FocusSection } from "./sections/FocusSection";
import { WorkSection } from "./sections/WorkSection";
import { ImpactDashboardSection } from "./sections/ImpactDashboardSection";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { TeamSection } from "./sections/TeamSection";
import { JoinSection } from "./sections/JoinSection";

export default function Site() {
  return (
    <main id="top">
      <Header />
      <HeroSection />
      <ImpactSection />
      <AboutSection />
      <FocusSection />
      <WorkSection />
      <ImpactDashboardSection />
      <ActivitiesSection />
      <TeamSection />
      <JoinSection />
      <Footer />
    </main>
  );
}
