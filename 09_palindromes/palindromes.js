const palindromes = function (string) {
    //Defines the symbols that should be excluded from string comparisons
    const unwanted = [" ", ",", "."]

    string = Array.from(string);
    const lettersOnly = string.filter(item => !unwanted.includes(item))
        .reduce((allString, curItem) => {
            //Note: have to have a return statement for .reduce()
            return allString + curItem;
        }).toLowerCase();
    return lettersOnly;
    /*
    for (let i=string.length; i >= 0; i--) {

    }
    */
};

console.log(palindromes("Animal loots foliated detail of stool lamina."))

// Do not edit below this line
module.exports = palindromes;
