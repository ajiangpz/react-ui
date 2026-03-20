import React from "react";
import IPInput from "../IPInput";

const DefaultExample = () => (
  <IPInput
    placeholder="192.168.0.1"
    allowIPv6={false}
    allowCIDR={false}
  />
);

export default DefaultExample;