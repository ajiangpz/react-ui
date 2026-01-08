import { GlobalConfigProvider } from "../config-provider/type";

// TODO: Import from @tdesign/common-js when available
const enUS = {} as GlobalConfigProvider;

// 需要 GlobalConfigProvider 保证数据类型正确，本次提交就检查出了英文字段缺少
export default enUS;
