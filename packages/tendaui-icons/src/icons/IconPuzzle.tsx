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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.66 5q.34-.68.34-1.5A3.5 3.5 0 1 0 8.34 5H5a2 2 0 0 0-2 2v3.34Q3.68 10 4.5 10A3.5 3.5 0 1 1 3 16.66V21c0 1.1.9 2 2 2h13a2 2 0 0 0 2-2v-4.04q.24.04.5.04a3.5 3.5 0 1 0-.5-6.96V7a2 2 0 0 0-2-2z"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "puzzle");
export default IconComponent;
