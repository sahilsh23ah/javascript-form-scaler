// synchronously

const fs = require('fs');

// console.log('First Line');

// let data = fs.readFileSync('f1.txt');

// console.log(data);

// console.log('Last Line');





// Asynchronously


console.log('First Line');

fs.readFile('f1.txt' , cb);

function cb(err , data){
    if(err){
        console.log(err);
    }else{
        console.log('File 1 data' , data);
    }
}



console.log('Last Line');