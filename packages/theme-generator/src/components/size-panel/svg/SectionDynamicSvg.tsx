import React, { useMemo } from "react";

interface SectionDynamicSvgProps {
  size?: number;
}

const SectionDynamicSvg: React.FC<SectionDynamicSvgProps> = ({ size = 2 }) => {
  const actualSize = size || 2;
  const viewWidth = useMemo(() => {
    return actualSize + 2;
  }, [actualSize]);

  return (
    <svg
      width={viewWidth}
      height="8"
      viewBox={`0 0 ${actualSize} 8`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1" height="8" fill="#D54941" />
      <rect x="1" y="3" width={actualSize} height="2" fill="#D54941" />
      <rect x={actualSize - 1} width="1" height="8" fill="#D54941" />
    </svg>
  );
};

export default SectionDynamicSvg;

