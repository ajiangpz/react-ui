import { Grid } from './Grid.js';
import { GridItem } from './GridItem.js';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-C52Ear6B.js';
import '@babel/runtime/helpers/typeof';
import 'clsx';
import '@babel/runtime/helpers/slicedToArray';

var meta = {
  title: "Layout/GridItem",
  component: GridItem,
  tags: ["autodocs"],
  decorators: [function (Story) {
    return /* @__PURE__ */React.createElement(Grid, {
      cols: 12,
      gap: 4
    }, /* @__PURE__ */React.createElement(Story, null));
  }]
};
var Basic = {
  args: {
    span: 6,
    children: /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-20 text-center flex items-center justify-center text-white"
    }, "\u5360\u636E 6 \u5217")
  }
};
var DifferentSpans = {
  render: function render() {
    return /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement(GridItem, {
      span: 12
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-20 text-center flex items-center justify-center text-white"
    }, "span: 12 (\u5360\u6EE1)")), /* @__PURE__ */React.createElement(GridItem, {
      span: 6
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-20 text-center flex items-center justify-center text-white"
    }, "span: 6 (\u4E00\u534A)")), /* @__PURE__ */React.createElement(GridItem, {
      span: 6
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-20 text-center flex items-center justify-center text-white"
    }, "span: 6 (\u4E00\u534A)")), /* @__PURE__ */React.createElement(GridItem, {
      span: 4
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-20 text-center flex items-center justify-center text-white"
    }, "span: 4 (\u4E09\u5206\u4E4B\u4E00)")), /* @__PURE__ */React.createElement(GridItem, {
      span: 4
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-20 text-center flex items-center justify-center text-white"
    }, "span: 4 (\u4E09\u5206\u4E4B\u4E00)")), /* @__PURE__ */React.createElement(GridItem, {
      span: 4
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-20 text-center flex items-center justify-center text-white"
    }, "span: 4 (\u4E09\u5206\u4E4B\u4E00)")));
  }
};
var ResponsiveLayout = {
  render: function render() {
    return /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        // 移动端占满
        sm: 6,
        // 平板占一半
        lg: 4
        // 桌面占三分之一
      }
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-20 text-center flex items-center justify-center text-white"
    }, "\u54CD\u5E94\u5F0F\u5E03\u5C40 1")), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        sm: 6,
        lg: 4
      }
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-20 text-center flex items-center justify-center text-white"
    }, "\u54CD\u5E94\u5F0F\u5E03\u5C40 2")), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        sm: 6,
        lg: 4
      }
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-20 text-center flex items-center justify-center text-white"
    }, "\u54CD\u5E94\u5F0F\u5E03\u5C40 3")));
  }
};
var MobileFirstDesign = {
  render: function render() {
    return /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        md: 4
      }
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-green-500 h-96 text-center flex items-center justify-center text-white"
    }, "\u4FA7\u8FB9\u680F")), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        md: 8
      }
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-96 text-center flex items-center justify-center text-white"
    }, "\u4E3B\u5185\u5BB9\u533A")));
  }
};
var ComplexLayout = {
  render: function render() {
    return /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement(GridItem, {
      span: 12
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-20 text-center flex items-center justify-center text-white"
    }, "\u5934\u90E8\u6A2A\u5E45")), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        lg: 4
      }
    }, /* @__PURE__ */React.createElement("div", {
      className: "space-y-4"
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-green-500 h-24 text-center flex items-center justify-center text-white"
    }, "\u4FA7\u8FB9\u680F\u90E8\u4EF6 1"), /* @__PURE__ */React.createElement("div", {
      className: "bg-green-500 h-24 text-center flex items-center justify-center text-white"
    }, "\u4FA7\u8FB9\u680F\u90E8\u4EF6 2"), /* @__PURE__ */React.createElement("div", {
      className: "bg-green-500 h-24 text-center flex items-center justify-center text-white"
    }, "\u4FA7\u8FB9\u680F\u90E8\u4EF6 3"))), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        lg: 8
      }
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-96 text-center flex items-center justify-center text-white"
    }, "\u4E3B\u8981\u5185\u5BB9\u533A")), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        sm: 6,
        lg: 3
      }
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-32 text-center flex items-center justify-center text-white"
    }, "\u5E95\u90E8\u5361\u7247 1")), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        sm: 6,
        lg: 3
      }
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-32 text-center flex items-center justify-center text-white"
    }, "\u5E95\u90E8\u5361\u7247 2")), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        sm: 6,
        lg: 3
      }
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-32 text-center flex items-center justify-center text-white"
    }, "\u5E95\u90E8\u5361\u7247 3")), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        sm: 6,
        lg: 3
      }
    }, /* @__PURE__ */React.createElement("div", {
      className: "bg-blue-500 h-32 text-center flex items-center justify-center text-white"
    }, "\u5E95\u90E8\u5361\u7247 4")));
  }
};

export { Basic, ComplexLayout, DifferentSpans, MobileFirstDesign, ResponsiveLayout, meta as default };
//# sourceMappingURL=GridItem.stories.js.map
