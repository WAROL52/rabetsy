"use client";

import BubbleCursor from "./BubbleCursor";
import CanvasCursor from "./CanvasCursor";
import RippleCursor from "./RippleCursor";

export type CursorProps = {};

export function Cursor({}: CursorProps) {
  return <CanvasCursor />;
  return <RippleCursor />;
  return <BubbleCursor />;
}
