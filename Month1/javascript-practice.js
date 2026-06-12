// // Program 1(introduction to JavaScript)
// console.log("Hello, World");

// // Program 2(variables and data types)
// let a = 67
// console.log(a);
// a = "mishty"
// console.log(a); // this is dynamic programming we can chnage the type of variable during time of execution)

// // Program 3(const vs let vs var)
// let b = 45
// {
//     let b = 34
//     console.log(b); // this will print 34 because of block scope of let
// }
// console.log(b); // this will print 45 because of block scope of let
// const c = 56
// console.log(c); // this will print 56 because const is a constant variable and cannot be changed
// // c = 67 // this will give an error because const cannot be changed
// var d = 78
// console.log(d); // this will print 78 because var is a function-scoped variable and can be changed
// {
//     var d = 89
//     console.log(d); // this will print 89 because var is a function-scoped variable and can be changed
// }
// console.log(d); // this will print 78 because var is a function-scoped variable and can be changed      

// // Program 4(data types and objects)
// const item = {
//     "Mishty" : true,
//     "Satyarth" : false,
//     "Rohit" : 45,
//     "Rohan" : undefined,
// }
// console.log(item["Mishty"]);

//practice question 1 (create a variable of type string and try to add a number to it)
/*let a = "Mishty"
let b = 6
console.log(a+b);
*/

//Practice question 2( use typeof operator to find the datatype of the string in last question)
//console.log(typeof (a+b));

//practice quetion 3 (create a const object in javascript can you change it to hold a number later)
// const obj = {
//     name = "Mishty",
//     section = "A",
//     isPrinciple = false,
// }
// obj = 45// error because const cannot be changed

//Practice question 4 (try to add a new key to the const object in problem 3 were you able to do it?)
/*const obj = {
    name: "Mishty",
    section: "A",
    isPrinciple: false,
}
obj['friend'] = "Shubham"
obj['name'] = "Haryan" // we can change the value of existing key in const object
console.log(obj); // yes we can add a new key to the const object because const only prevents reassignment of the variable itself, but it does not prevent modification of the object it holds.
*/

//practice question 5 (write a js program to create a word meaning dictionary of 5 words)
/*const disctionary = {
    apprecicate: "recognize the full worth of", 
    benevolent: "well meaning and kindly",
    candid: "truthful and straightforward",
    diligent: "having or showing care and conscientiousness in one's work or duties",       
    eloquent: "fluent or persuasive in speaking or writing",
}
console.log(disctionary.apprecicate);
console.log(disctionary['benevolent']);
*/

//Program 5 (Expressions and operators)
/*let x =5
let y = 6
console.log("x+y = ",(x+y)); // addition operator
console.log("x-y = ",(x-y)); // subtraction operator
console.log("x*y = ",(x*y)); // multiplication operator
console.log("x/y = ",(x/y)); // division operator
console.log("x%y = ",(x%y)); // modulus operator 
console.log("x**y = ",(x**y));// exponentiation operator
console.log("x++ = ",(x++)); // post-increment operator
console.log("x-- = ",(x--)); // post-decrement operator
console.log("++x = ",(++x)); // pre-increment operator
console.log("--x = ",(--x)); // pre-decrement operator  
*/

//Program 6 (conditional statements)
// let age = 18
// if(age >= 18){
//     console.log("You are an adult"); 
// }
// else{
//     console.log("You are a minor");
// }  
//console.log ("You can", (age >=18 ? "vote" : "not vot"));

//Practice question 6 (use logical operators to find whether the age of a person lies between 10 and 20)
/*const prompt = require('prompt-sync')();
let age = prompt("Enter your age: ");
if (age >=10 && age<= 20){
    console.log("Your age lies between 10 ad 20");
}
else{
    console.log("Your age does not lies betwewn 10 and 20");
}*/

//practice question 7 (demonstrate the use of switch case)
/*const prompt = require('prompt-sync')();
let age = prompt("Enter your age: ");
age = Number.parseInt(age);
switch (age){
    case 12:
        console.log("Your age is 12");
        break;
    case 13:
        console.log("Your age is 13");
    case 14:
        console.log("Your age is 14");
    case 15:
        console.log("Your age is 15");
    default:
        console.log("Your age is not special");   
}// bcz break statement is not used in switch case so it will execute all the cases after the matching case also.   
*/

