import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Home from "@/app/page";

describe("Home", () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
  });

  it("renders the project heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "自然言語処理における感情分析",
      }),
    ).toBeInTheDocument();
  });
});
