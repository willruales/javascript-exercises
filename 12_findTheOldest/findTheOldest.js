const findTheOldest = function (array) {
    return array.reduce(function (oldest, current) {
        const oldestPerson = getAge(oldest.yearOfDeath, oldest.yearOfBirth)
        const currentPerson = getAge(current.yearOfDeath, current.yearOfBirth)
        return oldestPerson > currentPerson ? oldest : current;
    })

    function getAge(death, birth) {
        if (!death) {
            death = new Date().getFullYear();
        }
        return death - birth
    }
};


// Do not edit below this line
module.exports = findTheOldest;
