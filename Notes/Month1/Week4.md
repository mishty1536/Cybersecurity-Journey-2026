1. Advanced array methods
    i. ForEach(): used to perform an action on every element of an array 
       Syntax: array.forEach((element, index) => {
                    //code
                });
        - visits every element 
        - does not return a new array 
        - commonly used for printing, logging, updating the UI, etc 
    ii. map(): is one of the most used JS methods in React bcz it creates a new array by transforming each element
        Syntax: const newArray = array.map((element, index) => {
                        return transformationValue;
                });
    iii. filter(): is used to select elements that satisfy a condition. 
        - think of it as: Take an array -> keep only the matching elements 
        Syntax: const newArray = array.filter((element) => {
                        return condition;
                });
        - If the condition is: => true: element is included
                               => false: element is excluded
    iv. find(): returns the first element that matches a condition
        - think of it as: find me the first matching object 
        Syntax: const result = array.find((element) => {
                       return condition;
                });
        - it stops searching after finding the first match 
    v. findIndex(): returns the index (position) of the first element that matches a condition.
        - think of it as: tell me where the element is
        Syntax: const index = array.findIndex((element) => {
                        return condition;
                });
    vi. some(): checks if at least one element in an array satisfies a condition
        - think of it as: is there atleast one?
        - it always returns a boolean (true or false)
        Syntax: const result = array.some((element) => {
                    return condition;
                });
        - how some() works? => it checks each element one by one. if it finds one match, it immediately stopd and returns true
        - student 1 X -> student 2 X -> student 3 YES -> stop checking
        this makes it efficient for large array
    vii. every(): checks if all elements in an array satisfy a condition 
         - think of it as: does every element meet this condition?
         - it returns either: true or false
         Syntax: const result = array.every((element) => {
                       return condition;
                  });
         - how every() works? => it checks elements one by one. if it finds one element that does not satisfy the condition, it immediately stops and returns false. 
         - student 1 YES -> student 2 YES -> student 3 NO -> stop checking ==> false
    viii. reduce(): reduces an entire array to a single value.
          - the final value can be: number(sum, avg), object, array, string
          Syntax: const result = array.reduce((accumulator, currentValue) => {
                        return updateAccumulator;
                  }, initialValue);
          parameters:
          -> accumulator(acc): stores the accumulated result
          -> currentValue: current element being processed
          -> initialValue: starting value of the accumulator
    ix: sort(): is used to sort the elements of an array
        - unlike map(), filter(), etc, sort() modifies the original array
        Syntax: array.sort((a,b) => {
                    return a-b;
                });

2. Error handling
-> what is an error?
an error is something that prevents the program from executing correctly
-> without handling it the program stops
    i. try: the code that might produce an error is placed inside a try block
    ii. catch: if an error occurs inside try, execution jumps to catch
    iii. finally: always executes, whether an error occurs or not
                - common use cases:
                  - closing database connections
                  - closing files
    iv. throw: sometimes js does not throw an error, but you want to
    v. custom validation 

3. Destructuring
-> destructuring is an ES6 feature that allows you to extract values from arrays or objects and store them in variables in a cleaner way
    i. object destructuring
    ii. variable renaming: sometimes you already have a variable with the same name 
    iii. default values: if a property does not exist, you can assign a default value
    iv. array destructuring
    v. skipping elements: eg.[first, , third] notice the extra comma skips that element
    vi. rest operation in destructuring: collect the remaining elements 
    vii. nested object destructuring
    viii. destructuring in function parameters

4. Spread(...) and Rest(...) operator
-> both have same syntax but different purpose
    i. spread(...): the SPREAD operator EXPANDS an array or object
       - copy array
       - merge arrays
       - add elements
       - same with objects 
    ii. reast(...): the REST operator COLLECTS multiple values into one variable

5. JavaScript Modules(import and export)
-> what are modules? => a module is simply a JS file
-> instead of writing your entire project in one file, you split it into multiple files
-> Each file has a specific responsibility. This makes code easy to read, easier to maintain and reuseable
    i. Export: export makes variables, functions or classes available for other files
    ii. Import: use import to use exported functions
    iii. Default export: a file can have only one default export
         NOTICE: no {} with default exports
    iv. Named export: a file can have multiple named exports
         NOTICE: {} are required 

6. Browser Storage 
-> why do we need browser storage? => browser storage lets us save data in the browser
    i. localStorage: stores data even after the browser is closed
        => store data: localStorage.setItem("name", "Mishty");
        => get data: let name = localStorage.getItem("name");
                     console.log(name);
        => update data: localStorage.setItem("name", "Rahul");
        => delete one item: localStorage.removeItem("name");
        => delete everything: localStorage.clear();
    ii. sessionStorage: works exactly like localStorage, but data is removed when the browser tab is closed
        => store: sessionStorage.setItem("course", "CSE");
        => get: console.log(sessionStorage.getItem("course"));
        => remove: sessionStorage.removeItem("course");
    iii. storage objects: storage only saves strings
    iv. cookies: cookies are SMALL PIECES of DATA STORED by the BROWSER
        -> they are mainly used for:
            - login sessions
            - authentication
            - user preferences
            - tracking
    v. Access token : access token is a short lived JWT used to access protected resources
        purpose: - access APIS
                 - identify the logged-in user
    vi. Refresh token: imagine your Access Token expires after 15 minutes
        - should the user log in again every 15 minutes? => No
        - instead the server alo issues a Refresh Token 
        - why 2 tokens? => if someone steals your access token: - it expires quickly - damage is limited 
        - Refresh Token: - longer-lived
                         - used only to obtain new Access token
                         - should be protected carefully
    vii. Where should tokens be stored?
         - not in localStorage
         - easy to use but if your website has an XSS vulnerability, malicious JS can read: localStorage.getItem("token"); and send it to an attacker
         - Better Option:
           -> store the Refresh Token in a secure, HttpOnly Cookie
    viii. Session Hijacking
        -> session hijacking means: An attacker steals a valid session or token and impersonates the user 
        -> the attacker gains access without knowing the password
    ix. Token theft
        - instead of stealing a session ID the attacker steals a JWT
        - the sever thinks the attacker is the legitimate user until the token expires
    x. XSS (Cross-Site Scripting)
        - can steal data from localStorage
        - now attacker has the token 
        - prevention:
            - escape user input
            - sanitize HTML
            - use content security policy
            - avoid storing sensitive tokens in places accessible to JS when possible
    xi. CSRF (Cross-Site Request Forgery)
        - imagine you are logged into your bank. then you visit a malicious website. that website silently submits: POST/ transfer
                                                          Ammount = 10000
        your browser automatically includes your authentication cookie. the bank may think you made the request.
        - prevention:
            - CSRF tokens
            - SameSite cookies
            - checking origin/referer headers
    xii. secure cookies
        - a cookie can have security flags:
            HttpOnly
        JS cannot read it
            Secure
        Sent only over HTTPS
            SameSite
        Helps protect againts CSRF
        