
// function placeOrder(drink){
//     return new Promise(function(resolve , rejected){
//         if(drink === 'coffee'){
//             resolve('Order for coffee is received')
//         }else{
//             rejected('Other coffee rejected')
//         }
//     })
// }


// function processOrder(order){
//     return new Promise(function(resolve){
//         console.log('order is being proccessed');
//         resolve(`${order} and is served`)
//     })
// }


// placeOrder('coffee').then(function(placeOrder){
//     console.log(placeOrder)
//     let orderisProccessed = processOrder(placeOrder)
//     return orderisProccessed;
// }).then(function(processOrder){
//     console.log(processOrder);  
// }).catch(function(err){
//     console.log(err);
// }) // chaining of promise












function placeOrder(drink) {
    return new Promise(function (resolve, rejected) {
        if (drink === 'coffee') {
            resolve('Order for coffee is received')
        } else {
            rejected('Other coffee rejected')
        }
    })
}


function processOrder(order) {
    return new Promise(function (resolve) {
        console.log('order is being proccessed');
        resolve(`${order} and is served`)
    })
}


// placeOrder('coffee').then(function(placeOrder){
//     console.log(placeOrder)
//     let orderisProccessed = processOrder(placeOrder)
//     return orderisProccessed;
// }).then(function(processOrder){
//     console.log(processOrder);  
// }).catch(function(err){
//     console.log(err);
// }) // chaining of promise


// to resolve the problem of calling promises multiple time like above code we will use ( asyn await ) instead

// Async Await - keyword

async function serveOrder() {
    try {
        let orderplaced = await placeOrder('coffee');
        console.log(orderplaced);
        let orderisProccessed = await processOrder(orderplaced)
        console.log(orderisProccessed);
    } catch (error) {
        console.log(error);
    }
}
serveOrder()

// try catch is used to get else part 
































// function placeOrder(drink){
//     return new Promise (function(resolve , reject) {
//         if(drink === 'coffee'){
//             resolve('Order for coffee received')
//         }else{
//             reject('Other coffee Rejected')
//         }
//     })
// }

// function processOrder(order){
//     return new promise (function(resolve){
//         console.log('Order is being processed');
//         resolve(`${order} is served`)
//     })
// }

// placeOrder('coffee').then(function(orderplaced){
//     console.log(orderplaced);
// })