import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const BarRow: React.FC<{
  label: string;
  amount: string;
  percent: number;
  color: string;
  frame: number;
  delay: number;
  fps: number;
}> = ({ label, amount, percent, color, frame, delay, fps }) => {
  const barWidth = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 20, mass: 1, stiffness: 40 },
    from: 0,
    to: percent,
  });

  const rowOpacity = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, opacity: rowOpacity }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: "#1A1916" }}>{label}</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#1A1916" }}>{amount}</span>
      </div>
      <div style={{ height: 6, width: "100%", borderRadius: 999, backgroundColor: "#EEEDE9" }}>
        <div style={{ height: 6, width: `${barWidth}%`, borderRadius: 999, backgroundColor: color }} />
      </div>
    </div>
  );
};

const StatBox: React.FC<{
  label: string;
  value: string;
  color: string;
  frame: number;
  delay: number;
  fps: number;
}> = ({ label, value, color, frame, delay, fps }) => {
  const opacity = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const scale = spring({ frame: Math.max(0, frame - delay), fps, config: { damping: 12 } });

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: 10,
        border: "1px solid #E5E2DC",
        backgroundColor: "white",
        padding: 12,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9A9690" }}>
        {label}
      </span>
      <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color }}>{value}</span>
    </div>
  );
};

export const InsightsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const labelOpacity = interpolate(frame, [5, 20], [0, 1], { extrapolateRight: "clamp" });
  const labelY = spring({ frame: Math.max(0, frame - 5), fps, config: { damping: 14 }, from: 20, to: 0 });

  const headingOpacity = interpolate(frame, [15, 30], [0, 1], { extrapolateRight: "clamp" });
  const headingY = spring({ frame: Math.max(0, frame - 15), fps, config: { damping: 14 }, from: 30, to: 0 });

  const cardOpacity = interpolate(frame, [30, 45], [0, 1], { extrapolateRight: "clamp" });
  const cardScale = spring({ frame: Math.max(0, frame - 30), fps, config: { damping: 12, mass: 0.6 } });

  const exitOpacity = interpolate(frame, [135, 150], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1A1916",
        justifyContent: "center",
        alignItems: "center",
        opacity: enterOpacity * exitOpacity,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 80 }}>
        <div
          style={{
            opacity: cardOpacity,
            transform: `scale(${cardScale})`,
          }}
        >
          <div
            style={{
              width: 280,
              display: "flex",
              flexDirection: "column",
              borderRadius: 32,
              backgroundColor: "white",
              padding: 14,
              boxShadow: "0 32px 64px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14, borderRadius: 20, backgroundColor: "#FAF9F6", padding: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#1A1916" }}>Insights</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#9A9690" }}>March 2026</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  borderRadius: 12,
                  border: "1px solid #E5E2DC",
                  backgroundColor: "white",
                  padding: 14,
                }}
              >
                <BarRow label="Travel" amount="$1,240" percent={82} color="#D4502C" frame={frame} delay={50} fps={fps} />
                <BarRow label="Food" amount="$892" percent={59} color="#E8956E" frame={frame} delay={60} fps={fps} />
                <BarRow label="Office" amount="$715" percent={47} color="#C4BFB6" frame={frame} delay={70} fps={fps} />
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                <StatBox label="Avg/Day" value="$101" color="#1A1916" frame={frame} delay={85} fps={fps} />
                <StatBox label="vs Feb" value="+18%" color="#D4502C" frame={frame} delay={90} fps={fps} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 400 }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#D4502C",
              opacity: labelOpacity,
              transform: `translateY(${labelY}px)`,
            }}
          >
            Step 2 — Insights
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 44,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              opacity: headingOpacity,
              transform: `translateY(${headingY}px)`,
            }}
          >
            See where it goes.
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.45)",
              opacity: headingOpacity,
              transform: `translateY(${headingY}px)`,
            }}
          >
            Breakdowns by category, merchant, and month. No spreadsheets. Just clarity.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
