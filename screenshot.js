//JS code to take screenshot of webpage

const puppeteer = require('puppeteer');

const url = process.argv[2];
if (!url) {
    throw "Please provide a URL as the first argument";
}

async function run () {
    const browser = await puppeteer.launch({headless: false});  //command to set headless mode off
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: 'screenshot.png'});
    browser.close();
}
run();
