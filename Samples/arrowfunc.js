console.log("Hello");

let i = 0;
let a = [10,20,30,40,50];
/* for (let i = 0, i<=a.length(), i++)
    console.log(a[i]); */

setTimeout(function() {console.log('*')},1000);

// Example of an arrow function

/* Writing a function by default
function add (a,b) {
    console.log(a+b);
} */

/* Writing an anonymous function
let add = function (a,b) {
    console.log(a+b);
} */

/* Writing an arrow function
let add = (a,b) => {
    console.log(a+b);
} */

/* Writing an arrow function with only 1 argument
let add = a => {
    console.log(a+b);
} */

/* Writing an arrow function with only 1 statement
let add = a => {
    return a;
} */

/* Writing an arrow function with implicit return statement
let add = a => a; */

// add(2,4);

// Printing an array with a callback function explicitly defined
/* function callback (i) {
    return a[i];
}
console.log('Array display with explicit callback')
console.log(a.forEach(callback(i))); */

// Arrow functions with arrays
a.forEach(i => console.log(i));

// Array Mapping with an arrow function
let b = a.map(i => i*i);
console.log(b);

// Array filtering with an arrow function
let c = a.filter(i => i<=30);
console.log(c);


console.log(new Date());

setInterval(() => console.log(new Date()), 1000);