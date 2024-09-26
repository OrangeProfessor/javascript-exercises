const repeatString = function(string, number) {
    let totalString = string;

    if (number === 1) {
        return totalString;
    } else if (number === 0) {
        return;
    }

    //i = 1 since totalString is already given a value. 
    //If i = 0, "totalString" will have one more unwanted string
    for (let i=1; i < number; i++) {
        totalString = totalString.concat(string);
    }

    return totalString;
};

// Do not edit below this line
module.exports = repeatString;
