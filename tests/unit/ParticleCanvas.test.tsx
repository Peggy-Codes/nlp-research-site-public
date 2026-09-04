import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ParticleCanvas } from "@/components/shared/ParticleCanvas";

describe("ParticleCanvas", () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
  });

  it("renders the requested canvas variant", () => {
    render(<ParticleCanvas variant="demo" />);
    expect(screen.getByTestId("particle-canvas-demo")).toBeInTheDocument();
  });
});
