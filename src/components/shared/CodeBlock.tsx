"use client";

import { useEffect, useRef, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import styles from "./CodeBlock.module.css";

type CodeBlockProps = {
  language: "javascript" | "css";
  code: string;
};

type CopyState = "idle" | "copied" | "error";

export function CodeBlock({ language, code }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [copyState, setCopyState] = useState<CopyState>("idle");

  useEffect(() => {
    let isActive = true;

    const highlight = async () => {
      const prismModule = await import("prismjs");
      await import("prismjs/components/prism-css");
      await import("prismjs/components/prism-javascript");

      if (isActive && codeRef.current) {
        prismModule.default.highlightElement(codeRef.current);
      }
    };

    void highlight();

    return () => {
      isActive = false;
    };
  }, [code, language]);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  const copyCode = async () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    try {
      await navigator.clipboard.writeText(code);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }

    timeoutRef.current = setTimeout(() => setCopyState("idle"), 2000);
  };

  const buttonLabel =
    copyState === "copied"
      ? "コピー完了"
      : copyState === "error"
        ? "エラー"
        : "コピー";

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.copyButton} ${copyState === "copied" ? styles.copied : ""}`}
        onClick={copyCode}
        aria-live="polite"
      >
        {copyState === "copied" ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M13.5 4L6 11.5L2.5 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M13.5 5.5V13.5H5.5V5.5H13.5ZM13.5 4H5.5C4.67 4 4 4.67 4 5.5V13.5C4 14.33 4.67 15 5.5 15H13.5C14.33 15 15 14.33 15 13.5V5.5C15 4.67 14.33 4 13.5 4ZM10.5 1H2.5C1.67 1 1 1.67 1 2.5V10.5H2.5V2.5H10.5V1Z"
              fill="currentColor"
            />
          </svg>
        )}
        {buttonLabel}
      </button>
      <pre className={`language-${language} ${styles.pre}`}>
        <code ref={codeRef} className={`language-${language} ${styles.code}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
