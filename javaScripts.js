'use strict';

const products =[ 
    {name:"product 1" , price: 3000},
    {name:"product 2" , price:4000 },
    {name:"product 3" , price:6000 },
    {name:"product 4" , price:8000 }
]

const greaterThan = products.filter((a) => {
    return a.price <= 5000;
})

function myFunction (a) {
    let b = new Array;
    a.forEach((item) =>{
        let c = [item.name,item.price]; 
        b = b.concat([c]);
    } )
    return b;
}



console.log(myFunction(greaterThan));