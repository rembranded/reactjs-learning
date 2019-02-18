// A spread operator is defined with 3 dots. It indicates an indeterminate array size

function add (...a) {
    let sum = a.reduce((s, val) => s+val);
    console.log(sum);
}

add(10,20);

let num = [10,159,846,256,78564,15648,654,4168];
console.log(Math.max(...num));

let a1 = [10,20];
let a2 = [30,40];
let a3 = [...a1,...a2];
console.log(a3);