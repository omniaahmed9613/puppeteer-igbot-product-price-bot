const pupeteer=require('puppeteer');

(async () => {
    const browser = await pupeteer.launch({headless:false,defaultViewport:null});
    const page = await browser.newPage();
    //await page.setDefaultNavigationTimeout(0); 
    await page.goto('https://www.amazon.com/Skechers-Womens-Ghenter-Srelt-Black/dp/B01N7NT3C7/ref=pd_sim_309_2/139-4394226-2964758?_encoding=UTF8&pd_rd_i=B01MY3TZJE&pd_rd_r=a9b9b797-b6ab-4188-a185-709ebeefc549&pd_rd_w=1esBC&pd_rd_wg=9DMWQ&pf_rd_p=9fec2710-b93d-4b3e-b3ca-e55dc1c5909a&pf_rd_r=7ND6Y3BVY8Y0G06JSW3H&psc=1&refRID=7ND6Y3BVY8Y0G06JSW3H',{waitUntil: "networkidle2"});
    await page.waitForSelector('#priceblock_ourprice');
    const price=await page.$eval('#priceblock_ourprice',element=>element.textContent)
    console.log(price);

    await browser.close();
  })();

  