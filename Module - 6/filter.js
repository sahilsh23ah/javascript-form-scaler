
// let arr = [2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
// let evenArr = [];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         evenArr.push(arr[i]);
//     }
// }
// console.log(evenArr);



// Now using filter method 

// filter method is filtered out from the previous arr based on condition match 

// let arr = [2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// let evenArr = arr.filter((n) =>{
//     return n%2 === 0;
// });
// console.log(evenArr);






// task filter the positive number from the given array 

let arr = [10 , 20 , 30 , -10 , 40 , 50 , -100 , -20 , -30 , 60 , 70];

let positiveNum = arr.filter((n) => {
    return n > 0;
});
console.log(positiveNum);
