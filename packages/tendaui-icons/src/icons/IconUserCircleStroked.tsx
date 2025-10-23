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
        d="M23.03 12.03a11 11 0 1 1-22 0 11 11 0 0 1 22 0m-4.3 6.01A9 9 0 1 0 5.3 18a7 7 0 0 1 3.57-4.25A4.49 4.49 0 0 1 12 6a4.5 4.5 0 0 1 3.13 7.74 7 7 0 0 1 3.6 4.3m-1.75 1.5a5 5 0 0 0-9.96-.03 9 9 0 0 0 9.96.04M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "user_circle_stroked");
export default IconComponent;
