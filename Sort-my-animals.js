/*
Consider the following class:
  let Animal = { 
      name: "Cat", 
      numberOfLegs: 4 
  }

Write a method that accepts a list of objects of type Animal, and returns a new list. 
The new list should be a copy of the original list, 
sorted first by the animal's number of legs, and then by its name.

If an empty list is passed in, it should return an empty list back.
*/


// Solution

const compareAnimals = (a, b) =>
  a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
  
const sortAnimal = animals =>
  animals ? animals.slice().sort(compareAnimals) : null


// or

function sortAnimal(animals) {
  let newArr = [...animals].sort((a,b) => {
    
    if(a.numberOfLegs === b.numberOfLegs){
      return a.name < b.name ? -1 : 1;
    }else{
      return a.numberOfLegs - b.numberOfLegs
    }
  });
    return newArr;
}