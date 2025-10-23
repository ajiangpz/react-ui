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
        d="M2 2.5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h7a2 2 0 0 1 2 2 1 1 0 1 0 2 0c0-1.1.9-2 2-2h7a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1h-6a5 5 0 0 0-4 2 5 5 0 0 0-4-2zm9 5a3 3 0 0 0-3-3H3v13h6q1.1.02 2 .54zm2 10.54a4 4 0 0 1 2-.54h6v-13h-5a3 3 0 0 0-3 3z"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "book_open_stroked");
export default IconComponent;
