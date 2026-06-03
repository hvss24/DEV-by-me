// this keyword in regular function

// Type1

const obj = {
    name: "object",
    getName: function(){
        return this.name;
    }
};

console.log(obj.getName());

//Type2


function showThis(){
    console.log(this);
}

showThis();

// Type 3

function greet(){
    console.log(this.name);
}

const person = {
    name: "Manni"
};

greet.call(person);

greet.apply(person);

const greet2 = greet.bind(person);

greet2();


//this keyword in arrow function

// 1. Lexical Scoping

const obj = {
    name: "Harsh",
    getName: ()=>this.name
};

console.log(obj.getName());

// 2. Useful in callbacks

function Timer(){
    this.seconds = 0;
    setInterval(()=>{
        this.seconds++;
        console.log(this.seconds);
    },1000)
}

const timer = new Timer();