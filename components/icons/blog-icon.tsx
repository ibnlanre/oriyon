import type { SVGProps } from "react";

export const BlogIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 13.5 15"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M1.5 4.5v9H12v-9zm0-1.5H12V1.5H1.5zm11.25 12h-12a.75.75 0 0 1-.75-.75V.75A.75.75 0 0 1 .75 0h12a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75M3 6h3v3H3zm0 4.5h7.5V12H3zm4.5-3.75h3v1.5h-3z"
    />
  </svg>
);
