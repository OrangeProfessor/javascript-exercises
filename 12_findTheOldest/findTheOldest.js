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
/*
const findTheOldest = function(people) {
    people.sort(person => {
        if (!person.ye)
    })
};
*/

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

console.log(findTheOldest(set));

// Do not edit below this line
module.exports = findTheOldest;
