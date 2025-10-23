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
        d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0m-9.5 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M12 5a1.9 1.9 0 0 0-1.89 2l.3 5.5a1.59 1.59 0 0 0 3.17 0l.3-5.5c.07-1.09-.8-2-1.88-2"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "upload_error");
export default IconComponent;
