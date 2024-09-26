//const sumAll = function(num1, num2) {

function sumAll(num1, num2) {
    const numRange = [];
    let numSum = num1;

    //Get number range
    while (numSum <= num2) {
        //Debugging
        console.log(`Current array values: ${numRange}`);
        console.log(`Current numSum value: ${numSum}`);
        console.log(" ")

        numRange.push(numSum);

        console.log(`New array values: ${numRange}`);

        numSum = numSum + 1;
        
        //Debugging
        console.log(`New numSum value: ${numSum}`);
        console.log(" ")
    }
        
    
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
