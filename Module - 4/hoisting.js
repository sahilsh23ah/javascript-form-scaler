// Hoisting means we can call or print the output of our code before initializing or declaration see example below

// see we cannot access varible as a hoisting see the example below

// add(5 , 5);
// console.log(a);
greet();

let a = 10;

function greet(){
    console.log("Hello Hoisting");
}


let add = function(a , b){
    console.log(a+b);
}


