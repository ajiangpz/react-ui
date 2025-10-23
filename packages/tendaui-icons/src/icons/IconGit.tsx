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
        d="m22.58 11.02-9.6-9.6a1.4 1.4 0 0 0-2 0l-2 1.99 2.53 2.53a1.69 1.69 0 0 1 2.14 2.14l2.43 2.44a1.68 1.68 0 0 1 1.74 2.79 1.68 1.68 0 0 1-2.75-1.83L12.79 9.2v5.98q.24.12.45.32a1.7 1.7 0 0 1-2.4 2.38 1.68 1.68 0 0 1 .56-2.75V9.1a1.68 1.68 0 0 1-.91-2.2l-2.5-2.5-6.58 6.57a1.43 1.43 0 0 0 0 2l9.6 9.61c.56.56 1.46.56 2.01 0l9.56-9.56c.56-.55.56-1.45 0-2"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "git");
export default IconComponent;
