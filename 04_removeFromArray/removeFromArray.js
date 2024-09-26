const removeFromArray = function(givenArray, ...numsToDelete) {
    let newArray = [];
    
    for (let i=0; i < givenArray.length; i++) {
        if (numsToDelete.includes(givenArray[i])) {
            continue;
        } else {
            newArray.push(givenArray[i]);
        }
    }

    return newArray;
}

    


//removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
