import { _ as _toConsumableArray } from '../_chunks/dep-CgyDw_YI.js';
import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
import { g as get, s as set, u as unset, h as flattenDeep, k as merge } from '../_chunks/dep-uPo9oRq0.js';
import { useFormContext, FormListContext } from './FormContext.js';
import { H as HOOK_MARK } from '../_chunks/dep-Bo0GwPc0.js';
import { calcFieldValue } from './utils/index.js';
import '../_chunks/dep-D-UKOauR.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var key = 0;
var FormList = function FormList(props) {
  var _useFormContext = useFormContext(),
    formMapRef = _useFormContext.formMapRef,
    form = _useFormContext.form,
    onFormItemValueChange = _useFormContext.onFormItemValueChange,
    initialDataFromForm = _useFormContext.initialData,
    resetTypeFromContext = _useFormContext.resetType;
  var name = props.name,
    rules = props.rules,
    children = props.children;
  var initialData = props.initialData || get(initialDataFromForm, name) || [];
  var _useState = useState(initialData),
    _useState2 = _slicedToArray(_useState, 2),
    formListValue = _useState2[0],
    setFormListValue = _useState2[1];
  var _useState3 = useState(function () {
      return initialData.map(function (data, index) {
        return {
          data: _objectSpread({}, data),
          key: key += 1,
          name: index,
          isListField: true
        };
      });
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    fields = _useState4[0],
    setFields = _useState4[1];
  var formListMapRef = useRef(new Map()); // 收集 formItem 实例
  var formListRef = useRef(null); // 当前 formList 实例
  var fieldsTaskQueueRef = useRef([]); // 记录更改 fields 数据后 callback 队列
  var snakeName = [].concat(name).filter(function (item) {
    return item !== undefined;
  }).toString(); // 转化 name

  var isMounted = useRef(false);
  useEffect(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  var operation = {
    add: function add(defaultValue, insertIndex) {
      var cloneFields = _toConsumableArray(fields);
      var index = insertIndex !== null && insertIndex !== void 0 ? insertIndex : cloneFields.length;
      cloneFields.splice(index, 0, {
        key: key += 1,
        name: index,
        isListField: true
      });
      cloneFields.forEach(function (field, index) {
        return Object.assign(field, {
          name: index
        });
      });
      setFields(cloneFields);
      var nextFormListValue = _toConsumableArray(formListValue);
      if (typeof defaultValue !== 'undefined') {
        nextFormListValue[index] = defaultValue;
        setFormListValue(nextFormListValue);
      }
      set(form === null || form === void 0 ? void 0 : form.store, flattenDeep([name, index]), nextFormListValue);
      var fieldValue = calcFieldValue(name, nextFormListValue);
      requestAnimationFrame(function () {
        onFormItemValueChange === null || onFormItemValueChange === void 0 || onFormItemValueChange(_objectSpread({}, fieldValue));
      });
    },
    remove: function remove(index) {
      var nextFields = fields.filter(function (item) {
        if (Array.isArray(index)) return !index.includes(item.name);
        return item.name !== index;
      }).map(function (field, i) {
        return _objectSpread(_objectSpread({}, field), {}, {
          name: i
        });
      });
      setFields(nextFields);
      var nextFormListValue = formListValue.filter(function (_, idx) {
        return idx !== index;
      });
      setFormListValue(nextFormListValue);
      unset(form === null || form === void 0 ? void 0 : form.store, flattenDeep([name, index]));
      var fieldValue = calcFieldValue(name, nextFormListValue);
      requestAnimationFrame(function () {
        onFormItemValueChange === null || onFormItemValueChange === void 0 || onFormItemValueChange(_objectSpread({}, fieldValue));
      });
    },
    move: function move(from, to) {
      var cloneFields = _toConsumableArray(fields);
      var fromItem = _objectSpread({}, cloneFields[from]);
      var toItem = _objectSpread({}, cloneFields[to]);
      cloneFields[to] = fromItem;
      cloneFields[from] = toItem;
      set(form === null || form === void 0 ? void 0 : form.store, name, []);
      setFields(cloneFields);
    }
  };

  // 外部设置 fields 优先级最高，可以更改渲染的节点
  function setListFields(fieldData, callback, originData) {
    setFields(fieldData.map(function (_, index) {
      return {
        key: key += 1,
        name: index,
        isListField: true
      };
    }));
    // 添加至队列中 等待下次渲染完成执行对应逻辑
    fieldsTaskQueueRef.current.push({
      callback: callback,
      fieldData: fieldData,
      originData: originData
    });
  }
  useEffect(function () {
    if (!name || !formMapRef) return;
    formMapRef.current.set(name, formListRef);
    return function () {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      formMapRef.current["delete"](name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snakeName]);
  useEffect(function () {
    _toConsumableArray(formListMapRef.current.values()).forEach(function (formItemRef) {
      if (!formItemRef.current) return;
      var _formItemRef$current = formItemRef.current,
        name = _formItemRef$current.name,
        isUpdated = _formItemRef$current.isUpdated;
      if (isUpdated) return; // 内部更新过值则跳过

      var data = get(formListValue, name);
      formItemRef.current.setField({
        value: data,
        status: 'not'
      });
    });
  }, [formListValue]);
  useEffect(function () {
    var _form$getInternalHook, _form$getInternalHook2;
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    // fields 变化通知 watch 事件
    form === null || form === void 0 || (_form$getInternalHook = form.getInternalHooks) === null || _form$getInternalHook === void 0 || (_form$getInternalHook = _form$getInternalHook.call(form, HOOK_MARK)) === null || _form$getInternalHook === void 0 || (_form$getInternalHook2 = _form$getInternalHook.notifyWatch) === null || _form$getInternalHook2 === void 0 || _form$getInternalHook2.call(_form$getInternalHook, name);

    // 等待子节点渲染完毕
    Promise.resolve().then(function () {
      if (!fieldsTaskQueueRef.current.length) return;

      // fix multiple formlist stuck
      var currentQueue = fieldsTaskQueueRef.current.pop();
      var fieldData = currentQueue.fieldData,
        callback = currentQueue.callback,
        originData = currentQueue.originData;
      _toConsumableArray(formListMapRef.current.values()).forEach(function (formItemRef) {
        if (!formItemRef.current) return;
        var itemName = formItemRef.current.name;
        var data = get(fieldData, itemName);
        callback(formItemRef, data);
      });

      // formList 嵌套 formList
      if (!formMapRef || !formMapRef.current) return;
      _toConsumableArray(formMapRef.current.values()).forEach(function (formItemRef) {
        if (!formItemRef.current) return;
        var _formItemRef$current2 = formItemRef.current,
          itemName = _formItemRef$current2.name,
          isFormList = _formItemRef$current2.isFormList;
        if (String(itemName) === String(name) || !isFormList) return;
        var data = get(originData, itemName);
        if (data) callback(formItemRef, data);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, snakeName, fields, formMapRef]);
  useImperativeHandle(formListRef, function () {
    return {
      name: name,
      isFormList: true,
      getValue: function getValue() {
        var formListValue = [];
        _toConsumableArray(formListMapRef.current.values()).forEach(function (formItemRef) {
          if (!formItemRef.current) return;
          var _formItemRef$current3 = formItemRef.current,
            name = _formItemRef$current3.name,
            getValue = _formItemRef$current3.getValue;
          var fieldValue = calcFieldValue(name, getValue());
          merge(formListValue, fieldValue);
        });
        return formListValue;
      },
      validate: function validate() {
        var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
        var resultList = [];
        var validates = _toConsumableArray(formListMapRef.current.values()).map(function (formItemRef) {
          var _formItemRef$current4, _formItemRef$current5;
          return formItemRef === null || formItemRef === void 0 || (_formItemRef$current4 = formItemRef.current) === null || _formItemRef$current4 === void 0 || (_formItemRef$current5 = _formItemRef$current4.validate) === null || _formItemRef$current5 === void 0 ? void 0 : _formItemRef$current5.call(_formItemRef$current4, trigger);
        });
        return new Promise(function (resolve) {
          Promise.all(validates).then(function (validateResult) {
            validateResult.forEach(function (result) {
              var errorValue = Object.values(result)[0];
              merge(resultList, errorValue);
            });
            var errorItems = validateResult.filter(function (item) {
              return Object.values(item)[0] !== true;
            });
            if (errorItems.length) {
              resolve(_defineProperty({}, snakeName, resultList));
            } else {
              resolve(_defineProperty({}, snakeName, true));
            }
          });
        });
      },
      // TODO 支持局部更新数据
      setValue: function setValue(fieldData, originData) {
        setListFields(fieldData, function (formItemRef, data) {
          var _formItemRef$current6, _formItemRef$current7;
          formItemRef === null || formItemRef === void 0 || (_formItemRef$current6 = formItemRef.current) === null || _formItemRef$current6 === void 0 || (_formItemRef$current7 = _formItemRef$current6.setValue) === null || _formItemRef$current7 === void 0 || _formItemRef$current7.call(_formItemRef$current6, data);
        }, originData);
      },
      setField: function setField(fieldData, originData) {
        var value = fieldData.value,
          status = fieldData.status;
        setListFields(value, function (formItemRef, data) {
          var _formItemRef$current8, _formItemRef$current9;
          formItemRef === null || formItemRef === void 0 || (_formItemRef$current8 = formItemRef.current) === null || _formItemRef$current8 === void 0 || (_formItemRef$current9 = _formItemRef$current8.setField) === null || _formItemRef$current9 === void 0 || _formItemRef$current9.call(_formItemRef$current8, {
            value: data,
            status: status
          });
        }, originData);
      },
      resetField: function resetField(type) {
        var resetType = type || resetTypeFromContext;
        if (resetType === 'initial') {
          setFormListValue(initialData);
          var newFields = initialData.map(function (data, index) {
            return {
              data: _objectSpread({}, data),
              key: key += 1,
              name: index,
              isListField: true
            };
          });
          setFields(newFields);
          set(form === null || form === void 0 ? void 0 : form.store, flattenDeep([name]), initialData);
          requestAnimationFrame(function () {
            _toConsumableArray(formListMapRef.current.values()).forEach(function (formItemRef) {
              if (!formItemRef.current) return;
              var itemName = formItemRef.current.name;
              var itemValue = get(initialData, itemName);
              if (itemValue !== undefined) {
                formItemRef.current.setField({
                  value: itemValue,
                  status: 'not'
                });
              }
            });
          });
        } else {
          // 重置为空
          _toConsumableArray(formListMapRef.current.values()).forEach(function (formItemRef) {
            var _formItemRef$current0, _formItemRef$current1;
            formItemRef === null || formItemRef === void 0 || (_formItemRef$current0 = formItemRef.current) === null || _formItemRef$current0 === void 0 || (_formItemRef$current1 = _formItemRef$current0.resetField) === null || _formItemRef$current1 === void 0 || _formItemRef$current1.call(_formItemRef$current0);
          });
          fieldsTaskQueueRef.current = [];
          setFormListValue([]);
          setFields([]);
          unset(form === null || form === void 0 ? void 0 : form.store, flattenDeep([name]));
        }
      },
      setValidateMessage: function setValidateMessage(fieldData) {
        _toConsumableArray(formListMapRef.current.values()).forEach(function (formItemRef) {
          var _formItemRef$current10, _formItemRef$current11;
          if (!formItemRef.current) return;
          var name = formItemRef.current.name;
          var data = get(fieldData, name);
          formItemRef === null || formItemRef === void 0 || (_formItemRef$current10 = formItemRef.current) === null || _formItemRef$current10 === void 0 || (_formItemRef$current11 = _formItemRef$current10.setValidateMessage) === null || _formItemRef$current11 === void 0 || _formItemRef$current11.call(_formItemRef$current10, data);
        });
      },
      resetValidate: function resetValidate() {
        _toConsumableArray(formListMapRef.current.values()).forEach(function (formItemRef) {
          var _formItemRef$current12, _formItemRef$current13;
          formItemRef === null || formItemRef === void 0 || (_formItemRef$current12 = formItemRef.current) === null || _formItemRef$current12 === void 0 || (_formItemRef$current13 = _formItemRef$current12.resetValidate) === null || _formItemRef$current13 === void 0 || _formItemRef$current13.call(_formItemRef$current12);
        });
      }
    };
  });
  if (typeof children !== 'function') {
    console.error('Form', "FormList's children must be a function!");
    return null;
  }
  return /*#__PURE__*/React.createElement(FormListContext.Provider, {
    value: {
      name: name,
      rules: rules,
      formListMapRef: formListMapRef,
      initialData: initialData,
      form: form
    }
  }, children(fields, operation));
};
FormList.displayName = 'FormList';

export { FormList as default };
//# sourceMappingURL=FormList.js.map
