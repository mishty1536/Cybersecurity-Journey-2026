//practice question 1: copy the array using spread operator
const numbers = [5, 10, 15];
const newNumbers = [...numbers];
console.log(newNumbers);

//practice question 2: merge arrays
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged);

//practice question 3: update the age
const person = {
    name: "Rahul",
    age: 21
};
const updatedPerson = {...person, age: 22}
console.log(updatedPerson);

//practice question 4: use rest operator to print 
const fruits = ["Apple", "Banana", "Orange", "Mango"];
const [first, ...rest] = fruits;
console.log(first);
console.log(rest);

//practice question 5: create a function that accepts any number of arguments and returns their product 
function multiply(...numbers){
    let total = 1;
    for(let num of numbers){
        total = total * num;
    }
    return total;
}
console.log(multiply(2,3,4));