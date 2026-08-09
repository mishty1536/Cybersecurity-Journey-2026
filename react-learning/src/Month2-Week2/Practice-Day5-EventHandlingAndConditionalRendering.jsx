//Practice question 1: create a button clicking it should display "React is Awesome!" using alert
// function Q1(){
//     return(
//         <button onClick={()=> alert("React is awesome!")}>
//             Click 
//         </button>
//     );
// }

// export default Q1;

//Practice question 2: create a button every click should change OFF -> ON -> OFF use: useState
// import { useState } from "react";
// function Q2(){
//     const [isOn, setIsOn] = useState(false);
//     function toggle(){
//         setIsOn(!isOn);
//     }
//     return(
//         <button onClick={toggle}>
//             Click to turn {isOn ? "ON" : "OFF"}
//         </button>
//     );
// }

// export default Q2;

//Practice Question 3: create a button initially: Show Details, when clicked: Display: name, brnch, age click again: hide details
// import {useState} from "react";
// function Q3(){
//     const [showDetails, setShowDetails] = useState(false);
//     function toggleDetails(){
//         setShowDetails(!showDetails);
//     }
//     return(
//         <div>
//             <button onClick={toggleDetails}>
//                 {showDetails ? "Hide Details" : "Show Details"}
//             </button>
//             {showDetails && (
//                 <div>
//                     <p>Name: Mishty Kataria</p>
//                     <p>Branch: Computer Science</p>     
//                     <p>Age: 21</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Q3;

//Practice Question 4: create a simple theme switcher using useState, initially: light theme, when clicked: dark theme, click again: light theme
import {useState} from "react";
function Q4(){
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    function toggleTheme(){
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <div style={{backgroundColor: isDarkTheme ? "black" : "white", color: isDarkTheme ? "white" : "black"}}>
            <button onClick={toggleTheme}>
                {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
            </button>
        </div>
    );
}

export default Q4;