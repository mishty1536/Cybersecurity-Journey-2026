//promise example
// const login = new Promise((resolve, reject) => {

//     let success = true;

//     if (success) {
//         resolve("Login Successful");
//     } else {
//         reject("Invalid Credentials");
//     }

// });

// login
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// password login example
function login(username, password) {

    return new Promise((resolve, reject) => {

        if (username === "admin" && password === "1234") {
            resolve("Login Successful");
        } else {
            reject("Invalid Username or Password");
        }

    });

}

login("admin", "1234")
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

//practice question 1: create a promise that resolves with: "Welcome to JavaScript Promises" use .then() to print the message
const message = new Promise((resolve, reject) => {
    resolve("Welcome to JavaScript Promises");
});
message
    .then((message) => {
        console.log(message);
    });

//practice question 2: create a promise that rejects with: Server Error use .catch() to print the error
const error = new Promise((resolve, reject) => {
    reject("Server Error");
});
error
    .catch((error) =>{
        console.log(error);
    });

//practice question 3: create function checkAge(age) if age>= 18, resolve "Eligible to vote" otherwise reject: "Not eligible"
function checkAge(age){
    return new Promise ((resolve, reject) => {
        if(age >= 18){
        resolve("Eligible to Vote");
        }
        else{
            reject("Not eligible");
        }
    });
} 
checkAge(16)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error)
    });

//practice question 4: create a promise that resolves after 2 seconds using setTimeout() print: "Data Loaded"
function loadData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });
}
loadData()
    .then((message) => {
        console.log(message);
    });

//practice question 5: create a promise chain that prints :login successful, fetch user profile, dashboard loaded using 3 .then()calls
Promise.resolve("Login Successful")
    .then((result) => {
        console.log(result);
        return "Fetch User Profile";
    })
    .then((result) => {
        console.log(result);
        return "Dashboard Loaded";
    })
    .then((result) => {
        console.log(result);
    });
    