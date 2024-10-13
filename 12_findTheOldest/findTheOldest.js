//Delete example array of objects
const set = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

const set2 = [
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    }
]

const findTheOldest = function(people) {
    people.sort((personA, personB) => {
        if (!personA.yearOfDeath) personA.yearOfDeath = 2024;
        if (!personB.yearOfDeath) personB.yearOfDeath = 2024;

        return (personA.yearOfDeath - personA.yearOfBirth) - 
        (personB.yearOfDeath - personB.yearOfBirth);
        
    })
    return people[people.length - 1];
};


/*
const findTheOldest = function(people) {
    const newArr = people.map(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = 2024;
            return person;
        } else {
            return person;
        }
    })

    return newArr;
}
*/

//console.log(findTheOldest(set));

//console.log(set2.name);

// Do not edit below this line
module.exports = findTheOldest;
