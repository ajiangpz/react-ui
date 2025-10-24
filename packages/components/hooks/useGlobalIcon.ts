import useConfig from "./useConfig";
import Icon from "tendaui-react-icons";
// 从 globalConfig 获取 icon 配置用于覆盖组件内置 icon
export default function useGlobalIcon(tdIcon: Record<string, typeof Icon>) {
  const { icon: globalIcon } = useConfig();

  const resultIcon: Record<string, typeof Icon> = {};

  Object.keys(tdIcon).forEach((key) => {
    resultIcon[key] = globalIcon?.[key] || tdIcon[key];
  });

  return resultIcon;
}
