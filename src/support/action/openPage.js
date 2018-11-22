/**
 * Open the given page
 * @param  {String}   page The URL to navigate to
 */
const URL = require('url').URL;
module.exports = (page) => {
    /**
     * The URL to navigate to
     * @type {String}
     */
    const url = new URL(page, browser.options.baseUrl).href;
    browser.url(url);
};
