const Header = require('./header');
const { browser } = require('protractor');
const expectedConditions = browser.ExpectedConditions;

class BasePage{
  constructor(){
    this.Header = new Header();
  }

  wait(waitMilliseconds) {
    return browser.sleep(waitMilliseconds);
  }

  waitForClickable(element, waitMilliseconds) {
    let isClickable = expectedConditions.elementToBeClickable(element);
    return browser.wait(isClickable, waitMilliseconds);
  }

  waitForVisibility(element, waitMilliseconds){
    let isDisplayed = expectedConditions.visibilityOf(element);
    return browser.wait(isDisplayed, waitMilliseconds);
  }

  getTitle() {
    return browser.getTitle();
  }

  getCurrentUrl(){
    return browser.getCurrentUrl();
  }

  open(url) {
    return browser.get(url);
  }
}

module.exports = BasePage;
