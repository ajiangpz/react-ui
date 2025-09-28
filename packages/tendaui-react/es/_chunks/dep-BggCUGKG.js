// 同时处理多个 ref
function composeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return function (instance) {
    // eslint-disable-next-line no-restricted-syntax
    for (var _i = 0, _refs = refs; _i < _refs.length; _i++) {
      var ref = _refs[_i];
      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref) {
        ref.current = instance;
      }
    }
  };
}

export { composeRefs as c };
//# sourceMappingURL=dep-BggCUGKG.js.map
