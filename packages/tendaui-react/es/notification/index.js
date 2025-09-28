export { NotificationProvider, useNotification } from './NotifyContext.js';
import './style/css.js';
import '../_chunks/dep-CgyDw_YI.js';
import '../_chunks/dep-CzLhKWCf.js';
import '../_chunks/dep-Cwish4GD.js';
import '../_chunks/dep-D-UKOauR.js';
import 'react';
import 'react-dom';
import './NotifyContainer.js';
import '../_chunks/dep-mO86zOh3.js';
import './NotifyItem.js';
import '../_chunks/dep-LgDsOUkE.js';
import '../_chunks/dep-u1x3x6MJ.js';
import '../config-provider/ConfigContext.js';

// notification.ts

var addNotification = function addNotification() {};
function notification(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
  var title = arguments.length > 2 ? arguments[2] : undefined;
  var id = new Date().getTime().toString();
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
