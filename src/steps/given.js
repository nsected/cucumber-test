import openPage from '../support/action/openPage';
const { Given } = require('cucumber');

Given(
    /^Открыта главная страница сайта "([^"]*)?"$/,
    openPage
);
