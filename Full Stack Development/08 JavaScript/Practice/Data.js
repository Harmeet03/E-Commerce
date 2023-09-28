export const data = [
    {
        product: "Watch",
        price: 5000,
        color: "Black",
        brand: "Rolex",
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/13036796/2021/1/6/bb6d18c9-39c1-4632-bc4a-f452606965ef1609906124788-WROGN-Men-Silver-Toned-Analogue-Watch-WRG00048A-802160990612-1.jpg"
    },
    {
        product: "Shirt",
        price: 5000,
        color: "Black",
        brand: "Tommy Hilfiger",
        image: "https://cdn13.nnnow.com/web-images/large/styles/7BQTX08EKWL/1677502487472/1.jpg"
    },
    {
        product: "Pants",
        price: 5000,
        color: "White",
        brand: "Reymond",
        image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22899006/2023/5/24/c2aa5cd3-98ad-4602-8a8c-49b4b7127a771684909885383-Raymond-Men-Trousers-8091684909884860-1.jpg"
    }
    
];


let b1 = false;
function Button1(){
    let url = "Cart.html";
    window.open(url);
    b1 = true;
}



export function showData(){
    console.log(data);
    let img = document.querySelector("#box1 > img");
    if(img){
        img.src = data[0].image;
    }
    let P1 = document.querySelector("#box1 > p");
    let p1 = document.createElement("p");
    p1.textContent = "Product: " + data[0].product
    let p2 = document.createElement("p");
    p2.textContent = "Price: " + data[0].price
    let p3 = document.createElement("p");
    p3.textContent = "Color: " + data[0].color
    let p4 = document.createElement("p");
    p4.textContent = "Brand: " + data[0].brand
    if(P1){
        P1.append(p1, p2, p3, p4);
    }
    
    let img2 = document.querySelector("#box2 > img");
    if(img2){
        img2.src = data[1].image;
    }
    let P2 = document.querySelector("#box2 > p");
    let pp1 = document.createElement("p");
    pp1.textContent = "Product: " + data[1].product
    let pp2 = document.createElement("p");
    pp2.textContent = "Price: " + data[1].price
    let pp3 = document.createElement("p");
    pp3.textContent = "Color: " + data[1].color
    let pp4 = document.createElement("p");
    pp4.textContent = "Brand: " + data[1].brand
    if(P2){
        P2.append(pp1, pp2, pp3, pp4);
    }
    
    let img3 = document.querySelector("#box3 > img");
    if(img3){
        img3.src = data[2].image;        
    }
    let P3 = document.querySelector("#box3 > p");
    let ppp1 = document.createElement("p");
    ppp1.textContent = "Product: " + data[2].product
    let ppp2 = document.createElement("p");
    ppp2.textContent = "Price: " + data[2].price
    let ppp3 = document.createElement("p");
    ppp3.textContent = "Color: " + data[2].color
    let ppp4 = document.createElement("p");
    ppp4.textContent = "Brand: " + data[2].brand
    if(P3){
        P3.append(ppp1, ppp2, ppp3, ppp4);
    }
};

showData();



// export function Button1(){
//     let x = false;
//     const button = document.getElementById("btn1");
//     var a = () => {
//         x = true;
//         var url = window.open("Cart.html");
//         url.onload = true;
//     }
//     if(x === true){
//         cartItem_1();
//     }
//     if(button){
//         button.addEventListener("click", a);
//     }
// };


export function Button2(){
    let x = false;
    const button = document.getElementById("btn2");
    var a = () => {
        x = true;
        var url = window.open("Cart.html");
        url.onload = true;
    }
    if(x === true){
        cartItem_2();
    }
    if(button){
        button.addEventListener("click", a);
    }
};





// export function abc(){
//     if(button1 === true){
//         console.log("Button clicked");
//     }
// }


// function addCart(){
//     var url = window.open("Cart.html");
//     url.onload = true;
// }

export function cartItem_1(){
    let div = document.querySelector("#box1");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    p1.textContent = "Product: " + data[0].product;
    p2.textContent = "Price: " + data[0].price;
    p3.textContent = "Color: " + data[0].color;
    p4.textContent = "Brand: " + data[0].brand;
    div.append(p1, p2, p3, p4);
};

export function cartItem_2(){
    let div = document.querySelector("#box2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    p1.textContent = "Product: " + data[1].product;
    p2.textContent = "Price: " + data[1].price;
    p3.textContent = "Color: " + data[1].color;
    p4.textContent = "Brand: " + data[1].brand;
    div.append(p1, p2, p3, p4);
};