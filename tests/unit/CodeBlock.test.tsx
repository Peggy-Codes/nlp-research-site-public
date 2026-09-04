import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { CodeBlock } from "@/components/shared/CodeBlock";

describe("CodeBlock", () => {
  const code = 'const message = "NLP";';
  const writeText = vi.fn().mockResolvedValue(undefined);

  beforeEach(() => {
    writeText.mockClear();
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
  });

  it("renders highlighted source code and copies its exact contents", async () => {
    render(<CodeBlock language="javascript" code={code} />);

    const copyButton = screen.getByRole("button", { name: "コピー" });
    expect(screen.getByText(/const/)).toBeInTheDocument();

    fireEvent.click(copyButton);
    await waitFor(() => expect(writeText).toHaveBeenCalledWith(code));
    expect(copyButton).toHaveTextContent("コピー完了");
  });
});
