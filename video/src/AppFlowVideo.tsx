import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";
import { DashboardScreen } from "./screens/DashboardScreen";
import { CameraScreen } from "./screens/CameraScreen";
import { ReceiptScreen } from "./screens/ReceiptScreen";
import { ExpenseScreen } from "./screens/ExpenseScreen";
import { InsightsScreen } from "./screens/InsightsScreen";

const SCREEN_W = 390;
const SCREEN_H = 880;

const SCENE_DUR = 110;
const TRANS_DUR = 22;

type TransitionType = "none" | "slideUp" | "pushLeft" | "slideDown";

interface SceneConfig {
  id: string;
  transition: TransitionType;
  tapX: number;
  tapY: number;
}

const sceneConfigs: SceneConfig[] = [
  { id: "dashboard", transition: "none", tapX: 195, tapY: 808 },
  { id: "camera", transition: "slideUp", tapX: 195, tapY: 760 },
  { id: "receipt", transition: "slideDown", tapX: 195, tapY: 735 },
  { id: "expense", transition: "pushLeft", tapX: 195, tapY: 830 },
  { id: "insights", transition: "pushLeft", tapX: -1, tapY: -1 },
];

const TOTAL_FRAMES = sceneConfigs.length * SCENE_DUR;

const ScreenComponents: Record<string, React.FC<{ animFrame?: number; fps?: number }>> = {
  dashboard: DashboardScreen,
  camera: CameraScreen,
  receipt: ReceiptScreen,
  expense: ExpenseScreen,
  insights: InsightsScreen,
};

function getSceneInfo(frame: number) {
  const sceneIndex = Math.min(
    Math.floor(frame / SCENE_DUR),
    sceneConfigs.length - 1
  );
  const localFrame = frame - sceneIndex * SCENE_DUR;
  return { sceneIndex, localFrame };
}

const TapCursor: React.FC<{
  x: number;
  y: number;
  visible: boolean;
  progress: number;
}> = ({ x, y, visible, progress }) => {
  if (!visible || x < 0) return null;

  const scale = interpolate(progress, [0, 0.15, 0.35, 1], [0, 1.05, 0.92, 0], {
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(progress, [0, 0.1, 0.6, 1], [0, 0.65, 0.4, 0], {
    extrapolateRight: "clamp",
  });
  const ringOpacity = interpolate(
    progress,
    [0.1, 0.2, 0.5, 0.85],
    [0, 0.25, 0.12, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const ringScale = interpolate(progress, [0.1, 0.85], [0.8, 2.4], {
    extrapolateRight: "clamp",
  });

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: x - 24,
          top: y - 24,
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "1.5px solid rgba(0,0,0,0.12)",
          transform: `scale(${ringScale})`,
          opacity: ringOpacity,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: x - 14,
          top: y - 14,
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 100%)",
          transform: `scale(${scale})`,
          opacity,
          pointerEvents: "none",
          filter: "blur(1px)",
        }}
      />
    </>
  );
};

const STATUS_BAR_H = 50;

