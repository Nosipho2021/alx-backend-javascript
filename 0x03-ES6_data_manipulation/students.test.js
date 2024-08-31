// students.test.js

import getListStudents from './students';

test('getListStudents returns the correct list of students', () => {
  const expected = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];

  expect(getListStudents()).toEqual(expected);
});

