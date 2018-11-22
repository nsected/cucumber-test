import openPage from '../support/action/openPage';
import setInputField from '../support/action/setInputField';
const { Given } = require('cucumber');

Given(
    /^Открыта главная страница сайта "([^"]*)?"$/,
    openPage
);

Given(
    /^Ввожу значение "([^"]*)?" в поле ввода "([^"]*)?"$/,
    setInputField
);