const palindromes = function (string) {
    //Defines the symbols that should be excluded from string comparisons
    const unwanted = [" ", ",", "."]

    string = Array.from(string);

    const lettersOnlyArr = string.filter(item => !unwanted.includes(item));

    const strToCompare = lettersOnlyArr.reduce((allString, curItem) => {
        //Note: have to have a return statement for .reduce()
        return allString + curItem;
        }).toLowerCase();
    
    const revString = lettersOnlyArr.reverse().reduce((allString, curItem) => {
        return allString + curItem;
        }).toLowerCase();

    //console.log(strToCompare);
    //console.log(revString);

    return strToCompare === revString;

    /* NOTE: The function was returning "undefined" since it wasn't returning something.
    While I was using two console.logs() to print out the values of strToCompare and 
    revString, the "undefined" value was still showing on the console output since the 
    function still had to return something, but there wasn't anything to return with.
    Having that last return statement alleviated the issue; */
};

//console.log(palindromes("Animal loots foliated detail of stool lamina."))

// Do not edit below this line
module.exports = palindromes;
