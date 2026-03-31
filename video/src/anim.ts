import { spring, interpolate } from "remotion";

const SPRING_ENTER = { damping: 28, mass: 0.5, stiffness: 180 };
const SPRING_SOFT = { damping: 22, mass: 0.6, stiffness: 120 };

export function fadeUp(
  f: number,
  delay: number,
  fps: number,
  distance = 18
): React.CSSProperties {
  const t = Math.max(0, f - delay);
  const s = spring({ frame: t, fps, config: SPRING_ENTER });
  const opacity = interpolate(t, [0, 6], [0, 1], {
    extrapolateRight: "clamp",
  });
  return { opacity, transform: `translateY(${(1 - s) * distance}px)` };
}

export function fadeRight(
  f: number,
  delay: number,
  fps: number,
  distance = 24
): React.CSSProperties {
  const t = Math.max(0, f - delay);
  const s = spring({ frame: t, fps, config: SPRING_ENTER });
  const opacity = interpolate(t, [0, 6], [0, 1], {
    extrapolateRight: "clamp",
  });
  return { opacity, transform: `translateX(${(1 - s) * distance}px)` };
}

export function scaleIn(
  f: number,
  delay: number,
  fps: number,
  from = 0.85
): React.CSSProperties {
  const t = Math.max(0, f - delay);
  const s = spring({ frame: t, fps, config: SPRING_SOFT });
  const opacity = interpolate(t, [0, 5], [0, 1], {
    extrapolateRight: "clamp",
  });
  return { opacity, transform: `scale(${from + s * (1 - from)})` };
}

export function fadeIn(
  f: number,
  delay: number,
  duration = 8
): React.CSSProperties {
  const t = Math.max(0, f - delay);
  const opacity = interpolate(t, [0, duration], [0, 1], {
    extrapolateRight: "clamp",
  });
  return { opacity };
}

export function barFill(
  f: number,
  delay: number,
  fps: number,
  targetPct: number
): string {
  const t = Math.max(0, f - delay);
  const s = spring({ frame: t, fps, config: { damping: 30, mass: 0.8, stiffness: 80 } });
  return `${s * targetPct}%`;
}
