const leapYears = function(num) {
    /* Debugging: 
    console.log(`num % 4: ${num % 4}`);
    console.log(`num % 4: ${num % 400}`);
    */

    if (num % 4 === 0) {
        //If num is divisible by 100 AND is divisible by 400
        if (num % 100 === 0 && num % 400 === 0) {
            return true;
        //Else if num is divisible by 100 AND is NOT divisible by 400
        } else if (num % 100 === 0 && num % 400 != 0) {
            return false;
        }
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
