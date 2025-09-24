import { r as reactExports } from './dep-C52Ear6B.js';
import { u as useConfig } from './dep-CaeblIEM.js';

function useCommonClassName() {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  return reactExports.useMemo(function () {
    var names = {
      SIZE: {
        "default": "",
        xs: "".concat(classPrefix, "-size-xs"),
        small: "".concat(classPrefix, "-size-s"),
        medium: "".concat(classPrefix, "-size-m"),
        large: "".concat(classPrefix, "-size-l"),
        xl: "".concat(classPrefix, "-size-xl"),
        block: "".concat(classPrefix, "-size-full-width")
      },
      STATUS: {
        loading: "".concat(classPrefix, "-is-loading"),
        disabled: "".concat(classPrefix, "-is-disabled"),
        focused: "".concat(classPrefix, "-is-focused"),
        success: "".concat(classPrefix, "-is-success"),
        error: "".concat(classPrefix, "-is-error"),
        warning: "".concat(classPrefix, "-is-warning"),
        selected: "".concat(classPrefix, "-is-selected"),
        active: "".concat(classPrefix, "-is-active"),
        checked: "".concat(classPrefix, "-is-checked"),
        current: "".concat(classPrefix, "-is-current"),
        hidden: "".concat(classPrefix, "-is-hidden"),
        visible: "".concat(classPrefix, "-is-visible"),
        expanded: "".concat(classPrefix, "-is-expanded"),
        indeterminate: "".concat(classPrefix, "-is-indeterminate")
      }
    };
    return {
      SIZE: names.SIZE,
      STATUS: names.STATUS,
      sizeClassNames: names.SIZE,
      statusClassNames: names.STATUS,
      classPrefix: classPrefix
    };
  }, [classPrefix]);
}

export { useCommonClassName as u };
//# sourceMappingURL=dep-SBwAlUYy.js.map
