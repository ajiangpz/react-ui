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
        d="M6 1a2 2 0 0 0-2 2v18c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 2h12v10H6zm0 12v6h12v-6zM9.5 5a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2zM12 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "server_stroked");
export default IconComponent;
