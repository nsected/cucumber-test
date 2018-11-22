/**
 * Check if the library link element contains text
 *
 * @param  {String}   expectedText  The text to check against
 */
module.exports = (expectedText) => {
    /**
     * The text of the element
     * @type {String}
     */
    try {
        browser.waitForExist(`.library__list-left=${expectedText}`);
    } catch (error) {
        console.error(`Статья "${expectedText}" не найдена`);
        console.error(error);
    }

    browser.click(`.library__list-left=${expectedText}`);
};
