//practice question 1 : throw an error if the age is less than 18
// try {
//     let age = 16;

//     if (age < 18) {
//         throw new Error("Age must be 18 or above.");
//     }

//     console.log("Eligible");
// }
// catch (error) {
//     console.log(error.message);
// }

//practice question 2: throw an error if marks are grater than 100
// try{
//     let marks = 106;
//     if (marks > 100){
//         throw new Error ("Marks cannot be greater than 100");
//     }
//     console.log("Marks are valid");
// }
// catch(error){
//     console.log(error.message);
// }

//practice question 3: throw an error if password length is less than 8 characters
try{
    let password = "abc123";
    if(password.length < 8){
        throw new Error("Password must be at least 8 characters long");
    }
    console.log("Password is valid");
}
catch(error){
    console.log(error.message);
}

//practice question 4: create a function divide(a,b)
function divide(a,b){
    try{
        if (b==0){
            throw new Error("Cannot divide by zero");
        }
        return a/b;
    }
    catch(error){
        console.log(error.message);
    }
}
divide(10,0);

//practice question 5: create a function that checks if an email is empty or not 
function checkEmail(email){
    try{
        if(email.trim() === ""){
            throw new Error("Email cannot be empty");
        }
        console.log("Email is valid");
    }
    catch(error){
        console.log(error.message);
    }
}
checkEmail("");