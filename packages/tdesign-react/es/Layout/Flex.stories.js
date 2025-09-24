import { Flex } from './Flex.js';
import '../_chunks/dep-C52Ear6B.js';
import '@babel/runtime/helpers/typeof';

var meta = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "col", "row-reverse", "col-reverse"]
    },
    justify: {
      control: "select",
      options: ["start", "end", "center", "between", "around", "evenly"]
    },
    align: {
      control: "select",
      options: ["start", "end", "center", "baseline", "stretch"]
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"]
    },
    gap: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16]
    }
  }
};
var FlexItem = function FlexItem(_ref) {
  var index = _ref.index;
  return /* @__PURE__ */React.createElement("div", {
    className: "bg-primary text-primary-foreground p-4 text-center rounded w-20"
  }, "\u9879\u76EE ", index);
};
var Default = {
  args: {
    direction: "row",
    justify: "start",
    align: "center",
    className: "h-30",
    gap: 4,
    children: /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement(FlexItem, {
      index: 1
    }), /* @__PURE__ */React.createElement(FlexItem, {
      index: 2
    }), /* @__PURE__ */React.createElement(FlexItem, {
      index: 3
    }))
  }
};

export { Default, meta as default };
//# sourceMappingURL=Flex.stories.js.map
