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
      <path d="M3 13a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2z" fill="currentColor" />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "minus_stroked");
export default IconComponent;
