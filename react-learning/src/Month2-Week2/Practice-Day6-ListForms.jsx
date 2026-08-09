//practice question 1: creagte an array ["Java", "React", "Node", "MongoDB"] display them using map()
// const Languages = ["Java", "React", "Node", "MongoDB"]
// function Q1(){
//     return (
//         <div>
//             {Languages.map((language, index) => (
//                 <p key = {index}>{language}</p>
//             ))}
//         </div>
//     );
// }

// export default Q1;

//practice question 2: display these students [ {name:"Mishty",branch:"CSE"}, {name:"Riya",branch:"IT"}, {name:"Ankit",branch:"ECE"}] using map()
// const students = [
//     {name:"Mishty",branch:"CSE"},
//     {name:"Riya",branch:"IT"},
//     {name:"Ankit",branch:"ECE"}
// ];
// function Q2() {
//     return(
//         <div>
//             {students.map((student,index) => (
//                 <div key={index}>
//                     <p>Name: {student.name}</p>
//                     <p>Branch: {student.branch}</p>
//                     <hr />
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Q2;

//practice question 3: create an input whatever the user types display it below 
// import { useState } from "react";
// function Q3(){
//     const [inputvalue, setInputValue] = useState("");
//     function handleInputChange(event){
//         setInputValue(event.target.value);
//     }
//     return (
//         <div>
//             <input type="text" value={inputvalue} onChange={handleInputChange} />
//             <p>You typed: {inputvalue}</p>
//         </div>
//     )
// }

// export default Q3;

//practice question 4: create 2 inputs name and age and display it 
import {useState} from "react";
function Q4(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleAgeChange(event){
        setAge(event.target.value);
    }
    return (
        <div>
            <input type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
            <input type="text" placeholder="Enter your age" value={age} onChange={handleAgeChange} />
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}

export default Q4;