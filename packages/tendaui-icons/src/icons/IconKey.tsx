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
        d="M23 8.5a7.5 7.5 0 0 1-11.4 6.4l-.6.6V19H7v4H2v-4l6.91-6.91A7.5 7.5 0 1 1 23 8.5m-4-1a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "key");
export default IconComponent;
