import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="h-full w-full bg-dot-white/[0.5] absolute flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#000011] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
    </div>
  );
}
