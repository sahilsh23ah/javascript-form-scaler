
// function person(_name , _age){
//     this.name = _name
//     this._age = _age
// }

// let person1 = new person('Adam' , 30);

// person1.name = 'steve'
// console.log(person1);



function person(_name , _age){
    var name = _name
    this._age = _age

    this.getName = function(){
        return name;
    }
}

let person1 = new person('Adam' , 30);

// person1.name = 'steve'
// for avoiding this type of changes outside of the scope we can do encapsulation

console.log(person1.getName());