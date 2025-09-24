import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { Form } from './index.js';
import { I as Input } from '../_chunks/dep-CCk9KX71.js';
import { S as Switch } from '../_chunks/dep-Dz65bPKB.js';
import { u as useNotification, C as Checkbox, N as NotificationProvider } from '../_chunks/dep-CsTff4aB.js';
import { B as Button } from '../_chunks/dep-CWE5nGYy.js';
import '@/style';
import './Form.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/defineProperty';
import '../_chunks/dep-C52Ear6B.js';
import '@babel/runtime/helpers/typeof';
import 'classnames';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import '../_chunks/dep-U1T8CQY9.js';
import '../_chunks/dep-Bdljkd5o.js';
import 'hoist-non-react-statics';
import './hooks/useInstance.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import 'lodash-es';
import './utils/index.js';
import '../_chunks/dep-CcL4GSfv.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import './FormContext.js';
import '../_chunks/dep-m5bu896E.js';
import 'tdesign-icons-react';
import '../_chunks/dep-e4v9VeEm.js';
import '../_chunks/dep-Dp0dxPtr.js';
import '../_chunks/dep-BpYapwIO.js';
import '../_chunks/dep-DWZDJ_hQ.js';
import 'validator/lib/isDate';
import 'validator/lib/isEmail';
import 'validator/lib/isURL';
import '../_chunks/dep-C4qiDhnV.js';
import '../common/Check.js';
import '../_chunks/dep-Dqh5DYAh.js';
import '../tag-input/TagInput.js';
import 'lucide-react';
import '../tag-input/hooks/useTagList.js';
import '../tag/index.js';
import '../tag/Tag.js';
import 'tinycolor2';
import './style/css.js';
import '../hooks/useDragSorter.js';
import '../_chunks/dep-6TeJvJOF.js';
import './FormList.js';
import '../loading/index.js';
import '../loading/Loading.js';
import '../common/Portal.js';
import '../_chunks/dep-DU45RdGB.js';
import '../loading/Gradient.js';
import '../_chunks/dep-py6q5XhT.js';
import '../_chunks/dep-2sN3YgeE.js';
import '../_chunks/dep-SBwAlUYy.js';
import '../_chunks/dep-B232LrJC.js';

var FormItem = Form.FormItem;
var BaseForm = function BaseForm() {
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var name = Form.useWatch("name", form);
  var gender = Form.useWatch("gender", form);
  console.log("name", name);
  console.log("gender", gender);
  var _useNotification = useNotification(),
    success = _useNotification.success;
  var onSubmit = function onSubmit(e) {
    console.log(e);
    if (e.validateResult === true) {
      success({
        title: "\u6210\u529F\u63D0\u793A",
        message: "\u63D0\u4EA4\u6210\u529F"
      });
    }
  };
  var onReset = function onReset(e) {
    console.log(e);
    success({
      title: "\u6210\u529F\u63D0\u793A",
      message: "\u91CD\u7F6E\u6210\u529F"
    });
  };
  var setMessage = function setMessage() {
    console.log(form);
    form.setFields([{
      name: "name",
      status: "error",
      validateMessage: {
        type: "error",
        message: "\u8F93\u5165\u6709\u8BEF"
      }
    }, {
      name: "birthday",
      status: "warning",
      validateMessage: {
        type: "warning",
        message: "\u65F6\u95F4\u6709\u8BEF"
      }
    }]);
  };
  return /* @__PURE__ */React.createElement(Form, {
    form: form,
    onSubmit: onSubmit,
    onReset: onReset,
    colon: true,
    labelWidth: 100
  }, /* @__PURE__ */React.createElement(FormItem, {
    label: "\u59D3\u540D",
    name: "name",
    requiredMark: true
  }, /* @__PURE__ */React.createElement(Input, null)), /* @__PURE__ */React.createElement(FormItem, {
    label: "\u8BFE\u7A0B",
    name: "course",
    requiredMark: true
  }, /* @__PURE__ */React.createElement(Checkbox.Group, null, /* @__PURE__ */React.createElement(Checkbox, {
    value: "la"
  }, "\u52A0\u8FA3"), /* @__PURE__ */React.createElement(Checkbox, {
    value: "ma"
  }, "\u52A0\u9EBB"), /* @__PURE__ */React.createElement(Checkbox, {
    value: "nocong"
  }, "\u4E0D\u8981\u8471\u82B1"))), /* @__PURE__ */React.createElement(FormItem, {
    label: "\u72B6\u6001",
    name: "status",
    "for": "status"
  }, /* @__PURE__ */React.createElement(Switch, null)), /* @__PURE__ */React.createElement(FormItem, {
    label: "\u81EA\u5B9A\u4E49\u5185\u5BB9",
    "for": "custom"
  }, /* @__PURE__ */React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /* @__PURE__ */React.createElement(FormItem, {
    name: "custom"
  }, /* @__PURE__ */React.createElement(Input, null)))), /* @__PURE__ */React.createElement(FormItem, {
    style: {
      marginLeft: 100
    }
  }, /* @__PURE__ */React.createElement("div", {
    className: "flex gap-2"
  }, /* @__PURE__ */React.createElement(Button, {
    type: "submit",
    theme: "primary"
  }, "\u63D0\u4EA4"), /* @__PURE__ */React.createElement(Button, {
    onClick: setMessage
  }, "\u8BBE\u7F6E\u4FE1\u606F"), /* @__PURE__ */React.createElement(Button, {
    type: "reset",
    theme: "default"
  }, "\u91CD\u7F6E"))));
};
var meta = {
  args: {},
  component: Form,
  tags: ["autodocs"],
  decorators: [
  // 修改装饰器，使用从控制台传入的参数
  function (Story, context) {
    return /* @__PURE__ */React.createElement(NotificationProvider, {
      position: context.args.position,
      maxStack: context.args.maxStack,
      displayDuration: context.args.displayDuration
    }, /* @__PURE__ */React.createElement(Story, null));
  }]
};
var Default = {
  args: {},
  render: function render() {
    return /* @__PURE__ */React.createElement(BaseForm, null);
  }
};

export { BaseForm, Default, meta as default };
//# sourceMappingURL=Form.stories.js.map
