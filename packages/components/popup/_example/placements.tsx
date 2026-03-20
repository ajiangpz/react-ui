import React from "react";
import { Popup, Button } from "@tendaui/react";

const PlacementsDemo = () => {
  const popupContent = (text: string) => <div style={{ padding: "8px 12px", fontSize: "12px" }}>{text}</div>;

  return (
    <div style={{ padding: "80px 120px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "8px" }}>
        <Popup placement="top-left" content={popupContent("top-left")} showArrow trigger="hover">
          <Button size="small">TL</Button>
        </Popup>
        <Popup placement="top" content={popupContent("top")} showArrow trigger="hover">
          <Button size="small">Top</Button>
        </Popup>
        <Popup placement="top-right" content={popupContent("top-right")} showArrow trigger="hover">
          <Button size="small">TR</Button>
        </Popup>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", width: "280px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Popup placement="left-top" content={popupContent("left-top")} showArrow trigger="hover">
            <Button size="small">LT</Button>
          </Popup>
          <Popup placement="left" content={popupContent("left")} showArrow trigger="hover">
            <Button size="small">Left</Button>
          </Popup>
          <Popup placement="left-bottom" content={popupContent("left-bottom")} showArrow trigger="hover">
            <Button size="small">LB</Button>
          </Popup>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Popup placement="right-top" content={popupContent("right-top")} showArrow trigger="hover">
            <Button size="small">RT</Button>
          </Popup>
          <Popup placement="right" content={popupContent("right")} showArrow trigger="hover">
            <Button size="small">Right</Button>
          </Popup>
          <Popup placement="right-bottom" content={popupContent("right-bottom")} showArrow trigger="hover">
            <Button size="small">RB</Button>
          </Popup>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
        <Popup placement="bottom-left" content={popupContent("bottom-left")} showArrow trigger="hover">
          <Button size="small">BL</Button>
        </Popup>
        <Popup placement="bottom" content={popupContent("bottom")} showArrow trigger="hover">
          <Button size="small">Bottom</Button>
        </Popup>
        <Popup placement="bottom-right" content={popupContent("bottom-right")} showArrow trigger="hover">
          <Button size="small">BR</Button>
        </Popup>
      </div>
    </div>
  );
};

export default PlacementsDemo;