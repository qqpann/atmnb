#!/usr/bin/env node
const program = require('commander');
const puppeteer = require('puppeteer');

program
  .option('-v, --view', 'View mode')
  .option('-d, --debug', 'Debug mode');

program.parse(process.argv);
const attendnum = program.args[0];

let headless = true;
if (program.view) {
  headless = false;
  if (program.debug) { console.log('Non Headless Mode'); }
}

let username = '';
let password = '';
if (process.env.UTID_13 && process.env.UTID_PASS) {
  if (program.debug) { console.log('Using UTID_13'); }
  username = process.env.UTID_13;
  password = process.env.UTID_PASS;
} else if (process.env.MANABA_USERNAME && process.env.MANABA_PASSWORD) {
  if (program.debug) { console.log('Using MANABA_USERNAME'); }
  username = process.env.MANABA_USERNAME;
  password = process.env.MANABA_PASSWORD;
} else {
  console.log('NOTFOUND: Plsase setup env username and password.');
  return 1;
}

(async() => {
  
  const br = await puppeteer.launch({headless: headless});
  const page = await br.newPage();

  await page.goto('https://atmnb.tsukuba.ac.jp/attend/tsukuba');
  await page.type('input[name="code"]', attendnum);
  await page.click('input[name="insertdb"]');

  await page.waitFor('input, .errmsg');
  if (await page.$('div.errmsg')) {
    if (program.debug) { console.log('FAILED: div.errmsg detected.'); }
    const out = await page.evaluate(() => document.querySelector('.errmsg').innerText);
    console.log(out);
  } else if (await page.$$eval('input', inputs => inputs.length) == 2) {
    console.log('Correct number');
    await page.type('input[id="username"]', username);
    await page.type('input[id="password"[', password);
    await page.click('input[type="submit"]');

    // Wait for the result and show in terminal.
    await page.waitFor('.description, .errmsg');  // wait for .description or .errmsg.
    if (await page.$('.description')) {
      const out = await page.evaluate(() => document.querySelector('.description').innerText);
      console.log(out);
    } else if (await page.$('.errmsg')) {
      const out = await page.evaluate(() => document.querySelector('.errmsg').innerText);
      console.log(out);
    } else {
      console.log('Unknown error');
    }

  } else {
    console.log('Unknown error');
  }

  await page.screenshot({path: './atmnb-node.png', fullPage: true});
  br.close();
  
})();
