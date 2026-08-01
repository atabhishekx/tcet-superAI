import { ThemeToggle } from "../theme-toggle";
import { Mark } from "./Mark";

export function Header() {
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
