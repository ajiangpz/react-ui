import { forwardRef } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

function forwardRefWithStatics(component, statics) {
  return hoistNonReactStatics(/*#__PURE__*/forwardRef(component), statics);
}

export { forwardRefWithStatics as f };
//# sourceMappingURL=dep-BP0-apUT.js.map
