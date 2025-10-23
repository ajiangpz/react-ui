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
        d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22m5-8q.72 0 1.39-.14a7 7 0 1 1-7.78-9.72Q10.01 6.46 10 8a7 7 0 0 0 7 7"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "moon");
export default IconComponent;
