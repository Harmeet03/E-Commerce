// ITEM 1
let name = document.getElementById("name");
name.innerText = localStorage.getItem("Name");

let price = document.getElementById("price");
price.innerText = localStorage.getItem("Price");

let p1 = price.innerText;
if(localStorage.getItem("Price") === null){
    p1 = '₹0';
}

// ITEM 2
let name2 = document.getElementById("name2");
name2.innerText = localStorage.getItem("Name2");

let price2 = document.getElementById("price2");
price2.innerText = localStorage.getItem("Price2");

let p2 = price2.innerText;
if(localStorage.getItem("Price2") === null){
    p2 = '₹0';
}

// ITEM 3
let name3 = document.getElementById("name3");
name3.innerText = localStorage.getItem("Name3");

let price3 = document.getElementById("price3");
price3.innerText = localStorage.getItem("Price3");

let p3 = price3.innerText;
if(localStorage.getItem("Price3") === null){
    p3 = '₹0';
}

// ITEM 4
let name4 = document.getElementById("name4");
name4.innerText = localStorage.getItem("Name4");

let price4 = document.getElementById("price4");
price4.innerText = localStorage.getItem("Price4");
let p4 = price4.innerText;
if(localStorage.getItem("Price4") === null){
    p4 = '₹0';
}

// ITEM 5
let name5 = document.getElementById("name5");
name5.innerText = localStorage.getItem("Name5");

let price5 = document.getElementById("price5");
price5.innerText = localStorage.getItem("Price5");
let p5 = price5.innerText;
if(localStorage.getItem("Price5") === null){
    p5 = '₹0';
}

// ITEM 6
let name6 = document.getElementById("name6");
name6.innerText = localStorage.getItem("Name6");

let price6 = document.getElementById("price6");
price6.innerText = localStorage.getItem("Price6");
let p6 = price6.innerText;
if(localStorage.getItem("Price6") === null){
    p6 = '₹0';
}

// ITEM 7
let name7 = document.getElementById("name7");
name7.innerText = localStorage.getItem("Name7");

let price7 = document.getElementById("price7");
price7.innerText = localStorage.getItem("Price7");
let p7 = price7.innerText;
if(localStorage.getItem("Price7") === null){
    p7 = '₹0';
} 

// ITEM 8
let name8 = document.getElementById("name8");
name8.innerText = localStorage.getItem("Name8");

let price8 = document.getElementById("price8");
price8.innerText = localStorage.getItem("Price8");
let p8 = price8.innerText;
if(localStorage.getItem("Price8") === null){
    p8 = '₹0';
} 

// ITEM 9
let name9 = document.getElementById("name9");
name9.innerText = localStorage.getItem("Name9");

let price9 = document.getElementById("price9");
price9.innerText = localStorage.getItem("Price9");
let p9 = price9.innerText;
if(localStorage.getItem("Price9") === null){
    p9 = '₹0';
} 

// ITEM 10
let name10 = document.getElementById("name10");
name10.innerText = localStorage.getItem("Name10");

let price10 = document.getElementById("price10");
price10.innerText = localStorage.getItem("Price10");
let p10 = price10.innerText;
if(localStorage.getItem("Price10") === null){
    p10 = '₹0';
} 

// ITEM 11
let name11 = document.getElementById("name11");
name11.innerText = localStorage.getItem("Name11");

let price11 = document.getElementById("price11");
price11.innerText = localStorage.getItem("Price11");
let p11 = price11.innerText;
if(localStorage.getItem("Price11") === null){
    p11 = '₹0';
} 

// ITEM 12
let name612= document.getElementById("name12");
name12.innerText = localStorage.getItem("Name12");

let price12 = document.getElementById("price12");
price12.innerText = localStorage.getItem("Price12");
let p12 = price12.innerText;
if(localStorage.getItem("Price12") === null){
    p12 = '₹0';
} 

// ITEM 13
let name13 = document.getElementById("name13");
name13.innerText = localStorage.getItem("Name13");

let price13 = document.getElementById("price13");
price13.innerText = localStorage.getItem("Price13");
let p13 = price13.innerText;
if(localStorage.getItem("Price13") === null){
    p13 = '₹0';
} 

// ITEM 14
let name14 = document.getElementById("name14");
name14.innerText = localStorage.getItem("Name14");

let price14 = document.getElementById("price14");
price14.innerText = localStorage.getItem("Price14");
let p14 = price14.innerText;

if(localStorage.getItem("Price14") === null){
    p14 = '₹0';
} 

// ITEM 15
let name15 = document.getElementById("name15");
name15.innerText = localStorage.getItem("Name15");

let price15 = document.getElementById("price15");
price15.innerText = localStorage.getItem("Price15");
let p15 = price15.innerText;
if(localStorage.getItem("Price15") === null){
    p15 = '₹0';
} 

// ITEM 16
let name16 = document.getElementById("name16");
name16.innerText = localStorage.getItem("Name16");

let price16 = document.getElementById("price16");
price16.innerText = localStorage.getItem("Price16");

let p16 = price16.innerText;
if(localStorage.getItem("Price16") === null){
    p16 = '₹0';
} 

function totalCost(){
    var total = parseInt(p1.substring(1)) + parseInt(p2.substring(1)) + parseInt(p3.substring(1)) + parseInt(p4.substring(1)) + parseInt(p5.substring(1)) + parseInt(p6.substring(1)) + parseInt(p7.substring(1)) + parseInt(p8.substring(1)) + parseInt(p9.substring(1)) + parseInt(p10.substring(1)) + parseInt(p11.substring(1)) + parseInt(p12.substring(1)) + parseInt(p13.substring(1)) + parseInt(p14.substring(1)) + parseInt(p15.substring(1)) + parseInt(p16.substring(1));
    localStorage.setItem("totalCost", total);
}

totalCost();

// Adding total cost in html's YOUR TOTAL part.
let h1 = document.querySelector("#total > h1 > span");
h1.innerText = localStorage.getItem("totalCost");
