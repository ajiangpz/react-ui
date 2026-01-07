import React, { useState, useEffect } from "react";
import SectionDynamicSvg from "../svg/SectionDynamicSvg";

interface SizeToken {
  token: string;
  name: string;
  value: string | null;
}

const sizeTokenList: SizeToken[] = [
  { token: "--td-size-1", name: "size-1", value: null },
  { token: "--td-size-2", name: "size-2", value: null },
  { token: "--td-size-3", name: "size-3", value: null },
  { token: "--td-size-4", name: "size-4", value: null },
  { token: "--td-size-5", name: "size-5", value: null },
  { token: "--td-size-6", name: "size-6", value: null },
  { token: "--td-size-7", name: "size-7", value: null },
  { token: "--td-size-8", name: "size-8", value: null },
  { token: "--td-size-9", name: "size-9", value: null },
  { token: "--td-size-10", name: "size-10", value: null },
  { token: "--td-size-11", name: "size-11", value: null },
  { token: "--td-size-12", name: "size-12", value: null },
  { token: "--td-size-13", name: "size-13", value: null },
  { token: "--td-size-14", name: "size-14", value: null },
  { token: "--td-size-15", name: "size-15", value: null },
  { token: "--td-size-16", name: "size-16", value: null },
];

const SizeDisplay: React.FC = () => {
  const [currentSizeTokenList, setCurrentSizeTokenList] = useState<SizeToken[]>(sizeTokenList);

  useEffect(() => {
    const getCurrentSizeToken = (): SizeToken[] => {
      const docStyle = getComputedStyle(document.documentElement);
      return sizeTokenList.map((v) => ({
        ...v,
        value: v.value ?? docStyle.getPropertyValue(v.token).trim(),
      }));
    };

    setCurrentSizeTokenList(getCurrentSizeToken());
  }, []);

  return (
    <div className="size-panel__token-list">
      {currentSizeTokenList.map((size, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <span>
            <SectionDynamicSvg size={parseInt(size.value || "2", 10)} />
          </span>
          <span>
            {size.name} : {size.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SizeDisplay;

