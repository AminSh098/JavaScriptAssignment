'use strict';
function myFunction (a) {
    let c = new Array;
    for (let i = 0; i < a.length; i++) {
        let obj = new Array;
        obj = a[i];
        c[i] = [obj.name,obj.price];
    }
    return c;
}

console.log(myFunction([ {name:"product 1" , price: 3000}, {name:"product 2" , price:4000 } ]));