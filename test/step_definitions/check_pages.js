const { When, Then, setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60000);
const { expect } = require('chai');
const PageFactory = require('../utils/page_object/page_factory');
const { browser } = require('protractor');

When('I open Home Page', async function(){
  // return await PageFactory.getPage().open();  
});

When(/^I click "([^"]*)" link$/, async function(link) {
  let page = await PageFactory.getPage();
  return page.Header.navigationButtons.clickElementByText(link); 
});

Then(/^Page should be "(\w*\s*\w*)"$/, async function(title){
  let page = await PageFactory.getPage();
  const currTitle = await page.title.getText();
  expect(currTitle).to.be.equals(title);
});