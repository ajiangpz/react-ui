import { _ as _extends } from '../_chunks/dep-mO86zOh3.js';
import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import React from 'react';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../_chunks/dep-DZ_0EvBk.js';
import { _ as _typeof } from '../_chunks/dep-D-UKOauR.js';
import * as ReactDOM from 'react-dom';
import Dialog from './Dialog.js';
import { g as getAttach } from '../_chunks/dep-CKiAytca.js';
import PluginContainer from '../common/PluginContainer.js';
import '../config-provider/index.js';
import ConfigProvider from '../config-provider/ConfigProvider.js';
import '../_chunks/dep-CzLhKWCf.js';
import '../_chunks/dep-DN7d1SzH.js';
import 'react-transition-group';
import 'classnames';
import 'lodash-es';
import '../common/Portal.js';
import '../_chunks/dep-u1x3x6MJ.js';
import '../config-provider/ConfigContext.js';
import '../_chunks/dep-5jl2j2BI.js';
import '../_chunks/dep-DOfB01id.js';
import 'tendaui-react-icons';
import '../button/index.js';
import '../button/Button.js';
import '../loading/index.js';
import '../loading/Loading.js';
import '../loading/Gradient.js';
import '../_chunks/dep-DiKH-oTP.js';
import '../_chunks/dep-BlRTpQ02.js';
import '../_chunks/dep-BrowiCr7.js';
import '../loading/style/css.js';
import '../_chunks/dep-_E1HIQZ7.js';
import '../button/style/css.js';
import '../_chunks/dep-BIZNqCbw.js';
import '../_chunks/dep-CgyDw_YI.js';

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// Let compiler not to search module usage
var fullClone = _objectSpread$1({}, ReactDOM);
// @ts-ignore
var version = fullClone.version,
  reactRender = fullClone.render,
  unmountComponentAtNode = fullClone.unmountComponentAtNode;
var legacyCreateRoot;
try {
  var mainVersion = Number((version || '').split('.')[0]);
  if (mainVersion >= 18 && mainVersion < 19) {
    legacyCreateRoot = fullClone.createRoot;
  }
  if (process.env.NODE_ENV !== 'production' && mainVersion >= 19) {
    console.warn('TDesign warning: Please import react-19-adapter in React 19, See link: https://github.com/Tencent/tdesign-react/blob/develop/packages/tdesign-react/site/docs/getting-started.md#如何在-react-19-中使用');
  }
} catch (e) {
  // Do nothing;
}
function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && _typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === 'object') {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}
var MARK = '__td_react_root__';

// ========================== Render ==========================

function modernRender(node, container) {
  toggleWarning(true);
  var root = container[MARK] || legacyCreateRoot(container);
  toggleWarning(false);
  root.render(node);

  // eslint-disable-next-line
  container[MARK] = root;
}
function legacyRender(node, container) {
  reactRender(node, container);
}
function render(node, container) {
  if (legacyCreateRoot) {
    modernRender(node, container);
    return;
  }
  legacyRender === null || legacyRender === void 0 || legacyRender(node, container);
}

// ========================= Unmount ==========================
function modernUnmount(_x) {
  return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
  _modernUnmount = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(container) {
    return _regeneratorRuntime.wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", Promise.resolve().then(function () {
            var _container$MARK;
            (_container$MARK = container[MARK]) === null || _container$MARK === void 0 || _container$MARK.unmount();

            // eslint-disable-next-line
            delete container[MARK];
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
  unmountComponentAtNode(container);
}
function unmount(_x2) {
  return _unmount.apply(this, arguments);
}

/**
 * @deprecated Set React render function for compatible usage.
 * This is internal usage only compatible with React 19.
 * And will be removed in next major version.
 */
function _unmount() {
  _unmount = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(container) {
    return _regeneratorRuntime.wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(legacyCreateRoot !== undefined)) {
            _context2.next = 1;
            break;
          }
          return _context2.abrupt("return", modernUnmount(container));
        case 1:
          legacyUnmount(container);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _unmount.apply(this, arguments);
}
function renderAdapter(render) {
  if (render) {
    legacyCreateRoot = render;
  }
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var createDialog = function createDialog(props) {
  var dialogRef = /*#__PURE__*/React.createRef();
  var options = _objectSpread({}, props);
  var _options$visible = options.visible,
    visible = _options$visible === void 0 ? true : _options$visible;
  var fragment = document.createDocumentFragment();
  var dGlobalConfig = ConfigProvider.getGlobalConfig();
  render(/*#__PURE__*/React.createElement(PluginContainer, {
    globalConfig: dGlobalConfig
  }, /*#__PURE__*/React.createElement(Dialog, _extends({}, options, {
    visible: visible,
    ref: dialogRef,
    isPlugin: true
  }))), fragment);
  var container = getAttach(options.attach);
  if (container) {
    container.appendChild(fragment);
  } else {
    console.error('Dialog', 'attach is not exist');
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
