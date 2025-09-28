import { useMemo } from 'react';

// defaultProps 将于 19.0.0 废弃，故需实现 hook 在组件内部兼容
// https://github.com/facebook/react/pull/16210
function useDefaultProps(originalProps, defaultProps) {
  return useMemo(function () {
    // eslint-disable-next-line
    var props = Object.assign({}, originalProps);
    Object.keys(defaultProps).forEach(function (key) {
      // https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js#L733-L740
      if (props[key] === undefined) {
        props[key] = defaultProps[key];
      }
    });
    return props;
  }, [originalProps, defaultProps]);
}

export { useDefaultProps as u };
//# sourceMappingURL=dep-5jl2j2BI.js.map
