import { useState, useEffect, useMemo, useRef } from "react";
import { get, isUndefined } from "lodash-es";
import type { NamePath } from "../type";
import type { InternalFormInstance } from "./interface";
import { HOOK_MARK } from "./useForm";
import noop from "../../utils/noop";

export default function useWatch(name: NamePath, form: InternalFormInstance) {
  const [value, setValue] = useState<any>();
  const valueStr = useMemo(() => JSON.stringify(value), [value]);
  const valueStrRef = useRef(valueStr);

  const isValidForm = form && form._init;

  useEffect(() => {
    if (!isValidForm) return;

    const internalHooks = form.getInternalHooks?.(HOOK_MARK);
    const { registerWatch = noop } = internalHooks || {};

    const cancelRegister = registerWatch(() => {
      const allFieldsValue = form.getFieldsValue?.(true);
      const newValue = get(allFieldsValue, name);
      const nextValueStr = JSON.stringify(newValue);

      // Compare stringify in case it's nest object
      if (valueStrRef.current !== nextValueStr) {
        valueStrRef.current = nextValueStr;
        setValue(nextValueStr);
      }
    });

    const allFieldsValue = form.getFieldsValue?.(true);
    const initialValue = get(allFieldsValue, name);
    setValue(JSON.stringify(initialValue));

    return cancelRegister;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isUndefined(value) ? value : JSON.parse(value);
}
