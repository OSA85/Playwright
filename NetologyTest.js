import { chromium } from 'playwright';
import { expect } from '@playwright/test';
import { userName, password }  from './user.js';

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 300,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').type('pl@bk.ru');
  await page.locator('[placeholder="Email"]').screenshot({ path: 'Email.png' });
  await page.locator('[placeholder="Пароль"]').type('12345');
  await page.locator('[placeholder="Пароль"]').screenshot({ path: 'password.png' });
  await page.click('[data-testid="login-submit-btn"]');
  await page.screenshot({ path: 'fullPage.png', fullPage: true });
  await expect (page.locator('[data-testid="login-error-hint"]', { force: true })).toHaveText("Вы ввели неправильно логин или пароль");
  await page.locator('[data-testid="login-error-hint"]').screenshot({ path: 'error.png' });
  await page.close();
  await browser.close();
})();

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 300,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in", { force: true });
  await page.locator('[placeholder="Email"]').type(userName);
  await page.locator('[placeholder="Пароль"]').type(password);
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page).toHaveURL("https://netology.ru/profile");
  await expect(page.locator('[data-testid="profile-programs-content"] h2', { force: true })).toHaveText("Мои курсы и профессии");
  await page.close();
  await browser.close();
})();