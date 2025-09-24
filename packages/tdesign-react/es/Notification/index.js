export { NotificationProvider, useNotification } from './NotifyContext.js';
import './style/css.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-C52Ear6B.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-DU45RdGB.js';
import './NotifyContainer.js';
import './NotifyItem.js';
import 'lucide-react';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';

var addNotification = function addNotification() {};
function notification(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
  var title = arguments.length > 2 ? arguments[2] : undefined;
  var id = (/* @__PURE__ */new Date()).getTime().toString();
  addNotification({
    id: id,
    message: message,
    type: type,
    title: title
  });
}
function registerNotificationHandler(cb) {
  addNotification = cb;
}

export { notification };
//# sourceMappingURL=index.js.map
