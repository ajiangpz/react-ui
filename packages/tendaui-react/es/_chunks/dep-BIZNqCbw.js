import { u as useConfig } from './dep-u1x3x6MJ.js';

// 从 globalConfig 获取 icon 配置用于覆盖组件内置 icon
function useGlobalIcon(tdIcon) {
  var _useConfig = useConfig(),
    globalIcon = _useConfig.icon;
  var resultIcon = {};
  Object.keys(tdIcon).forEach(function (key) {
    resultIcon[key] = (globalIcon === null || globalIcon === void 0 ? void 0 : globalIcon[key]) || tdIcon[key];
  });
  return resultIcon;
}

export { useGlobalIcon as u };
//# sourceMappingURL=dep-BIZNqCbw.js.map
