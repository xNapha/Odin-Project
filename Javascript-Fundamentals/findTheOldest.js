const findTheOldest = function(x) {
    return x
        .sort((first,second)=>{
            if (!first.yearOfDeath){
                first.yearOfDeath = new Date().getFullYear();
            } else if(!second.yearOfDeath){
                second.yearOfDeath = new Date().getFullYear();
            };
            let firstAge = first.yearOfDeath - first.yearOfBirth
            let secondAge = second.yearOfDeath - second.yearOfBirth
            if (firstAge > secondAge){
                return -1;
            } else{
                return 1;
            }})[0].name
};
let people = [
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
console.table(findTheOldest(people))
people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
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
console.table(findTheOldest(people))
people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
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
console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;