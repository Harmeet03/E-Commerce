let login = document.querySelector("nav > #lists > div:nth-child(3) > b > a");
if(localStorage.getItem("Username") !== null){
    login.innerHTML = "<a href='#' style='text-decoration: none; color: black;' onclick='LogOut()'> Log Out </a>";
}
else{
    login.innerHTML = "<a href='/Full Stack Development/PROJECT/Sign-In.html' style='text-decoration: none; color: black;'> Sign In </a>";
}

function LogOut(){
    localStorage.removeItem("Username");
    localStorage.removeItem("Full-Name");
    localStorage.removeItem("Password");
}

function toggle(){
    let x = document.getElementById("lists");
    if(x.style.display === "flex"){
        x.style.display = "none"
    }
    
    else{
        x.style.display = "flex";
    }
}