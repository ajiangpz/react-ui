import { u as useConfig } from './dep-CaeblIEM.js';

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
//# sourceMappingURL=dep-Dp0dxPtr.js.map
