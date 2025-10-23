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
        d="M12 3a5 5 0 0 0-5 5.07 7 7 0 0 1 5 1.18 7 7 0 0 1 5-1.18V8a5 5 0 0 0-5-5m6.97 5.66L19 8a7 7 0 1 0-13.97.66A7 7 0 1 0 12 20.75a7 7 0 1 0 6.97-12.09m-2.4 1.37a5 5 0 0 0-3.07.64q.6.76.98 1.67a5 5 0 0 0 2.09-2.3m-6.07.64a5 5 0 0 0-3.07-.64 5 5 0 0 0 2.1 2.31 7 7 0 0 1 .97-1.67m.93 2.3A5 5 0 0 1 12 12a5 5 0 0 1 .57.97 5 5 0 0 1-1.14 0m-2.4 1.37a7 7 0 0 1-3.5-3.68 5 5 0 1 0 4.97 8.67 7 7 0 0 1-1.47-4.99M12 18a5 5 0 0 1-1-3.07 7 7 0 0 0 2 0V15c0 1.13-.37 2.16-1 3m1.5 1.33a7 7 0 0 0 1.47-4.99 7 7 0 0 0 3.5-3.68 5 5 0 1 1-4.97 8.67"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "venn_chart_stroked");
export default IconComponent;
