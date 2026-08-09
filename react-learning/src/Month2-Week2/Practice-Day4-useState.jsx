//Practice question 1: create a button that increases the count by 5 every click
// import {useState} from "react";
// function IncreaseByFive(){
//     const [count, setCount] = useState(0);
//     function AddFive(){
//         setCount(count + 5);
//     }

//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={AddFive}>
//                 Increase by 5
//             </button>
//         </div>
//     );
// }

// export default IncreaseByFive;

//Practice question2: prevent counter from going below 0 
import { useState } from "react";
function Q2() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <h1>Counter App</h1>
            <h2>{count}</h2>

            <h2>{count >=10 && <h3> Goal reached!! </h3>}</h2>

            <button onClick={increase}>Increase</button>

            <button onClick={decrease}>Decrease</button>

            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Q2;

// practice question 3: display a message if the count reaches 10 