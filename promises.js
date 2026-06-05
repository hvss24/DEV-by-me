let random = new Promise((resolve, reject)=>{
    let num = 5;
    if(num % 2 != 0){
        resolve("Promise Resolved");
    }
    else{
        reject("Promise Rejected");
    }
});

random
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

// // check if a number is positive

let numbercheck = new Promise((resolve, reject)=>{
    let num = -6;
    if(num > 0){
        resolve("Number is Positive.");
    }
    else{
        reject("Number is Negative.");
    }
})

numbercheck
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

// //Check if a student is passed

let checkpass = new Promise((resolve, reject)=>{
    let num = 56;
    if(num >= 40){
        resolve("Student is passed.");
    }
    else{
        reject("Student is Failed.");
    }
})

checkpass
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


// //check if a string length is greater than 5

let checklength = new Promise((resolve, reject)=>{
    let string = "I Love You GPT";
    if(string.length >= 5){
        resolve("String Length is greater than or equal to 5.")
    }
    else{
        reject("String length is less than 5.")
    }
})

checklength
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

//promise Chaining

random
.then((res)=>{
    console.log(res);
    return numbercheck;
})
.then((res)=>{
    console.log(res);
    return checkpass;
})
.then((res)=>{
    console.log(res);
    return checklength;
})
.then((res)=>{
    console.log(res);;
})
.catch((err)=>{
    console.log(err);
})
