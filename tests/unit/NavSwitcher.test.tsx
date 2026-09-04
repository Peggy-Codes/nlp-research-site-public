import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NavSwitcher } from "@/components/shared/NavSwitcher";

describe("NavSwitcher", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "requestAnimationFrame",
      vi.fn(() => 1),
    );
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("changes the selected option", () => {
    render(
      <NavSwitcher
        name="demo"
        ariaLabel="デモの切り替え"
        mode="demo"
        options={[
          { id: "first", label: "最初", targetId: "", defaultChecked: true },
          { id: "second", label: "次", targetId: "" },
        ]}
      />,
    );

    const second = screen.getByRole("radio", { name: "次" });
    fireEvent.click(second);
    expect(second).toBeChecked();
  });

  it("positions the liquid toggle on both axes", () => {
    vi.stubGlobal(
      "requestAnimationFrame",
      vi.fn((callback: FrameRequestCallback) => {
        callback(0);
        return 0;
      }),
    );
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
      function (this: HTMLElement) {
        if (this.tagName === "NAV") {
          return {
            bottom: 220,
            height: 200,
            left: 10,
            right: 310,
            top: 20,
            width: 300,
            x: 10,
            y: 20,
            toJSON: () => ({}),
          };
        }
        return {
          bottom: 150,
          height: 60,
          left: 30,
          right: 190,
          top: 90,
          width: 160,
          x: 30,
          y: 90,
          toJSON: () => ({}),
        };
      },
    );

    render(
      <NavSwitcher
        name="mobile-demo"
        ariaLabel="モバイルデモの切り替え"
        mode="demo"
        options={[
          {
            id: "selected",
            label: "選択中",
            targetId: "",
            defaultChecked: true,
          },
        ]}
      />,
    );

    const switcher = screen.getByRole("navigation", {
      name: "モバイルデモの切り替え",
    });
    expect(switcher.style.getPropertyValue("--toggle-height")).toBe("72px");
    expect(switcher.style.getPropertyValue("--toggle-left")).toBe("26px");
    expect(switcher.style.getPropertyValue("--toggle-top")).toBe("64px");
    expect(switcher.style.getPropertyValue("--toggle-width")).toBe("148px");
  });

  it("fixes the page switcher after scrolling past its original position", () => {
    vi.stubGlobal(
      "requestAnimationFrame",
      vi.fn((callback: FrameRequestCallback) => {
        callback(0);
        return 0;
      }),
    );
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 0,
      writable: true,
    });
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      bottom: 532,
      height: 132,
      left: 0,
      right: 600,
      top: 400,
      width: 600,
      x: 0,
      y: 400,
      toJSON: () => ({}),
    });
    vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockReturnValue(132);

    render(
      <NavSwitcher
        name="methodology"
        ariaLabel="手法セクションの切り替え"
        variant="methodology"
        options={[
          {
            id: "dictionary",
            label: "辞書",
            targetId: "dictionary-card",
            defaultChecked: true,
          },
          { id: "api", label: "API", targetId: "api-card" },
        ]}
      />,
    );

    const wrapper = screen.getByRole("navigation", {
      name: "手法セクションの切り替え",
    }).parentElement;
    expect(wrapper).not.toBeNull();
    const originalClassName = wrapper?.className;

    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 500,
      writable: true,
    });
    fireEvent.scroll(window);

    expect(wrapper?.className).not.toBe(originalClassName);
    expect(wrapper?.previousElementSibling).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });
});
