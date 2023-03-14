import { test, expect } from '@playwright/test';

// test('Filter products', async ({ page }) => {
//   await page.goto('/');

//   await expect(page.getByText('Apple')).toBeVisible();

//   const searchInput = page.getByLabel('Search');

//   await searchInput.fill('a');

//   await expect(page.getByText('Apple')).toBeVisible();

//   await searchInput.fill('aa');

//   await expect(page.getByText('Apple')).toBeHidden();
// });

test('Click the “+” button', async ({ page }) => {
  await page.goto('/');

  page.getByText('+').click();
  page.getByText('+').click();
  page.getByText('+').click();

  await expect(page.getByText('3')).toBeVisible();
});

test('Click the “+” button using "count"', async ({ page }) => {
  await page.goto('/');

  const count = 13;

  await Promise.all((
    [...Array(count)].map(async () => {
      await page.getByText('+').click();
    })
  ));

  await expect(page.getByText(`${count}`)).toBeVisible();
});
