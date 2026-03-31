import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const ReceiptCard: React.FC<{ opacity: number; scale: number }> = ({ opacity, scale }) => (
  <div
    style={{
      width: 220,
      display: "flex",
      flexDirection: "column",
      borderRadius: 28,
      backgroundColor: "#0A0A0A",
      padding: 12,
      boxShadow: "0 32px 64px rgba(26,25,22,0.15)",
      opacity,
      transform: `scale(${scale})`,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        borderRadius: 18,
        backgroundColor: "#1A1A18",
        padding: 16,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M14 6L6 14M6 6L14 14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 2L3 10H9L8 14L15 6H9L10 2Z" stroke="#FFFFFF" strokeLinejoin="round" />
        </svg>
      </div>
      <div
        style={{
          margin: "16px 8px",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          borderRadius: 3,
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: 14,
        }}
      >
        <div style={{ textAlign: "center", fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, color: "#333" }}>
          HILTON HOTELS
        </div>
        <div style={{ borderTop: "1px dashed #CCCCCC" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: "#666" }}>Room 412</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: "#666" }}>$42.50</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, fontWeight: 700, color: "#333" }}>TOTAL</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, fontWeight: 700, color: "#333" }}>$46.28</span>
        </div>
      </div>
      <div style={{ textAlign: "center", fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: "rgba(255,255,255,0.4)" }}>
        Align receipt within the frame
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center", paddingTop: 14, paddingBottom: 8 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "2.5px solid #FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "white" }} />
      </div>
    </div>
  </div>
);

const ResultCard: React.FC<{ opacity: number; translateX: number }> = ({ opacity, translateX }) => (
  <div
    style={{
      width: 220,
      display: "flex",
      flexDirection: "column",
      borderRadius: 28,
      border: "1px solid #E5E2DC",
      backgroundColor: "white",
      padding: 12,
      boxShadow: "0 32px 64px rgba(26,25,22,0.1)",
      opacity,
      transform: `translateX(${translateX}px)`,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        borderRadius: 18,
        backgroundColor: "#FAF9F6",
        padding: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          borderRadius: 8,
          backgroundColor: "#E8F5E9",
          padding: "8px 10px",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="5" stroke="#2E7D32" />
          <path d="M4 6L5.5 7.5L8 5" stroke="#2E7D32" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 500, color: "#2E7D32" }}>
          Scanned successfully
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "8px 0" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9A9690" }}>
          Detected
        </span>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, letterSpacing: "-0.03em", color: "#1A1916" }}>
          $46.28
        </span>
      </div>
      {[
        { label: "Merchant", value: "Hilton Hotels" },
        { label: "Category", value: "Travel", isBadge: true },
        { label: "Date", value: "Mar 28, 2026" },
      ].map((row, i) => (
        <div
          key={row.label}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "6px 0",
            borderBottom: i < 2 ? "1px solid #E5E2DC" : "none",
          }}
        >
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#9A9690" }}>{row.label}</span>
          {row.isBadge ? (
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                fontWeight: 600,
                color: "white",
                backgroundColor: "#D4502C",
                borderRadius: 100,
                padding: "2px 8px",
              }}
            >
              {row.value}
            </span>
          ) : (
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 500, color: "#1A1916" }}>
              {row.value}
            </span>
          )}
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          backgroundColor: "#D4502C",
          padding: 8,
          marginTop: 4,
        }}
      >
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: "white" }}>
          Confirm & Save
        </span>
      </div>
    </div>
  </div>
);

export const CaptureScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const labelOpacity = interpolate(frame, [5, 20], [0, 1], { extrapolateRight: "clamp" });
  const labelY = spring({ frame: Math.max(0, frame - 5), fps, config: { damping: 14 }, from: 20, to: 0 });

  const headingOpacity = interpolate(frame, [15, 30], [0, 1], { extrapolateRight: "clamp" });
  const headingY = spring({ frame: Math.max(0, frame - 15), fps, config: { damping: 14 }, from: 30, to: 0 });

  const phoneOpacity = interpolate(frame, [30, 45], [0, 1], { extrapolateRight: "clamp" });
  const phoneScale = spring({ frame: Math.max(0, frame - 30), fps, config: { damping: 12, mass: 0.6 } });

  const scanPulse = frame > 50
    ? Math.sin((frame - 50) * 0.15) * 0.03 + 1
    : 1;

  const arrowOpacity = interpolate(frame, [60, 75], [0, 1], { extrapolateRight: "clamp" });
  const arrowX = spring({ frame: Math.max(0, frame - 60), fps, config: { damping: 14 }, from: -20, to: 0 });

  const resultOpacity = interpolate(frame, [75, 90], [0, 1], { extrapolateRight: "clamp" });
  const resultX = spring({ frame: Math.max(0, frame - 75), fps, config: { damping: 12 }, from: 40, to: 0 });

  const exitOpacity = interpolate(frame, [135, 150], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FAF9F6",
        justifyContent: "center",
        alignItems: "center",
        opacity: enterOpacity * exitOpacity,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
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
            Step 1 — Capture
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 44,
              color: "#1A1916",
              letterSpacing: "-0.03em",
              opacity: headingOpacity,
              transform: `translateY(${headingY}px)`,
            }}
          >
            Point. Shoot. Filed.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <div style={{ opacity: phoneOpacity, transform: `scale(${phoneScale * scanPulse})` }}>
            <ReceiptCard opacity={1} scale={1} />
          </div>

          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            style={{ opacity: arrowOpacity, transform: `translateX(${arrowX}px)` }}
          >
            <path d="M6 16H26M26 16L20 10M26 16L20 22" stroke="#DDD9D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <ResultCard opacity={resultOpacity} translateX={resultX} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
