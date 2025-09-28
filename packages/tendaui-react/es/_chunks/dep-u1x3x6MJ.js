import { useContext } from 'react';
import ConfigContext from '../config-provider/ConfigContext.js';

var useConfig = (function () {
  return useContext(ConfigContext).globalConfig;
});

export { useConfig as u };
//# sourceMappingURL=dep-u1x3x6MJ.js.map
