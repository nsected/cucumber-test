module.exports = (expectedText) => {
    try {
        browser.waitForExist(`.library__list-left=${expectedText}`);
    } catch (error) {
        console.error(`Статья "${expectedText}" не найдена`);
        console.error(error);
    }
    browser.click(`.library__list-left=${expectedText}`);
};
