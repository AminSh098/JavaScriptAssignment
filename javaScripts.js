'use strict';

function myFunction (a) {
    let b = new Array;
    a.forEach((item) =>{
        let c = [item.name,item.price]; 
        b = b.concat([c]);
    } )
    return b;
}

console.log(myFunction([ {name:"product 1" , price: 3000}, {name:"product 2" , price:4000 }, {name:"product 3" , price:6000 } ]));