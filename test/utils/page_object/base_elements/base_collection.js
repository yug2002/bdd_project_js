
class Collection {
  constructor(selector) {
    this.collection = element.all(by.css(selector));
  };
  async getCount() {
    return await this.collection.count();
  };
  async getTexts() {
    let text = await this.collection.getText()
    return text;
  };
  async clickElementByText(textToClick) {
    const arrayOfElementTexts = await this.collection.getText();
    const indexOfElementToClick = arrayOfElementTexts.indexOf(textToClick);
    if (indexOfElementToClick === -1) {
      throw new Error(`No element with [${textToClick}] text found`);
    }
    return this.collection.get(indexOfElementToClick).click();    
  };
}

module.exports = Collection;