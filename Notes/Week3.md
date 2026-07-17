1. JSON 
-> what is json? =>javascript object notation
-> used for: apis, frontend, logs, security tools
    1) JSON.stringify() = convert object to JSON
    2) JSON.parse() = convert JSON to objects

2. Promises
-> promise States
= pending
= resolved
= rejected 
-> examples in th practice file 
-> resolve => success
   reject => fail
-> .then => promise-> did it succeed? -> yes -> then() -> print success
-> .catch => promise -> did it fail? -> yes -> catch() ->print error

3. Async/Await
-> before = promise.then()...
-> after = async await
-> this means start loading -> wait 2 seconds -> return "data loaded"
-> now here await is used to make sure that when promise is running it gets completed and then only continues. also it will work with async only 

4. Fetch API
-> we make real time requests
-> what is an API?
== react directly dont access the database instead: react ---HTTP request--> backend API ---> database
the API acts as the middle man 
-> example: suppose you opne instagram 
instagram app -> "Give me my posts" -> instagram API -> database -> posts returned
-> the frontend never talks directly to the database 
--> what is fetch api? 
 -> JS needs a way to communicate with APIs
 -> that is exactly what fetch() does
 -> think of it like: JS -> fetch() -> HTTP request -> server -> HTTP response -> JS
--> Syntax: fetch(URL)
-> fetch() returns a promise as internet takes time to give the response the browser cannot we freezed so it gives promise like:  request -> waiting... -> response
--> error handling: what if internet fails, use Try and Catch 

5. DOM Manipulation
-> DOM = DOcument object Model
--> when a browser reads an HTML file, it converts every HTML tag into JS object 
-> example: <body>
            <h1> Hello </h1>
            <p> Welcome </p>
            <button> Click </button>
            </body>

            the browser creates something like:
            document
            |
            body
            |_h1
            |_p
            |_button
->Accessing HTML elements
2 most imp ways are:
1) document.getElementById()
HTML: <h1 id = "heading"> Hello </h1>
JS: const heading = document.getElementById("heading");
now heading contains the <h1> element
-> think of it like:
   browser -> find element -> id = heading -> give it to Javascript

--> changing text: 
example: HTML: <h1 id = "heading" > hello </h1>
         JS: const heading = document.getElementById("heading");
             heading.innerText = "Hello Mishty!";
        OUTPUT: Hello Mishty!

2) document.querySelector()
->this is even more powerful
example: HTML: <p class = "info" > Welcome </p>
         JS: const para = document.querySelector(".info");
         NOTICE: . means class

--> difference 
getElementById(): only IDs and document.getElementById("heading")
querySelector(): can select: ID = "# heading"
                             class = ".info"
                             tag = "h1"

--> changing styles
suppose: HTML: <h1 id = "title" > Hello </h1>
         JS: const title = document.getElementById("title");
             title.style.color = "red";
         OUTPUT: Hello becomes red

6. Events
-> until now the webpage just sits here, events make it interactive 
   1) click event
   HTML: <button id = "btn" > click me </button>
   JS: const btn = document.getElementById("btn")
       btn.addEventListener("click", () => {
        console.log("Button Clicked");
       });
    when you click 
    OUTPUT: Button clicked 
    2) Submit Event: used for forms
    -> when user submits, JS runs. very useful in login pages
    3) Change Event: used for checkbox, Input, Dropdown
    -> whenever user changes text, JS gets new value

7. Authentication and Authorization
notes in month 1 folder 
