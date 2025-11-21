export interface FireworkBurst {
  /**
   * 唯一标识，用于 React 渲染
   */
  id: string;
  /**
   * 烟花的主色
   */
  color: string;
  /**
   * 爆炸中心的横向位置（百分比）
   */
  left: number;
  /**
   * 爆炸中心的纵向位置（百分比）
   */
  top: number;
  /**
   * 动画延迟，毫秒
   */
  delay: number;
  /**
   * 每朵烟花的旋转偏移，度数
   */
  rotationOffset: number;
}

export interface FireworksLaunchContext {
  bursts: FireworkBurst[];
}

export interface TdFireworksProps {
  /**
   * 同时展示的烟花数量
   * @default 6
   */
  count?: number;
  /**
   * 烟花的随机颜色池
   */
  colors?: string[];
  /**
   * 单次烟花动画时长，毫秒
   * @default 2400
   */
  duration?: number;
  /**
   * 单朵烟花的最大尺寸，像素
   * @default 140
   */
  size?: number;
  /**
   * 每轮重新生成烟花的间隔，毫秒
   * @default 2800
   */
  interval?: number;
  /**
   * 单朵烟花的光束数量
   * @default 12
   */
  particleCount?: number;
  /**
   * 是否持续循环播放
   * @default true
   */
  loop?: boolean;
  /**
   * 每次重新生成烟花时回调
   */
  onLaunch?: (context: FireworksLaunchContext) => void;
}

