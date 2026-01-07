import React, { useMemo } from "react";

interface HorizontalPaddingAdjustSvgProps {
  size?: number;
}

const HorizontalPaddingAdjustSvg: React.FC<HorizontalPaddingAdjustSvgProps> = ({ size = 4 }) => {
  const width = useMemo(() => {
    return Math.min(parseInt(String(size), 10) / 2, 30);
  }, [size]);

  const viewWidth = useMemo(() => {
    return Math.min(12 + width * 2, 72);
  }, [width]);

  return (
    <svg
      width={viewWidth}
      height="12"
      viewBox={`0 0 ${viewWidth} 12`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M0 3C0 1.34315 1.34315 0 3 0H${4 + width}V12H3C1.34315 12 0 10.6569 0 9V3Z`}
        fill="#D54941"
        fillOpacity="0.16"
      />
      <rect y="4" width="2" height="4" fill="#F78D94" />
      <rect x="2" y="5" width={width} height="2" fill="#F78D94" />
      <rect x={2 + width} y="4" width="2" height="4" fill="#F78D94" />
      <path
        d={`M${8 + width} 0H${viewWidth - 3}C${viewWidth - 2}.6569 0 ${viewWidth} 1.34315 ${viewWidth} 3V9C${viewWidth} 10.6569 ${viewWidth - 2}.6569 12 ${viewWidth - 3} 12H${8 + width}V0Z`}
        fill="#D54941"
        fillOpacity="0.16"
      />
      <rect x={8 + width} y="4" width="2" height="4" fill="#F78D94" />
      <rect x={10 + width} y="5" width={width} height="2" fill="#F78D94" />
      <rect x={viewWidth - 2} y="4" width="2" height="4" fill="#F78D94" />
    </svg>
  );
};

export default HorizontalPaddingAdjustSvg;

