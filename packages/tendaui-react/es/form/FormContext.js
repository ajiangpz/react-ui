import React from 'react';

var FormContext = /*#__PURE__*/React.createContext({
  form: undefined,
  labelWidth: '100px',
  labelAlign: 'right',
  layout: 'vertical',
  colon: false,
  initialData: {},
  requiredMark: undefined,
  requiredMarkPosition: undefined,
  scrollToFirstError: undefined,
  showErrorMessage: undefined,
  resetType: 'empty',
  disabled: undefined,
  rules: undefined,
  errorMessage: undefined,
  statusIcon: undefined,
  onFormItemValueChange: undefined,
  formMapRef: undefined,
  floatingFormDataRef: undefined
});
var useFormContext = function useFormContext() {
  return React.useContext(FormContext);
};
var FormListContext = /*#__PURE__*/React.createContext({
  name: undefined,
  rules: undefined,
  formListMapRef: undefined,
  initialData: [],
  form: undefined
});
var useFormListContext = function useFormListContext() {
  return React.useContext(FormListContext);
};

export { FormListContext, FormContext as default, useFormContext, useFormListContext };
//# sourceMappingURL=FormContext.js.map
