module.exports = (value, element) => {
    try{
        browser.waitForExist(element)
    }catch(error) {
        console.error(`Поле "${element}" не найдено`);
        console.error(error);
    }
    browser.setValue(element, value);
};
