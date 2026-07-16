const fetchData = () => {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Data Loaded");
        },2000);

    });

};
const getData = async () => {

    const result = await fetchData();

    console.log(result);

};

//practice question: simulate login -> fetch user data -> display data
const login = () => {

    return new Promise((resolve, reject) => {

        console.log("Checking Login...");

        setTimeout(() => {

            let isLoggedIn = true;

            if (isLoggedIn) {
                resolve("Login Successful");
            } else {
                reject("Invalid Username or Password");
            }

        }, 2000);

    });

};

const fetchUserData = () => {

    return new Promise((resolve) => {

        console.log("Fetching User Data...");

        setTimeout(() => {

            resolve({
                id: 1,
                name: "Mishty",
                course: "CSE"
            });

        }, 2000);

    });

};

const displayDashboard = async () => {

    try {

        const loginMessage = await login();

        console.log(loginMessage);

        const user = await fetchUserData();

        console.log("Welcome", user.name);
        console.log("Course:", user.course);

    }
    catch(error){

        console.log(error);

    }

};

displayDashboard();