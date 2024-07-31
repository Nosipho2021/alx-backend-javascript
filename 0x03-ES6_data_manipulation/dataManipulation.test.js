// dataManipulation.test.js

const { doubleNumbers, getEvenNumbers, sumNumbers } = require('./dataManipulation');

test('doubleNumbers doubles each number in the array', () => {
  expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
});

test('getEvenNumbers filters out odd numbers', () => {
  expect(getEvenNumbers([1, 2, 3, 4])).toEqual([2, 4]);
});

test('sumNumbers sums all numbers in the array', () => {
  expect(sumNumbers([1, 2, 3, 4])).toBe(10);
});
