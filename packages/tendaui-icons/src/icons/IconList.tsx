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
      <g opacity={0.99}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.5 3a1.5 1.5 0 1 0 0 3h11a1.5 1.5 0 0 0 0-3zM8 11.5c0-.83.67-1.5 1.5-1.5h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 8 11.5m0 7c0-.83.67-1.5 1.5-1.5h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 8 18.5m-2-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "list");
export default IconComponent;
