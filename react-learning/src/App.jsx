import Welcome from "./Welcome";
import College from "./College";
import Student from "./Student";
import Practice from "./Month2-Week2/Practice-Day3";
import Employee from "./Month2-Week2/Practice-Day3";
import Car from "./Month2-Week2/Practice-Day3";

import IncreaseByFive from "./Month2-Week2/Practice-Day4-useState";
// import Q2 from "./Practice-Day4-useState";

// import Q1 from "./Month2-Week2/Practice-Day5-EventHandlingAndConditionalRendering";
// import Q2 from "./Month2-Week2/Practice-Day5-EventHandlingAndConditionalRendering";
// import Q3 from "./Month2-Week2/Practice-Day5-EventHandlingAndConditionalRendering";
// import Q4 from "./Month2-Week2/Practice-Day5-EventHandlingAndConditionalRendering";

// import Q1 from "./Month2-Week2/Practice-Day6-ListForms";
// import Q2 from "./Month2-Week2/Practice-Day6-ListForms";
// import Q3 from "./Month2-Week2/Practice-Day6-ListForms";
// import Q4 from "./Month2-Week2/Practice-Day6-ListForms";

// import Q1 from "./Month2-Week3/Practice-Day1-useEffect";
// import Q2 from "./Month2-Week3/Practice-Day1-useEffect";
// import Q3 from "./Month2-Week3/Practice-Day1-useEffect";

import PracticeDay2 from "./Month2-Week3/Practice-Day2-API_Integration";


// function App() {
//   // return (
//   //   <div>
//   //     <h1>Hello React!</h1>
//   //     <Welcome />
//   //     <College />
//   //     <Student name="Mishty" branch="CSE" age={20} city="Vadodara" isCaptain={true} />
//   //     {/* <Practice title="Atomic Habits" author="James Clear" /> */}
//   //     {/* <Employee name="Heena Khan" department="HR" salary={50000} /> */}
//   //     <Car brand="Toyota" model="Fortuner" year={2018} />
//   //     <Car brand="Hyundai" model="Creta" year={2024} />
//   //     <Car brand="Mahindra" model="Scorpio N" year={2020} /> 
//   //   </div>
//   // );

//   // const fruits = ["Apple", "Banana", "Mango"];
//   return (
//     // <div>
//     //   <h1> Practice Day 4 </h1>
//     //   {/* <IncreaseByFive /> */}
//     //   <Q2/>
//     // </div>

//     <div>
//       {/* <h1> Practice Day 5 </h1> */}
//       {/* <Q1 /> */}
//       {/* <Q2 /> */}
//       {/* <Q3 /> */}
//       {/* <Q4 /> */}
      
//       {fruits.map((fruit,index) => (
//         <p key={index}>{fruit}</p>
//       ))}

//     </div>
//   );
// }

// export default App;


// function App(){

//     function sayHello(){

//         alert("Hello Mishty!");

//     }

//     return(
//       <div>
//         {/* <button onClick={sayHello}>

//             Click Me

//         </button> */}

//         <button onClick={()=> alert("React Event")}>
//           Click
//         </button>
//       </div>
//     );

// }

// export default App;


// function greet(name){

//     alert("Hello " + name);

// }

// function App(){

//     return(

//         <button onClick={() => greet("Mishty")}>

//             Greet

//         </button>

//     );

// }

// export default App;

// function App(){
//   return (
//     <div>
//       {/* <Q1 /> */}
//       {/* <Q2 /> */}
//       {/* <Q3 /> */}
//       <Q4 />
//     </div>
//   );
// }

// export default App;

// function App(){
//   return (
//     <div>
//       {/* <Q1 /> */}
//       {/* <Q2 /> */}
//       <Q3 />
//     </div>
//   );
// }

// export default App;

// function App(){
//   return(
//     <div>
//       <PracticeDay2 />
//     </div>
//   );
// }

// export default App;

// import { Routes, Route, Link } from "react-router-dom";

// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import User from "./Pages/User";

// function App() {
//     return (
//         <div>

//             <nav>

//                 <Link to="/">Home</Link>

//                 {" | "}

//                 <Link to="/about">About</Link>

//                 {" | "}

//                 <Link to="/contact">Contact</Link>

//                 {" | "}

//                 <Link to="/user">User</Link>

//             </nav>

//             <hr />

//             <Routes>

//                 <Route path="/" element={<Home />} />

//                 <Route path="/about" element={<About />} />

//                 <Route path="/contact" element={<Contact />} />

//                 <Route path="/user" element={<User />} />   

//             </Routes>

//         </div>
//     );
// }

// export default App;

//Week3 Day 5 
// import ProfileCard from "./components/ProfileCard";

// function App() {
//     return (
//         <>
//             <ProfileCard name="Mishty" branch="CSE" />
//             <ProfileCard name="Rahul" branch="IT" />
//             <ProfileCard name="Ananya" branch="AIML" />
//         </>
//     );
// }

import Button from "./components/Button";

function App(){
    return (
        <>
        <Button text="Login" />
        <Button text="Register" />
        <Button text="Logout" />
        </>
    );
}
export default App;