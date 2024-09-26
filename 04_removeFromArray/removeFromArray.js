/*const removeFromArray = function(givenArray, ...numsToDelete) {
    let newArray = [];
    for (const num of numsToDelete) {
        console.log(num);  //Debugging
        for (let i=0; i < givenArray.length; i++) {
            console.log(i); //Debugging
            if (givenArray[i] === num) {
                continue;
            } else {
                newArray.push(givenArray[i])
            }
        }

        }
    }
};
*/

//const removeFromArray = function(givenArray, ...numsToDelete) {
function removeFromArray (givenArray, ...numsToDelete) {
    let newArray = [];
    console.log(numsToDelete);
    for (let i=0; i < givenArray.length; i++) {
        console.log(`Loop ${i}`); //Debugging
        console.log(`Number to consider: ${givenArray[i]}`); //Debugging
        if (numsToDelete.includes(givenArray[i])) {
            console.log(`Removed: ${givenArray[i]}`); //Debugging
            continue;
        } else {
            newArray.push(givenArray[i]);
            console.log(newArray); //Debugging
        }
    }

    return newArray;
}

    


removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
