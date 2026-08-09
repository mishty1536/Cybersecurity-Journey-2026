// example
// async function getUser() {

//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//     const data = await response.json();

//     console.log(data);

// }

// getUser();

//fetch multiple users
// async function getUsers() {

//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const users = await response.json();

//     console.log(users);

// }

// getUsers();

//loop through data
// async function getUsers() {

//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const users = await response.json();

//     users.forEach((user) => {

//         console.log(user.name);

//     });

// }

// getUsers();

//error handling
// async function getUser() {

//     try {

//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//         const data = await response.json();

//         console.log(data);

//     }

//     catch(error){

//         console.log(error);

//     }

// }

// getUser();

//check response.ok:
// async function getUser() {

//     try {

//         const response = await fetch("https://jsonplaceholder.typicode.com/users/100");

//         if (!response.ok) {

//             throw new Error("User Not Found");

//         }

//         const data = await response.json();

//         console.log(data);

//     }

//     catch(error){

//         console.log(error.message);

//     }

// }

// getUser();

//POST Request
// async function createPost() {

//     const response = await fetch("https://jsonplaceholder.typicode.com/posts",{

//         method:"POST",

//         headers:{
//             "Content-Type":"application/json"
//         },

//         body:JSON.stringify({

//             title:"Learning Fetch API",

//             body:"Day 4 Practice",

//             userId:1

//         })

//     });

//     const data = await response.json();

//     console.log(data);

// }

// createPost();

//Practice Question 1: fetch: "https://jsonplaceholder.typicode.com/users/1"  print: email
// async function getUser() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//         const data = await response.json();

//         console.log(data.email);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getUser();

//practice question 2: fetch: "https://jsonplaceholder.typicode.com/users" print all usernames using a loop
// async function getUsers(){
//     try{
//         const response = await fetch ("https://jsonplaceholder.typicode.com/users");
//         const users = await response.json();
//         users.forEach((user) => {
//             console.log(user.username);
//         });
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getUsers();

//Practice question 3: fetch: "https://jsonplaceholder.typicode.com/posts/1" print title and body 
// async function getPost(){
//     try{
//         const response = await fetch ("https://jsonplaceholder.typicode.com/posts/1");
//         const post = await response.json();
//         console.log("Title:", post.title);
//         console.log("Body:", post.body);
//     }catch(error){
//         console.log(error);
//     }
// }
// getPost();

//practice question 4: create a POST request that sends "{title:"My First Post",body:"Learning Fetch API",userId:}" and print the response
// async function createPost(){
//     try {
//         const response = await fetch ("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 title: "MY First Post",
//                 body: "Learning Fetch API",
//                 userId: 1
//             })
//         });
//         const data = await response.json();
//         console.log(data);
//     }catch (error){
//         console.log(error);
//     }
// }
// createPost();

//Practice question 5: user information viewer fetch all users and print name, email, company name and use async/await, try...catch, forEach()
async function getUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        users.forEach((user) => {
            console.log("Name:", user.name);
            console.log("Email:", user.email);
            console.log("Company:", user.company.name);
            console.log("--------------------------");
        });
    }catch(error){
        console.log(error);
    }
}
getUsers();