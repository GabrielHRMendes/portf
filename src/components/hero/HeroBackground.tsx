"use client";

import dynamic from "next/dynamic";

/* Lazy-load Beams (WebGL) — never SSR */
const Beams = dynamic(() => import("@/components/Beams"), { ssr: false });

export function HeroBackground() {
  return (
    <>
      {/* Layer 1 — Solid base */}
      <div className="absolute inset-0 bg-[#06070B]" />

      {/* Layer 2 — Beams (React Three Fiber) — BLUE */}
      <div className="absolute inset-0 opacity-55">
        <Beams
          beamWidth={3.5}
          beamHeight={18}
          beamNumber={45}
          lightColor="#2F6BFF"
          speed={1.1}
          noiseIntensity={1.35}
          scale={0.22}
          rotation={220}
        />
      </div>

      {/* Layer 3 — Glow azul suave central */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(47,107,255,0.07), transparent 70%)",
            "radial-gradient(ellipse 40% 30% at 20% 70%, rgba(29,78,216,0.04), transparent 60%)",
          ].join(", "),
        }}
      />

      {/* Layer 4 — Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.30'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}
