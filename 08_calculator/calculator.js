const add = function(a, b) {
  let result = a + b;
  return result;
	
};

const subtract = function(a, b) {
	let result = a - b;
  return result;
};

const sum = function(array) {
  let total  = 0;
  array.forEach(element => (total += element));
  return total;
};

const multiply = function(array) {
  let total = 0;
  total = array[0];
  for (let i = 1; i < array.length; i++) {
    total *= array[i]
  };
  return total;
}

const power = function(a, b) {
  let total = 0;
  total = a ** b
  return total;
};

const factorial = function(number) {
  let total = 1;
  for (let i = 1; i <= number; i++) {
    total *= i;
  }
	return total;
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
