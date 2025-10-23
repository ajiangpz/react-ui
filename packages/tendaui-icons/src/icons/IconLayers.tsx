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
        d="m21.21 15.05.26.14c.51.28.68.9.38 1.39q-.15.22-.38.36l-8.92 4.92c-.34.19-.76.19-1.1 0l-8.92-4.92a1 1 0 0 1-.38-1.39q.15-.22.38-.36l.26-.14 8.66 4.78c.32.17.72.18 1.05.02l.05-.02zm0-4.07.26.14c.51.29.68.91.38 1.4q-.15.22-.38.36l-8.92 4.92c-.34.18-.76.18-1.1 0l-8.92-4.92a1 1 0 0 1-.38-1.4q.15-.22.38-.36l.26-.14 8.66 4.78c.32.18.72.19 1.05.03l.05-.03zm-8.66-8.84 8.92 4.92c.51.28.68.9.38 1.39q-.15.22-.38.36l-8.92 4.92c-.34.19-.76.19-1.1 0L2.53 8.81a1 1 0 0 1-.38-1.39q.15-.22.38-.36l8.92-4.92c.34-.19.76-.19 1.1 0"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "layers");
export default IconComponent;
