import { Brain, Briefcase, GraduationCap, HandHeart, RocketLaunch, Sparkle, Trophy, Users } from "@phosphor-icons/react";
import { Reveal } from "../reveal";
import { SectionHead } from "../ui/SectionHead";
import { stats } from "../../data/site";

export function ImpactSection() {
  return (
    <section id="impact" className="impact section">
      <SectionHead
        eyebrow="Community, quantified"
        title="Ideas become momentum."
        aside="We create the conditions for ambitious students to move from curiosity to capability."
      />
      <div className="stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
