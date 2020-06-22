const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_element');
const url = "https://www.epam.com/";

class HomePage extends BasePage {
  constructor(){
    super();
    this.title = () => {
      let element = new Element('h2.title-slider__title span');
      super.waitForVisibility(element, 5000);      
      return element;
    }
  }

  open(){
    super.open(url);
  }
}

module.exports = HomePage;