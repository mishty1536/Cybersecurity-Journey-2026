1. What is React?
- React is a JS library developed by Meta for building user interfaces.
- instead of writing large HTML pages manually React lets us build the UI using small reusable components
2. why React?
- imagine creating a website using only HTML, CSS, and javascript
- example: supposeyou have 100 product cards:
    - without React: you write repetitive HTML, updaing one card may require changing many parts of the page
    - with React: create one product card components, reuse it for all products
- this makes development faster and code easier to maintain
3. Traditional website VS React
- treaditional website: user clicks about -> browser requests a new HTML page -> server sends a completely new page -> browsser reloads -> each click reloads the page
- React(single page application): user clicks about -> react updates only the required content -> no full page reload  this makes the application feel much faster and smoother
4. what is vite?
- Vite is a modern tool for creating React projects
- it provides fast development server, optimised builds, simple project setup
- we will use Vite instead of Create React App because it is the current recommended choice for new React projects
5. Install Prerequisites
- open command prompt or VS code terminal and check => Node.js = node -v => npm = npm -v
- if both commands work you are ready
6. create your firest react project
- navigate to the folder where you keep your projects -> cd Desktop
- then run: npm create vite@latest
- you will be asked a few questions: project name:
- type: react-learning
- then: select a framework choose: react
- then: select a variant choose: javascipt
7. Move into the project
- cd react-learing
8. Install Dependencies
- npm install
- this downloads all required packages listed in package.json
9. Run the Development Server
- npm run dev
- you will see output similar to: Local: https://localhost:5173/
- open that URL in your browser you should see the default Vite+React page
10. Project structure
11. JSX and components
- JSX(JavaScript XML) is a syntax that lets you write HTML-like code inside JS
- Why JSX? = without JSX, you would write: React.createElement("h1",null,"Hello React!"); = with JSX: <h1> Hello React! </h1>
- JSX is much easier to read and write
12. your firstcomponent
- open src/App.jsx
13. what is component?
- a component is a reusable piece of UI
- each part can be a separate component
- instead of writing one huge file, we divide the UI into small pieces
14. create your first component
15. import the component
- now open App.jsx: import Welcome from "./welcome";  <Welcome /> looks like an HTML tag , but it is actually your own React component
16. why must component names start with a capital letter?
- correct: function Welcome(){ } used as: <Welcome />
- Incorrect: function welcome(){ } using: <welcome />
react thinks it is an HTML element not a component
=> Rule: Component names always begin with a Capital letter
17. Rules
Rule1: return only one parent element
    Incorrect: return( 
                    <h1> Hello </h1>
                    <p> React </p>
                );
    Correct: return(
                <div>
                    <h1> Hello </h1>
                    <p> React </p>
                </div>
             );
Rule2: close every tag 
    correct: <img src = "image.jpg" />
             <input />
Rule3: Use className instead of class
    HTML: <div class="box"> </div>
    React: <div className="box"> </div>
    this avoids conflicts with JS's class keyword
18. what are Props?
- Props(properties) are used to pass data from a parent component to a clid component
- the parent sends data and the clid receives it 
19. without Props
- suppose yout student.jsx looks like this: refer notes
20. Using Props
- refer notes
21. using multiple Props
- strings are passed in quotes: "Mishty", Numbers are passed inside curly braces: {20}
22. Destructuring Props
- instead of writing: props.name, props.branch
- you write: function Student({name,branch,age,city}){ }
- this is cleaner and is the style you will commonly see in React Projects
23. Passing Boolean Props
- <Student name="Mishty'
           isCaptain={true} />
24. Passing Arrays
- <Student name="Mishty"
           skills={["Java","React","SQL"]} />
