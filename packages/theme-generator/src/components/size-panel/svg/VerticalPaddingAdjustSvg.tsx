import React, { useMemo } from "react";

interface VerticalPaddingAdjustSvgProps {
  size?: number;
}

const VerticalPaddingAdjustSvg: React.FC<VerticalPaddingAdjustSvgProps> = ({ size = 2 }) => {
  const height = useMemo(() => {
    return Math.min(parseInt(String(size), 10) + 2, 12);
  }, [size]);

  const viewHeight = useMemo(() => {
    return Math.min(12 + height * 2, 36);
  }, [height]);

  return (
    <svg width="12" height={viewHeight} viewBox={`0 0 12 ${viewHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d={`M0 3C0 1.34315 1.34315 0 3 0H9C10.6569 0 12 1.34315 12 3V${4 + height}H0V3Z`}
        fill="#D54941"
        fillOpacity="0.16"
      />
      <rect x="4" width="4" height="2" fill="#F78D94" />
      <rect x="5" y="2" width="2" height={height} fill="#F78D94" />
      <rect x="4" y={height + 2} width="4" height="2" fill="#F78D94" />
      <path
        d={`M0 ${height + 10}H12V${viewHeight - 3}C12 ${viewHeight - 2}.6569 10.6569 ${viewHeight} 9 ${viewHeight}H3C1.34315 ${viewHeight} 0 ${viewHeight - 2}.6569 0 ${viewHeight - 3}V${height + 10}Z`}
        fill="#D54941"
        fillOpacity="0.16"
      />
      <rect x="4" y={height + 10} width="4" height="2" fill="#F78D94" />
      <rect x="5" y={height + 12} width="2" height={height} fill="#F78D94" />
      <rect x="4" y={viewHeight - 2} width="4" height="2" fill="#F78D94" />
    </svg>
  );
};

export default VerticalPaddingAdjustSvg;
