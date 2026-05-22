import { forwardRef } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

function forwardRefWithStatics(component, statics) {
  var forwarded = /*#__PURE__*/forwardRef(component);
  return hoistNonReactStatics(forwarded, statics !== null && statics !== void 0 ? statics : {});
}

export { forwardRefWithStatics as f };
//# sourceMappingURL=dep-Do9UdkhS.js.map
