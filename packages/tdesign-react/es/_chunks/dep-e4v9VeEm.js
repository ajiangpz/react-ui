import { r as reactExports } from './dep-C52Ear6B.js';

function useDefaultProps(originalProps, defaultProps) {
  return reactExports.useMemo(function () {
    var props = Object.assign({}, originalProps);
    Object.keys(defaultProps).forEach(function (key) {
      if (props[key] === void 0) {
        props[key] = defaultProps[key];
      }
    });
    return props;
  }, [originalProps, defaultProps]);
}

export { useDefaultProps as u };
//# sourceMappingURL=dep-e4v9VeEm.js.map
