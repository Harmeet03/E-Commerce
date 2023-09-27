function SignIn(){
    if(localStorage.getItem("Username") !== null){
        window.open('/Full Stack Development/PROJECT/FrontPage.html', "_self");
    }
    else{
        let p = document.getElementById("error");
        p.style.display = "block";
        p.style.color = 'red';
        p.innerText = "Invalid Username or Password."
    }
}