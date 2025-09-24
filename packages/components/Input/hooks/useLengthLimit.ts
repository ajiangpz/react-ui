import { useEffect, useMemo } from 'react';

const tStatus = useMemo(
  () => params.status || innerStatus,
  [params.status, innerStatus],
);
