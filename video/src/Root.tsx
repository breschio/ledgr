import "./index.css";
import { Composition } from "remotion";
import { LedgrDemo } from "./Composition";
import { AppFlowVideo } from "./AppFlowVideo";

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
        width={460}
        height={950}
      />
    </>
  );
};
