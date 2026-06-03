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

