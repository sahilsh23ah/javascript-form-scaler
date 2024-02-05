
// callback function is call the another function as an argument

// function printFirstName(firstName , cb){
//     console.log(firstName);
//     cb('piter');
// }

// function printlastName(lastName){
//     console.log(lastName);
// }

// printFirstName('steave' , printlastName);




// checkeven num using callback function 

const isEven = (n) => {
    return n%2 === 0;
}

const printResult = (isEven , num) => {
    const isEvenNum = isEven(num);
    console.log(`The number ${num} is an Even number ${isEvenNum}`);
}
printResult(isEven , 15);