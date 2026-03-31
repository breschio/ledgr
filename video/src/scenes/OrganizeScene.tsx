import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const categories = [
  { label: "Travel", active: true },
  { label: "Food", active: false },
  { label: "Transport", active: false },
  { label: "Shopping", active: false },
  { label: "Office", active: false },
];

const detailRows = [
  { label: "Date", value: "Mar 28, 2026" },
  { label: "Merchant", value: "Hilton Hotels" },
  { label: "Note", value: "Client dinner stay" },
];

export const OrganizeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const labelOpacity = interpolate(frame, [5, 20], [0, 1], { extrapolateRight: "clamp" });
  const labelY = spring({ frame: Math.max(0, frame - 5), fps, config: { damping: 14 }, from: 20, to: 0 });

  const headingOpacity = interpolate(frame, [15, 30], [0, 1], { extrapolateRight: "clamp" });
  const headingY = spring({ frame: Math.max(0, frame - 15), fps, config: { damping: 14 }, from: 30, to: 0 });

  const cardOpacity = interpolate(frame, [30, 45], [0, 1], { extrapolateRight: "clamp" });
  const cardScale = spring({ frame: Math.max(0, frame - 30), fps, config: { damping: 12, mass: 0.6 } });

  const exitOpacity = interpolate(frame, [105, 120], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FAF9F6",
        justifyContent: "center",
        alignItems: "center",
        opacity: enterOpacity * exitOpacity,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 80 }}>
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
            Step 3 — Organize
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 44,
              color: "#1A1916",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              opacity: headingOpacity,
              transform: `translateY(${headingY}px)`,
            }}
          >
            A place for everything.
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              lineHeight: 1.6,
              color: "#9A9690",
              opacity: headingOpacity,
              transform: `translateY(${headingY}px)`,
            }}
          >
            Smart categories that learn your habits. Budgets that keep you honest.
          </div>
        </div>

        <div style={{ opacity: cardOpacity, transform: `scale(${cardScale})` }}>
          <div
            style={{
              width: 260,
              display: "flex",
              flexDirection: "column",
              borderRadius: 32,
              border: "1px solid #E5E2DC",
              backgroundColor: "white",
              padding: 14,
              boxShadow: "0 32px 64px rgba(26,25,22,0.12)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14, borderRadius: 20, backgroundColor: "#FAF9F6", padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M14 9H4M4 9L9 14M4 9L9 4" stroke="#1A1916" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1916" }}>New Expense</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, color: "#9A9690" }}>Cancel</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "16px 0" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9A9690" }}>
                  Amount
                </span>
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, letterSpacing: "-0.03em", color: "#1A1916" }}>
                  $42.50
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {categories.map(({ label, active }, i) => {
                  const chipDelay = 50 + i * 5;
                  const chipOpacity = interpolate(frame, [chipDelay, chipDelay + 8], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  });
                  const chipScale = spring({
                    frame: Math.max(0, frame - chipDelay),
                    fps,
                    config: { damping: 12, mass: 0.4 },
                  });

                  return (
                    <div
                      key={label}
                      style={{
                        borderRadius: 100,
                        padding: "4px 10px",
                        backgroundColor: active ? "#D4502C" : "#EEEDE9",
                        opacity: chipOpacity,
                        transform: `scale(${chipScale})`,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 10,
                          fontWeight: active ? 600 : 500,
                          color: active ? "white" : "#1A1916",
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {detailRows.map((row, i) => {
                  const rowDelay = 65 + i * 6;
                  const rowOpacity = interpolate(frame, [rowDelay, rowDelay + 10], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  });

                  return (
                    <div
                      key={row.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "8px 0",
                        borderBottom: i < detailRows.length - 1 ? "1px solid #E5E2DC" : "none",
                        opacity: rowOpacity,
                      }}
                    >
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#9A9690" }}>{row.label}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, color: "#1A1916" }}>{row.value}</span>
                    </div>
                  );
                })}
              </div>

              {(() => {
                const btnDelay = 85;
                const btnOpacity = interpolate(frame, [btnDelay, btnDelay + 10], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });
                const btnScale = spring({
                  frame: Math.max(0, frame - btnDelay),
                  fps,
                  config: { damping: 12 },
                });

                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                      backgroundColor: "#D4502C",
                      padding: 10,
                      opacity: btnOpacity,
                      transform: `scale(${btnScale})`,
                    }}
                  >
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "white" }}>
                      Save Expense
                    </span>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
