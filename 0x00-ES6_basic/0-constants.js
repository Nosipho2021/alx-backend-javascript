// 0-constants.js

// Function to instantiate a variable using const
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Function to return a string
export function getLast() {
  return ' is okay';
}

// Function to instantiate a variable using let
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
