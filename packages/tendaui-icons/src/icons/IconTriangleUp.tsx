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
        d="m2.17 17.4 9.02-12.3a1 1 0 0 1 1.62 0l9.02 12.3a1 1 0 0 1-.8 1.6H2.97a1 1 0 0 1-.8-1.6"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "triangle_up");
export default IconComponent;
