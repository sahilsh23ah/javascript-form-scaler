
// class person {
//     constructor(_name , _age){
//         this.name = _name
//         this.age = _age
//     }
// }

// class Teacher extends person{
//     constructor(_name , _age , _strength){
//         super(_name , _age)
//         this.strength = _strength
//     }
// }

// class student extends person {
//     constructor(_name , _age , _cgpa){
//         super(_name , _age)
//         this.cgpa = _cgpa
//     }
// }

// let student1 = new student('harry' , 20 , 40.3);
// console.log(student1);


// let Teacher1 = new Teacher('piter' , 20 , 100);
// console.log(Teacher1);

// let person1 = new person('piter' , 30);
// console.log(person1);




// inheritance method for invoking 

class person {
    constructor(_name , _age){
        this.name = _name
        this.age = _age
    }
    welcome(){
        console.log(`Welcome ${this.name}`);
    }
}

class Teacher extends person{
    constructor(_name , _age , _place){
        super(_name , _age)
        this.place = _place
    }
   test(){
    super.welcome()
   }
}

let Teacher1 = new Teacher("Linda" , 20 , "California");
Teacher1.test()
console.log(Teacher1);








