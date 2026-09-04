import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SiteHeader } from "@/components/shared/SiteHeader";

vi.mock("next/navigation", () => ({
  usePathname: () => "/history",
}));

describe("SiteHeader", () => {
  it("renders all routes and marks the current page", () => {
    render(<SiteHeader />);

    expect(screen.getAllByRole("link")).toHaveLength(8);
    expect(screen.getByRole("link", { name: "歴史" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });
});
