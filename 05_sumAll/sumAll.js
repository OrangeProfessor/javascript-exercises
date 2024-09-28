const sumAll = function(...nums) {

//function sumAll(...nums) {
    const numRange = [];
    let smallestNum = Math.min(...nums);

    for (let i=0; i < nums.length; i++) {
        if (!Number.isInteger(nums[i]) || nums[i] < 0) {
            //console.log("ERROR");
            return "ERROR";
            //return;
        }
    }

    /*Use smallest number as starting point and get all numbers between
        the two given argument values */
    while (smallestNum <= Math.max(...nums)) {
        numRange.push(smallestNum);
        smallestNum = smallestNum + 1;
    }

    let arrayLength = numRange.length;
    //console.log(`numRange length: ${arrayLength}`);

    //Sum all numRange elements
    for (let i=1; i < arrayLength; i++) {
        //Debugging
        /*
        console.log(`Current "i" value: ${i}`);
        console.log(`Current numRange[0] value: ${numRange[0]}`);
        console.log(`Current numRange[1] value: ${numRange[1]}`);
        */

        numRange[0] = numRange[0] + numRange[1];
        numRange.splice(1, 1); //Remove second element

        //console.log(`New numRange[0] value: ${numRange[0]}`);
        //console.log(`New numRange[1] value: ${numRange[1]}`);
    }
  
    //console.log(`Sum: ${numRange}`);
    return numRange[0];
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
