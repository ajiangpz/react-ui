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
        d="M5 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2M2 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-3-1a3 3 0 1 1 6 0 3 3 0 0 1-6 0m2 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m7-10a1 1 0 1 1 0-2 1 1 0 0 1 0 2M9 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m2 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-3-1a3 3 0 1 1 6 0 3 3 0 0 1-6 0m7-14a3 3 0 1 1 6 0 3 3 0 0 1-6 0m2 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-3-1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "nine_grid_stroked");
export default IconComponent;
