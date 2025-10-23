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
        d="M6.14 3.8a29 29 0 0 1 6.6 7.63l1.7-1.67a8 8 0 0 1 2.82-1.83 12 12 0 0 0-2.32-4.28.7.7 0 0 0-.53-.25H6.28c-.21 0-.3.27-.14.4"
        fill="currentColor"
      />
      <path d="m20.57 14.2.01-.02.04-.07z" fill="currentColor" />
      <path
        d="M11.04 14.56c1.23.52 2.34.97 3.65 1.32a4.75 4.75 0 0 0 5.63-2.4l1.32-2.63q.45-.96 1.12-1.78a6 6 0 0 0-2.3-.44c-1.9 0-3.7.73-5.06 2.06l-2.02 2q-1.08 1.05-2.34 1.87"
        fill="currentColor"
      />
      <path d="M20.8 13.78v-.02l.01-.01q0 0-.02.03" fill="currentColor" />
      <path
        d="M1.63 9.75a.23.23 0 0 0-.4.16v7.96q.02.36.3.56a13 13 0 0 0 14.08.2c.78-.5 1.39-.92 2.04-1.55q-1.6.47-3.37.01A29 29 0 0 1 1.63 9.75"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "feishu_logo");
export default IconComponent;
