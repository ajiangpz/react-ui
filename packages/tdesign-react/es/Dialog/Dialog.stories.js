import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { Dialog } from './index.js';
import { DialogPlugin } from './plugin.js';
import { B as Button } from '../_chunks/dep-CWE5nGYy.js';
import { r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import '@/style';
import './Dialog.js';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'react-transition-group';
import 'classnames';
import 'lodash-es';
import '../common/Portal.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-DU45RdGB.js';
import '../_chunks/dep-6TeJvJOF.js';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import '../_chunks/dep-DJQi-lRj.js';
import '../_chunks/dep-e4v9VeEm.js';
import '../_chunks/dep-CdS-KBHO.js';
import 'tdesign-icons-react';
import '../_chunks/dep-DWZDJ_hQ.js';
import '../_chunks/dep-Dp0dxPtr.js';
import '@babel/runtime/helpers/toConsumableArray';
import './style/css.js';
import '../_chunks/dep-B6ztXA2I.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../common/PluginContainer.js';
import '../config-provider/index.js';
import '../config-provider/ConfigProvider.js';
import '../loading/index.js';
import '../loading/Loading.js';
import '../loading/Gradient.js';
import '../_chunks/dep-C4qiDhnV.js';
import '../_chunks/dep-py6q5XhT.js';
import '../_chunks/dep-2sN3YgeE.js';

var meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"]
};
var Base = function Base() {
  var _useState = reactExports.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var handleClick = function handleClick() {
    setVisible(true);
  };
  var onConfirm = function onConfirm(context) {
    console.log("\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE", context);
    setVisible(false);
  };
  var onCancel = function onCancel(context) {
    console.log("\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE", context);
  };
  var onClickCloseBtn = function onClickCloseBtn(context) {
    console.log("\u70B9\u51FB\u4E86\u5173\u95ED\u6309\u94AE", context);
  };
  var onKeydownEsc = function onKeydownEsc(context) {
    console.log("\u6309\u4E0B\u4E86ESC", context);
  };
  var onClickOverlay = function onClickOverlay(context) {
    console.log("\u70B9\u51FB\u4E86\u8499\u5C42", context);
  };
  var handleClose = function handleClose(context) {
    console.log("\u5173\u95ED\u5F39\u7A97\uFF0C\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u3001\u6309\u4E0BESC\u3001\u70B9\u51FB\u8499\u5C42\u7B49\u89E6\u53D1", context);
    setVisible(false);
  };
  return /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement(Button, {
    theme: "primary",
    onClick: handleClick
  }, "Open Modal"), /* @__PURE__ */React.createElement(Dialog, {
    header: "Basic Modal",
    visible: visible,
    confirmOnEnter: true,
    onClose: handleClose,
    onConfirm: onConfirm,
    onCancel: onCancel,
    onEscKeydown: onKeydownEsc,
    onCloseBtnClick: onClickCloseBtn,
    onOverlayClick: onClickOverlay
  }, /* @__PURE__ */React.createElement("p", null, "This is a dialog")));
};
var Default = {
  args: {},
  render: function render() {
    return /* @__PURE__ */React.createElement(Base, null);
  }
};
var Plugin = function Plugin() {
  var buttonStyle = {
    marginRight: 16
  };
  var showDialog = function showDialog() {
    var myDialog = DialogPlugin({
      header: "Dialog-Plugin",
      body: "Hi, darling! Do you want to be my lover?",
      onConfirm: function onConfirm(_ref) {
        var e = _ref.e;
        console.log("confirm clicked", e);
        myDialog.hide();
      },
      onClose: function onClose(_ref2) {
        var e = _ref2.e,
          trigger = _ref2.trigger;
        console.log("e: ", e);
        console.log("trigger: ", trigger);
        myDialog.hide();
      },
      onCloseBtnClick: function onCloseBtnClick(_ref3) {
        var e = _ref3.e;
        console.log("close btn: ", e);
      }
    });
  };
  var handleDN = function handleDN() {
    var dialogNode = DialogPlugin({
      header: "Dialog-Plugin",
      body: "Hi, darling! Do you want to be my lover?"
    });
    dialogNode.update({
      header: "Updated-Dialog-Plugin",
      cancelBtn: null,
      onConfirm: function onConfirm(_ref4) {
        var e = _ref4.e;
        console.log("confirm button has been clicked!");
        console.log("e: ", e);
        dialogNode.hide();
        dialogNode.destroy();
      },
      onClose: function onClose(_ref5) {
        var e = _ref5.e,
          trigger = _ref5.trigger;
        console.log("e: ", e);
        console.log("trigger: ", trigger);
        dialogNode.hide();
      }
    });
  };
  var onConfirm = function onConfirm() {
    var confirmDia = DialogPlugin.confirm({
      header: "Dialog-Confirm-Plugin",
      body: "Are you sure to delete it?",
      confirmBtn: "ok",
      cancelBtn: "cancel",
      onConfirm: function onConfirm(_ref6) {
        var e = _ref6.e;
        console.log("confirm button has been clicked!");
        console.log("e: ", e);
        confirmDia.hide();
      },
      onClose: function onClose(_ref7) {
        var e = _ref7.e,
          trigger = _ref7.trigger;
        console.log("e: ", e);
        console.log("trigger: ", trigger);
        confirmDia.hide();
      }
    });
  };
  var onAlert = function onAlert() {
    var alertDia = DialogPlugin.alert({
      header: "Dialog-Alert-Plugin",
      body: "Notice: Your balance is going to be empty.",
      confirmBtn: {
        content: "Got it!",
        variant: "base",
        theme: "danger"
      },
      onConfirm: function onConfirm(_ref8) {
        var e = _ref8.e;
        console.log("confirm e: ", e);
        alertDia.hide();
      },
      onClose: function onClose(_ref9) {
        var e = _ref9.e,
          trigger = _ref9.trigger;
        console.log("close e: ", e);
        console.log("trigger: ", trigger);
        alertDia.hide();
      }
    });
  };
  var onDialogPluginConfirm = function onDialogPluginConfirm() {
    var confirmDia = DialogPlugin.confirm({
      header: "Dialog-Confirm-Plugin",
      body: "Are you sure to delete it?",
      confirmBtn: "ok",
      cancelBtn: "cancel",
      onConfirm: function onConfirm(_ref0) {
        var e = _ref0.e;
        console.log("confirm button has been clicked!");
        console.log("e: ", e);
        confirmDia.hide();
      },
      onClose: function onClose(_ref1) {
        var e = _ref1.e,
          trigger = _ref1.trigger;
        console.log("e: ", e);
        console.log("trigger: ", trigger);
        confirmDia.hide();
      }
    });
  };
  return /* @__PURE__ */React.createElement("div", null, /* @__PURE__ */React.createElement("p", null, "\u51FD\u6570\u8C03\u7528\u65B9\u5F0F\u4E00\uFF1ADialogPlugin(options)"), /* @__PURE__ */React.createElement("p", null, "\u51FD\u6570\u8C03\u7528\u65B9\u5F0F\u4E8C\uFF1ADialogPlugin.confirm(options)"), /* @__PURE__ */React.createElement("p", null, "\u51FD\u6570\u8C03\u7528\u65B9\u5F0F\u4E09\uFF1ADialogPlugin.alert(options)"), /* @__PURE__ */React.createElement("div", {
    className: "flex gap-2 mt-2"
  }, /* @__PURE__ */React.createElement(Button, {
    theme: "primary",
    onClick: showDialog,
    style: buttonStyle
  }, "dialog"), /* @__PURE__ */React.createElement(Button, {
    theme: "primary",
    onClick: handleDN,
    style: buttonStyle
  }, "handleDialogNode"), /* @__PURE__ */React.createElement(Button, {
    theme: "primary",
    onClick: onConfirm,
    style: buttonStyle
  }, "confirm"), /* @__PURE__ */React.createElement(Button, {
    theme: "primary",
    onClick: onAlert,
    style: buttonStyle
  }, "alert"), /* @__PURE__ */React.createElement(Button, {
    theme: "primary",
    onClick: onDialogPluginConfirm,
    style: buttonStyle
  }, "DialogPlugin.confirm")));
};
var PluginExample = {
  args: {},
  render: function render() {
    return /* @__PURE__ */React.createElement(Plugin, null);
  }
};

export { Default, PluginExample, meta as default };
//# sourceMappingURL=Dialog.stories.js.map
