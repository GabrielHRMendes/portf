declare module "@/components/Beams" {
  import type { ComponentType } from "react";

  interface BeamsProps {
    beamWidth?: number;
    beamHeight?: number;
    beamNumber?: number;
    lightColor?: string;
    speed?: number;
    noiseIntensity?: number;
    scale?: number;
    rotation?: number;
  }

  const Beams: ComponentType<BeamsProps>;
  export default Beams;
}
