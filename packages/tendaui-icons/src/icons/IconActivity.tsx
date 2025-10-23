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
        d="M12 1a1.5 1.5 0 0 0 0 3 8 8 0 1 1-4.75 14.44 1.5 1.5 0 1 0-1.79 2.4A11 11 0 1 0 12 1M7.5 5.2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-3 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8.5-9a1.5 1.5 0 0 0-3 0V12q.01.62.44 1.06l3 3a1.5 1.5 0 0 0 2.12-2.12l-2.56-2.56z"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "activity");
export default IconComponent;
