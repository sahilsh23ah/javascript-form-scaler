
class person {
    constructor(_name , _age){
        this.name = _name
        this.age = _age
    }

      welcome(){
        console.log(`welcome ${this.name}`);
    }
    
}

let person1 = new person('Piter' , 20);
let person2 = new person('Adam' , 25);
let person3 = new person('mark' , 30);
console.log(person1);
person1.welcome();
console.log(person2);
console.log(person3);