import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { r as reactExports } from './dep-C52Ear6B.js';

function useDomRefCallback() {
  var _useState = reactExports.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    refCurrent = _useState2[0],
    setRefCurrent = _useState2[1];
  reactExports.useCallback(function (dom) {
    if (dom) setRefCurrent(dom);
  }, []);
  return [refCurrent, setRefCurrent];
}

export { useDomRefCallback as u };
//# sourceMappingURL=dep-py6q5XhT.js.map
