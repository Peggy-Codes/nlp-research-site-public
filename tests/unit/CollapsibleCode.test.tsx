import { act, fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CollapsibleCode } from "@/components/shared/CollapsibleCode";

const createRect = (top: number): DOMRect => ({
  bottom: top + 54,
  height: 54,
  left: 0,
  right: 200,
  top,
  width: 200,
  x: 0,
  y: top,
  toJSON: () => ({}),
});

describe("CollapsibleCode", () => {
  it("exposes its expanded state on the toggle", () => {
    const { getByRole, unmount } = render(
      <CollapsibleCode>
        <p>コード本文</p>
      </CollapsibleCode>,
    );

    const toggle = getByRole("button", { name: "ソースコード" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    unmount();
  });

  it("keeps the toggle at its pointer-down viewport position while opening", () => {
    let animationFrame: FrameRequestCallback | undefined;
    const requestFrame = vi
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((callback) => {
        animationFrame = callback;
        return 1;
      });
    const cancelFrame = vi
      .spyOn(window, "cancelAnimationFrame")
      .mockImplementation(() => undefined);
    const scrollBy = vi
      .spyOn(window, "scrollBy")
      .mockImplementation(() => undefined);

    const { getByRole, unmount } = render(
      <CollapsibleCode>
        <p>コード本文</p>
      </CollapsibleCode>,
    );
    const toggle = getByRole("button", { name: "ソースコード" });
    const getRect = vi.spyOn(toggle, "getBoundingClientRect");

    getRect.mockReturnValue(createRect(100));
    fireEvent.pointerDown(toggle);
    getRect.mockReturnValue(createRect(140));
    fireEvent.click(toggle);
    act(() => animationFrame?.(0));

    expect(scrollBy).toHaveBeenCalledWith(0, 40);
    expect(requestFrame).toHaveBeenCalled();

    unmount();
    expect(cancelFrame).toHaveBeenCalled();
    vi.restoreAllMocks();
  });
});
