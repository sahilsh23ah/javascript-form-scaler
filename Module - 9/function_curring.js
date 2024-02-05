
// let sum = function(x , y){
//     console.log(x+y);
// }
// sum(2 , 4);



let sumcurreid = function (x) {
    return function (y) {
        console.log(x + y);
    }
}

let sumTwoNum = sumcurreid(2);
// console.log(sumTwoNum);
sumTwoNum(5);