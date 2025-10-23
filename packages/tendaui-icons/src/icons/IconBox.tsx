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
      <path d="m2 6 8.55-4.7a3 3 0 0 1 2.9 0L22 6l-10 5z" fill="currentColor" />
      <path d="m11 12.5-10-5v8.65a3 3 0 0 0 1.66 2.68L11 23z" fill="currentColor" />
      <path d="m23 7.5-10 5V23l8.34-4.17A3 3 0 0 0 23 16.15z" fill="currentColor" />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "box");
export default IconComponent;
