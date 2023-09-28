let thiss = "This is variable";

console.log(thiss);

let b = true;

let test = undefined;

console.log(b)
console.log(test)

let aa = 10;
let bb = 16;

let com = aa < bb;
let add = aa / bb;

console.log(com);
console.log(Math.ceil(add));

let x = 16;
let y = "16"

let eq = x == y;

console.log(eq);

let z = null;

let p = 10;

if(p == 10){
    let q = 2, r = 3;
    let mult = q * r;
    if(mult == 0){
        console.log("I am zero");
    }
    else{
        console.log("I am product");
    }
}

else if(p < 10){
    console.log("Looser");
}

else{
    console.log("Overconfident");
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array.length-1);
console.log(array);

for(let i = 1; i <= 5; i++){
    let a = '';
    for(let j = 0; j < i; j++){
        a += "*";
    }
    console.log(a);
}