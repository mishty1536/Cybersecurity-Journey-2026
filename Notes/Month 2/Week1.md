1. Callback functions and Callback Hell
- what is a callback? => acallback is a function passed as an argument to another function, which is executed later
2. Why do we need callbacks?
- imagine you are ordering food online. the order takes time to prepar. you dont want the app to freexe while waiting.
- Instead: Place Order -> Continue using app -> Food Ready -> Notify Customer this is exactly how callbacks work
3. Callback with setTimeOut()
- setTimeout(() => {
    console.log()
  },2000); 
  the callback inside setTimeout() runs after 2 seconds
4. Callback Hell
- imagine an application where every step depends on the previous one 
- whats the problem? look at the code structure:
    setTimeout
    |
        setTimeout
        |
            setTimeout
            |
                setTimeout
    as more steps are added the code becomes: hard to read, hard to debug and hard to maintain
    this deeply nested structure is called CallBack Hell 
5. why is callback hell bad? 
- imagine a login process: Login->Fetch user->Fetch permissions->Fetch dashboard->Fetch notifications
- if implemented with nested callbacks, the code quickly becomes messy and difficult to manage
- this is why JS introduced Promises and later async/await
6. What is a Promise? 
- a promise is an object that represents the eventual result of an asynchronous operation
- example: you order a laptop online. there are 3 possible states: order is being processed-> order is delivered -> order is cancelled JS promises work exactly the same way
7. states of a promise
- pending: the task is still running
- fulfilled: the task completed successfully 
- rejected: something went wrong
8. creating Promise
- syntax: const promise = new Promise((resolve,reject) => {});
- resolve = succes
- reject = failure
9. understanding then()
- then() runs only when the promise is fulfiled
10. understanding catch() 
- catch() runs only when the promise is rejected
11. Promise with setTimeout()
- the promises runs after the time specified there in setTimeout
12. Promise chaining
- one promise can trigger another
- instead of nested callbacks: step1->step2->step3 we get a clean chain
13. real world example
- imagine an e-commerce website user login->fetch profile->fetch orders->display dashboard
- using promise chaining: loginUse()
                          .then(getProfile)
                          .then(getOrders)
                          .then(showDashboard)
                          .catch(handleError)
                        this is much cleaner than nested callbacks
14. why do we need async/await
- we wrote .then() and .catch() this is much cleaner than callbacks, but if you have many asynchronous operations, the code can still become difficult to follow 
- instead use try{
    with async/await
}
catch(){

}
15. what is async?
- the async keyword makes a function asynchronous
- syntax: async function greet(){ }
=> An async function always returns a promise
16. what is await?
- await pauses the execution of an async function until a promise is resolved 
17. how await works?
- display() -> await getMessage() -> wait... -> Promise Resolved -> Continue Execution
=> only the async function waits. the rest of thr program can continue running
18. multiple awaits 
- each for a different async function
19. error handling with try..catch
- if a promise is rejected use try...catch
20. await works only inside async
- wrong: const data = await fetchData();
         Error: await is only valid in async functions
- correct: async function load(){
                const data = await fetchData();
            }
21. Fetch API: What is an API? 
- an API (Application Programming Interface) is a way for two  applications to communicate 
- example: when you log into instagram 
            instagram API -> API Request -> instagram server -> user data -> instagram App
            JS sends requests using the Fetch API
22. What is Fetch API?
- fetch() is a built-in JS function used to make HTTP requests
- syntax: fetch(URL)
- it returns a promise
- that means we can use: .then() and async/await
23. your first fetch request
24. understanding the code 
refer the book 
25. printing specific data
- instead of printing everything: console.log(data);
- print only what you need: console.log(data.name);, console.log(data.email);
26. fetch multiple users
- this returns an array [{user1},{user2}]
27. loop through data
28. error handling 
- network requests can fail
- always use try...catch
29. checking response status
- even if fetch() succeeds, the server might return an error like 404 Not Found
- check response.ok: 
30. GET Request
- by default: fetch(URl) means: GET 
- GET is used to retrieve data
- example: view profile, view news, view products
31. POST Request
- POST sends data to the server
32. what is JSON?
- JSON= Javascript Object Notation
- convert object to JSON: JSON.stringify(object)
- convert JSON to object: JSON.parse(json)