import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Mark } from "./Mark";

export function Footer() {
  return (
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
          <a href="mailto:superaiconnect@gmail.com">superaiconnect@gmail.com</a>
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
  );
}
