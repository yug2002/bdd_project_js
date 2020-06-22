const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_element');

class HomePage extends BasePage {
  constructor(){
    super();    
  }

  async title() {
    let element = new Element('h2.title-slider__title span');
    //await super.waitForVisibility(element, 5000);      
    return await element.getText();
  };

  open(url) {
    super.open(url);
  };
}

module.exports = HomePage;