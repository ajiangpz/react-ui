import * as React from "react";
import { convertIcon } from "../components/Icon";
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      width="1em"
      height="1em"
      focusable={false}
      aria-hidden={true}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.57a2.83 2.83 0 0 1 2.84-2.82h12.23c1.53 0 2.78 1.2 2.84 2.72l3.91-1.92c.08-.04.18.02.18.11v1.77a.2.2 0 0 1-.11.18L11.1 10.9l-.04.02 10.82 5.3q.1.05.11.18v1.77c0 .1-.1.15-.18.11l-3.91-1.91a2.84 2.84 0 0 1-2.84 2.71H2.85A2.84 2.84 0 0 1 0 16.24v-1.69q0-.33.3-.46l6.48-3.18L.3 7.74a.5.5 0 0 1-.3-.46zm8.93 4.29.04-.02 7.05-3.45v-.56c0-.66-.54-1.2-1.21-1.2H3.1c-.67 0-1.22.54-1.22 1.2v.58zm0 2.1L1.9 15.41v.58c0 .66.54 1.2 1.21 1.2h11.7c.67 0 1.21-.54 1.21-1.2v-.56z"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "jianying");
export default IconComponent;
