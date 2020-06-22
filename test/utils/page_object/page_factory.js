const BasePage = require('./base_page/base_page');
const HomePage = require('./home_page/home_page');
const OurWorkPage = require('./our_work_page/our_work_page');
//const { browser } = require('protractor');


class PageFactory {

  pageStory = ['what-we-do', 'our-work'];      
  
  static async getPage() {    
    const url = await browser.getCurrentUrl(); 
    let pattern = /(?<=\w+\/).*/;
    let ggg = url.match(pattern);
    let resultString = '';

    if(ggg) {
      resultString = ggg.join();
    }   
    console.log(resultString);

    switch(resultString) {
      case 'what-we-do': return new WhatWeDoPage();
      case 'our-work': return new OurWorkPage();
      default: return new HomePage();
    }  
  }
}

module.exports = PageFactory;