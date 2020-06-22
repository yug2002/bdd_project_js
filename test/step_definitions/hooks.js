const { Before, After } = require('cucumber');
const { browser } = require('protractor');
const url = "https://www.epam.com/";

After({tags: '@epam'}, async function(){
  const screenshot = await browser.takeScreenshot();
  const decodedImage = new Buffer.from(screenshot, 'base64');
  return this.attach(decodedImage, 'image/png');
});

// Before(async function(){
//   await browser.get(url);
// });             

