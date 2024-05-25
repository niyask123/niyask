"use client";
import React from "react";
import { Boxes } from "../3D-cardEffect/background-boxes";
import { cn } from "../../../utils/cn";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-52 pb-8 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("relative z-10 text-[4rem] md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold")}>
      FULLSTACK WEB DEVELOPER
      </h1>
      
    </div>
  );
}
