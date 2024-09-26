//const sumAll = function(num1, num2) {
function sumAll(num1, num2) {
    //sum = lesser number first
    let sum = num1;

    //Debugging
    let round = 0;
    while (sum <= num2) {
        console.log(`Current round: ${round}`);
        round++;
        console.log(`Current sum: ${sum}`);

        sum = sum + (sum + 1);

        console.log(`New sum value: ${sum}`);


    }

    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
