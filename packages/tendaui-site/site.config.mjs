export const docs = [
  {
    title: "基础",
    titleEn: "Base",
    type: "component",
    children: [
      {
        title: "Button 按钮",
        titleEn: "Button",
        name: "button",
        path: "/components/button",
        component: () => import("@tendaui/components/button/button.md"),
        componentEn: () => import("@tendaui/components/button/button.md")
      }
    ]
  },
  {
    title: "输入",
    titleEn: "Input",
    type: "component",
    children: [
      {
        title: "Checkbox 复选框",
        titleEn: "Checkbox",
        name: "checkbox",
        path: "/components/checkbox",
        component: () => import("@tendaui/components/checkbox/checkbox.md"),
        componentEn: () => import("@tendaui/components/checkbox/checkbox.md")
      },
      {
        title: "Radio 单选框",
        titleEn: "Radio",
        name: "radio",
        path: "/components/radio",
        component: () => import("@tendaui/components/radio/radio.md"),
        componentEn: () => import("@tendaui/components/radio/radio.md")
      },
      {
        title: "Switch 开关",
        titleEn: "Switch",
        name: "switch",
        path: "/components/switch",
        component: () => import("@tendaui/components/switch/switch.md"),
        componentEn: () => import("@tendaui/components/switch/switch.md")
      },
      {
        title: "Input 输入框",
        titleEn: "Input",
        name: "input",
        path: "/components/input",
        component: () => import("@tendaui/components/input/input.md"),
        componentEn: () => import("@tendaui/components/input/input.md")
      },
      {
        title: "InputNumber 数字输入框",
        titleEn: "InputNumber",
        name: "input-number",
        path: "/components/input-number",
        component: () => import("@tendaui/components/input-number/input-number.md"),
        componentEn: () => import("@tendaui/components/input-number/input-number.md")
      },
      {
        title: "IPInput IP输入框",
        titleEn: "IPInput",
        name: "ip-input",
        path: "/components/ip-input",
        component: () => import("@tendaui/components/ip-input/ip-input.md"),
        componentEn: () => import("@tendaui/components/ip-input/ip-input.md")
      }
    ]
  },
  {
    title: "布局",
    titleEn: "Layout",
    type: "component",
    children: [
      {
        title: "Layout 布局",
        titleEn: "Layout",
        name: "layout",
        path: "/components/layout",
        component: () => import("@tendaui/components/layout/layout.md"),
        componentEn: () => import("@tendaui/components/layout/layout.md")
      }
    ]
  },
  {
    title: "数据展示",
    titleEn: "Data Display",
    type: "component",
    children: [
      {
        title: "List 列表",
        titleEn: "List",
        name: "list",
        path: "/components/list",
        component: () => import("@tendaui/components/list/list.md"),
        componentEn: () => import("@tendaui/components/list/list.md")
      },
      {
        title: "Table 表格",
        titleEn: "Table",
        name: "table",
        path: "/components/table",
        component: () => import("@tendaui/components/table/table.md"),
        componentEn: () => import("@tendaui/components/table/table.md")
      },
      {
        title: "Tag 标签",
        titleEn: "Tag",
        name: "tag",
        path: "/components/tag",
        component: () => import("@tendaui/components/tag/tag.md"),
        componentEn: () => import("@tendaui/components/tag/tag.md")
      },
      {
        title: "TagInput 标签输入框",
        titleEn: "TagInput",
        name: "tag-input",
        path: "/components/tag-input",
        component: () => import("@tendaui/components/tag-input/tag-input.md"),
        componentEn: () => import("@tendaui/components/tag-input/tag-input.md")
      },
      {
        title: "Badge 徽章",
        titleEn: "Badge",
        name: "badge",
        path: "/components/badge",
        component: () => import("@tendaui/components/badge/badge.md"),
        componentEn: () => import("@tendaui/components/badge/badge.md")
      }
    ]
  },
  {
    title: "反馈",
    titleEn: "Feedback",
    type: "component",
    children: [
      {
        title: "Alert 警告框",
        titleEn: "Alert",
        name: "alert",
        path: "/components/alert",
        component: () => import("@tendaui/components/alert/alert.md"),
        componentEn: () => import("@tendaui/components/alert/alert.md")
      },
      {
        title: "Dialog 对话框",
        titleEn: "Dialog",
        name: "dialog",
        path: "/components/dialog",
        component: () => import("@tendaui/components/dialog/dialog.md"),
        componentEn: () => import("@tendaui/components/dialog/dialog.md")
      },
      {
        title: "Drawer 抽屉",
        titleEn: "Drawer",
        name: "drawer",
        path: "/components/drawer",
        component: () => import("@tendaui/components/drawer/drawer.md"),
        componentEn: () => import("@tendaui/components/drawer/drawer.md")
      },
      {
        title: "Loading 加载",
        titleEn: "Loading",
        name: "loading",
        path: "/components/loading",
        component: () => import("@tendaui/components/loading/loading.md"),
        componentEn: () => import("@tendaui/components/loading/loading.md")
      },
      {
        title: "Notification 通知",
        titleEn: "Notification",
        name: "notification",
        path: "/components/notification",
        component: () => import("@tendaui/components/notification/notification.md"),
        componentEn: () => import("@tendaui/components/notification/notification.md")
      },
      {
        title: "Popup 弹出层",
        titleEn: "Popup",
        name: "popup",
        path: "/components/popup",
        component: () => import("@tendaui/components/popup/popup.md"),
        componentEn: () => import("@tendaui/components/popup/popup.md")
      },
      {
        title: "Tooltip",
        titleEn: "Tooltip",
        name: "tooltip",
        path: "/components/tooltip",
        component: () => import("@tendaui/components/tooltip/tooltip.md"),
        componentEn: () => import("@tendaui/components/tooltip/tooltip.md")
      }
    ]
  },
  {
    title: "表单",
    titleEn: "Form",
    type: "component",
    children: [
      {
        title: "Form 表单",
        titleEn: "Form",
        name: "form",
        path: "/components/form",
        component: () => import("@tendaui/components/form/form.md"),
        componentEn: () => import("@tendaui/components/form/form.md")
      }
    ]
  },
  {
    title: "选择",
    titleEn: "Selection",
    type: "component",
    children: [
      {
        title: "ColorPicker 颜色选择器",
        titleEn: "ColorPicker",
        name: "color-picker",
        path: "/components/color-picker",
        component: () => import("@tendaui/components/color-picker/color-picker.md"),
        componentEn: () => import("@tendaui/components/color-picker/color-picker.md")
      },
      {
        title: "Select 选择器",
        titleEn: "Select",
        name: "select",
        path: "/components/select",
        component: () => import("@tendaui/components/select/select.md"),
        componentEn: () => import("@tendaui/components/select/select.md")
      },
      {
        title: "Slider 滑块",
        titleEn: "Slider",
        name: "slider",
        path: "/components/slider",
        component: () => import("@tendaui/components/slider/slider.md"),
        componentEn: () => import("@tendaui/components/slider/slider.md")
      }
    ]
  },
  {
    title: "导航",
    titleEn: "Navigation",
    type: "component",
    children: [
      {
        title: "Tabs 标签页",
        titleEn: "Tabs",
        name: "tabs",
        path: "/components/tabs",
        component: () => import("@tendaui/components/tab/tab.md"),
        componentEn: () => import("@tendaui/components/tab/tab.md")
      }
    ]
  }
];

export default {
  docs
};
