
// closures that means a have 3 value and it is outside of the function test but when we return a and call the function test we will get 3 as a output from the outside of the variables and their value this is call closures 


// let a = 3;

// function test(){
//     return a;
// }
// let fun = test();
// console.log(fun);



// see another ex 

// function test() {
//     a = 5;

//     function test1(){
//         console.log(a);
//     }
//     return test1;
// }
// let fun = test();
// console.log(fun);
// fun()



// see another closures examples 

function greet(){
    let name = 'piter';

    function displayName(){
        console.log('Hii ' + name);

        let age = 20;

        function displayAge(){
            console.log(name +' My age is ' + age);
        }
        return displayAge;
    }
    return displayName;
}

let g1 = greet();
// console.log(g1);
// g1();   // displayName

let g2 = g1();
console.log(g2);
g2()