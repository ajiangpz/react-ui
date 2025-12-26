import React, { useState, ReactNode } from "react";
import { IconChevronDown as ChevronDownIcon } from "@tendaui/icons";
import "./index.css";

interface CollapseProps {
  title?: ReactNode;
  subTitle?: ReactNode;
  round?: ReactNode;
  children?: ReactNode;
  defaultActive?: boolean;
}

const Collapse: React.FC<CollapseProps> = ({ title, subTitle, round, children, defaultActive = false }) => {
  const [isActive, setIsActive] = useState(defaultActive);

  return (
    <div className="common-collapse">
      <div className="common-collapse__header">
        {round && <div className="common-collapse__round">{round}</div>}
        <div className="common-collapse__text">
          <div className="common-collapse__title" onClick={() => setIsActive(!isActive)}>
            {title}
          </div>
          {subTitle && <div className="common-collapse__subtitle">{subTitle}</div>}
        </div>
        <div onClick={() => setIsActive(!isActive)} className="common-collapse__arrow-wrapper">
          <ChevronDownIcon
            className="common-collapse__arrow"
            style={{
              transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s"
            }}
          />
        </div>
      </div>
      {isActive && <div className="common-collapse__content">{children}</div>}
    </div>
  );
};

export default Collapse;
