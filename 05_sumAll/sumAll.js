//const sumAll = function(num1, num2) {

function sumAll(...nums) {
    const numRange = [];
    console.log(...nums)
    let smallestNum = Math.min(...nums);

    //Debugging
    console.log(`Find smallest number: ${Math.min(...nums)}`);
    console.log(`Find biggest number: ${Math.max(...nums)}`);

    //Use smallest number as starting point and get number range
    while (smallestNum <= Math.max(...nums)) {
        //Debugging
        //console.log(`Current array values: ${numRange}`);
        //console.log(`Current numSum value: ${numSum}`);
        //console.log(" ")

        numRange.push(smallestNum);
        smallestNum = smallestNum + 1;
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

sumAll(123, 1);

// Do not edit below this line
module.exports = sumAll;