//Practice question 8 (write a js program to find whether a number is divisible by 2 and 3)
/*const prompt = require('prompt-sync')();
let num = prompt("Enter a number: ");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0){
    console.log(num, "is divisible by 2 and 3 both");
}
else{
    console.log(num, "is not divisible by 2 and 3 both");
}*/

//Practice question 9 (write a js program to find whether a number is divisible by either 2 or 3)
/*const prompt = require('prompt-sync')();    
let num = prompt("Enter a number: ");
num = Number.parseInt(num);
if(num % 2 == 0 || num % 3 == 0){
    console.log(num, "is divisible by either 2 or 3");
}
else{
    console.log(num, "is not divisible by either 2 or 3");
}*/

//Practice question 10 (print "you can drive" or "You cannot drive" based on age being greater than 18 using ternary operator)
/*const prompt = require('prompt-sync')();
let age = prompt("Enter your age: ");
age = Number.parseInt(age);
console.log("you can", (age >= 18 ? "Drive" : "Not drive"));
*/

//Program 7 (for loop)
/*for (let i = 0; i<5; i++){
    console.log(i);
}
*/
//For In loop
/*let obj = {
    mishty: 65,
    Harry: 45,
    Rohan: 78,
    ritika: 56,
}
for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}
*/
// For Of loop
/*for (let a of "Mishty"){
    console.log(a)
}
*/
//While loop
/*const prompt = require('prompt-sync')();
let n = prompt("Enter a value of n: ");
n = Number.parseInt(n);
let i = 0;
while (i<n){
    console.log(i)
    i++;
}
*/
// Do while loop
/*let i = 10;
do{
    console.log(i);
    i++;
}while(i<n);
*/

//Program 8 (functions)
/*function Average(x, y){
    return (x+y)/2;
}
console.log(Average(2,3));
//another syntax to write function 
const sum = (x,y) =>{
    return x+y;
}
console.log(sum(4,5));
*/

//Practice question 11 (write a program to print the marks of a student in an object using for loop obj = { harry:98, rohan: 70, aakash:73})
/*let marks = {
    harry: 98,
    rohan: 70,
    aakash: 73,
}
for(let i =0; i<Object.keys(marks).length; i++){
    console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}
*/

//Practice question 12 (write program in above question usig for in loop)
/*for(let i in marks){
    console.log("Marks of " + i + " are " + marks[i]);
}
*/

//Practice question 13 (write a program to print "Try again" until the user enters the correct number)
/*const prompt = require('prompt-sync')();
let num = 5;
let userInput;
do{
    userInput = prompt("Enter a number: ");
    userInput = Number.parseInt(userInput);
    if(userInput !== num){
        console.log("Try again");
    }
    else{
        console.log("You entered the correct number");
    }
}while(userInput !== num);
*/

//Practice question 14 (Write a function to find mean of 5 numbers)
/*function findMean(a, b, c, d, e){
    return (a+b+c+d+e)/5;
}
console.log(findMean(2,3,4,5,6));
*/

//PP 1(print numbers 1 to 100)
/*for(let i = 1; i<=100; i++){
    console.log(i)
}
*/

//pp(check even/odd)
/*const prompt = require('prompt-sync')();
let num = prompt("Enter a number:")
num = Number.parseInt(num);
if(num % 2 == 0){
    console.log(num, "is an even number")
}
else{
    console.log(num, "is an odd number")
}
*/

//pp(find largest of 3 numbers)
/*const prompt = require('prompt-sync')();
let a = prompt("Enter fist number:")
let b = prompt("Enter second number:")
let c = prompt("Enter third number:")
a = Number.parseInt(a);
b = Number.parseInt(b);
c = Number.parseInt(c);
if(a>=b && a>=c){
    console.log(a, "is the largest number")
}
else if(b>=a && b>=c){
    console.log(b, "is the largest number")
}
else{
    console.log(c, "is the largest number")
}
*/

//pp(find factorial of a number)
/*const prompt = require('prompt-sync')();
let num = prompt("Enter a number: ");
num = Number.parseInt(num);
let factorial = 1;
for (let i=1; i<=num; i++){
    factorial = factorial * i;
}
console.log("Factorial of " + num + " is euqual to " + factorial);
*/

//pp(Palindrome check)
/*const prompt = require('prompt-sync')();
let str = prompt("Enter a string: ");
let reversedStr = "";
for (let i = str.length-1; i>=0; i--){
    reversedStr = reversedStr + str[i];
}
if (str === reversedStr){
    console.log(str, "is a palindrome");
}
else{
    console.log(str, "is not a palindrome");
}
*/