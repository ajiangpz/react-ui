// Source from:
// https://github.com/react-component/util/blob/master/src/React/isFragment.ts

const REACT_ELEMENT_TYPE_18 = Symbol.for("react.element");
const REACT_ELEMENT_TYPE_19 = Symbol.for("react.transitional.element");
const REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");

/**
 * Compatible with React 18 or 19 to check if node is a Fragment.
 */
export default function isFragment(object: React.ReactElement | null | undefined): boolean {
  if (!object || typeof object !== "object") return false;

  const obj = object as unknown as { $$typeof?: symbol; type?: symbol | React.ElementType };

  return (
    // React Element type
    (obj.$$typeof === REACT_ELEMENT_TYPE_18 || obj.$$typeof === REACT_ELEMENT_TYPE_19) &&
    // React Fragment type
    obj.type === REACT_FRAGMENT_TYPE
  );
}
