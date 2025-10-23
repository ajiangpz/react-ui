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
        d="m20.56 9.66-7.8 8.97a1 1 0 0 1-1.51 0L3.44 9.66A1 1 0 0 1 4.19 8h15.62a1 1 0 0 1 .75 1.66"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "tree_triangle_down");
export default IconComponent;
