const fibonacci = function(input) {
const num = Number(input);

//Fibonacci of 0 is 0
if (num === 0) return 0;

//Error check
if (num < 0) return "OOPS";

const sequence = [0, 1];

for (let i=1; i < num; i++) {
    sequence.push(sequence[i] + sequence[i-1]);
}
//console.log(sequence);
return sequence[num];

};

//console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
