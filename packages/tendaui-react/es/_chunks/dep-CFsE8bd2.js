import { u as useConfig } from './dep-u7AyxuYF.js';

var useTabClass = function useTabClass() {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var tdTabsClassPrefix = "".concat(classPrefix, "-tabs");
  var tdTabPanelClassPrefix = "".concat(classPrefix, "-tab-panel");
  var tdClassGenerator = function tdClassGenerator(append) {
    return "".concat(classPrefix, "-").concat(append);
  };
  var tdTabsClassGenerator = function tdTabsClassGenerator(append) {
    return "".concat(tdTabsClassPrefix, "__").concat(append);
  };
  var tdTabPanelClassGenerator = function tdTabPanelClassGenerator(append) {
    return "".concat(tdTabPanelClassPrefix, "__").concat(append);
  };
  var tdSizeClassGenerator = function tdSizeClassGenerator(size) {
    return "".concat(classPrefix, "-size-").concat(size === "large" ? "l" : "m");
  };
  return {
    tdTabsClassPrefix: tdTabsClassPrefix,
    tdTabPanelClassPrefix: tdTabPanelClassPrefix,
    tdClassGenerator: tdClassGenerator,
    tdTabsClassGenerator: tdTabsClassGenerator,
    tdTabPanelClassGenerator: tdTabPanelClassGenerator,
    tdSizeClassGenerator: tdSizeClassGenerator
  };
};

export { useTabClass as u };
//# sourceMappingURL=dep-CFsE8bd2.js.map
