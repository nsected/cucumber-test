module.exports = (expectedText) => {
    try{
        browser.waitForExist(`.library__article-title=${expectedText}`)
    }catch(error) {
        console.error(`Специальность "${expectedText}" не найдена`);
        console.error(error);
    }
    browser.click(`.library__article-title=${expectedText}`);
};
