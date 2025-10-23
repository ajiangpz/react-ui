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
        d="M7 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.5 4.5a4.5 4.5 0 1 1 6 4.24v4.23a19 19 0 0 1 3.87-.51l.28-.02a14 14 0 0 0 3.6-.54 4.5 4.5 0 1 1 3.54.41q-.21.63-.63 1.14a4.5 4.5 0 0 1-1.94 1.3c-1.32.48-3 .6-4.37.68l-.11.01c-1.3.09-2.37.16-3.19.35a4.5 4.5 0 1 1-4.05-.53V8.74a4.5 4.5 0 0 1-3-4.24m16 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "source_control");
export default IconComponent;
