const button = document.getElementById("submit");
button.addEventListener("click", getData);

function getData(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    let age=document.getElementById("age").value;

    let arr=JSON.parse(localStorage.getItem("forms")) || [];

    let obj={
        Name: name,
        Email: email,
        Pass: pass,
        Age: age
    };

    arr.push(obj);

    localStorage.setItem("forms",JSON.stringify(arr));
}

function showData(){
    let data = JSON.parse(localStorage.getItem("forms")) || [];
    data.forEach((el, index) =>{
        let tbody = document.querySelector("tbody");
        let tr = document.createElement("tr");
        
        let td1 = document.createElement("td");
        td1.innerHTML = el.Name;
        
        let td2 = document.createElement("td");
        td2.innerHTML = el.Email;
        
        let td3 = document.createElement("td");
        td3.innerHTML = el.Pass;
        
        let td4 = document.createElement("td");
        td4.innerHTML = el.Age;
        
        tr.append(td1, td2, td3, td4);
        
        tbody.append(tr);
    })
};

showData();