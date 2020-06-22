const Header = require('./header');
const expectedConditions = browser.ExpectedConditions;

class BasePage {
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

  async waitForVisibility(element, waitMilliseconds) {
    let isDisplayed = await expectedConditions.visibilityOf(element);
    return await browser.wait(isDisplayed, waitMilliseconds);
  }

  async getTitle() {
    return await browser.getTitle();
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  open(url) {
    return browser.get(url);
  }
}

module.exports = BasePage;
