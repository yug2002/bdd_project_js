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
    
    let text = await this.element.getText();
    return text;
  };
}

module.exports = Element;