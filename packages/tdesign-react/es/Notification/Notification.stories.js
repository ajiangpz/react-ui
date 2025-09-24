import './index.js';
import '@/style';
import { B as Button } from '../_chunks/dep-CWE5nGYy.js';
import { r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import { useNotification, NotificationProvider } from './NotifyContext.js';
import './style/css.js';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'classnames';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import '@babel/runtime/helpers/typeof';
import '../loading/index.js';
import '../loading/Loading.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-6TeJvJOF.js';
import 'lodash-es';
import '../common/Portal.js';
import '../_chunks/dep-DU45RdGB.js';
import '../loading/Gradient.js';
import '../_chunks/dep-C4qiDhnV.js';
import '../_chunks/dep-py6q5XhT.js';
import '../_chunks/dep-e4v9VeEm.js';
import '../_chunks/dep-2sN3YgeE.js';
import '../_chunks/dep-DWZDJ_hQ.js';
import '@babel/runtime/helpers/toConsumableArray';
import './NotifyContainer.js';
import './NotifyItem.js';
import 'lucide-react';

var NotificationDemo = function NotificationDemo() {
  var _useNotification = useNotification(),
    success = _useNotification.success,
    error = _useNotification.error,
    warning = _useNotification.warning,
    info = _useNotification.info;
  var index = reactExports.useRef(1);
  return /* @__PURE__ */React.createElement("div", {
    style: {
      padding: "20px"
    }
  }, /* @__PURE__ */React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px"
    }
  }, /* @__PURE__ */React.createElement(Button, {
    theme: "success",
    onClick: function onClick() {
      return success({
        message: Array.from({
          length: Math.floor(Math.random() * 10) + 1
        }, function () {
          return "\u64CD\u4F5C\u6210\u529F\u5B8C\u6210\uFF01" + index.current++;
        }).join("\n"),
        title: "\u6210\u529F\u63D0\u793A"
      });
    }
  }, "\u663E\u793A\u6210\u529F\u901A\u77E5"), /* @__PURE__ */React.createElement(Button, {
    theme: "danger",
    onClick: function onClick() {
      return error({
        message: "\u64CD\u4F5C\u53D1\u751F\u9519\u8BEF\uFF01",
        title: "\u9519\u8BEF\u63D0\u793A\u9519\u8BEF\u63D0\u793A\u9519\u8BEF\u63D0\u793A\u9519\u8BEF\u63D0\u793A\u9519\u8BEF\u63D0\u793A\u9519\u8BEF\u63D0\u793A"
      });
    }
  }, "\u663E\u793A\u9519\u8BEF\u901A\u77E5"), /* @__PURE__ */React.createElement(Button, {
    theme: "warning",
    onClick: function onClick() {
      return warning({
        message: "\u8BF7\u6CE8\u610F\u8FD9\u4E2A\u8B66\u544A\uFF01",
        title: "\u8B66\u544A\u63D0\u793A"
      });
    }
  }, "\u663E\u793A\u8B66\u544A\u901A\u77E5"), /* @__PURE__ */React.createElement(Button, {
    theme: "primary",
    onClick: function onClick() {
      return info({
        message: "\u8BF7\u6CE8\u610F\u8FD9\u4E2A\u4FE1\u606F\uFF01",
        title: "\u4FE1\u606F\u63D0\u793A"
      });
    }
  }, "\u663E\u793A\u4FE1\u606F\u901A\u77E5")));
};
var meta = {
  title: "Components/Notification",
  component: NotificationProvider,
  tags: ["autodocs"],
  argTypes: {
    maxStack: {
      control: {
        type: "number",
        min: 1,
        max: 10
      },
      description: "\u6700\u5927\u901A\u77E5\u5806\u53E0\u6570\u91CF",
      defaultValue: 5
    },
    displayDuration: {
      control: {
        type: "number",
        min: 1e3,
        max: 1e4,
        step: 500
      },
      description: "\u901A\u77E5\u663E\u793A\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",
      defaultValue: 3e5
    },
    position: {
      control: "select",
      options: ["top-right", "top-center", "top-left"],
      description: "\u663E\u793A\u4F4D\u7F6E",
      defaultValue: "top-right"
    }
  },
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
var BasicStory = {
  render: function render() {
    return /* @__PURE__ */React.createElement(NotificationDemo, null);
  }
};

export { BasicStory, meta as default };
//# sourceMappingURL=Notification.stories.js.map
