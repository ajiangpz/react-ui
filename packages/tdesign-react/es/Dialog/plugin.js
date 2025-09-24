import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { R as React } from '../_chunks/dep-C52Ear6B.js';
import { r as render } from '../_chunks/dep-B6ztXA2I.js';
import Dialog from './Dialog.js';
import { g as getAttach } from '../_chunks/dep-6TeJvJOF.js';
import PluginContainer from '../common/PluginContainer.js';
import '../config-provider/index.js';
import ConfigProvider from '../config-provider/ConfigProvider.js';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../_chunks/dep-DU45RdGB.js';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'react-transition-group';
import 'classnames';
import 'lodash-es';
import '../common/Portal.js';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import '../_chunks/dep-DJQi-lRj.js';
import '../_chunks/dep-e4v9VeEm.js';
import '../_chunks/dep-CdS-KBHO.js';
import 'tdesign-icons-react';
import '../_chunks/dep-CWE5nGYy.js';
import '../loading/index.js';
import '../loading/Loading.js';
import '../loading/Gradient.js';
import '../_chunks/dep-C4qiDhnV.js';
import '../_chunks/dep-py6q5XhT.js';
import '../_chunks/dep-2sN3YgeE.js';
import './style/css.js';
import '../_chunks/dep-DWZDJ_hQ.js';
import '../_chunks/dep-Dp0dxPtr.js';
import '@babel/runtime/helpers/toConsumableArray';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var createDialog = function createDialog(props) {
  var dialogRef = /*#__PURE__*/React.createRef();
  var options = _objectSpread({}, props);
  var _options$visible = options.visible,
    visible = _options$visible === void 0 ? true : _options$visible;
  var fragment = document.createDocumentFragment();
  var dGlobalConfig = ConfigProvider.getGlobalConfig();
  render(/* @__PURE__ */React.createElement(PluginContainer, {
    globalConfig: dGlobalConfig
  }, /* @__PURE__ */React.createElement(Dialog, _objectSpread(_objectSpread({}, options), {}, {
    visible: visible,
    ref: dialogRef,
    isPlugin: true
  }))), fragment);
  var container = getAttach(options.attach);
  if (container) {
    container.appendChild(fragment);
  } else {
    console.error("Dialog", "attach is not exist");
  }
  var dialogNode = {
    show: function show() {
      requestAnimationFrame(function () {
        var _dialogRef$current;
        container === null || container === void 0 || container.appendChild(fragment);
        (_dialogRef$current = dialogRef.current) === null || _dialogRef$current === void 0 || _dialogRef$current.show();
      });
    },
    hide: function hide() {
      requestAnimationFrame(function () {
        var _dialogRef$current2;
        (_dialogRef$current2 = dialogRef.current) === null || _dialogRef$current2 === void 0 || _dialogRef$current2.destroy();
      });
    },
    setConfirmLoading: function setConfirmLoading(loading) {
      requestAnimationFrame(function () {
        var _dialogRef$current3;
        (_dialogRef$current3 = dialogRef.current) === null || _dialogRef$current3 === void 0 || _dialogRef$current3.setConfirmLoading(loading);
      });
    },
    update: function update(updateOptions) {
      requestAnimationFrame(function () {
        var _dialogRef$current4;
        (_dialogRef$current4 = dialogRef.current) === null || _dialogRef$current4 === void 0 || _dialogRef$current4.update(updateOptions);
      });
    },
    destroy: function destroy() {
      requestAnimationFrame(function () {
        var _dialogRef$current5;
        (_dialogRef$current5 = dialogRef.current) === null || _dialogRef$current5 === void 0 || _dialogRef$current5.destroy();
      });
    }
  };
  return dialogNode;
};
var confirm = function confirm(props) {
  return createDialog(props);
};
var alert = function alert(props) {
  var options = _objectSpread({}, props);
  options.cancelBtn = null;
  return createDialog(options);
};
createDialog.alert = alert;
createDialog.confirm = confirm;
var DialogPlugin = createDialog;

export { DialogPlugin };
//# sourceMappingURL=plugin.js.map
