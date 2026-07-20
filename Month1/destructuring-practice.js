//practice question 1: extract name and course
// const student = {
//     name: "Rahul",
//     age: 21,
//     course: "IT"
// };
// const {name, course} = student;
// console.log(name);
// console.log(course);

//practice question 2: extract first two numbers
// const numbers = [100, 200, 300];
// const [first, second] = numbers;
// console.log(first);
// console.log(second);

//practice question 3: extract first color and remaining color
// const colors = ["Red", "Blue", "Green", "Yellow"];
// const [first, ...remaining] = colors;
// console.log(first);
// console.log(remaining);

//practice question 4: extract salary with default value of 50000
// const employee = {
//     id: 101,
//     name: "Amit"
// }
// const {name, salary = 50000} = employee;
// console.log(name);
// console.log(salary);

//practice question 5: extract city nested 
const user = {
    username: "Mishty",
    address: {
        city: "Pune",
        state: "Maharastra"
    }
}
const {address: {city}} = user;
console.log(city);