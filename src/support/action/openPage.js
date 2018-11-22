const URL = require('url').URL;
module.exports = (page) => {
    const url = new URL(page, browser.options.baseUrl).href;
    browser.url(url);
};
