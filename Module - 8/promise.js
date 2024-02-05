// How to produce a promise 


let myPromise = new Promise(function(resole , reject){
    const a = 2;
    const b = 4;

    setTimeout(() =>{
        if(a === b){
            resole('The values are equal')
        }else{
            reject('The values are not equal')
        }
    },2000);

})

// pending 
// console.log(myPromise);


// fulfilled  - then method 
myPromise.then(function(result){
    console.log(result);
})  //fulfilled state


// catch method used when uper fulfilled method not meet the their required 
myPromise.catch(function(failed){
    console.log(failed);
})  // rejected state



// done state 
