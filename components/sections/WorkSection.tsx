import { Briefcase, Cpu, RocketLaunch, Users } from "@phosphor-icons/react";
import { Reveal } from "../reveal";
import { SectionHead } from "../ui/SectionHead";

const featureCards = [
  {
    title: "Technical Learning",
    icon: <Cpu size={22} />,
    points: ["Peer Learning Sessions", "AI Workshops", "Hands-on Labs", "Coding Competitions"],
  },
  {
    title: "Professional Growth",
    icon: <Briefcase size={22} />,
    points: ["Industry Expert Talks", "Mentorship Programs", "Placement Preparation", "Resume & Career Guidance"],
  },
  {
    title: "Innovation",
    icon: <RocketLaunch size={22} />,
    points: ["Hackathons", "Research Initiatives", "Open Source Contributions", "Project Showcase"],
  },
  {
    title: "Leadership",
    icon: <Users size={22} />,
    points: ["Networking Events", "Leadership Development", "Team Collaboration", "Community Building"],
  },
];

export function WorkSection() {
  return (
    <section id="work" className="section work">
      <SectionHead
        eyebrow="What we do"
        title="Modern experiences for future builders."
        aside="From peer learning to leadership, every initiative is designed to turn curiosity into real momentum."
      />
      <div className="feature-grid">
        {featureCards.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
