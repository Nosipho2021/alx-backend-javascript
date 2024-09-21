const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber with type operations', function () {
  it('should return correct sum when type is SUM', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return correct difference when type is SUBTRACT', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return correct division when type is DIVIDE', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" when dividing by zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
