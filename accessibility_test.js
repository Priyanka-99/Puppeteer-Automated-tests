const puppeteer = require('puppeteer');

async function testUrl() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await page.emulateVisionDeficiency('blurredVision');
  await page.screenshot({ path: 'blurred-vision_amazobs.png' });

  await page.emulateVisionDeficiency('achromatopsia');
  await page.screenshot({ path: 'achromatopsia_amazobs.png' });

  await page.emulateVisionDeficiency('deuteranopia');
  await page.screenshot({ path: 'deuteranopia_amazobs.png' });
  await browser.close();
}
testUrl();