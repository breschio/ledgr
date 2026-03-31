import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 12, mass: 0.5 } });
  const logoOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const tagline1Opacity = interpolate(frame, [20, 35], [0, 1], { extrapolateRight: "clamp" });
  const tagline1Y = spring({ frame: Math.max(0, frame - 20), fps, config: { damping: 14 }, from: 30, to: 0 });

  const tagline2Opacity = interpolate(frame, [35, 50], [0, 1], { extrapolateRight: "clamp" });
  const tagline2Y = spring({ frame: Math.max(0, frame - 35), fps, config: { damping: 14 }, from: 30, to: 0 });

  const subtitleOpacity = interpolate(frame, [55, 70], [0, 1], { extrapolateRight: "clamp" });
  const subtitleY = spring({ frame: Math.max(0, frame - 55), fps, config: { damping: 14 }, from: 20, to: 0 });

  const exitOpacity = interpolate(frame, [75, 90], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FAF9F6",
        justifyContent: "center",
        alignItems: "center",
        opacity: exitOpacity,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 72,
            color: "#1A1916",
            letterSpacing: "-0.02em",
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
          }}
        >
          Ledgr.
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 48,
              color: "#1A1916",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              opacity: tagline1Opacity,
              transform: `translateY(${tagline1Y}px)`,
            }}
          >
            Every receipt,
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 48,
              fontStyle: "italic",
              color: "#D4502C",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              opacity: tagline2Opacity,
              transform: `translateY(${tagline2Y}px)`,
            }}
          >
            accounted for.
          </div>
        </div>

        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 20,
            color: "#9A9690",
            marginTop: 8,
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
          }}
        >
          Snap. Categorize. Done.
        </div>
      </div>
    </AbsoluteFill>
  );
};
