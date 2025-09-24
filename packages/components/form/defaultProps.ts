import { TdFormProps, TdFormItemProps } from './type';

export const formDefaultProps: TdFormProps = {
  colon: false,
  disabled: undefined,
  id: undefined,
  labelAlign: 'right',
  labelWidth: '100px',
  layout: 'vertical',
  preventSubmitDefault: true,
  requiredMark: undefined,
  resetType: 'empty',
  showErrorMessage: true,
  statusIcon: undefined,
  submitWithWarningMessage: false,
  supportNumberKey: true,
};

export const formItemDefaultProps: TdFormItemProps = {
  label: '',
  requiredMark: undefined,
  shouldUpdate: false,
  showErrorMessage: undefined,
  statusIcon: undefined,
  successBorder: false,
};
