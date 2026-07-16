declare module "@/components/ShapeGrid" {
  import type { ComponentType } from "react";

  interface ShapeGridProps {
    direction?: "right" | "left" | "up" | "down" | "diagonal";
    speed?: number;
    borderColor?: string;
    squareSize?: number;
    hoverFillColor?: string;
    shape?: "square" | "circle" | "hexagon" | "triangle";
    hoverTrailAmount?: number;
    className?: string;
  }

  const ShapeGrid: ComponentType<ShapeGridProps>;
  export default ShapeGrid;
}
