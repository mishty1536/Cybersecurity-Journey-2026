//creating object(method 1)
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2024
}
//method 2
/*const car = new.object();
car.brand = "Toyota"
car.model = "Camry"
*/

//Accessing values
console.log(car.brand);

//bracket notation
console.log(car["model"])

//updating values
car.model = "hey"
console.log(car)

//adding new properties
car.colour = "red"
console.log(car)

//deleting
delete car.colour
console.log(car)

//nested object
/*const student = {
    name: "Mishty",
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
}
console.log(student)
console.log(student.address.city)
*/

//array of objects
/*const students = [
    {
        name: "Mishty",
        age: 20
    },
    {
        name: "Rahul",
        age: 21
    }
]
console.log(students[0].name)
*/
//looping through objects
// for...in
const student = {
    name: "Mishty",
    age: 20,
    course: "CSE"
}
for (let key in student){
    console.log(key, student[key])
}

//Object.keys()
const keys = Object.keys(student)
console.log(keys)

//Object.values()
const values = Object.values(student)
console.log(values)

//Object.entries
console.log(Object.entries(student));

//Practice problem 1 (create object and print all values)
const laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 60000
}
console.log(Object.values(laptop))

//Practice problem 2 (add ram: "16GB")
laptop.ram = "16GB"
console.log(laptop)

//Practice problem 3 (update price to 65000)
laptop.price = 65000
console.log(laptop)

//Practice problem 4 (delete model)
delete laptop.model;
console.log(laptop)

//Practice problem 5 (create a nested object student->addres=> city, state and print city)
/*const students = {
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
}
console.log(students.address.city)
*/

//Practice problem 6 (create an array of 3 student objects and print all names using a loop)
const students = [
    {
        name: "Mishty",
        age: 20
    },
    {
        name: "Adhya",
        age: 19
    },
    {
        name: "Aadi",
        age: 21
    }
]
for (let i in students){
    console.log(students[i].name)
}

//Practice problem 7 (create array of objects and print only the names of admins)
const users = [
    {name: "A", role: "admin"},
    {name: "B", role: "user"},
    {name: "C", role: "admin"}
]
for(let i in users){
    if (users[i].role == "admin"){
        console.log(users[i].name)
    }
}