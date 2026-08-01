import { Brain, Briefcase, GraduationCap, HandHeart, RocketLaunch, Sparkle, Trophy, Users } from "@phosphor-icons/react";
import { Reveal } from "../reveal";
import { SectionHead } from "../ui/SectionHead";

const impactCards = [
  { label: "Technical Sessions Conducted", value: "40+", icon: <Brain size={20} /> },
  { label: "Students Trained", value: "500+", icon: <GraduationCap size={20} /> },
  { label: "Learning Hours", value: "2k+", icon: <Sparkle size={20} /> },
  { label: "Industry Experts Invited", value: "25+", icon: <Briefcase size={20} /> },
  { label: "Projects Built", value: "80+", icon: <RocketLaunch size={20} /> },
  { label: "Certificates Issued", value: "300+", icon: <Trophy size={20} /> },
  { label: "Student Coordinators", value: "18+", icon: <HandHeart size={20} /> },
  { label: "Community Contributors", value: "100+", icon: <Users size={20} /> },
];

export function ImpactDashboardSection() {
  return (
    <section id="community-impact" className="section impact-dashboard">
      <SectionHead
        eyebrow="Community impact"
        title="A growing network of builders and leaders."
        aside="We measure progress through real engagement, skill growth, and shared impact across campus and beyond."
      />
      <div className="impact-grid">
        {impactCards.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.04} className="impact-card">
            <div className="impact-icon">{item.icon}</div>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
