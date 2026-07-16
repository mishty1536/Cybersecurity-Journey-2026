const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");
const showPassword = document.getElementById("showPassword");

const correctEmail = "mishty@gmail.com";
const correctPassword = "Cyber@123";

// Show/Hide Password
showPassword.addEventListener("change", () => {

    if (showPassword.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }

});

// Login
loginBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {

        message.innerText = "Please fill all fields.";
        message.style.color = "orange";
        return;

    }

    if (
        email === correctEmail &&
        password === correctPassword
    ) {

        message.innerText = "Welcome Mishty!";
        message.style.color = "green";

    } else {

        message.innerText = "Invalid Email or Password";
        message.style.color = "red";

    }

});

loginBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Empty field validation
    if (email === "" || password === "") {

        message.innerText = "Please fill all fields.";
        message.style.color = "orange";
        return;

    }

    // Password length validation
    if (password.length < 8) {

        message.innerText = "Password must be at least 8 characters long.";
        message.style.color = "orange";
        return;

    }

    // Check credentials
    if (
        email === correctEmail &&
        password === correctPassword
    ) {

        message.innerText = "Welcome Mishty!";
        message.style.color = "green";

    } else {

        message.innerText = "Invalid Email or Password.";
        message.style.color = "red";

    }

});