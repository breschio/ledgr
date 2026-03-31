import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const SCREEN_W = 390;
export const SCREEN_H = 880;
export const STATUS_BAR_H = 50;

export const StatusBarIcons: React.FC<{ color: string; mutedColor: string }> = ({
  color,
  mutedColor,
}) => (
  <div
    style={{
      alignItems: "center",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "8px",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingTop: "24px",
      width: SCREEN_W,
      height: STATUS_BAR_H,
    }}
  >
    <div
      style={{
        color,
        fontFamily: '"DM Sans", sans-serif',
        fontSize: "15px",
        fontWeight: 600,
        lineHeight: "18px",
      }}
    >
      9:41
    </div>
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
        <rect x="0" y="3" width="3" height="9" rx="1" fill={color} />
        <rect x="4.5" y="2" width="3" height="10" rx="1" fill={color} />
        <rect x="9" y="0" width="3" height="12" rx="1" fill={color} />
        <rect x="13.5" y="0" width="3" height="12" rx="1" fill={mutedColor} />
      </svg>
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
        <path
          d="M8 3.5C9.8 3.5 11.4 4.2 12.6 5.4L14 4C12.4 2.4 10.3 1.5 8 1.5C5.7 1.5 3.6 2.4 2 4L3.4 5.4C4.6 4.2 6.2 3.5 8 3.5Z"
          fill={color}
        />
        <path
          d="M8 7C9 7 9.9 7.4 10.6 8L12 6.6C10.9 5.6 9.5 5 8 5C6.5 5 5.1 5.6 4 6.6L5.4 8C6.1 7.4 7 7 8 7Z"
          fill={color}
        />
        <circle cx="8" cy="10.5" r="1.5" fill={color} />
      </svg>
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
        <rect x="0" y="1" width="22" height="10" rx="2" stroke={color} />
        <rect x="1.5" y="2.5" width="16" height="7" rx="1" fill={color} />
        <rect x="23" y="4" width="2" height="4" rx="0.5" fill={color} />
      </svg>
    </div>
  </div>
);

interface ClipScaffoldProps {
  backgroundColor: string;
  darkStatusBar?: boolean;
  children: React.ReactNode;
}

export const ClipScaffold: React.FC<ClipScaffoldProps> = ({
  backgroundColor,
  darkStatusBar = false,
  children,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 10, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        backgroundColor,
        justifyContent: "center",
        opacity: fadeIn * fadeOut,
      }}
    >
      <div
        style={{
          width: SCREEN_W,
          height: SCREEN_H,
          position: "relative",
          overflow: "hidden",
          backgroundColor,
        }}
      >
        {children}
        <div
          style={{
            position: "absolute",
            inset: 0,
            height: STATUS_BAR_H,
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor,
            }}
          >
            <StatusBarIcons
              color={darkStatusBar ? "#FFFFFF" : "#1A1916"}
              mutedColor={darkStatusBar ? "#555555" : "#C4BFB6"}
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
