//This is a simple Pupeteer Bot to Login using multiple credentials
//Writen by: Udo Blucher - u.vonblucher@f5.com

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

const readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname + '/credentials/cred.txt'),
    //output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
    const credentials = line.split(',');
    const username = credentials[0];
    const password = credentials[1];
    const proxy = credentials[2];
    run(username,password, proxy);
});

async function run (username, password, proxy) {
    
    let site_url = "https://shape.udoblucher.net/"

    let browser = await puppeteer.launch({
        headless: false, //change to true to speed up the demo
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
            //'--proxy-server=http://proxy:8888'
        ],

    })
    
    const page = await browser.newPage();

    await page.goto(site_url)

    //await page.waitForNavigation();

    //simple mouse squared mouse move for example purpose - use Vizmonkey
    await page.mouse.move(0, 0);
    await page.mouse.down();
    await page.mouse.move(0, 100);
    await page.mouse.move(100, 100);
    await page.mouse.move(100, 0);
    await page.mouse.move(0, 0);
    await page.mouse.up();

    //fill in the username
    await page.waitForSelector('#id_username', {visible: true, timeout: 3000 });
    await page.type('#id_username', username, { delay: 10 });

    //fill in the password
    await page.waitForSelector('#id_password', {visible: true, timeout: 3000 });
    await page.type('#id_password', password, { delay: 10 });

    await sleep(5)

    //click login
    await page.waitForSelector('[name="login"]');
    await page.click('[name="login"]');

    await sleep(5)

    //click logout

        page.waitForSelector('.md-avatar', {visible: true}).then(() => {
            page.click('.md-avatar');
            sleep(2);
            page.click('.dropdown-menu-right > a:nth-child(3)');
            console.log('Proxy: ', proxy, ' ## Success Authentication ->', username);
        }).catch(e => {
            console.log('Proxy: ', proxy, '## Invalid Credentials ->', username);
            browser.close();
        });
    

    await sleep(2)

    await browser.close();
}

//run();

