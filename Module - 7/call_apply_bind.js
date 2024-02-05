
// let person = {
//     firstName:'piter',
//     lastName:'cour',
//     age:30,
//     printDetails: function(){
//         console.log(`Hello my name is ${this.firstName} ${this.lastName} and age is ${this.age}`);
//     }
// }

// person.printDetails();




let person = {
    firstName:'piter',
    lastName:'cour',
    age:30,
    printDetails: function(){
        console.log(`Hello my name is ${this.firstName} ${this.lastName} and age is ${this.age}`);
    }
}

let person1 = {
    firstName:'Tony',
    lastName:'stark',
    age:40
}
// call method 
person.printDetails.call(person1);