// challenge 1 - callback: write a function prepareTea(callback) use setTimeout(), callback function
// function prepareTea(){
//     console.log("Enjoy your tea!");
// }
// function prepare(callback){
//     console.log("Boiling Water");
//     setTimeout(() => {
//         console.log("Tea Ready");
//         callback();
//     }, 2000);
// }
// prepare(prepareTea);

// challenge 2 - promise: create a promise that checks a student's marks if marks are 40 or more: Pass otherwise: Fail use: resolve, reject, .then, .catch
// function checkMarks(marks){
//     return new Promise ((resolve, reject) => {
//         if(marks >= 40){
//             resolve("Pass");
//         }
//         else{
//             reject("Fail");
//         }
//     });
// }
// checkMarks(70)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// challenge 3 - Async/Await: create a function downloadNotes() it should return" Notes downloaded after 3 seconds. print the message using await
// function downloadNotes(){
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve("Notes Downloaded");
//         }, 3000);
//     })
// }
// async function execute(){
//     const print = await downloadNotes();
//     console.log(print);
// }
// execute();

// challenge 4 - Fetch API: fetch: "https://jsonplaceholder.typicode.com/todos/1" print title, completed 
// async function getTodo(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const todo = await response.json();
//         console.log("Title:", todo.title);
//         console.log("Completed:", todo.completed);
//     }catch(error){
//         console.log(error);
//     }
// }
// getTodo();

// challenge 5 - Fetch Array: fetch: "https://jsonplaceholder.typicode.com/posts" print the titles of the first five posts only
// async function getPost(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const posts = await response.json();
//         posts.slice(0, 5).forEach((post) => {
//             console.log(post.title);
//         });
//     }catch(error){
//         console.log(error);
//     }
// }
// getPost();

// challenge 6 - POST Request: create a POST request to: "https://jsonplaceholder.typicode.com/posts" send: {"title": "Revision","body": "Week 1 Completed","userId": 1} and print the response
async function createPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: "Revision",
                body: "Week 1 Completed",
                userId: 1
            })
        });

        const post = await response.json();

        console.log("Title:", post.title);
        console.log("Body:", post.body);
        console.log("User ID:", post.userId);
        console.log("ID:", post.id);

    } catch (error) {
        console.log(error);
    }
}

createPost();