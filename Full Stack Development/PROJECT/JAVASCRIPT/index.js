let bt1, bt2, bt3 = false;

// Buttons ----------------------------

let a = document.querySelector("#box1 p");
let b = a.innerHTML;
function btn1(){
    url = "cart.html";
    window.open(url);
    bt1 = true;
    if(bt1 == true){
        let x = document.createElement("p");
        x.innerHTML = b;
        a.append(x);
    }
}

let a2 = document.querySelector("#box2 p");
let b2 = a2.innerHTML;
function btn2(){
    url = "cart.html";
    window.open(url);
    bt2 = true;
    if(bt2 == true){
        console.log(b2);
    }
}

let a3 = document.querySelector("#box3 p");
let b3 = a3.innerHTML;
function btn3(){
    url = "cart.html";
    window.open(url);
    bt3 = true;
    if(bt3 == true){
        console.log(b3);
    }
}


// ------------------------------------