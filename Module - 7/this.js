// 'use strict'

// a = 10;              // non strict mode 
// console.log(a);


// ******************  Node.js non-strict *************** 

//     1
// console.log(this);  // output empty object


//     2 
// function displaythis(){
//     console.log(this);
// }
// displaythis();
// output will be global object 


//    3
// let obj = {
//     name: 'piter',
//     age: 20,
//     myFn:function(){
//         console.log(this.name);
//     }
// }
// obj.myFn()

//    4
// obj inside function inside function again it will through global object

//  let obj = {
//         name: 'piter',
//         age: 20,
//         myFn:function(){
//             function myFn2(){
//                 console.log(this);
//             }
//             myFn2()
//         }
//     }
//     obj.myFn()



// ******************  Node.js strict *************** 

//     1
'use strict'
// console.log(this);  // output empty object


//     2 
// function displaythis(){
//     console.log(this);
// }
// displaythis();
// output will be undefined when using strict mode in node js


//    3
// let obj = {
//     name: 'piter',
//     age: 20,
//     myFn:function(){
//         console.log(this);
//     }
// }
// obj.myFn()
// output will be this obj itself


//    4
// obj inside function inside function again it will through undefined

//  let obj = {
//         name: 'piter',
//         age: 20,
//         myFn:function(){
//             function myFn2(){
//                 console.log(this);
//             }
//             myFn2()
//         }
//     }
//     obj.myFn()






// ************ This keyword in browser *************


