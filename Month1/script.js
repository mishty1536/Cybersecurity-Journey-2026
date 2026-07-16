const button = document.getElementById("btn");

const message = document.getElementById("message");

// button.addEventListener("click", () => {

//     message.innerText = "Hello Mishty!";

// });

//challenge 1: instead of changing the text also change the color
// button.addEventListener("click", () => { 
//     message.innerText = "Hello Mishty!";
//     message.style.color = "red";
// });

//challenge 2: click again -> welcome to cybersecurity journey
// Variable to remember the current state
// let isHello = false;

// button.addEventListener("click", () => {

//     if (!isHello) {
//         message.innerText = "Hello Mishty!";
//         message.style.color = "red";
//         isHello = true;
//     }
//     else {
//         message.innerText = "Welcome to Cybersecurity Journey";
//         message.style.color = "blue";
//         isHello = false;
//     }
// });

// challenge 3: every click change the color of the text randomly
const colors = ["blue", "green", "red", "purple", "orange", "pink"];
let isHello = false;

button.addEventListener("click", () => {

    if (!isHello) {
        message.innerText = "Hello Mishty!";
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        message.style.color = randomColor;
        isHello = true;
    }
    else {
        message.innerText = "Welcome to Cybersecurity Journey";
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        message.style.color = randomColor;
        isHello = false;
    }
});