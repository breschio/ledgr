import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { ClipScaffold } from "./ClipScaffold";
import { InsightsScreen } from "../screens/InsightsScreen";

export const InsightsClip: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <ClipScaffold backgroundColor="#FAF9F6">
      <InsightsScreen animFrame={frame} fps={fps} />
    </ClipScaffold>
  );
};
