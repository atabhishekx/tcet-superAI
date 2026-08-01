import { ArrowRight } from "@phosphor-icons/react";
import { Reveal } from "../reveal";
import { Image } from "../ui/Image";
import { SectionHead } from "../ui/SectionHead";
import { missions } from "../../data/site";

export function AboutSection() {
  return (
    <section id="about" className="section about">
      <SectionHead
        eyebrow="About SuperAI"
        title="Built for what the classroom can’t contain."
        aside="The official AI & Machine Learning Community of Thakur College of Engineering & Technology."
      />
      <div className="about-grid">
        <Reveal className="about-story">
          <span className="card-no">01 · What is SuperAI?</span>
          <h3>A student-led ecosystem for learning, building and becoming.</h3>
          <p>
            We bridge academic foundations with the technologies, people and problems shaping the real world.
          </p>
          <div className="brand-pair">
            <Image src="/images/superai-logo.png" alt="SuperAI Community logo" width={78} height={78} />
            <i />
            <Image src="/images/tcet-logo.png" alt="TCET logo" width={84} height={84} />
          </div>
        </Reveal>
        <Reveal className="vision-card">
          <span className="card-no">02 · Vision</span>
          <blockquote>
            To build one of India’s most impactful student-led Artificial Intelligence communities.
          </blockquote>
          <a href="#purpose">
            Know more <ArrowRight />
          </a>
        </Reveal>
        <Reveal className="mission-card">
          <span className="card-no">03 · Mission</span>
          <div className="mission-list">
            {missions.map((m, i) => (
              <span key={m}>
                <b>{String(i + 1).padStart(2, "0")}</b>
                {m}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
