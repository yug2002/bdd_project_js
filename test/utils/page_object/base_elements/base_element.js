const { element, browser } = require("protractor");
const expectedConditions = browser.ExpectedConditions;


class Element {
  constructor(selector) {
    this.element = element(by.css(selector));
  };
  click() {
    return this.element.click();
  };
  async getText() {
    await this.waitFor();
    let text = await this.element.getText();
    return text;
  };
  async waitFor(milliseconds = 5000) {
    let isDisplayed = expectedConditions.visibilityOf(this.element);
    return await browser.wait(isDisplayed, milliseconds);
  }
}

module.exports = Element;