25. React State(useState): what is State?
- imagine you have a counter on a website: Initially: count=0
- after clicking a button: count=1 the displayed value changes overtime
- that changing value is called State
- State is data that can change while the application is running
26. why can not we use a normal variable?
- what happens? => when you click the button: Console: 1 2 3 but the webpage still shows 0 why? => react does not know that count changed
- changing a normal variable does not trigger a re-render
27. what is useState?
- useState is a React Hook
- a Hook is a special function provided by React
- it lets a component remember values between renders
- first import it: import {useState} from "react";
28. Creating state
- const [count,setCount] = useState(0); 
- this is called array destructurin
- lets break it down: count = current value, setCount = function to update the value, 0 = initial value
29. Updating state
- never do this: count++
- instead use: setCount(count+1)
- when setCount() is called: 1. state updates, 2. react re-renders the component, 3. UI automatically updates
30. your first counter app
- output: Counter App 0 [Increase] -> click once: 1 -> click again: 2 -> click again: 3 
- no page refresh is needed
31. What is onClick?
- <button onClick={increase}>
- this means "when this button is clicked, run the increase function"
32. Add a decrease button
- update App.jsx
33. Reset button
- add another function: function reset(){ setCount(0);}
- then add: <button onClick={reset}>Reset</button>
- Output: Counter App
                0
            [Increase]
            [Decrease]
              [Reset]
34. how does React work here?
- suppose: count = 0
  click increase: setCount(1)
  React: State Changed -> Re-render Component -> Update UI  => thats why the numbers changes instantly
35. Event Handling: What is an Event?
- An event is an action perforemed by the user 
=> why dont we write sayHello()? [the braces]
   - correct: onClick={sayHello}
   - Wrong: onClick={sayHello()} if you write like this the function runs immediately when the page loads. we only want it to run when the buttom=n is clicked 
36. Pssing Arguments
- suppose you want to greet a specific person Wrong: <button onClick={greet("Mishty")}> it runs immediately 
Correct: <button onClick={() => greet ("Mishty")}>
37. Conditional Rendering
- sometimes we want to display something only when a condition is true
- example: User Logged In -> show Dashboard otherwise: show login button
- Mtd1: if-statement, Mtd2: ternary operator, Mtd3: Logical AND
38. Rendering Lists 
- suppose you have an array: const fruits = ["Apple","Banana","Mango"]
- you want to display: Apple
                       Banana
                       Mango
- Instead of writing: <p>Apple</p>
                      <p>Banana</p>
                      <p>Mango</p>
- React allows us to generate the UI automatically
- How does map() work?
    fruits.map((fruit) => ( <p>{fruit}</p>))
    React creates: <p>Apple</p>
                   <p>Banana</p>
                   <p>Mango</p>
                   automatically
39. why do we need a key?
- run the previous code: React will show a warning: Each child in a list should have a unique "key" prop
- suppose: Apple Banana Mango later you add: Orange React needs to know whiech item is new?, which one changed?, which one was delelted? 
- the key helps React identify each item efficiently
- correct: {fruits.map((fruit,index) => ( <p key={index}>{fruit}</p> ))}
40. what is index?
- suppose: const fruits=["Apple","Banana","Mango"]
- the indexes are: 0 = Apple 1 = Banana 2 = Mango
- during map() React gives you both the item and its index  fruits.mao((fruit,index) => ())
- so: fruit = Apple index = 0
      fruit = Banana index = 1
      fruit = Mango index = 2
41. Rendering Objects
- instead of strings, suppose:
    const students = [{name:"Mishty",branch:"CSE"}, {name:"Rahul",branch:"IT}, {name:"Ananya",branch:"ECE"}]
- Render it refer the notes
42. Forms
- React handles forms differently then normal HTML
- HTML: <input type="text">
- React: <input type="text" />
- Looks the same, but we connect it to State
43. Controlled Component
- Create: see the code in the notes
- what happens? = initially: Hello, User types: Mishty, React updates: Hello Mishty instantly
- understanding onChange: whenever the user types: React fires the onChange event.
- Example: User types M -> onChange -> State updates -> Screen updates
    User types Mi -> Again -> updates
- what is e.target.value?
    suppose: Input contains Mishty
             Then e.target.value
             returns Mishty