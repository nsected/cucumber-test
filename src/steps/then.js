import checkURLPath from '../support/check/checkURLPath';

const { Then } = require('cucumber');

Then(
    /^(не )*попадаю на страницу "([^"]*)?"$/,
    checkURLPath
);
