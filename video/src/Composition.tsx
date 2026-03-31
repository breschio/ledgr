import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { IntroScene } from "./scenes/IntroScene";
import { CaptureScene } from "./scenes/CaptureScene";
import { InsightsScene } from "./scenes/InsightsScene";
import { OrganizeScene } from "./scenes/OrganizeScene";
import { OutroScene } from "./scenes/OutroScene";

export const LedgrDemo: React.FC = () => {
  const frame = useCurrentFrame();

  const bgColor = interpolate(
    frame,
    [0, 225, 240, 375, 390],
    [0, 0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const r = Math.round(250 + (26 - 250) * bgColor);
  const g = Math.round(249 + (25 - 249) * bgColor);
  const b = Math.round(246 + (22 - 246) * bgColor);

  return (
    <AbsoluteFill style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <Sequence from={0} durationInFrames={90} name="Intro">
        <IntroScene />
      </Sequence>

      <Sequence from={75} durationInFrames={165} name="Capture">
        <CaptureScene />
      </Sequence>

      <Sequence from={225} durationInFrames={165} name="Insights">
        <InsightsScene />
      </Sequence>

      <Sequence from={375} durationInFrames={135} name="Organize">
        <OrganizeScene />
      </Sequence>

      <Sequence from={495} durationInFrames={105} name="Outro">
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
