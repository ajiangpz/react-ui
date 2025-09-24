import { Grid } from './Grid.js';
import { GridItem } from './GridItem.js';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-C52Ear6B.js';
import '@babel/runtime/helpers/typeof';
import 'clsx';
import '@babel/runtime/helpers/slicedToArray';

var meta = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    cols: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    gap: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16]
    }
  }
};
var Default = {
  args: {
    cols: 12,
    gap: 2,
    children: /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement(GridItem, {
      span: 2,
      className: "bg-primary text-primary-foreground h-20 text-center flex items-center justify-center"
    }, "1"), /* @__PURE__ */React.createElement(GridItem, {
      span: 2,
      className: "bg-primary text-primary-foreground h-20 text-center flex items-center justify-center"
    }, "2"), /* @__PURE__ */React.createElement(GridItem, {
      span: 2,
      className: "bg-primary text-primary-foreground h-20 text-center flex items-center justify-center"
    }, "3"), /* @__PURE__ */React.createElement(GridItem, {
      span: 2,
      className: "bg-primary text-primary-foreground h-20 text-center flex items-center justify-center"
    }, "4"), /* @__PURE__ */React.createElement(GridItem, {
      span: 2,
      className: "bg-primary text-primary-foreground h-20 text-center flex items-center justify-center"
    }, "5"), /* @__PURE__ */React.createElement(GridItem, {
      span: 2,
      className: "bg-primary text-primary-foreground h-20 text-center flex items-center justify-center"
    }, "6"), /* @__PURE__ */React.createElement(GridItem, {
      span: 2,
      className: "bg-primary text-primary-foreground h-20 text-center flex items-center justify-center"
    }, "7"), /* @__PURE__ */React.createElement(GridItem, {
      span: 2,
      className: "bg-primary text-primary-foreground h-20 text-center flex items-center justify-center"
    }, "8"))
  }
};
var Responsive = {
  args: {
    cols: 12,
    gap: 4,
    children: /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        // 移动端（<640px）占满宽度
        sm: 6,
        // ≥640px 时占一半
        md: 4,
        // ≥768px 时占三分之一
        lg: 3
        // ≥1024px 时占四分之一
      },
      className: "bg-blue-500 h-20 text-center flex items-center justify-center"
    }, "\u54CD\u5E94\u5F0F\u5361\u7247 1"), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        sm: 6,
        md: 4,
        lg: 3
      },
      className: "bg-blue-500 h-20 text-center flex items-center justify-center"
    }, "\u54CD\u5E94\u5F0F\u5361\u7247 2"), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        sm: 6,
        md: 4,
        lg: 3
      },
      className: "bg-blue-500 h-20 text-center flex items-center justify-center"
    }, "\u54CD\u5E94\u5F0F\u5361\u7247 3"), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        sm: 6,
        md: 4,
        lg: 3
      },
      className: "bg-blue-500 h-20 text-center flex items-center justify-center"
    }, "\u54CD\u5E94\u5F0F\u5361\u7247 4"))
  }
};
var MobileFirst = {
  args: {
    cols: 12,
    gap: 4,
    children: /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        // 移动端默认占满
        sm: 6
        // 小屏幕占一半
      },
      className: "bg-blue-500 h-20 text-center flex items-center justify-center"
    }, "\u79FB\u52A8\u7AEF\u4F18\u5148 1"), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 12,
        sm: 6
      },
      className: "bg-blue-500 h-20 text-center flex items-center justify-center"
    }, "\u79FB\u52A8\u7AEF\u4F18\u5148 2"), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 6,
        // 移动端占一半
        md: 4
        // 平板占三分之一
      },
      className: "bg-blue-500 h-20 text-center flex items-center justify-center"
    }, "\u79FB\u52A8\u7AEF\u4F18\u5148 3"), /* @__PURE__ */React.createElement(GridItem, {
      span: {
        base: 6,
        md: 4
      },
      className: "bg-blue-500 h-20 text-center flex items-center justify-center"
    }, "\u79FB\u52A8\u7AEF\u4F18\u5148 4"))
  }
};

export { Default, MobileFirst, Responsive, meta as default };
//# sourceMappingURL=Grid.stories.js.map
