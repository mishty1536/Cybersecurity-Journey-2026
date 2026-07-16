//example
const promise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("Login Success");
    }
    else{
        reject("Login Failed");
    }
});
//=> using then()
promise
.then(result => console.log(result))
.catch(error => console.log(error))

// practice question: simulate bank login success after 2 seconds use setTimeout()
const banklogin = new Promise((resolve, reject)=>{
    let success = true;
    setTimeout(()=>{
        if(success){
            resolve("Bank login successfull");
        }
    }, 2000)
})
banklogin
.then(result => console.log(result))
.catch(error => console.log(error))
