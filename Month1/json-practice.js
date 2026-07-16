// JSON practice
//json.stringify() method is used to convert a JavaScript object into a JSON string.
const student = {
    name: "Mishty",
    age: 20
};
const jsonData = JSON.stringify(student);
console.log(jsonData);

//json.parse() method is used to convert a JSON string into a JavaScript object.
const data = '{"name":"Mishty","age":20}';
const obj = JSON.parse(data);
console.log(obj.name);

//Practice question: Convert an array of students to JSON
const arr = [ 
    {name: "Mishty", age: 20},
    {name: "John", age: 22}
];
const jsonarr = JSON.stringify(arr);
console.log(jsonarr);