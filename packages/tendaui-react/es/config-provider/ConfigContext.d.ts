import { GlobalConfigProvider } from './type';
export declare const defaultClassPrefix = "t";
export declare const defaultGlobalConfig: GlobalConfigProvider;
export declare const defaultContext: {
    globalConfig: GlobalConfigProvider;
};
export type Config = typeof defaultContext;
declare const ConfigContext: import("react").Context<{
    globalConfig: GlobalConfigProvider;
}>;
export default ConfigContext;
