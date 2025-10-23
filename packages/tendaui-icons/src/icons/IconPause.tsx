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
      <path d="M4.5 4.75a2.75 2.75 0 0 1 5.5 0v14.5a2.75 2.75 0 1 1-5.5 0z" fill="currentColor" />
      <path d="M14 4.75a2.75 2.75 0 1 1 5.5 0v14.5a2.75 2.75 0 1 1-5.5 0z" fill="currentColor" />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "pause");
export default IconComponent;
