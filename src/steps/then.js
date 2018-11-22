import checkURLPath from '../support/check/checkURLPath';
import checkDoctorSpeciality from '../support/check/checkDoctorSpeciality';
const { Then } = require('cucumber');

Then(
    /^(не )*попадаю на страницу "([^"]*)?"$/,
    checkURLPath
);

Then(
    /^Вижу доктора со специальностью "([^"]*)?"$/,
    checkDoctorSpeciality
);