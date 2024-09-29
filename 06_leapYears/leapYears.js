const leapYears = function(num) {
    console.log(`num % 4: ${num % 4}`);
    console.log(`num % 4: ${num % 400}`);
    if (num % 4 === 0) {
        if (num % 100 === 0 && num % 400 === 0) {
            return true;
        } else if (num % 100 === 0 && num % 400 != 0) {
            return false;
        }
        //If num !>= 100
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
