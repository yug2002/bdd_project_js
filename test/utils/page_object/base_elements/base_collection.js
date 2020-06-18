const { element } = require("protractor");

class Collection {
  constructor(selector) {
    this.collection = element.all(by.css(selector));
  };
  getCount() {
    return this.collection.count();
  };
  getTexts() {
    return this.collection.getText();
  };
  async clickElementByText(textToClick) {
    const arrayOfElementTexts = await this.collection.getTexts();
    const indexOfElementToClick = arrayOfElementTexts.indexOf(textToClick);
    if (indexOfElementToClick === -1) {
      throw new Error(`No element with [${textToClick}] text found`);
    }
    return this.collection.get(indexOfElementToClick).click();    
  };
}

module.exports = Collection;