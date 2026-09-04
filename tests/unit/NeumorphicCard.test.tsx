import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NeumorphicCard } from "@/components/ui/NeumorphicCard";

describe("NeumorphicCard", () => {
  it("renders as the requested element", () => {
    render(<NeumorphicCard as="article">カード本文</NeumorphicCard>);
    expect(screen.getByText("カード本文").tagName).toBe("ARTICLE");
  });
});
