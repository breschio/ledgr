import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const headingY = spring({ frame, fps, config: { damping: 14 }, from: 40, to: 0 });

  const subtitleOpacity = interpolate(frame, [20, 35], [0, 1], { extrapolateRight: "clamp" });
  const subtitleY = spring({ frame: Math.max(0, frame - 20), fps, config: { damping: 14 }, from: 20, to: 0 });

  const buttonOpacity = interpolate(frame, [35, 50], [0, 1], { extrapolateRight: "clamp" });
  const buttonScale = spring({ frame: Math.max(0, frame - 35), fps, config: { damping: 12, mass: 0.5 } });

  const logoOpacity = interpolate(frame, [50, 65], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FAF9F6",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 56,
            color: "#1A1916",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            textAlign: "center",
            maxWidth: 600,
            opacity: headingOpacity,
            transform: `translateY(${headingY}px)`,
          }}
        >
          Your receipts deserve better.
        </div>

        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 18,
            color: "#9A9690",
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
          }}
        >
          Free for personal use. No credit card required.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 14,
            backgroundColor: "#D4502C",
            padding: "18px 48px",
            opacity: buttonOpacity,
            transform: `scale(${buttonScale})`,
          }}
        >
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 600, color: "white" }}>
            Get Started — It's Free
          </span>
        </div>

        <div
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 28,
            color: "#C4BFB6",
            letterSpacing: "-0.02em",
            marginTop: 32,
            opacity: logoOpacity,
          }}
        >
          Ledgr.
        </div>
      </div>
    </AbsoluteFill>
  );
};
