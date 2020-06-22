const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_element');

class WhatWeDoPage extends BasePage {  
  constructor() {
    super();
    this.title = () => {
      let element = new Element('h1.title-ui');
      super.waitForVisibility(element, 5000);      
      return element;
    }
  }
}

module.exports = WhatWeDoPage;