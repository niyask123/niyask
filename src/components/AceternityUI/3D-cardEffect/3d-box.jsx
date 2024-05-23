"use client";
import React from "react";
import { Boxes } from "../3D-cardEffect/background-boxes";
import { cn } from "../../../utils/cn";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("spText flex justify-center text-center text-4xl lg:text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text relative z-20")}>
      FULLSTACK WEB DEVELOPER
      </h1>
      
    </div>
  );
}
