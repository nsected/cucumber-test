module.exports = (expectedText) => {
    try{
        browser.waitForExist(`ul[data-test-id="doctor_list_item.0.spec"]`);
        const text = browser.getText(`ul[data-test-id="doctor_list_item.0.spec"]`);
        text.should.equal(text);
    } catch (error) {
        console.error(`Специальность "${expectedText}" не найдена`);
        console.error(error);
    }

};
