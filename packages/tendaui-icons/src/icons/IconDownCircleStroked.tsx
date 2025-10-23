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
        d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-11a11 11 0 1 0 0 22 11 11 0 0 0 0-22m-3.18 9.3a1 1 0 1 0-1.42 1.4l3.9 3.9a1 1 0 0 0 1.4 0l3.9-3.9a1 1 0 0 0-1.42-1.4L12 13.46z"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "down_circle_stroked");
export default IconComponent;
