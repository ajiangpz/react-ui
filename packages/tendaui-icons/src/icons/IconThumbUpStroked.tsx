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
        d="m11.42 2.1-.83-.4L6.42 9H3.2C2.54 9 2 9.54 2 10.2v10.6c0 .66.54 1.2 1.2 1.2h14.47q.98.01 1.6-.4c.38-.23.66-.61.72-1.06a252 252 0 0 0 1.77-7.79c.13-.68.24-1.32.24-1.68 0-.77-.3-1.38-.76-1.79a2.2 2.2 0 0 0-1.4-.53h-6.5l.19-1.16.03-.17c.13-.76.27-1.6.27-2.17 0-.97-.58-1.72-1.05-2.18a5 5 0 0 0-1.36-.98M6 20v-9H4v9zm2 0h9.67q.28 0 .4-.04a250 250 0 0 0 1.73-7.58q.2-1.11.2-1.31t-.04-.22l-.03-.06-.06-.03-.04-.01h-8.58v-1c0-.7.17-1.68.3-2.5v-.02c.16-.89.28-1.6.28-1.98 0-.16-.1-.42-.45-.76l-.05-.05L8 10.27z"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "thumb_up_stroked");
export default IconComponent;
