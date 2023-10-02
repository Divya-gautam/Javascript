let score= "33"
let value = null
let note = undefined
console.log(typeof score);
//conversion--1
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
//conversion--2
let num = Boolean(score) 
console.log(num);
//conversion--3
//if we change a null value in number it will print 0.
let valueIn = Number(value)
console.log( valueIn);
//conversion--3
//if we change a undefined value in number it will print NaN.
// let undefine = Number(note)
// console.log(undefine);



// -----------OPERATION---------
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);


let str1 = "Divya" 
let str2 = "Gautam"
let str3 = str1+" "+str2
console.log(str3);

console.log("1" + 2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log((2+3)*5/6);


// special conversoion
console.log(+true);
console.log(+"");

let gameCounter = 100
gameCounter++;
console.log(gameCounter);