import { useContext } from 'react';
import ConfigContext from '@/components/config-provider/ConfigContext';
export default () => useContext(ConfigContext).globalConfig;
