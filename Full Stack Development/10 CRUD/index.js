const button = document.getElementById("btn");
button.addEventListener("click", showTodo);

async function showTodo(){
    const todo = document.getElementById("todo").value;
    const description = document.getElementById("description").value;
    let ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = todo + "---" + status + "---" + description
    ul.append(li);
    
    let obj = {
        title: todo,
        status: false,
        discription: description
    };
    
    try {
        const response = await fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type" : "application/json"
            }
        });
        
        console.log(response);
        
    }
    catch (error) {
        console.log(error);    
    }
    
}

async function fetchData(){
    try {
        const response = await fetch("http://localhost:3000/todo");
        const res = await response.json();
        console.log(res);
    }
    catch (error) {
        console.log(error);   
    }
}
