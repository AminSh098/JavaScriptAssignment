const family = [
    { x: -3, f: 'great grandmother', m: 'great grandfather' },
    { x: -2, f: 'grandmother', m: 'grandfather' },
    { x: -1, f: 'mother', m: 'father' },
    { x: 0, f: 'myWife', m: 'me' },
    { x: 1, f: 'daughter' ,m: 'son' },
    { x: 2, f: 'granddaughter' ,m: 'grandson' },
    { x: 3, f: 'great granddaughter' ,m: 'great grandson' }
];

function whoAmI(gender,number) {
    const generation = family.filter((b) => {
        return b.x === number;
    })
    if (gender === 'f')
        return generation[0].f;
    else
        return generation[0].m;
}

console.log(whoAmI('m',-3));
