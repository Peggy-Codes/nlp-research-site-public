import { expect, test } from "@playwright/test";

test("home page shows the project heading", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading")).toBeVisible();
});