const StatusBarIcons: React.FC<{ color: string; mutedColor: string }> = ({
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

export const AppFlowVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { sceneIndex, localFrame } = getSceneInfo(frame);
  const scene = sceneConfigs[sceneIndex];

  const isTransitioning =
    localFrame >= SCENE_DUR - TRANS_DUR && sceneIndex < sceneConfigs.length - 1;
  const nextIndex = Math.min(sceneIndex + 1, sceneConfigs.length - 1);
  const nextScene = sceneConfigs[nextIndex];

  const transProgress = isTransitioning
    ? interpolate(
        localFrame,
        [SCENE_DUR - TRANS_DUR, SCENE_DUR],
        [0, 1],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        }
      )
    : 0;

  let currentTransform = "";
  let currentOpacity = 1;
  let nextTransform = `translateX(${SCREEN_W}px)`;

  if (isTransitioning) {
    const type = nextScene.transition;
    if (type === "slideUp") {
      currentTransform = `translateY(${-transProgress * 40}px) scale(${1 - transProgress * 0.04})`;
      currentOpacity = 1 - transProgress * 0.15;
      nextTransform = `translateY(${(1 - transProgress) * SCREEN_H}px)`;
    } else if (type === "pushLeft") {
      currentTransform = `translateX(${-transProgress * SCREEN_W * 0.3}px)`;
      currentOpacity = 1 - transProgress * 0.4;
      nextTransform = `translateX(${(1 - transProgress) * SCREEN_W}px)`;
    } else if (type === "slideDown") {
      currentTransform = `translateY(${transProgress * SCREEN_H}px)`;
      currentOpacity = 1;
      nextTransform = `scale(${0.94 + transProgress * 0.06})`;
    }
  }

  const isFirstScene = sceneIndex === 0;
  const contentAnimFrame = isFirstScene
    ? localFrame
    : localFrame + TRANS_DUR;

  const nextContentAnimFrame = isTransitioning
    ? localFrame - (SCENE_DUR - TRANS_DUR)
    : 0;

  const tapStart = 72;
  const tapDuration = 22;
  const hasTap = scene.tapX >= 0;
  const tapProgress = hasTap
    ? interpolate(
        localFrame,
        [tapStart, tapStart + tapDuration],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      )
    : 0;
  const tapVisible =
    hasTap && localFrame >= tapStart && localFrame <= tapStart + tapDuration;

  const loopFade = interpolate(
    frame,
    [TOTAL_FRAMES - 35, TOTAL_FRAMES],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const entryFade = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });

  const CurrentScreen = ScreenComponents[scene.id];
  const NextScreen = ScreenComponents[nextScene.id];

  const currentIsDark = scene.id === "camera";
  const nextIsDark = nextScene.id === "camera";
  let darkStatusOpacity = currentIsDark ? 1 : 0;
  if (isTransitioning) {
    if (!currentIsDark && nextIsDark) darkStatusOpacity = transProgress;
    else if (currentIsDark && !nextIsDark) darkStatusOpacity = 1 - transProgress;
  }

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FAF9F6",
        justifyContent: "center",
        alignItems: "center",
        opacity: entryFade * loopFade,
      }}
    >
      <div
        style={{
          position: "relative",
          width: SCREEN_W,
          height: SCREEN_H,
          overflow: "hidden",
          backgroundColor: "#FAF9F6",
        }}
      >
            {/* Next screen (rendered first = behind for slideDown) */}
            {isTransitioning && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: SCREEN_W,
                  height: SCREEN_H,
                  transform: nextTransform,
                  willChange: "transform",
                  zIndex: nextScene.transition === "slideDown" ? 1 : 3,
                }}
              >
                <NextScreen animFrame={nextContentAnimFrame} fps={fps} />
              </div>
            )}

            {/* Current screen */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: SCREEN_W,
                height: SCREEN_H,
                transform: currentTransform,
                opacity: currentOpacity,
                willChange: "transform, opacity",
                zIndex: isTransitioning && nextScene.transition === "slideDown" ? 2 : 1,
              }}
            >
              <CurrentScreen animFrame={contentAnimFrame} fps={fps} />
            </div>

            {/* Edge shadow for push-left transition */}
            {isTransitioning && nextScene.transition === "pushLeft" && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${(1 - transProgress) * 100}%`,
                  marginLeft: -24,
                  width: 24,
                  height: SCREEN_H,
                  background: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0))",
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Fixed status bar overlay — sits above all transitions */}
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
                  backgroundColor: "#FAF9F6",
                  opacity: 1 - darkStatusOpacity,
                }}
              >
                <StatusBarIcons color="#1A1916" mutedColor="#C4BFB6" />
              </div>
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
            </div>

            {/* Tap cursor */}
            <TapCursor
              x={scene.tapX}
              y={scene.tapY}
              visible={tapVisible}
              progress={tapProgress}
            />
      </div>
    </AbsoluteFill>
  );
};
