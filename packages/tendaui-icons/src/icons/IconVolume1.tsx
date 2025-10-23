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
        d="M12 3a1 1 0 0 0-1.62-.78L4.65 7H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.65l5.73 4.78A1 1 0 0 0 12 21zm4.07 5.45a1.5 1.5 0 1 0-2.14 2.1 2 2 0 0 1 0 2.8 1.5 1.5 0 0 0 2.14 2.1 5 5 0 0 0 0-7"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "volume_1");
export default IconComponent;
