
class Animals {
    sound(){
        console.log("Animals make differnt sounds");
    }
}
class Dog {
    sound(){
        console.log("Dog Bark");
    }
}
class Cat {
    sound(){
        console.log("Cat Mewooo");
    }
}


let Animal1 = new Animals();
Animal1.sound()

let tommy = new Dog();
tommy.sound()

let percy = new Cat();
percy.sound()



// With help of polymorphism we can call the same function inside the different class with different output 

