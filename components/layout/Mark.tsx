import { Image } from "../ui/Image";

export function Mark() {
  return (
    <a href="#top" className="mark" aria-label="SuperAI home">
      <Image src="/images/superai-logo.png" alt="SuperAI" width={34} height={34} />
      <span>SUPERAI</span>
    </a>
  );
}
