import React, { useMemo } from "react";

interface SizeAdjustSvgProps {
  size?: number;
}

const SizeAdjustSvg: React.FC<SizeAdjustSvgProps> = ({ size = 16 }) => {
  const height = useMemo(() => {
    return Math.min(parseInt(String(size), 10) / 2, 80);
  }, [size]);

  return (
    <svg
      width="8"
      height={height}
      viewBox={`0 0 8 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="8" height={height} rx="3" fill="#F78D94" />
    </svg>
  );
};

export default SizeAdjustSvg;

