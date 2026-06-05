// check if a person can vote or not
let agecheck = new Promise((resolve, reject)=>{
    let age = 18;
    if(age >= 18){
        resolve("Person can vote");
    }
    else{
        reject("Person can't vote");
    }
})
async function promise(){
    try{
        let res= await agecheck;
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}

promise();