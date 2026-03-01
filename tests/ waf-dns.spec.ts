import { test, expect } from '@playwright/test';

const URL = 'https://s4e.io/tools/waf-detection-from-dns-records';
const TARGET_INPUT = { name: /yourdomain\.com or 1\.1\.1\.1 or/i };

test.describe('WAF DNS Records Scanner', () => {
  test('TC-01: page loads and shows input + scan button', async ({ page }) => {
    await page.goto(URL);
    await expect(page.getByRole('button', { name: /scan now/i })).toBeVisible();
    await expect(page.getByRole('textbox', TARGET_INPUT)).toBeVisible();
  });

  test('TC-02: empty input shows inline validation message', async ({ page }) => {
    await page.goto(URL);

    await page.getByRole('textbox', TARGET_INPUT).fill('');
    await page.getByRole('button', { name: /scan now/i }).click();

    await expect(page.getByText('Input can not be empty')).toBeVisible();
  });

  test('TC-12: whitespace-only input shows inline validation message', async ({ page }) => {
    await page.goto(URL);

    await page.getByRole('textbox', TARGET_INPUT).fill('   ');
    await page.getByRole('button', { name: /scan now/i }).click();

    await expect(page.getByText('Input can not be empty')).toBeVisible();
  });

  test('TC-04: invalid input shows validation modal', async ({ page }) => {
    await page.goto(URL);

    await page.getByRole('textbox', TARGET_INPUT).fill('abc');
    await page.getByRole('button', { name: /scan now/i }).click();

    await expect(page.getByText('Scan Only One: Domain, Ipv4, Subdomain')).toBeVisible();
    await expect(page.getByText('You can only use the following types')).toBeVisible();
  });

  test('TC-10: modal can be closed with X', async ({ page }) => {
    await page.goto(URL);

    await page.getByRole('textbox', TARGET_INPUT).fill('abc');
    await page.getByRole('button', { name: /scan now/i }).click();

    const title = page.getByText('Scan Only One: Domain, Ipv4, Subdomain');
    await expect(title).toBeVisible();

    const dialog = page.getByRole('dialog').first();

    if (await dialog.count()) {
      // Try a close icon/button inside dialog header (best effort)
      await dialog.getByRole('button').first().click();
    } else {
      // fallback: click a generic icon button (best effort)
      await page.locator('button').filter({ hasText: '' }).first().click();
    }

    await expect(title).toBeHidden();
  });

  test('TC-11: retry does not clear input (observed behavior)', async ({ page }) => {
    await page.goto(URL);

    await page.getByRole('textbox', TARGET_INPUT).fill('abc');
    await page.getByRole('button', { name: /scan now/i }).click();

    await expect(page.getByText('Scan Only One: Domain, Ipv4, Subdomain')).toBeVisible();
    await page.getByRole('button', { name: /retry/i }).click();

    await expect(page.getByRole('textbox', TARGET_INPUT)).toHaveValue('abc');
  });
});