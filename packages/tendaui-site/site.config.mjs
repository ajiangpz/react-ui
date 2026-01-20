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
  }
];

export default {
  docs
};
