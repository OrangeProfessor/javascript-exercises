const sumAll = function(...nums) {
    const numRange = [];
    let smallestNum = Math.min(...nums);

    for (let i=0; i < nums.length; i++) {
        if (!Number.isInteger(nums[i]) || nums[i] < 0) {
            return "ERROR";
        }
    }

    /*Use smallest number as starting point and get all numbers between
        the two given argument values */
    while (smallestNum <= Math.max(...nums)) {
        numRange.push(smallestNum);
        smallestNum = smallestNum + 1;
    }

    let arrayLength = numRange.length;

    //Sum all numRange elements
    for (let i=1; i < arrayLength; i++) {
        numRange[0] = numRange[0] + numRange[1];
        numRange.splice(1, 1); //Remove second element
    }
    
    return numRange[0];
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
