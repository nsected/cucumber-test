module.exports = (element) => {
    try{
        browser.waitForExist(element)
    }catch(error) {
        console.error(`Элемент "${element}" не найден`);
        console.error(error);
    }
    browser.click(element);
};
