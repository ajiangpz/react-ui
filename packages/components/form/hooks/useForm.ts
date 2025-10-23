import { useState } from "react";
import type { NamePath } from "../type";
import type { WatchCallBack, InternalHooks, InternalFormInstance, Store } from "./interface";

export const HOOK_MARK = "TD_FORM_INTERNAL_HOOKS";

class FormStore {
  private prevStore: Store = {};

  private store: Store = {};

  private forceRootUpdate: () => void;

  constructor(forceReRender) {
    this.forceRootUpdate = forceReRender;
  }

  public taskQueue: unknown[] = [];

  public flashQueue = () => {
    this.taskQueue.forEach((task) => {
      this[task.name].apply(this, [...task.args]);
    });
    this.taskQueue = [];
  };

  public getForm = (): InternalFormInstance => ({
    submit: (...args) => {
      this.taskQueue.push({ args, name: "submit" });
    },
    reset: (...args) => {
      this.taskQueue.push({ args, name: "reset" });
    },
    validate: null,
    validateOnly: null,
    clearValidate: (...args) => {
      this.taskQueue.push({ args, name: "clearValidate" });
    },
    setFields: (...args) => {
      this.taskQueue.push({ args, name: "setFields" });
    },
    setFieldsValue: (...args) => {
      this.taskQueue.push({ args, name: "setFieldsValue" });
    },
    setValidateMessage: (...args) => {
      this.taskQueue.push({ args, name: "setValidateMessage" });
    },
    getValidateMessage: (...args) => {
      this.taskQueue.push({ args, name: "getValidateMessage" });
    },
    getFieldValue: null,
    getFieldsValue: null,
    _init: true,
    store: this.store,
    getInternalHooks: this.getInternalHooks
  });

  private getInternalHooks = (key: string): InternalHooks | null => {
    if (key === HOOK_MARK) {
      return {
        setForm: (formInstance) => {
          Object.keys(formInstance).forEach((key) => {
            this[key] = formInstance[key];
          });
        },
        flashQueue: this.flashQueue,
        notifyWatch: this.notifyWatch,
        registerWatch: this.registerWatch,
        getPrevStore: () => this.prevStore,
        setPrevStore: (store: object) => {
          this.prevStore = store;
        }
      };
    }

    console.warn("Form", "`getInternalHooks` is internal usage. Should not call directly.");
    return null;
  };

  private watchList: WatchCallBack[] = [];

  private registerWatch: InternalHooks["registerWatch"] = (callback) => {
    this.watchList.push(callback);

    return () => {
      this.watchList = this.watchList.filter((fn) => fn !== callback);
    };
  };

  private notifyWatch = (namePath: NamePath = []) => {
    // No need to cost perf when nothing need to watch
    if (this.watchList.length) {
      // @ts-expect-error Internal API access
      const values = this.getFieldsValue?.([namePath]);

      this.watchList.forEach((callback) => {
        callback(values, namePath);
      });
    }
  };
}

export default function useForm(form?: InternalFormInstance) {
  const [formInstance, setFormInstance] = useState<InternalFormInstance>(() => {
    if (form) {
      return form;
    }
    // Create a new FormStore if not provided
    const forceReRender = () => {
      // This will trigger a re-render
    };
    const formStore: FormStore = new FormStore(forceReRender);
    return formStore.getForm();
  });

  // Update form instance when form prop changes
  if (form && formInstance !== form) {
    setFormInstance(form);
  }

  return [formInstance];
}
