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
        d="M8 4c1.46 0 2.82.39 4 1.07a8 8 0 1 1 0 13.86A8 8 0 1 1 8 4m8 14a6 6 0 1 0-3.97-10.5h2.59q.47.7.8 1.5H10.8q-.28.48-.46 1h5.4q.2.73.24 1.5h-5.96a6 6 0 0 0 0 1h5.96a8 8 0 0 1-.23 1.5h-5.4q.17.52.45 1h4.62a8 8 0 0 1-.8 1.5h-2.59A6 6 0 0 0 16 18"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "similarity");
export default IconComponent;
