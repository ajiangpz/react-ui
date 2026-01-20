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
        component: () => import("../../packages/components/button/button.md"),
        componentEn: () => import("../../packages/components/button/button.md")
      }
    ]
  }
];

export default {
  docs
};
