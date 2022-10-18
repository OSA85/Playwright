// import { test, expect } from "@playwright/test";
const { test, expect } = require('@playwright/test');

test("test", async ({ page }) => {
  
 // Go to https://netology.ru/
 await page.goto('https://netology.ru/');
//  Click text=Войти
 await page.click('text=Войти');
 await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
 await page.pause();
 // Click [placeholder="Email"]
 await page.click('[placeholder="Email"]');
 // Fill [placeholder="Email"]
 await page.fill('[placeholder="Email"]', 'pl@bk.ru');
 // Click [placeholder="Пароль"]
 await page.click('[placeholder="Пароль"]');
 // Fill [placeholder="Пароль"]
 await page.fill('[placeholder="Пароль"]', '12345');
 // Click [data-testid="login-submit-btn"]
 await page.click('[data-testid="login-submit-btn"]');
 // Click [data-testid="login-error-hint"]
 await page.click('[data-testid="login-error-hint"]');

});
