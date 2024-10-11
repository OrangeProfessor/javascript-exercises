const fibonacci = function(input) {
const num = Number(input);

//Fibonacci of 1 and 0 is = 1
if (num === 1 || num === 0) return 1;

//Error check
if (num < 0) return "OOPS";

const sequence = [1,1];

for (let i=1; i < num-1; i++) {
    sequence.push(sequence[i] + sequence[i-1]);
}
//console.log(sequence);
return sequence[num-1];

};

console.log(fibonacci(-25));

// Do not edit below this line
module.exports = fibonacci;
