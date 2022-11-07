const findTheOldest = function(people) {
   const oldestPerson = people.reduce(function (personA, personB) {
        
        let personAAge = 0;
        let personBAge = 0;

        if (personA.hasOwnProperty('yearOfDeath')) {
            personAAge = personA.yearOfDeath - personA.yearOfBirth;
        } else {
            personAAge = (new Date().getFullYear()) - personA.yearOfBirth;            
        }

        if (personB.hasOwnProperty('yearOfDeath')) {
            personBAge = personB.yearOfDeath - personB.yearOfBirth
        } else {
            personBAge = (new Date().getFullYear()) - personB.yearOfBirth
        }

        if(personAAge > personBAge) {
            return personA;
        } else {
            return personB;
        }

   }, people[people.length - 1])
   return (oldestPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
