# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AllureReport.spec.js >> Facebook has titile
- Location: tests\AllureReport.spec.js:24:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Facebook1"
Received: "Facebook"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × locator resolved to <html lang="en" dir="ltr" id="facebook" class="_9dls __fb-light-mode">…</html>
       - unexpected value "Facebook"

```

```yaml
- img
- text: Explore the things you love. Log in to Facebook
- textbox "Email address or mobile number"
- text: Email address or mobile number
- textbox "Password"
- text: Password
- button "Log in"
- link "Forgotten password?":
  - /url: /recover/initiate/?privacy_mutation_token=eyJ0eXBlIjo1LCJjcmVhdGlvbl90aW1lIjoxNzkxNDczMTQwfQ%3D%3D&ars=facebook_login
- link "Create new account":
  - /url: /reg/?entry_point=login
- img "Meta logo"
- separator
- main:
  - separator
  - text: English (UK)
  - link "मराठी":
    - /url: "#"
  - link "हिन्दी":
    - /url: "#"
  - link "اردو":
    - /url: "#"
  - link "ગુજરાતી":
    - /url: "#"
  - link "ಕನ್ನಡ":
    - /url: "#"
  - link "ਪੰਜਾਬੀ":
    - /url: "#"
  - link "More languages…":
    - /url: "#"
  - link "Sign up":
    - /url: https://www.facebook.com/reg/
  - link "Log in":
    - /url: https://www.facebook.com/login/
  - link "Messenger":
    - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmessenger.com%2F&h=AUBKWZPkC_NC2Zxg2wZdWYrQTco_h4Y3pYBj0EvjdriK4r8P5l4EKwUw5RODEM0q3wABdXWglQYtgOXdYwAEDDH2RX7ew5H6XUS2MvMXQ2gQDZhC8HKs4gt_ebtZfSQl1m-mm-DrK7qfVGrmQiae4OWskv9BoEaQ0CYoTw
  - link "Facebook Lite":
    - /url: https://www.facebook.com/lite/
  - link "Video":
    - /url: https://www.facebook.com/watch/
  - link "Meta Pay":
    - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fabout.meta.com%2Ftechnologies%2Fmeta-pay&h=AUBKWZPkC_NC2Zxg2wZdWYrQTco_h4Y3pYBj0EvjdriK4r8P5l4EKwUw5RODEM0q3wABdXWglQYtgOXdYwAEDDH2RX7ew5H6XUS2MvMXQ2gQDZhC8HKs4gt_ebtZfSQl1m-mm-DrK7qfVGrmQiae4OWskv9BoEaQ0CYoTw
  - link "Meta Store":
    - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2F&h=AUBKWZPkC_NC2Zxg2wZdWYrQTco_h4Y3pYBj0EvjdriK4r8P5l4EKwUw5RODEM0q3wABdXWglQYtgOXdYwAEDDH2RX7ew5H6XUS2MvMXQ2gQDZhC8HKs4gt_ebtZfSQl1m-mm-DrK7qfVGrmQiae4OWskv9BoEaQ0CYoTw
  - link "Meta Quest":
    - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fquest%2F&h=AUBKWZPkC_NC2Zxg2wZdWYrQTco_h4Y3pYBj0EvjdriK4r8P5l4EKwUw5RODEM0q3wABdXWglQYtgOXdYwAEDDH2RX7ew5H6XUS2MvMXQ2gQDZhC8HKs4gt_ebtZfSQl1m-mm-DrK7qfVGrmQiae4OWskv9BoEaQ0CYoTw
  - link "Ray-Ban Meta":
    - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fai-glasses%2Fray-ban-meta%2F&h=AUBKWZPkC_NC2Zxg2wZdWYrQTco_h4Y3pYBj0EvjdriK4r8P5l4EKwUw5RODEM0q3wABdXWglQYtgOXdYwAEDDH2RX7ew5H6XUS2MvMXQ2gQDZhC8HKs4gt_ebtZfSQl1m-mm-DrK7qfVGrmQiae4OWskv9BoEaQ0CYoTw
  - link "Meta AI":
    - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.ai%2F&h=AUBKWZPkC_NC2Zxg2wZdWYrQTco_h4Y3pYBj0EvjdriK4r8P5l4EKwUw5RODEM0q3wABdXWglQYtgOXdYwAEDDH2RX7ew5H6XUS2MvMXQ2gQDZhC8HKs4gt_ebtZfSQl1m-mm-DrK7qfVGrmQiae4OWskv9BoEaQ0CYoTw
  - link "Muse":
    - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmuse.ai%2F&h=AUBKWZPkC_NC2Zxg2wZdWYrQTco_h4Y3pYBj0EvjdriK4r8P5l4EKwUw5RODEM0q3wABdXWglQYtgOXdYwAEDDH2RX7ew5H6XUS2MvMXQ2gQDZhC8HKs4gt_ebtZfSQl1m-mm-DrK7qfVGrmQiae4OWskv9BoEaQ0CYoTw
  - link "Instagram":
    - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AUBKWZPkC_NC2Zxg2wZdWYrQTco_h4Y3pYBj0EvjdriK4r8P5l4EKwUw5RODEM0q3wABdXWglQYtgOXdYwAEDDH2RX7ew5H6XUS2MvMXQ2gQDZhC8HKs4gt_ebtZfSQl1m-mm-DrK7qfVGrmQiae4OWskv9BoEaQ0CYoTw
  - link "Threads":
    - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.threads.com%2F&h=AUBKWZPkC_NC2Zxg2wZdWYrQTco_h4Y3pYBj0EvjdriK4r8P5l4EKwUw5RODEM0q3wABdXWglQYtgOXdYwAEDDH2RX7ew5H6XUS2MvMXQ2gQDZhC8HKs4gt_ebtZfSQl1m-mm-DrK7qfVGrmQiae4OWskv9BoEaQ0CYoTw
  - link "Privacy Policy":
    - /url: https://www.facebook.com/privacy/policy/?entry_point=facebook_page_footer
  - link "Privacy Centre":
    - /url: https://www.facebook.com/privacy/center/?entry_point=facebook_page_footer
  - link "About":
    - /url: https://www.facebook.com/about/
  - link "Create ad":
    - /url: https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto
  - link "Create Page":
    - /url: https://www.facebook.com/pages/create/?ref_type=site_footer
  - link "Developers":
    - /url: https://developers.facebook.com/?ref=pf
  - link "Careers":
    - /url: https://www.facebook.com/careers/?ref=pf
  - link "Cookies":
    - /url: https://www.facebook.com/policies/cookies/
  - link "AdChoices":
    - /url: https://www.facebook.com/help/568137493302217
  - link "Terms":
    - /url: https://www.facebook.com/policies?ref=pf
  - link "Help":
    - /url: https://www.facebook.com/help/?ref=pf
  - link "Contact uploading and non-users":
    - /url: https://www.facebook.com/help/637205020878504
```

# Test source

```ts
  1  | // command for allure report generation -
  2  | //1.npm install -g allure-commandline
  3  | //2.allure generate allure-results --clean
  4  | //3.allure open allure-repor --use-existing-server
  5  | 
  6  | import { test, expect } from "@playwright/test";
  7  | 
  8  | test("SauceDemo Login", async ({ page }) => {
  9  |   //url
  10 |   await page.goto("https://www.saucedemo.com/");
  11 |   await page.locator("#user-name").fill("standard_user");
  12 |   await page.locator("#password").fill("secret_sauce");
  13 |   await page.locator("#login-button").click();
  14 | });
  15 | 
  16 | test("Playwright has titile", async ({ page }) => {
  17 |   //url
  18 |   await page.goto("https://www.playwright.dev/");
  19 |   await expect(page).toHaveTitle(
  20 |     "Fast and reliable end-to-end testing for modern web apps | Playwright",
  21 |   );
  22 | });
  23 | 
  24 | test("Facebook has titile", async ({ page }) => {
  25 |   //url
  26 |   await page.goto("https://www.facebook.com/");
> 27 |   await expect(page).toHaveTitle("Facebook1");
     |                      ^ Error: expect(page).toHaveTitle(expected) failed
  28 | });
  29 | 
```