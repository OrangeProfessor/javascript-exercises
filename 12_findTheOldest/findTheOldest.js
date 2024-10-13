const findTheOldest = function(people) {
    people.sort((personA, personB) => {
        if (!personA.yearOfDeath) personA.yearOfDeath = 2024;
        if (!personB.yearOfDeath) personB.yearOfDeath = 2024;

        return (personA.yearOfDeath - personA.yearOfBirth) - 
        (personB.yearOfDeath - personB.yearOfBirth);
        
    })
    return people[people.length - 1];
};


// Do not edit below this line
module.exports = findTheOldest;
