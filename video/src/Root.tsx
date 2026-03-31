import "./index.css";
import { Composition } from "remotion";
import { LedgrDemo } from "./Composition";
import { AppFlowVideo } from "./AppFlowVideo";
import { CameraClip } from "./clips/CameraClip";
import { ExpenseClip } from "./clips/ExpenseClip";
import { InsightsClip } from "./clips/InsightsClip";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LedgrDemo"
        component={LedgrDemo}
        durationInFrames={600}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="AppFlow"
        component={AppFlowVideo}
        durationInFrames={550}
        fps={30}
        width={390}
        height={880}
      />
      <Composition
        id="CameraClip"
        component={CameraClip}
        durationInFrames={210}
        fps={30}
        width={390}
        height={880}
      />
      <Composition
        id="ExpenseClip"
        component={ExpenseClip}
        durationInFrames={120}
        fps={30}
        width={390}
        height={880}
      />
      <Composition
        id="InsightsClip"
        component={InsightsClip}
        durationInFrames={120}
        fps={30}
        width={390}
        height={880}
      />
    </>
  );
};
