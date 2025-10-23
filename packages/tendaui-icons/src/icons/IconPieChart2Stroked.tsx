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
        d="M11 3.05a9 9 0 1 0 6.62 15.98l-6.47-6.47a.5.5 0 0 1-.15-.35zm2 0V11h7.95A9 9 0 0 0 13 3.05M14.41 13l4.62 4.62A9 9 0 0 0 20.95 13zM1 12a11 11 0 1 1 22 0 11 11 0 0 1-22 0"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "pie_chart_2_stroked");
export default IconComponent;
