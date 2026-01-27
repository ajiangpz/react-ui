import React, { useMemo } from "react";
import { Popup } from "@tendaui/components";
import { handleAttach } from "../../../../common/utils";
import ShadowLayer from "../shadow-layer";
import "./index.scss";

export interface ShadowDetail {
  label: string;
  key: string;
  tips: string;
  enTips: string;
}

interface ShadowCardProps {
  shadow: string[];
  detail: ShadowDetail;
  isEn: boolean;
  onChange?: (value: string[]) => void;
}

const ShadowCard: React.FC<ShadowCardProps> = ({ shadow, detail, isEn, onChange }) => {
  const boxShadow = useMemo(() => shadow.join(","), [shadow]);

  return (
    <div className="shadow-card">
      <Popup
        placement="left"
        showArrow
        destroyOnClose
        attach={handleAttach}
        overlayStyle={{ borderRadius: "9px", padding: "12px 16px 8px" }}
        content={<ShadowLayer shadow={shadow} detail={detail} onChange={onChange} />}
      >
        <div className="shadow-card__item" style={{ boxShadow }}>
          <div className="shadow-card__title">{detail.label}:</div>
          <div className="shadow-card__tips">{isEn ? detail.enTips : detail.tips}</div>
          <div className="shadow-card__divider" />
          <div className="shadow-card__info">
            {shadow.map((value, i) => (
              <div key={i} className="shadow-card__info-item">
                {value}
                {i === shadow.length - 1 ? ";" : ","}
              </div>
            ))}
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default ShadowCard;
