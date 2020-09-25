//import puppeteer libraries
const puppeteer = require("puppeteer");

async function run() {
  //launch browser in headless mode
  const browser = await puppeteer.launch();
  //page will be opened
  const page = await browser.newPage();
	//checl for job portals' search page url
	const mainUrl = "https://domdomjobs.com/search"
	let mainUrlStatus;
  await page.setRequestInterception(true);
  page.on("request", request => {
    const url = request.url();
    //display all requested urls present in js code 
    console.log("request url:", url);
    request.continue();
  });
  page.on("requestfailed", request => {
    const url = request.url();
    console.log("request failed url:", url);
  });
  page.on("response", response => {
    const request = response.request();
    const url = request.url();
    const status = response.status();
    //display all urls with response status
    console.log("response url:", url, "status:", status);
		if (url === mainUrl) {
			mainUrlStatus = status;
		}
  });
  await page.goto(mainUrl);
	//display the status of the page url
	console.log("status for main url:", mainUrlStatus);
  const html = await page.content();
  //browser will get closed
  await browser.close();
}

//calling run function
run();
