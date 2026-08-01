import { ArrowRight } from "@phosphor-icons/react";
import { Reveal } from "../reveal";

export function JoinSection() {
  return (
    <section id="join" className="cta">
      <div className="orb" />
      <Reveal>
        <span className="eyebrow">Your next chapter</span>
        <h2>
          The future needs
          <br />
          <em>AI builders.</em>
        </h2>
        <p>Become one of them.</p>
        <a className="button light" href="mailto:superai@tcetmumbai.in">
          Join SuperAI <ArrowRight />
        </a>
      </Reveal>
    </section>
  );
}
