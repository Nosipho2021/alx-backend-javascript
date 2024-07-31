// getListStudentIds.test.js

import getListStudentIds from './getListStudentIds';

const students = [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
];

test('getListStudentIds returns the correct list of ids', () => {
  const expected = [1, 2, 5];
  expect(getListStudentIds(students)).toEqual(expected);
});

test('getListStudentIds returns an empty array if the argument is not an array', () => {
  expect(getListStudentIds('not an array')).toEqual([]);
  expect(getListStudentIds({})).toEqual([]);
  expect(getListStudentIds(null)).toEqual([]);
});

