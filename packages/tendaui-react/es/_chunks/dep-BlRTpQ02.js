import { _ as _slicedToArray } from './dep-CzLhKWCf.js';
import { useState, useCallback } from 'react';

// https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
function useDomRefCallback() {
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    refCurrent = _useState2[0],
    setRefCurrent = _useState2[1];
  useCallback(function (dom) {
    if (dom) setRefCurrent(dom);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [refCurrent, setRefCurrent];
}

export { useDomRefCallback as u };
//# sourceMappingURL=dep-BlRTpQ02.js.map
