//practice question 1: print Welcome Mishty only once using useEffect
// import {useEffect} from "react";
// function Q1(){
//     useEffect(() => {
//         console.log("Welcome Mishty");
//     }, []);
//     return (
//         <div>
//             <h1>Check the console</h1>
//         </div>
//     );
// }

// export default Q1;

//practice question 2: create a counter whenever the count changes, print Counter updated using useEffect
// import {useEffect, useState} from "react";
// function Q2(){
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         document.title = `Current Count: ${count}`;
//     }, [count]);
//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count+1)}>Increase</button>
//         </div>
//     );
// }

// export default Q2;

//practice question 3: create const [name, setName] = useState(""); whenever the anme changes print Tying... in the console
import {useEffect, useState} from "react";
function Q3(){
    const [name, setName] = useState("");
    useEffect(() => {
        if(name !== ""){
            console.log("Typing...");
        }
    }, [name]);
    return(
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
}

export default Q3;