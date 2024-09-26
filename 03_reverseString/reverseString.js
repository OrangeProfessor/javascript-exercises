const reverseString = function(string) {
    let reversedString = "";

    for (i=string.length; i >= 0; i--) {
        reversedString = reversedString.concat(string.charAt(i));
        //console.log(`loop: ${i}, ${reversedString}`);
    }
    //console.log(reversedString);
};

// Do not edit below this line
module.exports = reverseString;
