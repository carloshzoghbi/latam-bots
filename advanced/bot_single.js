const request = require('request');
const fs = require('fs');
const puppeteer = require('puppeteer-extra');
const csv = require('csv-parser');
const readline = require('readline')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')

async function sleep(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve();
        }, sec * 1000);
    });
}


async function run () {

    let site_url = "https://shape.udoblucher.net/"    

    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        ignoreHTTPSErrors: true,
        acceptInsecureCerts: true,
        //executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        //userDataDir: '/Users/vonblucher/Library/Application Support/Google/Chrome/Default',
        args: [
            '--window-size=1280,1280',
            '--no-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process',
            //'--proxy-server=http://localhost:8888'
        ],

    })
    
    const page = await browser.newPage();

    await page.goto(site_url)

    //await page.waitForNavigation();

    await page.mouse.move(0, 0);
    await page.mouse.down();
    await page.mouse.move(0, 100);
    await page.mouse.move(100, 100);
    await page.mouse.move(100, 0);
    await page.mouse.move(0, 0);
    await page.mouse.up();

    //fill in the username
    await page.waitForSelector('#id_username', {visible: true, timeout: 3000 });
    await page.type('#id_username', 'u.vonblucher@f5.com', { delay: 10 });

    //fill in the password
    await page.waitForSelector('#id_password', {visible: true, timeout: 3000 });
    await page.type('#id_password', 'f5rocks123', { delay: 10 });

    await sleep(5)

    //click login
    await page.waitForSelector('[name="login"]');
    await page.click('[name="login"]');

    await sleep(5)

    //click logout
    await page.waitForSelector('.md-avatar', {visible: true});
    await page.click('.md-avatar');
    await sleep(2)
    await page.click('.dropdown-menu-right > a:nth-child(3)');
    
    await sleep(5)

    await browser.close();
}

run();

