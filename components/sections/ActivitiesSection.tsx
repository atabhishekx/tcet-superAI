import { ArrowRight } from "@phosphor-icons/react";
import { Reveal } from "../reveal";
import { SectionHead } from "../ui/SectionHead";

const activities = [
  {
    date: "19 Jul 2026",
    title: "Aptitude Test – 1",
    category: "Placement Preparation",
    mode: "Online",
    description: "Kickstart your placement journey with a structured aptitude assessment focused on quantitative aptitude and logical reasoning.",
    status: "Coming Soon",
    tone: "accent",
  },
  {
    date: "09 Aug 2026",
    title: "Aptitude Test – 2 + Peer Learning Session 1",
    category: "Programming Fundamentals",
    mode: "Online",
    description: "A combined learning session featuring an aptitude assessment followed by a hands-on peer learning workshop on Python, OOP, DBMS, and live coding.",
    status: "Coming Soon",
    tone: "violet",
  },
  {
    date: "16 Aug 2026",
    title: "Alumni Connect",
    category: "Internships & Higher Studies Guidance",
    mode: "Online",
    description: "Interact with SuperAI alumni pursuing higher education or working in industry and gain guidance on internships and career planning.",
    status: "Coming Soon",
    tone: "accent",
  },
  {
    date: "21 Aug 2026",
    title: "Prompt Engineering Challenge",
    category: "Generative AI",
    mode: "Offline",
    description: "Solve practical AI tasks using prompt engineering techniques and explore real-world applications of Large Language Models.",
    status: "Coming Soon",
    tone: "violet",
  },
  {
    date: "30 Aug 2026",
    title: "Competitive Coding Session & Round – 1",
    category: "Programming Competition",
    mode: "Online",
    description: "Strengthen algorithmic thinking, coding speed, and problem-solving through timed programming challenges.",
    status: "Coming Soon",
    tone: "accent",
  },
  {
    date: "07 Sep 2026",
    title: "Expert Talk",
    category: "Industry Interaction",
    mode: "Offline",
    description: "Hear from an industry expert about how academic concepts translate into real-world data science projects and career expectations.",
    status: "Coming Soon",
    tone: "violet",
  },
  {
    date: "13 Sep 2026",
    title: "Peer Learning Session – 2",
    category: "Emerging Technologies",
    mode: "Online",
    description: "Explore IoT and Artificial Intelligence in smart agriculture while collaborating with peers on cutting-edge ideas.",
    status: "Coming Soon",
    tone: "accent",
  },
  {
    date: "16 Oct 2026",
    title: "AI Innovation Challenge",
    category: "Innovation & Research",
    mode: "Offline",
    description: "Showcase AI-powered projects, technical excellence, and innovative solutions to real-world challenges.",
    status: "Registration Opens Soon",
    tone: "violet",
  },
];

export function ActivitiesSection() {
  return (
    <section id="upcoming-activities" className="section roadmap-section">
      <SectionHead
        eyebrow="Upcoming activities"
        title="Learn. Compete. Connect. Innovate."
        aside="Explore the semester roadmap designed to strengthen technical knowledge, industry readiness, leadership, and collaborative learning."
      />
      <div className="roadmap-shell">
        <div className="roadmap-track">
          {activities.map((activity, index) => (
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
  );
}
