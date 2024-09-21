const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        spy.restore();
    });

    it('should log the correct total when called with 100 and 20', () => {
        sendPaymentRequestToAPI(100, 20);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('The total is: 120')).to.be.true;
    });

    it('should log the correct total when called with 10 and 10', () => {
        sendPaymentRequestToAPI(10, 10);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('The total is: 20')).to.be.true;
    });
});
