import React, {
  CSSProperties,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import classNames from "classnames";

import useConfig from "../hooks/useConfig";
import { StyledProps } from "../common";
import type { FireworkBurst, FireworksLaunchContext, TdFireworksProps } from "./type";

const DEFAULT_COLORS = ["#FF5F6D", "#FFC371", "#00C9FF", "#92FE9D", "#C77DFF", "#F2EA02"];

type CSSPropertiesWithVars = CSSProperties & {
  [key: `--${string}`]: string | number;
};

const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

const pickColor = (palette: string[]) => {
  if (!palette || palette.length === 0) return DEFAULT_COLORS[0];
  const index = Math.floor(Math.random() * palette.length);
  return palette[index];
};

const createBurstList = (count: number, colors: string[]): FireworkBurst[] =>
  Array.from({ length: Math.max(1, count) }).map((_, index) => ({
    id: `${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    color: pickColor(colors),
    left: randomInRange(8, 92),
    top: randomInRange(15, 85),
    delay: randomInRange(0, 500),
    rotationOffset: randomInRange(0, 360)
  }));

export interface FireworksProps extends TdFireworksProps, StyledProps {}

const Fireworks = forwardRef<HTMLDivElement, FireworksProps>((props, ref) => {
  const {
    className,
    style,
    count = 6,
    colors = DEFAULT_COLORS,
    duration = 2400,
    size = 140,
    interval = 2800,
    particleCount = 12,
    loop = true,
    onLaunch,
    ...rest
  } = props;

  const { classPrefix } = useConfig();
  const componentCls = `${classPrefix}-fireworks`;
  const safeParticleCount = Math.max(6, particleCount);
  const [bursts, setBursts] = useState<FireworkBurst[]>(() => createBurstList(count, colors));
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const particleAngles = useMemo(() => {
    return Array.from({ length: safeParticleCount }).map((_, index) => (360 / safeParticleCount) * index);
  }, [safeParticleCount]);

  const triggerLaunch = useCallback(() => {
    const nextBursts = createBurstList(count, colors);
    setBursts(nextBursts);
    const context: FireworksLaunchContext = { bursts: nextBursts };
    onLaunch?.(context);
  }, [count, colors, onLaunch]);

  useEffect(() => {
    triggerLaunch();
  }, [triggerLaunch]);

  useEffect(() => {
    if (!loop) return undefined;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(triggerLaunch, Math.max(interval, duration));
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [duration, interval, loop, triggerLaunch]);

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    },
    []
  );

  return (
    <div
      ref={ref}
      className={classNames(componentCls, className)}
      style={style}
      role="presentation"
      aria-hidden="true"
      {...rest}
    >
      {bursts.map((burst) => {
        const burstStyle: CSSPropertiesWithVars = {
          "--fireworks-left": `${burst.left}%`,
          "--fireworks-top": `${burst.top}%`,
          "--fireworks-delay": `${burst.delay}ms`,
          "--fireworks-color": burst.color,
          "--fireworks-size": `${size}px`,
          "--fireworks-duration": `${duration}ms`
        };

        return (
          <span key={burst.id} className={`${componentCls}__burst`} style={burstStyle}>
            {particleAngles.map((angle, index) => {
              const sparkStyle: CSSPropertiesWithVars = {
                "--fireworks-delay": `${burst.delay}ms`,
                "--fireworks-duration": `${duration}ms`,
                "--fireworks-color": burst.color,
                "--fireworks-rotate": `${angle + burst.rotationOffset}deg`
              };
              return <i key={`${burst.id}-${index}`} className={`${componentCls}__spark`} style={sparkStyle} />;
            })}
          </span>
        );
      })}
    </div>
  );
});

Fireworks.displayName = "Fireworks";

export default Fireworks;

