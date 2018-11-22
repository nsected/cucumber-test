exports.config = {
    specs: [
        './src/features/**/*.feature',
    ],
    maxInstances: 2,
    capabilities: [{
        maxInstances: 2,
        browserName: 'chrome',
    }],
    sync: true,
    logLevel: 'error',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'https://docdoc.ru/',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    seleniumLogs: './logs',
    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        // show full backtrace for errors
                backtrace: true,
        compiler: [
            'js:babel-register',
        ],
        failAmbiguousDefinitions: true,
                failFast: true,
        ignoreUndefinedDefinitions: false,
        snippets: true,
        source: true,
        require: [
            './src/steps/*.js',
        ],
        strict: true,
        tagExpression: 'not @Pending',
        timeout: 30000,
    },
    before: function before() {
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
    mochaOpts: {
        timeout: 91000
    }
};
