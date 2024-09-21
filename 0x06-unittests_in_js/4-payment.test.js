const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToAPI = require('./4-payment');

describe('sendPaymentRequestToAPI', () => {
    let stub;

    before(() => {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    after(() => {
        stub.restore();
    });

    it('should call Utils.calculateNumber with correct parameters', () => {
        const consoleSpy = sinon.spy(console, 'log');
        sendPaymentRequestToAPI(100, 20);
        
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
        
        consoleSpy.restore();
    });
});
