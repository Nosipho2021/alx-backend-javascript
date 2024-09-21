const Utils = require('./utils');

function sendPaymentRequestToAPI(a, b) {
    const total = Utils.calculateNumber('SUM', a, b);
    console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToAPI;
