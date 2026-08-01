import { ArrowDown, ArrowRight } from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "../reveal";
import { Image } from "../ui/Image";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, 110]);

  return (
    <section className="hero">
      <div className="hero-grid" />
      <motion.div className="hero-art" style={{ y: heroY }}>
        <Image
          src="/images/hero-neural.png"
          alt="Abstract luminous neural sphere"
          fill
          priority
          sizes="(max-width: 800px) 100vw, 65vw"
        />
      </motion.div>
      <div className="hero-shade" />
      <div className="hero-copy">
        <Reveal>
          <span className="kicker">
            <b />
            Official TCET AI & ML community
          </span>
          <h1>
            <span>BUILD.</span>
            <span>LEARN.</span>
            <span>LEAD.</span>
          </h1>
          <div className="hero-actions">
            <a className="button primary" href="#join">
              Join community <ArrowRight />
            </a>
            <a className="button quiet" href="#work">
              Explore what we do
            </a>
          </div>
        </Reveal>
      </div>
      <a className="scroll-cue" href="#impact">
        <span>Scroll to discover</span>
        <ArrowDown />
      </a>
      <p className="hero-index">SUPERAI / 001</p>
    </section>
  );
}
