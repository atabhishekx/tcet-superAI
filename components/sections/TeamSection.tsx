import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Reveal } from "../reveal";
import { SectionHead } from "../ui/SectionHead";
import { committee, faculty } from "../../data/site";

export function TeamSection() {
  return (
    <section id="team" className="section people">
      <SectionHead eyebrow="Meet our team" title="Guided by experience. Led by learners." />
      <h3 className="team-label">Faculty leadership</h3>
      <div className="faculty-grid">
        {faculty.map((l, i) => (
          <Reveal key={l.name} delay={i * 0.1} className="faculty-card">
            <div className="photo-placeholder">
              <span>
                Photo
                <br />
                placeholder
              </span>
            </div>
            <div>
              <span>{l.role}</span>
              <h3>{l.name}</h3>
              <p>{l.detail}</p>
              <LinkedinLogo />
            </div>
          </Reveal>
        ))}
      </div>
      <h3 className="team-label committee-label">Core committee</h3>
      <div className="committee-grid">
        {committee.map((l, i) => (
          <Reveal key={l.name} delay={i * 0.05} className="committee-card">
            <div className="mini-placeholder">{l.initials}</div>
            <h3>{l.name}</h3>
            <p>{l.role}</p>
            <div>
              <LinkedinLogo />
              <GithubLogo />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
