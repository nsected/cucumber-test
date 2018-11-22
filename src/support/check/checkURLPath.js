const URL = require('url').URL;

module.exports = (falseCase, expectedPath) => {
    const currentUrl = browser.url().value;
    const baseUrl = browser.options.baseUrl;
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
