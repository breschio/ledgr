import React from "react";
import { fadeUp, fadeRight, scaleIn, barFill } from "../anim";

interface Props {
  animFrame?: number;
  fps?: number;
}

export const DashboardScreen: React.FC<Props> = ({
  animFrame = 999,
  fps = 30,
}) => {
  const f = animFrame;
  return (
    <div
      style={{
        backgroundColor: "#FAF9F6",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        fontSize: "12px",
        fontSynthesis: "none",
        height: "880px",
        lineHeight: "16px",
        overflow: "clip",
        WebkitFontSmoothing: "antialiased",
        width: "390px",
      }}
    >
      {/* Status bar spacer — visual handled by fixed overlay in AppFlowVideo */}
      <div style={{ height: "50px" }} />

      {/* Header */}
      <div style={{ ...fadeUp(f, 4, fps), alignItems: "center", display: "flex", justifyContent: "space-between", paddingBottom: "20px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <div style={{ color: "#9A9690", fontFamily: '"DM Sans", sans-serif', fontSize: "13px", lineHeight: "16px" }}>Good morning</div>
          <div style={{ color: "#1A1916", fontFamily: '"Instrument Serif", serif', fontSize: "24px", letterSpacing: "-0.02em", lineHeight: "30px" }}>Ledgr.</div>
        </div>
        <div style={{ alignItems: "center", backgroundColor: "#EEEDE9", borderRadius: "100px", display: "flex", height: "40px", justifyContent: "center", width: "40px" }}>
          <div style={{ color: "#1A1916", fontFamily: '"DM Sans", sans-serif', fontSize: "15px", fontWeight: 600 }}>TB</div>
        </div>
      </div>

      {/* Summary card */}
      <div style={{ ...fadeUp(f, 10, fps), backgroundColor: "#1A1916", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "20px", marginLeft: "24px", marginRight: "24px", padding: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.5)", fontFamily: '"DM Sans", sans-serif', fontSize: "13px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>March 2026</div>
          <div style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "6px", padding: "4px 10px" }}>
            <div style={{ color: "rgba(255,255,255,0.7)", fontFamily: '"DM Sans", sans-serif', fontSize: "12px", fontWeight: 500 }}>12 expenses</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ color: "#FFFFFF", fontFamily: '"Instrument Serif", serif', fontSize: "48px", letterSpacing: "-0.03em", lineHeight: "48px" }}>$2,847.30</div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontFamily: '"DM Sans", sans-serif', fontSize: "13px" }}>of $4,000 budget</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "100px", height: "4px", width: "100%" }}>
            <div style={{ backgroundColor: "#D4502C", borderRadius: "100px", height: "4px", width: barFill(f, 18, fps, 71) }} />
          </div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontFamily: '"DM Sans", sans-serif', fontSize: "12px" }}>71% used</div>
        </div>
      </div>

      {/* Category cards */}
      <div style={{ display: "flex", gap: "10px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "20px" }}>
        {([
          { icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5C5.8 1.5 4 3.3 4 5.5C4 8.5 8 14.5 8 14.5S12 8.5 12 5.5C12 3.3 10.2 1.5 8 1.5Z" stroke="#D4502C" strokeWidth="1.2" strokeLinejoin="round"/></svg>, label: "Travel", amount: "$1,240", delay: 22 },
          { icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="#D4502C" strokeWidth="1.2"/><path d="M8 5V8L10 10" stroke="#D4502C" strokeWidth="1.2" strokeLinecap="round"/></svg>, label: "Food", amount: "$892", delay: 26 },
          { icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="4.5" width="11" height="7" rx="1.5" stroke="#D4502C" strokeWidth="1.2"/><path d="M2.5 7H13.5" stroke="#D4502C" strokeWidth="1.2"/></svg>, label: "Office", amount: "$715", delay: 30 },
        ] as const).map((cat) => (
          <div key={cat.label} style={{ ...scaleIn(f, cat.delay, fps, 0.88), alignItems: "center", backgroundColor: "#FFFFFF", border: "1px solid #E5E2DC", borderRadius: "14px", display: "flex", flex: "1 1 0%", flexDirection: "column", gap: "6px", padding: "14px 8px" }}>
            <div style={{ alignItems: "center", backgroundColor: "#FDF0EC", borderRadius: "8px", display: "flex", height: "32px", justifyContent: "center", width: "32px" }}>{cat.icon}</div>
            <div style={{ color: "#9A9690", fontFamily: '"DM Sans", sans-serif', fontSize: "11px", fontWeight: 500 }}>{cat.label}</div>
            <div style={{ color: "#1A1916", fontFamily: '"DM Sans", sans-serif', fontSize: "14px", fontWeight: 600 }}>{cat.amount}</div>
          </div>
        ))}
      </div>

      {/* Recent header */}
      <div style={{ ...fadeUp(f, 34, fps), display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingLeft: "24px", paddingRight: "24px", paddingTop: "24px", paddingBottom: "12px" }}>
        <div style={{ color: "#1A1916", fontFamily: '"Instrument Serif", serif', fontSize: "20px", letterSpacing: "-0.01em" }}>Recent</div>
        <div style={{ color: "#D4502C", fontFamily: '"DM Sans", sans-serif', fontSize: "13px", fontWeight: 500 }}>See All</div>
      </div>

      {/* Expense rows */}
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: "24px", paddingRight: "24px" }}>
        {([
          { icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2C6.8 2 5 3.8 5 6C5 9 9 15 9 15S13 9 13 6C13 3.8 11.2 2 9 2Z" stroke="#D4502C" strokeWidth="1.3" strokeLinejoin="round"/></svg>, name: "Hilton Hotels", sub: "Travel · Today", amount: "$42.50", delay: 38 },
          { icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6" stroke="#D4502C" strokeWidth="1.3"/><path d="M9 6V9L11 11" stroke="#D4502C" strokeWidth="1.3" strokeLinecap="round"/></svg>, name: "Osteria Francescana", sub: "Food · Yesterday", amount: "$186.00", delay: 42 },
          { icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="5" width="12" height="8" rx="1.5" stroke="#D4502C" strokeWidth="1.3"/><path d="M3 8H15" stroke="#D4502C" strokeWidth="1.3"/></svg>, name: "WeWork Coworking", sub: "Office · Mar 26", amount: "$350.00", delay: 46 },
          { icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2C6.8 2 5 3.8 5 6C5 9 9 15 9 15S13 9 13 6C13 3.8 11.2 2 9 2Z" stroke="#D4502C" strokeWidth="1.3" strokeLinejoin="round"/></svg>, name: "Uber Airport", sub: "Travel · Mar 25", amount: "$64.00", delay: 50 },
        ] as const).map((row, i, arr) => (
          <div key={row.name} style={{ ...fadeRight(f, row.delay, fps), display: "flex", alignItems: "center", gap: "12px", padding: "14px 0", borderBottom: i < arr.length - 1 ? "1px solid #E5E2DC" : "none" }}>
            <div style={{ alignItems: "center", backgroundColor: "#FDF0EC", borderRadius: "10px", display: "flex", height: "40px", justifyContent: "center", width: "40px", flexShrink: 0 }}>{row.icon}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: "1 1 0%" }}>
              <div style={{ color: "#1A1916", fontFamily: '"DM Sans", sans-serif', fontSize: "15px", fontWeight: 500 }}>{row.name}</div>
              <div style={{ color: "#C4BFB6", fontFamily: '"DM Sans", sans-serif', fontSize: "12px" }}>{row.sub}</div>
            </div>
            <div style={{ color: "#1A1916", fontFamily: '"DM Sans", sans-serif', fontSize: "15px", fontWeight: 600 }}>{row.amount}</div>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div style={{ ...fadeUp(f, 52, fps, 12), alignItems: "center", backgroundColor: "#FAF9F6", borderTop: "1px solid #E5E2DC", display: "flex", justifyContent: "space-around", marginTop: "auto", paddingBottom: "28px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12px" }}>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "4px" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 8.5L11 2L19 8.5V19C19 19.6 18.6 20 18 20H4C3.4 20 3 19.6 3 19V8.5Z" stroke="#1A1916" strokeWidth="1.5" strokeLinejoin="round"/></svg>
          <div style={{ color: "#1A1916", fontFamily: '"DM Sans", sans-serif', fontSize: "10px", fontWeight: 600 }}>Home</div>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "4px" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 6H18M4 11H18M4 16H12" stroke="#C4BFB6" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <div style={{ color: "#C4BFB6", fontFamily: '"DM Sans", sans-serif', fontSize: "10px", fontWeight: 500 }}>Expenses</div>
        </div>
        <div style={{ alignItems: "center", backgroundColor: "#D4502C", borderRadius: "100px", display: "flex", height: "48px", justifyContent: "center", marginTop: "-20px", width: "48px" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 5V17M5 11H17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "4px" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M18 8H4L5 19H17L18 8Z" stroke="#C4BFB6" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 8V5C8 3.3 9.3 2 11 2C12.7 2 14 3.3 14 5V8" stroke="#C4BFB6" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <div style={{ color: "#C4BFB6", fontFamily: '"DM Sans", sans-serif', fontSize: "10px", fontWeight: 500 }}>Receipts</div>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "4px" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" stroke="#C4BFB6" strokeWidth="1.5"/><path d="M4 20C4 16.7 7.1 14 11 14C14.9 14 18 16.7 18 20" stroke="#C4BFB6" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <div style={{ color: "#C4BFB6", fontFamily: '"DM Sans", sans-serif', fontSize: "10px", fontWeight: 500 }}>Profile</div>
        </div>
      </div>
    </div>
  );
};
