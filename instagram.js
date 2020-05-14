const puppeteer= require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({headless:false,defaultViewport:null});
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/' ,{waitUntil:"networkidle2"});
 await page.waitForXPath("//input[@name='username']"); //bystnah
 const username=await page.$x("//input[@name='username']");//hena by2fsho
 await username[0].type('X',{delay:100});

await page.waitForXPath("//input[@name='password']");
const password=await page.$x("//input[@name='password']");//keda afshto
await password[0].type('X',{delay:100});


await page.waitForXPath("//button[@type='submit']");
const button =await page.$x("//button[@type='submit']");
await button[0].click();


await page.waitForXPath("//button[text()='Not Now']");
const notnow=await page.$x("//button[text()='Not Now']");
await notnow[0].click();

await page.goto('https://www.instagram.com/X',{waitUntil:"networkidle2"});



   

await page.waitForSelector('article>div>div>div>div>a');
const pics=await page.$$('article>div>div>div>div>a');
for(const pic of pics)
{
  await pic.click();
  await page.waitForSelector('time');
  const sections=await page.$$('section');
  const span=await sections[2].$('span');
  const button=await span.$('button');
  await button.click({delay:1000});
  const exit=await page.$x("//*[name()='svg' and @aria-label='Close']/..");
  await exit[0].click();



}

  })();



