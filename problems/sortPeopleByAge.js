/**
 * Takes in an array of people and sorts them by age
 * @param {Object[]} people - an array containing people objects
 * @returns {Object[]} - a sorted array
 *
 * ex: sortPeopleByAge([
  { name: "Corey", age: 100 },
  { name: "Sam", age: 18 },
  { name: "Sparky", age: 500 },
  { name: "Peter", age: 50 },
])
 * returns [
     { name: "Sam", age: 18 },
     { name: "Peter", age: 50 },
  { name: "Corey", age: 100 },
  { name: "Sparky", age: 500 },
]
 */

function sortPeopleByAge(people) {
  return people.sort((person1, person2) => {
    return person1.age - person2.age;
  });
}
console.log(
  sortPeopleByAge([
    { name: "Corey", age: 100 },
    { name: "Sam", age: 18 },
    { name: "Sparky", age: 500 },
    { name: "Peter", age: 50 },
  ])
);
module.exports = sortPeopleByAge;
