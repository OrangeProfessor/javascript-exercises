//const sumAll = function(num1, num2) {

function sumAll(num1, num2) {
    const numRange = [];
    let numSum = num1;

    //Get number range
    while (numSum <= num2) {
        //Debugging
        //console.log(`Current array values: ${numRange}`);
        //console.log(`Current numSum value: ${numSum}`);
        //console.log(" ")

        numRange.push(numSum);

        //console.log(`New array values: ${numRange}`);

        numSum = numSum + 1;
        
        //Debugging
        //console.log(`New numSum value: ${numSum}`);
        //console.log(" ");
    }
    
    //Sum all numRange elements
    for (let i=0; i <= numRange[-0]; i++) {
        //Debugging
        console.log(`Current "i" value: ${i}`);
        console.log(`Current numRange[0] value: ${numRange[0]}`);
        console.log(`Current numRange[1] value: ${numRange[1]}`);

        numRange[0] = numRange[0] + numRange[1];
        numRange.splice(1, 1); //Remove second element

        console.log(`New numRange[0] value: ${numRange[0]}`);
        console.log(`New numRange[1] value: ${numRange[1]}`);
    }
  
    console.log(`Sum: ${numRange}`);
};

sumAll(1, 4000);

// Do not edit below this line
module.exports = sumAll;
