const convertToCelsius = function(f) {
  let celsius = (f-32)*(5/9);
  return celsius;
};

const convertToFahrenheit = function(c) {
  let fahr = c*(9/5) + 32;
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
