"use client";

import dynamic from "next/dynamic";

/* Lazy-load ShapeGrid (Canvas) — never SSR */
const ShapeGrid = dynamic(() => import("@/components/ShapeGrid"), { ssr: false });

export function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base color */}
      <div className="absolute inset-0 bg-[#06070B]" />

      {/* ShapeGrid — animated canvas texture */}
      <div className="absolute inset-0 opacity-100">
        <ShapeGrid
          direction="diagonal"
          speed={0.35}
          squareSize={42}
          borderColor="rgba(47,107,255,0.07)"
          hoverFillColor="rgba(47,107,255,0.10)"
          shape="square"
          hoverTrailAmount={6}
        />
      </div>

      {/* Radial glow top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(22,58,138,0.18), transparent 60%)",
        }}
      />

      {/* Radial glow bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(37,99,235,0.10), transparent 60%)",
        }}
      />

      {/* Dark overlay — keeps grid subtle and premium */}
      <div className="absolute inset-0 bg-[rgba(6,7,11,0.55)]" />
    </div>
  );
}
