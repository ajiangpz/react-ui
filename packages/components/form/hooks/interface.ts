import type { NamePath, FormInstanceFunctions } from "../type";

export type Store = Record<string, unknown>;

export type WatchCallBack = (values: Store, namePathList: NamePath) => void;

export interface InternalHooks {
  notifyWatch: (name: NamePath) => void;
  registerWatch: (callback: WatchCallBack) => () => void;
  getPrevStore: () => Store;
  setPrevStore: (store: Store) => void;
  flashQueue: () => void;
  setForm: (form: FormInstanceFunctions) => void;
}

export interface InternalFormInstance extends FormInstanceFunctions {
  _init?: boolean;
  store?: Store;
  getInternalHooks?: (secret: string) => InternalHooks | null;
}
