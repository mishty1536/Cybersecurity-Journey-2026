//callback example
// function greet (name, callback){
//     console.log("Hello " + name);
//     callback();
// }
// function welcome(){
//     console.log("Welcome to month 2!");
// }
// greet("Mishty", welcome);

// callback with setTimeout example
// console.log("Order Received");
// setTimeout(() => {
//     console.log("Preparing Food..");
// }, 2000);
// console.log("Customer Waiting...");

// callback hell example
// setTimeout(() => {
//     console.log("Order Received");
//     setTimeout(() => {
//         console.log("Preparing Food");
//         setTimeout(() => {
//             console.log("Packing Food");
//             setTimeout(() => {
//                 console.log("Delivered");
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);

// practice question 1: create function sayHello(name, callback) it should print Hello Mishty then call the callback which prints: Have a great day!
function sayHello(name, callback){
    console.log("Hello " + name);
    callback();
}
function greet(){
    console.log("Have a great day!");
}
sayHello("Mishty", greet);

//practice question 2: use setTimeout to print downloading files aftr 2 seconds
setTimeout(() => {
    console.log("Downloadinf Files....");
}, 2000);