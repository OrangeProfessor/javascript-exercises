const fibonacci = function(num) {
//Make functionality where it adds a fibonacci number...
//based on the input
const sequence = [1,1];

for (let i=1; i < num-1; i++) {
    //if (isNaN(sequence[i-1])) sequence.push(1);
    sequence.push(sequence[i] + sequence[i-1]);
}
console.log(sequence);
return sequence[num-1];

};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
