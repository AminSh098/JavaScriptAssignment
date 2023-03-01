const ourString = 'abcd-efgh-ijkl&mnop';
let replacerFunc = {
    '-': ' ',
    '&': '_'
}
let ourNewString = ourString.replace(/\b(?:-|&)\b/gi, matched => replacerFunc[matched]);
console.log(ourNewString); 