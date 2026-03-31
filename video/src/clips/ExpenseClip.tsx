import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { ClipScaffold } from "./ClipScaffold";
import { ExpenseScreen } from "../screens/ExpenseScreen";

export const ExpenseClip: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <ClipScaffold backgroundColor="#FAF9F6">
      <ExpenseScreen animFrame={frame} fps={fps} />
    </ClipScaffold>
  );
};
