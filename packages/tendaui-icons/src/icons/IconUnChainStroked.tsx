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
        d="M8 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m6.12 3.64a3 3 0 1 1 4.24 4.24L16.24 12a1 1 0 0 0 1.42 1.41l2.12-2.12a5 5 0 0 0-7.07-7.07l-2.12 2.12A1 1 0 0 0 12 7.76zM9.88 18.36a3 3 0 1 1-4.24-4.24L7.76 12a1 1 0 1 0-1.42-1.41L4.22 12.7a5 5 0 0 0 7.07 7.07l2.12-2.12A1 1 0 0 0 12 16.24zM15 21a1 1 0 1 0 2 0v-3a1 1 0 1 0-2 0zM2 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m19 9a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2z"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "un_chain_stroked");
export default IconComponent;
