function SignUp(){
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    
    localStorage.setItem("Full-Name", name);
    localStorage.setItem("Username", username);
    localStorage.setItem("Password", password);

    if(localStorage.getItem("Full-Name") !== null){
        let p = document.getElementById("p");
        p.style.display = "block";
        p.style.color = 'green';
        p.innerHTML = "Kindly <a style='text-decoration: none;' href='../Sign-In.html'> Sign In </a> now to preceed!";
    }
}