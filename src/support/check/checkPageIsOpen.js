/**
 * Check if the given page was open
 *
 * @param  {String}   expectedUrl  Expected URL to be open
 */
module.exports = (expectedUrl) => {
    /**
     * Expected URL
     * @type {String}
     */
    const text = browser.getText('.library__list-left');
    expect(text).to.contain(expectedText);
    browser.click('.library__list-left');
};
