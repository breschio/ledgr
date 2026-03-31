import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  SCREEN_H,
  SCREEN_W,
  STATUS_BAR_H,
  StatusBarIcons,
} from "./ClipScaffold";
import { CameraScreen } from "../screens/CameraScreen";
import { ReceiptScreen } from "../screens/ReceiptScreen";

export const CameraClip: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const transitionStart = 96;
  const transitionDur = 24;
  const transitionEnd = transitionStart + transitionDur;

  const transProgress =
    frame >= transitionStart && frame < transitionEnd
      ? interpolate(frame, [transitionStart, transitionEnd], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        })
      : frame >= transitionEnd
        ? 1
        : 0;

  const fadeIn = interpolate(frame, [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 10, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );

  const receiptAnimFrame =
    frame < transitionStart ? 0 : frame - transitionStart;

  const cameraTranslateY = transProgress * SCREEN_H;

  const receiptScale = 0.94 + transProgress * 0.06;

  const darkStatusOpacity = 1 - transProgress;

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        backgroundColor: "#FAF9F6",
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
          backgroundColor: "#FAF9F6",
        }}
      >
        {/* Receipt sits behind, scales up as camera reveals it */}
        {frame >= transitionStart && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              transform: `scale(${receiptScale})`,
              transformOrigin: "center center",
              willChange: "transform",
              zIndex: 1,
            }}
          >
            <ReceiptScreen animFrame={receiptAnimFrame} fps={fps} />
          </div>
        )}

        {/* Camera on top, slides down to dismiss */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `translateY(${cameraTranslateY}px)`,
            willChange: "transform",
            zIndex: 2,
          }}
        >
          <CameraScreen
            animFrame={Math.min(frame, transitionStart)}
            fps={fps}
          />
        </div>

        {/* Status bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: STATUS_BAR_H,
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#0A0A0A",
              opacity: darkStatusOpacity,
            }}
          >
            <StatusBarIcons color="#FFFFFF" mutedColor="#555555" />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#FAF9F6",
              opacity: 1 - darkStatusOpacity,
            }}
          >
            <StatusBarIcons color="#1A1916" mutedColor="#C4BFB6" />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
