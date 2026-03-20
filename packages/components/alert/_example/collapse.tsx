import React from "react";
import { Alert } from "@tendaui/react";

export default function Collapse() {
  const message = [
    "1.这是一条普通的消息提示描述，",
    "2.这是一条普通的消息提示描述，",
    "3.这是一条普通的消息提示描述，",
    "4.这是一条普通的消息提示描述，",
    "5.这是一条普通的消息提示描述，"
  ];
  return (
    <Alert message={message} maxLine={2} closeBtn />
  );
}