import * as React from "react";
import { convertIcon } from "../components/Icon";
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      focusable={false}
      aria-hidden={true}
      {...props}
    >
      <path
        d="M19.63 8q.02.26.02.52c0 5.33-4.06 11.46-11.46 11.46-2.29 0-4.4-.66-6.19-1.8q.48.04.97.04c1.89 0 3.62-.63 5-1.72a4 4 0 0 1-3.76-2.8q.37.07.76.07.54 0 1.06-.14A4 4 0 0 1 2.8 9.68v-.05q.82.47 1.82.51a4 4 0 0 1-1.25-5.38 11.5 11.5 0 0 0 8.3 4.21q-.09-.45-.1-.92a4.03 4.03 0 0 1 6.98-2.76 8 8 0 0 0 2.55-.97c-.3.93-.93 1.72-1.77 2.22q1.23-.14 2.32-.63-.83 1.21-2.02 2.09"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "twitter");
export default IconComponent;
