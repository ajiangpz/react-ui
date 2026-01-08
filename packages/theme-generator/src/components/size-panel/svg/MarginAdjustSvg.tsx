import React, { useMemo } from "react";

interface MarginAdjustSvgProps {
  size?: number;
}

const MarginAdjustSvg: React.FC<MarginAdjustSvgProps> = ({ size = 2 }) => {
  const height = useMemo(() => {
    return Math.min(parseInt(String(size), 10), 12);
  }, [size]);

  const viewHeight = useMemo(() => {
    return Math.min(20 + height, 36);
  }, [height]);

  return (
    <svg width="16" height={viewHeight} viewBox={`0 0 16 ${viewHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="8" rx="3" fill="#D54941" fillOpacity="0.2" />
      <rect x="6" y="8" width="4" height="2" fill="#F78D94" />
      <rect x="7" y="10" width="2" height={height} fill="#F78D94" />
      <rect x="6" y={10 + height} width="4" height="2" fill="#F78D94" />
      <rect y={12 + height} width="16" height="8" rx="3" fill="#D54941" fillOpacity="0.2" />
    </svg>
  );
};

export default MarginAdjustSvg;
