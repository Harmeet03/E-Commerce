const cart1 = localStorage.getItem('cart1');
console.log(cart1);

function showCart1(){
    let div = document.querySelector("#box1");
    let p = document.createElement("p");
    p.textContent = cart1;
    div.append(p);
}


showCart1();