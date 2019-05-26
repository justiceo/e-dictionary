import * as puppeteer from 'puppeteer';

describe('Browser test suite', () => {
  let browser: puppeteer.Browser;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      args: [
        `--disable-extensions-except=/Users/justiceo/code/chrome/write-better/extension`,
        `--load-extension=/Users/justiceo/code/chrome/write-better/extension`,
      ]
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  // Run two tests in parallel (on different pages in same browser)
  describe('Google homepage test', () => {
    it('should have a title', async () => {
      const page = await browser.newPage();
      await page.goto('https://google.com');
      expect(await page.title()).toBe('WriteBetter Test Doc - Google Docs');
      await page.close();
    });

    // This is useful when for identifying unexpected UI changes even when unit tests pass.
    xit('should leave a screenshot for me to inspect', async () => {
      const page = await browser.newPage();
      await page.goto('https://google.com');
      await page.screenshot({ path: 'assets/images/screenshot.png' });
      await page.close();
    });
  });
});