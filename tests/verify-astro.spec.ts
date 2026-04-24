import { test, expect } from '@playwright/test';

test('verify astro homepage', async ({ page }) => {
  await page.goto('http://localhost:4324');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'astro-home.png', fullPage: true });
});

test('verify astro personal details', async ({ page }) => {
  await page.goto('http://localhost:4324/personal-details');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'astro-personal.png', fullPage: true });
});
