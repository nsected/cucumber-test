/**
 * Check if the library article link element contains text
 *
 * @param  {String}   expectedText  The text to check against
 */
module.exports = (expectedText) => {
    /**
     * The text of the element
     * @type {String}
     */
    try{
        browser.waitForExist(`.library__article-title=${expectedText}`)
    }catch(error) {
        console.error(`Специальность "${expectedText}" не найдена`);
        console.error(error);
    }

    browser.click(`.library__article-title=${expectedText}`);
};
