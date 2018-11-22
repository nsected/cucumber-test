/**
 * Check if the current URL path matches the given path
 * @param  {String}   falseCase    Whether to check if the path matches the
 *                                 expected value or not
 * @param  {String}   expectedPath The expected path to match against
 */
const URL = require('url').URL;

module.exports = (falseCase, expectedPath) => {
    /**
     * The URL of the current browser window
     * @type {String}
     */
    const currentUrl = browser.url().value;
    const baseUrl = browser.options.baseUrl;

    /**
     * The base URL of the current browser window
     * @type {Object}
     */
    expectedPath = new URL(expectedPath, baseUrl).pathname;
    const currentPath = new URL(currentUrl).pathname;



    if (falseCase) {
        expect(currentPath).to.not
            .equal(expectedPath, `Ожидаемый путь не содержит "${currentPath}"`);
    } else {
        expect(currentPath).to
            .equal(
                expectedPath,
                `Ожидалась страница "${expectedPath}" но текущая страница "${currentPath}"`
            );
    }
};
