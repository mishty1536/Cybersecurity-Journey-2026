// program 1 (Template literals)
// before ES6
/*const name = "Mishty";
console.log("Hello " + name);

//ES6
console.log(`Hello ${name}`);

//multiple variable
const age = 20;
console.log(`${name} is ${age} years old`);
*/

//program 2(Arrow function)
//before ES6
/*function greet(){
    console.log("Hello");
}
greet();
*/

//ES6
/*const greet = () => {
    console.log("Hello");
}
greet();
*/

//one parameter
const square = num => {
    return num*num;
}
console.log(square(5));

//Program 3(Destructuring (extract values from objects or arrays))
//object destructuring
const student = {
    name: "Mishty",
    age: 20
};
/* Instead of:
console.log(student.name);
console.log(student.age);
*/
//use:
/*const {name, age} = student
console.log(name);
console.log(age);
*/

//array destructuring
/*const colors = ["red", "blue", "green"];
const [first, second] = colors;
console.log(first);
*/

//Program 4 (spread operator(...))
const arr1 = [1,2,3];
const arr2 = [...arr1];
console.log(arr2); //copy created

const a = [1,2]
const b = [3,4]
const c = [...a, ...b];
console.log(c);//merge arrays

/*const user = {
    name: "Mishty"
};
const updatedUser = {
    ...user,
    role: "admin"
};
console.log(updatedUser);//update objects
*/

//Program 5 (Rest operator(...))
//look same as spread but opposite purpose
const [first, ...others] = [1,2,3,4];
console.log(first) // only prints 1
console.log(others)// prints values other than 1

//Program 6 (default parameters)
//before ES6
/*function greet(name){
    if(!name){
        name = "User"
    }
}
*/

//ES6
const greet = (name = "User") => {
    console.log(`Hello ${name}`);
}
greet();

//find() returns first matching item
/*const users = [
    {id:1, name: "A"},
    {id:2, name: "B"}
]
const user = users.find(u => u.id === 2);
console.log(user);
*/


//Practice problem 1(use template literals to print a line)
const name = "Mishty"
const age = 20
console.log(`My name is ${name} and I am ${age} years old.`)

//Practice problem 2(create arrow function for cube of a number)
const cube = num => {
    return num*num*num
}
console.log(cube(3));

//Practice problem 3 (object destructuring(create car and print its model and color))
const car = {
    model: "A",
    color: "Red"
}
const {model, color} = car
console.log(model);
console.log(color);

//practice problem 4(merge arrays using spread)
const x = ["Mishty", "Rita"]
const y = ["Rahul", "Mahi"]
const z = [...x, ...y]
console.log(z);

//Practice problem 5(filter even numbers)
const nums = [1,2,3,4,5,6]
const evenNums = nums.filter((a) => {
    return a%2 == 0
})
console.log(evenNums)

//Practice problem 6(array of users using filter print only admins)
const users = [
    {name:"A", role:"admin"},
    {name:"B", role:"user"},
    {name:"C", role:"admin"}
]
const admins = users.filter((a) => {
    if(a.role == "admin"){
        return a.name
    }
})
console.log(admins)

//Practice problem 7(using map convert array of objects to a normal array)
const array = [
    {name:"A"},
    {name:"B"},
    {name:"C"}
]
const names = array.map((value) =>{
    return value.name;
})
console.log(names)