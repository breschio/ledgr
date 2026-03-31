import React from "react";

export const PhoneFrame: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      style={{
        width: 414,
        height: 904,
        borderRadius: 50,
        backgroundColor: "#111110",
        padding: "12px",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.06) inset, 0 8px 40px rgba(0,0,0,0.18), 0 2px 12px rgba(0,0,0,0.08)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: 390,
          height: 880,
          borderRadius: 42,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {children}
      </div>
      {/* Dynamic Island */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: 126,
          height: 36,
          borderRadius: 20,
          backgroundColor: "#000",
          zIndex: 10,
        }}
      />
    </div>
  );
};
