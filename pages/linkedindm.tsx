// fully functioning code BOOOOOOOMMMMMMMMMMM
// THIS IS A BLAST

// const puppeteer = require('puppeteer');
// const readline = require('readline');

import puppeteer from 'puppeteer';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default',
      args: ['--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36'],
    });

    const pages = await browser.pages();
    const page = pages.length > 0 ? pages[0] : await browser.newPage();

    // const searchUrl = `https://www.linkedin.com/groups/122612/members/`;

    // Paste the URL Here
    const searchUrl = `https://www.linkedin.com/groups/56766/members/`;

    await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

    // You may need to handle login here if cookies are not enough

    let maxIndex = 200; // Set your desired maximum index
    let currentIndex = 0;

    while (currentIndex < maxIndex) {
      // Scroll down to load more members
      await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
      });

      // Wait for a while to let more members load
      await page.waitForTimeout(3000);

      // You may need to handle captchas here if they appear

      // Find the message buttons on the page
      const messageButtons = await page.$$('button[aria-label^="Message "]');
      if (messageButtons.length > currentIndex) {
        // Wait for the button to become clickable
        await messageButtons[currentIndex].click({ waitFor: 'domcontentloaded' });

        // Wait for the message input field to appear
        await page.waitForSelector('div.msg-form__contenteditable[contenteditable="true"]', { timeout: 30000 });

        // Add appropriate delays between actions
        await page.waitForTimeout(1000);

        // Type and send your message
        await page.click('div.msg-form__contenteditable[contenteditable="true"]'); // Focus the input field
        await page.keyboard.type(`hey 👋🏻,`);
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await page.keyboard.type(`i provide a service of featuring SaaS Startups/Products over top 100+ Directories - increasing reach by 100+ unique users per day.`);
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await page.keyboard.type(`you to check it out here : https://www.reachactory.online/.`);
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await page.keyboard.type(`even though you might not be in the market for it, I would love to get your feedback. Let me know what do you think.`);
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await page.keyboard.type(`thanks :)`);

        // Sending click
        // await page.waitForSelector('button.msg-form__send-button', { timeout: 30000 });
        await page.waitForTimeout(3000);
        
        // Enable while sending only

        // 1
        await page.click('button.msg-form__send-button');
        
        // 2
        await page.waitForTimeout(3000);

        // Close the message window
        // 3
        await page.click('li-icon[type="close"][size="small"]');

        await page.waitForTimeout(3000);
        // Increment the current index
        currentIndex++;
      } else {
        // No more message buttons found, exit the loop
        break;
      }
    }

    console.log(`Sent messages to ${currentIndex} members.`);

    // You can add additional code here to handle any further actions

    // Keep the page open (or you can close the browser as needed)
    await new Promise(() => {});
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
})();



