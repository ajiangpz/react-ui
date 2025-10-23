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
        d="M21.14 4.41 19.73 3a2 2 0 0 0-2.83 0l-1.41 1.41-.71.71L8.3 11.6a1 1 0 0 0-.28.53l-.6 3.43a1 1 0 0 0 1.16 1.16l3.43-.6a1 1 0 0 0 .53-.28l6.47-6.47.7-.7 1.42-1.42a2 2 0 0 0 0-2.83m-2.12 2.13.7-.71-1.4-1.42-.71.71zm-1.41 1.41-1.42-1.41-6.24 6.24-.3 1.72 1.71-.3zM2 5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H4v14h14v-6a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "edit_2_stroked");
export default IconComponent;
