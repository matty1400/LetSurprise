const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="js_items"]/div[2]/wsp-image-zoom/div/img');
    const src = await el.getProperty('src');
    const imgUrl = await src.jsonValue();

    
    const [el2] = await page.$x('//*[@id="mainContent"]/div/div[1]/div[4]/h1/span');
    const txt = await el2.getProperty('textContent');
    const title = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="mainContent"]/div/div[1]/div[5]/div[2]/div[1]/div/wsp-visibility-switch/section[1]/section/div[1]/div/span');
    const txt2 = await el3.getProperty('textContent');
    const prijs = await txt2.jsonValue();

    console.log({imgUrl, title, prijs});

    browser.close();
}

scrapeProduct('https://www.bol.com/be/nl/p/the-next-beat-by-tiesto-dj-controller-beginner-dj-gear-dj-set-dj-starter/9300000061832011/?bltgh=nG0Lk4VtcNvfhOvHb-pG-Q.2_11.12.ProductTitle');

// var test = document.getElementById("testing");
// test.innerHTML = title;