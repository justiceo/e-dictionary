import * as puppeteer from 'puppeteer';

describe('Browser test suite', () => {
  let browser: puppeteer.Browser;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      ignoreDefaultArgs: ["--disable-extensions","--enable-automation"],
      args: [
        `--disable-extensions-except=${process.env.PWD}/extension`,
        `--load-extension=${process.env.PWD}/extension`,
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
      expect(await page.title()).toBe('Google');
      await page.close();
    });

    // This is useful when for identifying unexpected UI changes even when unit tests pass.
    it('should leave a screenshot for me to inspect', async () => {
      const page = await browser.newPage();
      await page.goto('https://google.com');
      await page.screenshot({ path: 'assets/images/screenshot.png' });
      await page.close();
    });
  });
});