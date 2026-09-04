"use client";

import {
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import styles from "./CodeBlock.module.css";

type CollapsibleCodeProps = {
  children: ReactNode;
};

export function CollapsibleCode({ children }: CollapsibleCodeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const viewportTopRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const viewportTop = viewportTopRef.current;

    if (viewportTop === null) return;

    let frame = 0;
    const restorePosition = () => {
      const toggle = toggleRef.current;
      if (!toggle) return;

      const offset = toggle.getBoundingClientRect().top - viewportTop;
      if (Math.abs(offset) > 0.5) window.scrollBy(0, offset);
      frame = window.requestAnimationFrame(restorePosition);
    };

    frame = window.requestAnimationFrame(restorePosition);
    const timeout = window.setTimeout(() => {
      window.cancelAnimationFrame(frame);
      viewportTopRef.current = null;
    }, 450);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [isOpen]);

  const rememberTogglePosition = () => {
    viewportTopRef.current =
      toggleRef.current?.getBoundingClientRect().top ?? null;
  };

  const toggleCode = () => {
    if (viewportTopRef.current === null) rememberTogglePosition();
    setIsOpen((open) => !open);
  };

  return (
    <section className={`${styles.section} ${isOpen ? styles.open : ""}`}>
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggleHeader}
        onPointerDown={rememberTogglePosition}
        onClick={toggleCode}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className={styles.toggleTitle}>ソースコード</span>
        <span className={styles.toggleIcon} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div id={contentId} className={styles.toggleContent} inert={!isOpen}>
        <div>{children}</div>
      </div>
    </section>
  );
}
