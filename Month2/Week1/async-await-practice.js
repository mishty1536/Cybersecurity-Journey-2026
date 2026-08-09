// //async example
// async function greet(){
//     return "Hello";
// }
// greet().then((message) => {
//     console.log(message);
// });

// //await example
// function getMessage(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Welcome!");
//         }, 2000);
//     });
// }
// async function display() {
//     const message = await getMessage();
//     console.log(message);
// }
// display();

// //multiple awaits example
// function firstTask() {
//     return Promise.resolve("Step 1");
// }

// function secondTask() {
//     return Promise.resolve("Step 2");
// }

// async function execute() {

//     const first = await firstTask();
//     console.log(first);

//     const second = await secondTask();
//     console.log(second);

// }

// execute();

//error handling with try catch
// function login(success) {

//     return new Promise((resolve, reject) => {

//         if (success) {
//             resolve("Login Successful");
//         } else {
//             reject("Invalid Credentials");
//         }

//     });

// }

// async function authenticate() {

//     try {

//         const message = await login(true);

//         console.log(message);

//     } catch (error) {

//         console.log(error);

//     }

// }

// authenticate();

//practice question 1: create async function that returns: Learning Async/Awwit print it
// async function learn(){
//     return "Learning Async/Await";
// }
// learn().then((message) => {
//     console.log(message);
// });

// //practice question 3: create a promise that resolves after 2 seconds with: Data Received use await to print it 
// function dataLoaded(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve ("Data Received"); 
//         }, 2000);
//     });
// }
// async function check(){
//     const data = await dataLoaded();
//     console.log(data);
// }
// check();

//practice question 3: create a function checkLogin(success) if success is true: Login Successful otherwise: Login Failed use try...catch 
// function checkLogin(success) {
//     return new Promise((resolve, reject) => {
//         if (success) {
//             resolve("Login Successful");
//         } else {
//             reject("Invalid Credentials");
//         };
//     });
// } 
// async function verify(){
//     try{
//         const message = await checkLogin(true);
//         console.log(message);
//     }catch(error){
//         console.log(error);
//     }
// }
// verify();

// //practice question 4: create 2 promises Fetch user and Fetch Orders use 2 await statements to print Fetch User and Fetch Orders 
// function fetchUser() {
//     return new Promise((resolve) => {
//         resolve("Fetch User");
//     });
// }

// function fetchOrders() {
//     return new Promise((resolve) => {
//         resolve("Fetch Orders");
//     });
// }

// async function displayData() {
//     const user = await fetchUser();
//     console.log(user);

//     const orders = await fetchOrders();
//     console.log(orders);
// }

// displayData();

//practice question 5: create a bank atm simulation expected flow  (insert card -> verifying pin -> pin verified -> fetching balance -> balance: 5000)
function verifyPin() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("PIN Verified");
        }, 2000);
    });
}

function fetchBalance() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Balance: ₹5000");
        }, 2000);
    });
}

async function atm() {
    console.log("Insert Card");
    console.log("Verifying PIN...");

    const pin = await verifyPin();
    console.log(pin);

    console.log("Fetching Balance...");

    const balance = await fetchBalance();
    console.log(balance);
}

atm();