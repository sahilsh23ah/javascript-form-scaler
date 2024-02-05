
// spread operator 

let arr = [1 , 2];
let arr1 = [3 , 4];
let arr2 = [...arr , ...arr1];
let arr3 = [...arr2];
console.log(arr3);



// let firstPerson = {
//     name:'piter',
//     age:25
// }

// let secondPerson = {...firstPerson}  // shallow copy and also spread opearator
// // console.log(secondPerson);
// secondPerson.name = 'Rock';
// console.log(secondPerson);



let firstPerson = {
    name:'piter',
    age:25,
    // nested object 👇
    address: {
        city:'mumbai',
        state:'Maharashtra'
    }
}

let secondPerson = {...firstPerson}  // shallow copy and also spread opearator
// console.log(secondPerson);
secondPerson.name = 'Rock';
secondPerson.address.state = 'UP';

console.log(firstPerson);
console.log(secondPerson);