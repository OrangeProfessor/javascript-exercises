const add = function(...nums) {
	return nums.reduce((sum, numToAdd) => sum + numToAdd);
};

const subtract = function(...nums) {
  return nums.reduce((diff, numToSub) => diff - numToSub);
};

const sum = function(array) {
	return array.reduce(((sum, numToAdd) => sum + numToAdd), 0);
};

const multiply = function(array) {
  return array.reduce((product, numToMul) => product * numToMul);
};

const power = function(num, powerOf) {
	const array = [];

  for (let i=0; i < powerOf; i++) array.push(num);

  return array.reduce((product, numToMul) => product * numToMul)
};

const factorial = function(num) {
	const factorial = [];

  for (let i=num; i > 0; i--) factorial.push(i);

  return num === 0 ? 1 : factorial.reduce((product, numToMul) => product * numToMul);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
