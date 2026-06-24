1. Strings: 
    Templete literals: string can be written using backticks
    => ${variableName}

2. Escape sequence:
    \' = single quote inside single quote
    \" = double quote inside double quote
    \n = Newline
    \t = tab
    \r = carriage return

3. Methods
-> str.length
-> str.toUpperCase()
-> str.toLowerCase()
-> str.slice(startingIndex, endingIndex)
-> str.replace(ExistingWord, NewWord)
-> str.concat(toaddword, alreadyExisting)
-> str.trim(Removes startingand ending spaces)
-> str.concat(str1+st2)
=> Method use karne se original string kabhi bhi change nai hogi

==>ARRAY
1. can have values of different datatypes
2. we can update, modify, add values of an array
3. ARRAY Methods
(i) toString: will convert the array to string

(ii) join: will join all the array elements using a seperator

(iii) Pop: will remove last element from array, it updates the original array

(iv) Push: adds a new elements at the end of the array and updates the original array

(v) shift: removes first element and returns it, if modifies the original array

(vi) unshift: adds element to beginning of array, returns new array length

(vii) delete: it is an operator, length of array does not change it will be same as before

(viii) concate: used to join arrays to the given array
a1.concat(a2,a3) = returns a new array, it does not change existing arrays

(ix) sort: used to sort an array alphabetically, changes original array

(x) reverse: if reverses the array

(xi) splice: used to add new itemsto an array
->position to add
-> number of elements to remove
-> elements to be added
=> returns deleted values as an array

(xii) slice: slice out a piece from an array it creates a new array 
-> starting(gives values from starting index) and ending(to ending-1 index)

4. Array Loop
(i)ForEach loop: arrayName.forEach() => {
    //code
}

(ii)Array.from loop: used to create an array from any other object 

(ii)For of loop: gives the values of an array

(iv)For in loop: gives the key/indexes of the array 

5. Higher order array methods
(i)Map: creates a new array by performing some operation on each array elements
map(value, index, array) => {
    return value
}

(ii)Filter: filters an array with values that passes a test. creates a new array.
-->Both map and filter do not change the original array, the create a new array as an output 

(iii)Reduce: reduces an array to a single value

==>OBJECTS
1. Creating objects
mtd. 1. const car = {
    key: "value";
}

mtd. 2. const car = new.object();
        car.key = "value";

2. Accessing values
console.log(car.key);

3. Bracket notation
console.log(car["key"]);

4. Updating values
car.key = newValue;

5. Adding new properties
car.newKey = value;

6. Deleting
delete car.key
-> objects can store different data types
 
7. Nested objects
const student = {
    key: "value",
    key: {
        key: "value",
        key: "value
    }
}

8. Array of objects
const student = [
    {
        name: "Mishty",
        age: 20
    },
    {
        name: "Rahul",
        age: 21
    }
];

accessing: student[0].name;

9. object.keys(): returns all keys
syntax: object.keys(objectname);

10. object.values(): retuens all values
syntax: object.values(objectname);

11. object.entries(): returns key-value pairs
syntax: object.entries(objectname);

12. ES6 Features:
    1. let and const
    -->Before ES6
        var name = "Mishty";
        Problems: ->func. scoped
                  ->can be redeclared
                  ->causes bugs

    -->let value can change
        let age = 20;
        age = 21;
        console.log(age);
        OUTPUT: 21
    
    -->const value cannot be reassigned
        const name = "Mishty";
        name = "Rahul"; =>Not allowed

    -->Rules:
        1. use const by default
        2. use let only when value changes
        3. avoid var

    2. Templete Literals
        -->Before ES6
            we used + to combine
            eg. console.log("Hello" + name);

        -->ES6 
            we use back ticks
            eg. console.log(`Hello ${name}`);

    3. Arrow function
        -->Before ES6
            function func.Name () {
                console.log();
            }

        -->ES6
            const functionName = () => {
                console.log();
            }
            ->react use arrow functions constantly

    4. Destructuring
        --> extract values from objects or arrays
        --> Normal way is also used but this is the way mostly it is used in react

        --> Object Destructuring
         const {objectVariables} = objectName;
         console.log(objectVariable);

        --> Array Destructuring
         const [first, second, ...] = arrayName;
         console.log(first);

    5. Spread operator (...)
     -> one of the most useful ES6 features
     -> used to merge, copy arrays and update objects using (...)
     -> very common in react
        const a = [1, 2]
        const b = [3, 4]
        const c = [...a, ...b]
        result: [1, 2, 3, 4]

    6. Rest operator (...)
     -> cook same as spread but oppsite purposr
        const[first, ...others] = [1, 2, 3, 4];
        console.log(first) => 1
        console.log(others) => [2, 3, 4]

    7. find (1 used to return first matching value)
        const users = [
            {id: 1, name: "A"},
            {id: 2, name: "B"}
        ]
        const user = users.find(u =>u.id === 2);
        returns => name: "B"

13. Git Branching
--> git branch => *main
    * means you are currently on that branch
    
    steps: for git branching
    1. create New branch
        ->git branch branch_name

    2. switch branch
        ->git checkout branch_name
    
    3. to check current branch
        -> git branch

    4. add new file
        
    --> once you switch back to main the file you created inside the new branch will disappear

    5. to merge branches
        -> git merge feature-week2

==>POSTMAN

->how web applications work?
    Browser -> HTTP Request -> Server -> HTTP Response -> Browser

-> What is HTTP?
    ->HTTP = HyperText Transfer Protocol
    -> it is a language used between browser and server

-> HTTP Request 
    -> A request is sent by the client
    -> eg. GET/ users HTTP/1.1
    Host: example.com
    ->Breakdown: 
        -->Method: GET
                -> what action to perform
        -->Path: /users
                -> which resource
        -->Headers: Host: example.com
                -> Extra Information

1. HTTP Methods
(i) GET = used to fetch data/ Read
eg. GET / users
meaning: give me user data
GET --> READ

(ii) POST = used to send data / create
eg. POST / register
meaning: create a new user 
POST --> CREATE

(iii) PUT = update existing data
eg. PUT / users/1
meaning: update user 1
PUT --> UPDATE

(iv) DELETE = delete data
eg. DELETE /users/1
meaning: Delete user 1
DELETE --> DELETE

==> These are CRUD Operations

2. HTTP Response
-> server replies
eg. HTTP /1.1  200 OK

-> contains:
   -->Status code 
        eg. 200  = success
   -->Headers 
        eg. content-type: applications/json
   -->Body: actual data
        eg. {
            "name": "Mishty"
        }

3. Imp status codes
(i) 200 OK : success
(ii) 201 Created : Resource created
    -> usually after POST
(iii) 400 Bad Request : Invalid Request
(iv) 401 Unauthorized : Login required
(v) 403 Forbidden : Logged in but no permission
(vi) 404 Not Found : Page does not exist
(vii) 500 Internal Server : Error: Server problem 

4. What are APIs?
--> API = Application Programming Interface
-> eg. Instagram app asks:
        give me posts
    API returns:
        JSon:
        [
            {
                "user": "abc",
                "caption": "Hello"
            }
        ]
    -> Most modern apps communicate through APIs

5. Using Postman
--> used for:
    -> API Testing
    -> Request Analysis
    -> Security Testing
    