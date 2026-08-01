import { Reveal } from "../reveal";
import { Image } from "../ui/Image";
import { SectionHead } from "../ui/SectionHead";
import { focus } from "../../data/site";

export function FocusSection() {
  return (
    <section id="focus" className="network-section">
      <SectionHead
        eyebrow="Areas of focus"
        title="One network. Many frontiers."
        aside="Explore the domains that shape our learning ecosystem."
      />
      <div className="knowledge-network">
        <div className="network-core">
          <Image src="/images/superai-logo.png" alt="SuperAI" width={132} height={132} />
        </div>
        {focus.map((f) => (
          <span key={f}>{f}</span>
        ))}
      </div>
    </section>
  );
}
