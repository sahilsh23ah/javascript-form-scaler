let firstPerson = 'Adam';

let secondPerson = firstPerson;

firstPerson = 'steve';


console.log(firstPerson);
console.log(secondPerson);   // this happend becausee it is primitive data type and this stored in stack memory


// doing the same thing with object  but without changing the values

let obj  = {
    name:'piter',
    age: 30
}

let obj2 = obj;

obj.age = 50;
console.log(obj);
console.log(obj2);  // this happend becausee it is refference data type and this stored in heap memory