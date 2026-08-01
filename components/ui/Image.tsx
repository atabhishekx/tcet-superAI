import type { ImgHTMLAttributes } from "react";

export function Image(props: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean; sizes?: string }) {
  const { fill, priority, sizes, ...rest } = props;
  return <img {...rest} />;
}
