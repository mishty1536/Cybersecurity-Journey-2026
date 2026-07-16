// // fetch() and its use example 
// fetch("https://jsonplaceholder.typicode.com/users")
// // this will not give anything as it is a promise and we need to use then() to get the data
// .then(response => {
//     console.log(response);
// })
// // now we get a response object but we need to convert it into json format to get the data

// // response.json() method is used to convert the response object into json format
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// // now we get the data in json format and we can use it
// .then(data => {
//     console.log(data);
// });

// //Accessing data
// [
//     {
//         id: 1,
//         name: "Leanne"
//     },
//     {
//         id: 2,
//         name: "Ervin"
//     }
// ]

// //console.log(users[0].name); // Leanne

// //practice question: fetch all users print the compllete array
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(users => {
//     console.log(users);
// });

// //practice question 2: print only the names of the users
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(users => {
//     users.map(user => {
//     console.log(user.name);
// })
// });

// //practice question 3: print only emails
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(users => {
//     users.map(user => {
//     console.log(user.email);
// })
// });

// // practice question 4: fetch posts and print the title of the first 5 posts
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(posts => {
//     posts.slice(0,5).map(post => {
//         console.log(post.title);
//     });
// });

// //practice question 5: count how many users are returned
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(users => console.log("Count:", users.length));

//practice question 6: fetch users/1 and print name email phone company
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(user => {
    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("Phone:", user.phone);
    console.log("Company:", user.company.name);
});