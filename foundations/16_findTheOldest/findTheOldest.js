const findTheOldest = function(people) {
    const curYear = new Date().getFullYear();
    const getAge = (p) => (p.yearOfDeath ?? curYear) - p.yearOfBirth;
    return people.reduce((oldest, person) => {
        return getAge(oldest) > getAge(person) ? oldest : person;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
