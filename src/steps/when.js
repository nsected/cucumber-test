import checkLibraryListLinkText from '../support/check/checkLibraryListLinkText';
import checkLibraryArticleLinkText from '../support/check/checkLibraryArticleLinkText';
import clickElement from '../support/action/clickElement';
const { When } = require('cucumber');

When(
    /^Проверяю ссылки названий направлений специальности.* "([^"]*)?"$/,
    checkLibraryListLinkText
);

When(
    /^Проверяю ссылки новых статей.* "([^"]*)?"$/,
    checkLibraryArticleLinkText
);

When(
    /^Кликаю на элемент "([^"]*)?"$/,
    clickElement
);