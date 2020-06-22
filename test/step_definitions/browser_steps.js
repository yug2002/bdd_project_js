const {When, Then, setDefaultTimeout} = require('cucumber');
const { expect } = require('chai');
setDefaultTimeout(60000);
const PageFactory = require('../utils/page_object/page_factory')

When(/^I open "([^"]*)" url$/, async function(url){
  const page = await PageFactory.getPage();
  return await page.open(url);
});

Then(/^Page title should (not )?be "([^"]*)"$/, async function(notArg, title) {   
    const page = await PageFactory.getPage();
  const pageTitle = await page.title();  
  if(notArg){
    expect(pageTitle).to.not.be.equal(title);
  }else{
    expect(pageTitle).to.be.equal(title);
  }  
});

When(/^I wait "([^"]*)" seconds$/, function(timeInSeconds){
  return browser.sleep(timeInSeconds*1000);
});
