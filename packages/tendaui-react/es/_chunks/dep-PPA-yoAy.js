import { _ as _slicedToArray } from './dep-CzLhKWCf.js';
import { useState, useCallback } from 'react';

function useDomRefCallback() {
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    refCurrent = _useState2[0],
    setRefCurrent = _useState2[1];
  useCallback(function (dom) {
    if (dom) setRefCurrent(dom);
  }, []);
  return [refCurrent, setRefCurrent];
}

export { useDomRefCallback as u };
//# sourceMappingURL=dep-PPA-yoAy.js.map
