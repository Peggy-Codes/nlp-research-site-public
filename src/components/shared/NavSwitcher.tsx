"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./NavSwitcher.module.css";

export type NavSwitcherOption = {
  id: string;
  label: string;
  targetId: string;
  defaultChecked?: boolean;
};

export type NavSwitcherVariant = "methodology" | "history";

type NavSwitcherProps = {
  name: string;
  options: NavSwitcherOption[];
  ariaLabel: string;
  variant?: NavSwitcherVariant;
  mode?: "page" | "demo";
};

export function NavSwitcher({
  name,
  options,
  ariaLabel,
  variant,
  mode = "page",
}: NavSwitcherProps) {
  const initialOption =
    options.find((option) => option.defaultChecked) ?? options[0];
  const [selectedId, setSelectedId] = useState(initialOption?.id ?? "");
  const [isFixed, setIsFixed] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const switcherRef = useRef<HTMLElement>(null);
  const originalTopRef = useRef(0);
  const isFixedRef = useRef(false);

  useEffect(() => {
    isFixedRef.current = isFixed;
  }, [isFixed]);

  const updateTogglePosition = useCallback(() => {
    const switcher = switcherRef.current;
    if (!switcher) return;

    const checkedRadio = switcher.querySelector<HTMLInputElement>(
      'input[type="radio"]:checked',
    );
    const option = checkedRadio?.closest<HTMLElement>(`.${styles.option}`);
    if (!option) return;

    const switcherRect = switcher.getBoundingClientRect();
    const optionRect = option.getBoundingClientRect();

    switcher.style.setProperty(
      "--toggle-left",
      `${optionRect.left - switcherRect.left + 6}px`,
    );
    switcher.style.setProperty("--toggle-width", `${optionRect.width - 12}px`);
    switcher.style.setProperty(
      "--toggle-top",
      `${optionRect.top - switcherRect.top - 6}px`,
    );
    switcher.style.setProperty(
      "--toggle-height",
      `${optionRect.height + 12}px`,
    );
  }, []);

  // Keep the sliding indicator aligned with the current selection.
  useEffect(() => {
    updateTogglePosition();
  }, [selectedId, updateTogglePosition]);

  // Scroll-follow behaviour and layout measurements.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const recordOriginalPosition = () => {
      if (!isFixedRef.current) {
        originalTopRef.current =
          wrapper.getBoundingClientRect().top + window.scrollY;
      }
      const computedStyle = window.getComputedStyle(wrapper);
      setPlaceholderHeight(
        wrapper.offsetHeight +
          Number.parseInt(computedStyle.marginTop, 10) +
          Number.parseInt(computedStyle.marginBottom, 10),
      );
    };

    const handleScroll = () => {
      if (mode !== "page") return;
      const shouldFix = window.scrollY >= originalTopRef.current - 10;
      if (shouldFix !== isFixedRef.current) {
        isFixedRef.current = shouldFix;
        setIsFixed(shouldFix);
      }
    };

    let scrollFrame = 0;
    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        handleScroll();
        scrollFrame = 0;
      });
    };

    const onResize = () => {
      recordOriginalPosition();
      handleScroll();
      updateTogglePosition();
    };

    const initializationFrame = window.requestAnimationFrame(() => {
      recordOriginalPosition();
      updateTogglePosition();
      handleScroll();
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(initializationFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [mode, updateTogglePosition]);

  const selectAndScroll = (option: NavSwitcherOption) => {
    setSelectedId(option.id);
    if (mode !== "page") return;

    const targetElement = document.getElementById(option.targetId);
    const wrapper = wrapperRef.current;
    if (!targetElement || !wrapper) return;

    const targetPosition =
      targetElement.getBoundingClientRect().top +
      window.scrollY -
      wrapper.offsetHeight -
      20;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  const variantClass =
    variant === "methodology"
      ? styles.methodologySwitcher
      : variant === "history"
        ? styles.historySwitcher
        : "";

  return (
    <>
      {isFixed ? (
        <div style={{ height: placeholderHeight }} aria-hidden="true" />
      ) : null}
      <div
        ref={wrapperRef}
        className={`${styles.wrapper} ${isFixed ? styles.fixed : ""} ${mode === "demo" ? styles.demoWrapper : ""}`}
      >
        <nav
          ref={switcherRef}
          className={`${styles.switcher} ${mode === "demo" ? styles.demoSwitcher : ""} ${variantClass}`}
          aria-label={ariaLabel}
        >
          {options.map((option) => (
            <div className={styles.option} key={option.id}>
              <input
                className={styles.input}
                type="radio"
                name={name}
                value={option.id}
                id={option.id}
                checked={selectedId === option.id}
                onChange={() => setSelectedId(option.id)}
              />
              <label
                className={styles.label}
                htmlFor={option.id}
                onClick={() => selectAndScroll(option)}
              >
                {option.label}
              </label>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
