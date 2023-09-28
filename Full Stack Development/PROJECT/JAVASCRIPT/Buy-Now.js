function load(){
    url = "/Full Stack Development/PROJECT/HTML/Buy-Now.html";
    window.open(url);
}

function submit(){
    let house = document.getElementById("house").value;
    let area = document.getElementById("area").value;
    let state = document.getElementById("state").value;

    localStorage.setItem("h", house);
    localStorage.setItem("a", area);
    localStorage.setItem("s", state);

    let remove = document.getElementById("address");
    remove.remove();

    document.getElementById("add").innerHTML = "Delivery Address :-"
    document.getElementById("h").innerHTML = "House No.: " + localStorage.getItem("h");
    document.getElementById("a").innerHTML = "Area : " + localStorage.getItem("a");
    document.getElementById("s").innerHTML = "State : " + localStorage.getItem("s");

}

function Visa(){
    let detail = document.getElementById("detail");
    let h1 = document.getElementById("h1");
    let visa = document.getElementById("visa");
    visa.style.border = "2px solid red"
    master.style.border = "1px solid black"
    rupay.style.border = "1px solid black"
    upii.style.border = "1px solid black"
    cash.style.border = "1px solid black"
    h1.innerText = "Enter Your VISA Card Details :-"
    detail.style.display = "flex"
    upi.style.display = "none"
    cod.style.display = "none"
    let input4 = document.querySelector('#input4');
    input4.removeAttribute('required');
    input1.setAttribute('required', '');
    input2.setAttribute('required', '');
    input3.setAttribute('required', '');
}

function MasterCard(){
    let detail = document.getElementById("detail");
    let h1 = document.getElementById("h1");
    let master = document.getElementById("master");
    master.style.border = "2px solid red"
    visa.style.border = "1px solid black"
    rupay.style.border = "1px solid black"
    upii.style.border = "1px solid black"
    cash.style.border = "1px solid black"
    h1.innerText = "Enter Your MasterCard Card Details :-"
    detail.style.display = "flex"
    upi.style.display = "none"
    cod.style.display = "none"
    input4.removeAttribute('required');
    input1.setAttribute('required', '');
    input2.setAttribute('required', '');
    input3.setAttribute('required', '');
}

function RuPay(){
    let detail = document.getElementById("detail");
    let h1 = document.getElementById("h1");
    let rupay = document.getElementById("rupay");
    rupay.style.border = "2px solid red"
    visa.style.border = "1px solid black"
    master.style.border = "1px solid black"
    upii.style.border = "1px solid black"
    cash.style.border = "1px solid black"
    h1.innerText = "Enter Your RuPay Card Details :-"
    detail.style.display = "flex"
    upi.style.display = "none"
    cod.style.display = "none"
    input4.removeAttribute('required');
    input1.setAttribute('required', '');
    input2.setAttribute('required', '');
    input3.setAttribute('required', '');
}

function UPI(){
    let upi = document.getElementById("upi");
    let h1 = document.getElementById("h2");
    let upii = document.getElementById("upii");
    upii.style.border = "2px solid red"
    visa.style.border = "1px solid black"
    master.style.border = "1px solid black"
    rupay.style.border = "1px solid black"
    cash.style.border = "1px solid black"
    h1.innerText = "Enter Your UPI Details :-"
    upi.style.display = "flex"
    detail.style.display = "none"
    cod.style.display = "none"
    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    let input3 = document.querySelector('#input3');
    input1.removeAttribute('required');
    input2.removeAttribute('required');
    input3.removeAttribute('required');
    input4.setAttribute('required', '');
}

function COD(){
    let cod = document.getElementById("cod");
    let cash = document.getElementById("cash");
    cash.style.border = "2px solid red"
    master.style.border = "1px solid black"
    rupay.style.border = "1px solid black"
    visa.style.border = "1px solid black"
    upii.style.border = "1px solid black"
    upi.style.display = "none"
    detail.style.display = "none"
    cod.style.display = "flex"
    let input1 = document.querySelector('#input1');
    input1.removeAttribute('required');
    input2.removeAttribute('required');
    input3.removeAttribute('required');
    input4.removeAttribute('required');
}