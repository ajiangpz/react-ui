import { useCallback, useState } from 'react';

export default function useDomRefCallback<T extends HTMLElement>() {
  const [refCurrent, setRefCurrent] = useState<T | null>(null);

  const refCallback = useCallback((dom: T | null) => {
    if (dom) {
      setRefCurrent(dom);
    }
  }, []);

  return [refCurrent, refCallback] as const;
}
