"use client";
import type { ImgHTMLAttributes } from "react";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  Briefcase,
  Cpu,
  GraduationCap,
  HandHeart,
  RocketLaunch,
  Sparkle,
  Trophy,
  Users,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Reveal } from "./reveal";
import {
  committee,
  disciplines,
  faculty,
  focus,
  missions,
  stats,
} from "../data/site";

function Image(props: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean; sizes?: string }) {
  const { fill, priority, sizes, ...rest } = props;
  return <img {...rest} />;
}

function Mark() {
  return (
    <a href="#top" className="mark" aria-label="SuperAI home">
      <Image
        src="/images/superai-logo.png"
        alt="SuperAI"
        width={34}
        height={34}
      />
      <span>SUPERAI</span>
    </a>
  );
}
function Header() {
  return (
    <header>
      <Mark />
      <nav aria-label="Primary">
        <a href="#about">About</a>
        <a href="#focus">Focus</a>
        <a href="#upcoming-activities">Upcoming Activities</a>
        <a href="#team">Team</a>
      </nav>
      <div className="nav-actions">
        <a className="join-link" href="#join">
          Join us
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
function SectionHead({
  eyebrow,
  title,
  aside,
}: {
  eyebrow: string;
  title: string;
  aside?: string;
}) {
  return (
    <Reveal className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {aside && <p>{aside}</p>}
    </Reveal>
  );
}
export default function Site() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, 110]);
  return (
    <main id="top">
      <Header />
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
      <section id="about" className="section about">
        <SectionHead
          eyebrow="About SuperAI"
          title="Built for what the classroom can’t contain."
          aside="The official AI & Machine Learning Community of Thakur College of Engineering & Technology."
        />
        <div className="about-grid">
          <Reveal className="about-story">
            <span className="card-no">01 · What is SuperAI?</span>
            <h3>
              A student-led ecosystem for learning, building and becoming.
            </h3>
            <p>
              We bridge academic foundations with the technologies, people and
              problems shaping the real world.
            </p>
            <div className="brand-pair">
              <Image
                src="/images/superai-logo.png"
                alt="SuperAI Community logo"
                width={78}
                height={78}
              />
              <i />
              <Image
                src="/images/tcet-logo.png"
                alt="TCET logo"
                width={84}
                height={84}
              />
            </div>
          </Reveal>
          <Reveal className="vision-card">
            <span className="card-no">02 · Vision</span>
            <blockquote>
              To build one of India’s most impactful student-led Artificial
              Intelligence communities.
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
      <section id="focus" className="network-section">
        <SectionHead
          eyebrow="Areas of focus"
          title="One network. Many frontiers."
          aside="Explore the domains that shape our learning ecosystem."
        />
        <div className="knowledge-network">
          <div className="network-core">
            <Image
              src="/images/superai-logo.png"
              alt="SuperAI"
              width={132}
              height={132}
            />
          </div>
          {focus.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      </section>
      <section id="work" className="section work">
        <SectionHead
          eyebrow="What we do"
          title="Modern experiences for future builders."
          aside="From peer learning to leadership, every initiative is designed to turn curiosity into real momentum."
        />
        <div className="feature-grid">
          {[
            {
              title: "Technical Learning",
              icon: <Cpu size={22} />,
              points: [
                "Peer Learning Sessions",
                "AI Workshops",
                "Hands-on Labs",
                "Coding Competitions",
              ],
            },
            {
              title: "Professional Growth",
              icon: <Briefcase size={22} />,
              points: [
                "Industry Expert Talks",
                "Mentorship Programs",
                "Placement Preparation",
                "Resume & Career Guidance",
              ],
            },
            {
              title: "Innovation",
              icon: <RocketLaunch size={22} />,
              points: [
                "Hackathons",
                "Research Initiatives",
                "Open Source Contributions",
                "Project Showcase",
              ],
            },
            {
              title: "Leadership",
              icon: <Users size={22} />,
              points: [
                "Networking Events",
                "Leadership Development",
                "Team Collaboration",
                "Community Building",
              ],
            },
          ].map((item, i) => (
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
      <section id="community-impact" className="section impact-dashboard">
        <SectionHead
          eyebrow="Community impact"
          title="A growing network of builders and leaders."
          aside="We measure progress through real engagement, skill growth, and shared impact across campus and beyond."
        />
        <div className="impact-grid">
          {[
            {
              label: "Technical Sessions Conducted",
              value: "40+",
              icon: <Brain size={20} />,
            },
            {
              label: "Students Trained",
              value: "500+",
              icon: <GraduationCap size={20} />,
            },
            {
              label: "Learning Hours",
              value: "2k+",
              icon: <Sparkle size={20} />,
            },
            {
              label: "Industry Experts Invited",
              value: "25+",
              icon: <Briefcase size={20} />,
            },
            {
              label: "Projects Built",
              value: "80+",
              icon: <RocketLaunch size={20} />,
            },
            {
              label: "Certificates Issued",
              value: "300+",
              icon: <Trophy size={20} />,
            },
            {
              label: "Student Coordinators",
              value: "18+",
              icon: <HandHeart size={20} />,
            },
            {
              label: "Community Contributors",
              value: "100+",
              icon: <Users size={20} />,
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.04} className="impact-card">
              <div className="impact-icon">{item.icon}</div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="upcoming-activities" className="section roadmap-section">
        <SectionHead
          eyebrow="Upcoming activities"
          title="Learn. Compete. Connect. Innovate."
          aside="Explore the semester roadmap designed to strengthen technical knowledge, industry readiness, leadership, and collaborative learning."
        />
        <div className="roadmap-shell">
          <div className="roadmap-track">
            {[
              {
                date: "19 Jul 2026",
                title: "Aptitude Test – 1",
                category: "Placement Preparation",
                mode: "Online",
                description:
                  "Kickstart your placement journey with a structured aptitude assessment focused on quantitative aptitude and logical reasoning.",
                status: "Coming Soon",
                tone: "accent",
              },
              {
                date: "09 Aug 2026",
                title: "Aptitude Test – 2 + Peer Learning Session 1",
                category: "Programming Fundamentals",
                mode: "Online",
                description:
                  "A combined learning session featuring an aptitude assessment followed by a hands-on peer learning workshop on Python, OOP, DBMS, and live coding.",
                status: "Coming Soon",
                tone: "violet",
              },
              {
                date: "16 Aug 2026",
                title: "Alumni Connect",
                category: "Internships & Higher Studies Guidance",
                mode: "Online",
                description:
                  "Interact with SuperAI alumni pursuing higher education or working in industry and gain guidance on internships and career planning.",
                status: "Coming Soon",
                tone: "accent",
              },
              {
                date: "21 Aug 2026",
                title: "Prompt Engineering Challenge",
                category: "Generative AI",
                mode: "Offline",
                description:
                  "Solve practical AI tasks using prompt engineering techniques and explore real-world applications of Large Language Models.",
                status: "Coming Soon",
                tone: "violet",
              },
              {
                date: "30 Aug 2026",
                title: "Competitive Coding Session & Round – 1",
                category: "Programming Competition",
                mode: "Online",
                description:
                  "Strengthen algorithmic thinking, coding speed, and problem-solving through timed programming challenges.",
                status: "Coming Soon",
                tone: "accent",
              },
              {
                date: "07 Sep 2026",
                title: "Expert Talk",
                category: "Industry Interaction",
                mode: "Offline",
                description:
                  "Hear from an industry expert about how academic concepts translate into real-world data science projects and career expectations.",
                status: "Coming Soon",
                tone: "violet",
              },
              {
                date: "13 Sep 2026",
                title: "Peer Learning Session – 2",
                category: "Emerging Technologies",
                mode: "Online",
                description:
                  "Explore IoT and Artificial Intelligence in smart agriculture while collaborating with peers on cutting-edge ideas.",
                status: "Coming Soon",
                tone: "accent",
              },
              {
                date: "16 Oct 2026",
                title: "AI Innovation Challenge",
                category: "Innovation & Research",
                mode: "Offline",
                description:
                  "Showcase AI-powered projects, technical excellence, and innovative solutions to real-world challenges.",
                status: "Registration Opens Soon",
                tone: "violet",
              },
            ].map((activity, index) => (
              <Reveal key={activity.title} delay={index * 0.04} className={`roadmap-card ${activity.tone}`}>
                <span className="roadmap-date">{activity.date}</span>
                <h3>{activity.title}</h3>
                <p className="roadmap-meta">
                  {activity.mode} • {activity.category}
                </p>
                <p>{activity.description}</p>
                <div className="roadmap-footer">
                  <span className="roadmap-status">{activity.status}</span>
                  <a href="#join">Register</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="team" className="section people">
        <SectionHead
          eyebrow="Meet our team"
          title="Guided by experience. Led by learners."
        />
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
      <footer>
        <div>
          <Mark />
          <p>
            Building future AI professionals
            <br />
            beyond the classroom.
          </p>
          <p className="address">
            Department of AI & ML
            <br />
            Thakur College of Engineering & Technology
            <br />
            Kandivali (East), Mumbai · 400101
          </p>
        </div>
        <div className="footer-links">
          <div>
            <span>Explore</span>
            <a href="#about">About</a>
            <a href="#work">What we do</a>
            <a href="#events">Events</a>
            <a href="#team">Team</a>
          </div>
          <div>
            <span>Connect</span>
            <a href="mailto:superaiconnect@gmail.com">
              superaiconnect@gmail.com
            </a>
            <a href="#">
              <InstagramLogo /> @superai_tcet
            </a>
            <a href="#">
              <LinkedinLogo /> LinkedIn
            </a>
            <a href="#">
              <GithubLogo /> GitHub
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SuperAI Community</span>
          <span>TCET · Mumbai, India</span>
        </div>
      </footer>
    </main>
  );
}
